// Security configuration for Next.js application
export const securityConfig = {
  // Content Security Policy
  csp: {
    directives: {
      'default-src': ["'self'"],
      'script-src': [
        "'self'",
        "'unsafe-eval'",
        "'unsafe-inline'",
        'https://maps.googleapis.com',
        'https://www.google.com',
        'https://formspree.io'
      ],
      'style-src': [
        "'self'",
        "'unsafe-inline'",
        'https://fonts.googleapis.com'
      ],
      'img-src': [
        "'self'",
        'blob:',
        'data:',
        'https://images.unsplash.com',
        'https://maps.googleapis.com',
        'https://maps.gstatic.com'
      ],
      'font-src': [
        "'self'",
        'https://fonts.gstatic.com'
      ],
      'connect-src': [
        "'self'",
        'https://maps.googleapis.com',
        'https://formspree.io'
      ],
      'frame-src': [
        "'self'",
        'https://www.google.com',
        'https://maps.google.com'
      ],
      'form-action': [
        "'self'",
        'https://formspree.io'
      ],
      'object-src': ["'none'"],
      'base-uri': ["'self'"],
      'frame-ancestors': ["'none'"]
    }
  },

  // Security headers for static hosting
  headers: {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },

  // Rate limiting configuration
  rateLimit: {
    contact: {
      maxRequests: 3,
      windowMs: 15 * 60 * 1000, // 15 minutes
      message: 'Too many contact form submissions. Please try again later.'
    },
    general: {
      maxRequests: 100,
      windowMs: 15 * 60 * 1000, // 15 minutes
      message: 'Too many requests. Please try again later.'
    }
  },

  // Input validation rules
  validation: {
    name: {
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s'-]+$/
    },
    email: {
      maxLength: 255,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
      pattern: /^[\+]?[\d\s\-\(\)]{10,15}$/
    },
    message: {
      maxLength: 1000,
      minLength: 10
    }
  },

  // Blocked patterns for security
  blockedPatterns: [
    /script\s*:/i,
    /javascript\s*:/i,
    /data\s*:/i,
    /vbscript\s*:/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /on\w+\s*=/i,
    /expression\s*\(/i,
    /url\s*\(/i,
    /@import/i,
    /behavior\s*:/i,
    /\.\.\/\.\.\//i, // Path traversal
    /etc\/passwd/i,
    /proc\/self/i,
    /windows\/system32/i
  ],

  // Spam detection keywords
  spamKeywords: [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations',
    'click here', 'free money', 'make money fast', 'work from home',
    'guaranteed', 'no risk', 'limited time', 'act now', 'urgent'
  ]
};

// Generate CSP header string
export const generateCSPHeader = (): string => {
  const directives = securityConfig.csp.directives;
  return Object.entries(directives)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
};

// Validate user agent for bot detection
export const isValidUserAgent = (userAgent: string): boolean => {
  if (!userAgent || userAgent.length < 10) return false;
  
  const suspiciousPatterns = [
    /curl/i,
    /wget/i,
    /python/i,
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i
  ];
  
  // Allow legitimate bots
  const allowedBots = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i
  ];
  
  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));
  const isAllowedBot = allowedBots.some(pattern => pattern.test(userAgent));
  
  return !isSuspicious || isAllowedBot;
};

export default securityConfig;