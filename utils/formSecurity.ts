import { sanitizeInput, validateFormData, detectSuspiciousActivity } from './security';
import { securityConfig } from './securityConfig';
import { logFormSubmission, logSuspiciousActivity, logRateLimitExceeded, logInvalidInput } from './securityMonitor';

// Rate limiting storage
const rateLimitStore: Map<string, { count: number; resetTime: number }> = new Map();

// Form submission tracking
const submissionHistory: Map<string, number[]> = new Map();

interface FormSecurityOptions {
  maxSubmissionsPerHour?: number;
  requireAllFields?: boolean;
  enableSpamDetection?: boolean;
  logSubmissions?: boolean;
  blockSuspiciousIPs?: boolean;
}

interface SecurityCheckResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  blockedReason?: string;
}

export class FormSecurityMiddleware {
  private options: Required<FormSecurityOptions>;

  constructor(options: FormSecurityOptions = {}) {
    this.options = {
      maxSubmissionsPerHour: options.maxSubmissionsPerHour || 5,
      requireAllFields: options.requireAllFields || true,
      enableSpamDetection: options.enableSpamDetection || true,
      logSubmissions: options.logSubmissions || true,
      blockSuspiciousIPs: options.blockSuspiciousIPs || true,
    };
  }

  // Main security check method
  async validateSubmission(
    formData: any,
    clientIP?: string,
    userAgent?: string
  ): Promise<SecurityCheckResult> {
    const result: SecurityCheckResult = {
      isValid: true,
      errors: [],
      warnings: []
    };

    try {
      // 1. Rate limiting check
      if (clientIP && !this.checkRateLimit(clientIP)) {
        result.isValid = false;
        result.blockedReason = 'Rate limit exceeded';
        result.errors.push('Too many submissions. Please try again later.');
        
        if (this.options.logSubmissions) {
          logRateLimitExceeded('contact-form', clientIP, userAgent);
        }
        return result;
      }

      // 2. Basic form validation
      const validationResult = validateFormData(formData);
      if (!validationResult.isValid) {
        result.isValid = false;
        result.errors.push(...validationResult.errors);
        
        validationResult.errors.forEach(error => {
          logInvalidInput('form', JSON.stringify(formData), error);
        });
      }

      // 3. Required fields check
      if (this.options.requireAllFields) {
        const requiredFields = ['name', 'email', 'message'];
        const missingFields = requiredFields.filter(field => !formData[field]?.trim());
        
        if (missingFields.length > 0) {
          result.isValid = false;
          result.errors.push(`Missing required fields: ${missingFields.join(', ')}`);
        }
      }

      // 4. Input sanitization and suspicious activity detection
      const sanitizedData: any = {};
      for (const [key, value] of Object.entries(formData)) {
        if (typeof value === 'string') {
          const sanitized = sanitizeInput(value);
          sanitizedData[key] = sanitized;

          // Check if sanitization changed the input significantly
          if (sanitized !== value && (value.length - sanitized.length) > 10) {
            result.warnings.push(`Suspicious content detected in ${key} field`);
            
            if (this.options.logSubmissions) {
              logSuspiciousActivity('form_input_sanitized', {
                field: key,
                originalLength: value.length,
                sanitizedLength: sanitized.length
              }, clientIP, userAgent);
            }
          }
        }
      }

      // 5. Spam detection
      if (this.options.enableSpamDetection) {
        const spamCheck = this.detectSpam(sanitizedData);
        if (spamCheck.isSpam) {
          result.isValid = false;
          result.blockedReason = 'Spam detected';
          result.errors.push('Message appears to be spam');
          
          if (this.options.logSubmissions) {
            logSuspiciousActivity('spam_detected', {
              reasons: spamCheck.reasons,
              score: spamCheck.score
            }, clientIP, userAgent);
          }
          return result;
        }

        if (spamCheck.score > 0.3) {
          result.warnings.push('Message flagged for manual review');
        }
      }

      // 6. User agent validation
      if (userAgent && this.isSuspiciousUserAgent(userAgent)) {
        result.warnings.push('Suspicious user agent detected');
        
        if (this.options.logSubmissions) {
          logSuspiciousActivity('suspicious_user_agent', {
            userAgent
          }, clientIP, userAgent);
        }
      }

      // 7. Honeypot field check (if present)
      if (formData.honeypot && formData.honeypot.trim()) {
        result.isValid = false;
        result.blockedReason = 'Bot detected';
        result.errors.push('Bot activity detected');
        
        if (this.options.logSubmissions) {
          logSuspiciousActivity('honeypot_triggered', {
            honeypotValue: formData.honeypot
          }, clientIP, userAgent);
        }
        return result;
      }

      // 8. Submission timing check
      if (formData.startTime) {
        const submissionTime = Date.now() - parseInt(formData.startTime);
        if (submissionTime < 3000) { // Less than 3 seconds
          result.warnings.push('Very fast form submission');
          
          if (this.options.logSubmissions) {
            logSuspiciousActivity('fast_submission', {
              submissionTime
            }, clientIP, userAgent);
          }
        }
      }

      // 9. Log successful submission
      if (result.isValid && this.options.logSubmissions) {
        logFormSubmission(sanitizedData, clientIP, userAgent);
      }

      // 10. Update rate limit counter
      if (clientIP && result.isValid) {
        this.updateRateLimit(clientIP);
      }

    } catch (error) {
      result.isValid = false;
      result.errors.push('Security validation failed');
      console.error('Form security middleware error:', error);
    }

    return result;
  }

  // Rate limiting implementation
  private checkRateLimit(clientIP: string): boolean {
    const now = Date.now();
    const key = clientIP;
    const limit = rateLimitStore.get(key);

    if (!limit) {
      return true; // First submission
    }

    // Reset if hour has passed
    if (now > limit.resetTime) {
      rateLimitStore.set(key, { count: 0, resetTime: now + 3600000 }); // 1 hour
      return true;
    }

    return limit.count < this.options.maxSubmissionsPerHour;
  }

  private updateRateLimit(clientIP: string): void {
    const now = Date.now();
    const key = clientIP;
    const limit = rateLimitStore.get(key);

    if (!limit || now > limit.resetTime) {
      rateLimitStore.set(key, { count: 1, resetTime: now + 3600000 });
    } else {
      rateLimitStore.set(key, { ...limit, count: limit.count + 1 });
    }
  }

  // Spam detection
  private detectSpam(formData: any): { isSpam: boolean; score: number; reasons: string[] } {
    let score = 0;
    const reasons: string[] = [];

    const message = (formData.message || '').toLowerCase();
    const name = (formData.name || '').toLowerCase();
    const email = (formData.email || '').toLowerCase();

    // Check for spam keywords
    const spamKeywords = securityConfig.spamKeywords;
    const foundKeywords = spamKeywords.filter((keyword: string) => 
      message.includes(keyword.toLowerCase()) || name.includes(keyword.toLowerCase())
    );

    if (foundKeywords.length > 0) {
      score += foundKeywords.length * 0.2;
      reasons.push(`Spam keywords: ${foundKeywords.join(', ')}`);
    }

    // Check for excessive links
    const linkCount = (message.match(/https?:\/\//g) || []).length;
    if (linkCount > 2) {
      score += 0.3;
      reasons.push(`Too many links: ${linkCount}`);
    }

    // Check for excessive caps
    const capsCount = (message.match(/[A-Z]/g) || []).length;
    const capsRatio = capsCount / message.length;
    if (capsRatio > 0.5 && message.length > 20) {
      score += 0.2;
      reasons.push('Excessive capital letters');
    }

    // Check for repetitive characters
    if (/(.)\1{4,}/.test(message)) {
      score += 0.2;
      reasons.push('Repetitive characters');
    }

    // Check for suspicious email patterns
    if (email.includes('+') && email.split('+').length > 2) {
      score += 0.1;
      reasons.push('Suspicious email pattern');
    }

    // Check message length (too short or too long)
    if (message.length < 10) {
      score += 0.1;
      reasons.push('Message too short');
    } else if (message.length > 2000) {
      score += 0.2;
      reasons.push('Message too long');
    }

    return {
      isSpam: score >= 0.7,
      score,
      reasons
    };
  }

  // User agent validation
  private isSuspiciousUserAgent(userAgent: string): boolean {
    const suspiciousPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /curl/i,
      /wget/i,
      /python/i,
      /php/i,
    ];

    // Check against known good browsers first
    const validBrowsers = /chrome|firefox|safari|edge|opera/i;
    if (!validBrowsers.test(userAgent)) {
      return true;
    }

    return suspiciousPatterns.some(pattern => pattern.test(userAgent));
  }

  // Clean up old rate limit entries
  public cleanupRateLimit(): void {
    const now = Date.now();
    for (const [key, limit] of rateLimitStore.entries()) {
      if (now > limit.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  // Get current rate limit status
  public getRateLimitStatus(clientIP: string): { remaining: number; resetTime: number } {
    const limit = rateLimitStore.get(clientIP);
    if (!limit) {
      return { remaining: this.options.maxSubmissionsPerHour, resetTime: Date.now() + 3600000 };
    }

    return {
      remaining: Math.max(0, this.options.maxSubmissionsPerHour - limit.count),
      resetTime: limit.resetTime
    };
  }
}

// Export default instance
export const formSecurity = new FormSecurityMiddleware();

// Cleanup interval (runs every 15 minutes)
if (typeof window !== 'undefined') {
  setInterval(() => {
    formSecurity.cleanupRateLimit();
  }, 15 * 60 * 1000);
}