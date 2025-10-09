// Security monitoring and logging utilities
interface SecurityEvent {
  type: 'form_submission' | 'suspicious_activity' | 'rate_limit_exceeded' | 'invalid_input' | 'bot_detected';
  timestamp: number;
  ip?: string;
  userAgent?: string;
  details: any;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private maxEvents = 1000;

  // Log security event
  logEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: Date.now()
    };

    this.events.unshift(securityEvent);
    
    // Keep only the latest events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(0, this.maxEvents);
    }

    // Store in localStorage for client-side persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('security_events', JSON.stringify(this.events.slice(0, 100)));
    }

    // Log critical events to console
    if (event.severity === 'critical') {
      console.error('CRITICAL SECURITY EVENT:', securityEvent);
    }
  }

  // Get recent events
  getRecentEvents(limit: number = 50): SecurityEvent[] {
    return this.events.slice(0, limit);
  }

  // Get events by type
  getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type);
  }

  // Get events by severity
  getEventsBySeverity(severity: SecurityEvent['severity']): SecurityEvent[] {
    return this.events.filter(event => event.severity === severity);
  }

  // Clear old events
  clearOldEvents(olderThanMs: number = 24 * 60 * 60 * 1000): void {
    const cutoff = Date.now() - olderThanMs;
    this.events = this.events.filter(event => event.timestamp > cutoff);
  }

  // Check for patterns that might indicate an attack
  detectAttackPatterns(): { detected: boolean; patterns: string[] } {
    const patterns: string[] = [];
    const recentEvents = this.getRecentEvents(100);
    
    // Check for rapid suspicious activity
    const suspiciousEvents = recentEvents.filter(e => 
      e.type === 'suspicious_activity' && 
      e.timestamp > Date.now() - 5 * 60 * 1000 // Last 5 minutes
    );
    
    if (suspiciousEvents.length > 10) {
      patterns.push('High frequency suspicious activity detected');
    }

    // Check for rate limit violations
    const rateLimitEvents = recentEvents.filter(e => 
      e.type === 'rate_limit_exceeded' && 
      e.timestamp > Date.now() - 15 * 60 * 1000 // Last 15 minutes
    );
    
    if (rateLimitEvents.length > 5) {
      patterns.push('Multiple rate limit violations');
    }

    // Check for bot activity
    const botEvents = recentEvents.filter(e => 
      e.type === 'bot_detected' && 
      e.timestamp > Date.now() - 10 * 60 * 1000 // Last 10 minutes
    );
    
    if (botEvents.length > 3) {
      patterns.push('Bot activity detected');
    }

    return {
      detected: patterns.length > 0,
      patterns
    };
  }

  // Generate security report
  generateSecurityReport(): {
    totalEvents: number;
    eventsBySeverity: Record<string, number>;
    eventsByType: Record<string, number>;
    recentAttackPatterns: string[];
    lastCleanup: number;
  } {
    const eventsBySeverity = this.events.reduce((acc, event) => {
      acc[event.severity] = (acc[event.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const eventsByType = this.events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const attackDetection = this.detectAttackPatterns();

    return {
      totalEvents: this.events.length,
      eventsBySeverity,
      eventsByType,
      recentAttackPatterns: attackDetection.patterns,
      lastCleanup: Date.now()
    };
  }
}

// Singleton instance
const securityMonitor = new SecurityMonitor();

// Utility functions for common security checks
export const logFormSubmission = (formData: any, ip?: string, userAgent?: string) => {
  securityMonitor.logEvent({
    type: 'form_submission',
    ip,
    userAgent,
    details: {
      hasName: !!formData.name,
      hasEmail: !!formData.email,
      hasPhone: !!formData.phone,
      messageLength: formData.message?.length || 0
    },
    severity: 'low'
  });
};

export const logSuspiciousActivity = (activity: string, details: any, ip?: string, userAgent?: string) => {
  securityMonitor.logEvent({
    type: 'suspicious_activity',
    ip,
    userAgent,
    details: { activity, ...details },
    severity: 'high'
  });
};

export const logRateLimitExceeded = (endpoint: string, ip?: string, userAgent?: string) => {
  securityMonitor.logEvent({
    type: 'rate_limit_exceeded',
    ip,
    userAgent,
    details: { endpoint },
    severity: 'medium'
  });
};

export const logInvalidInput = (field: string, value: string, reason: string) => {
  securityMonitor.logEvent({
    type: 'invalid_input',
    details: { field, valueLength: value.length, reason },
    severity: 'medium'
  });
};

export const logBotDetection = (reason: string, userAgent?: string, ip?: string) => {
  securityMonitor.logEvent({
    type: 'bot_detected',
    ip,
    userAgent,
    details: { reason },
    severity: 'medium'
  });
};

// Initialize cleanup interval (runs every hour)
if (typeof window !== 'undefined') {
  setInterval(() => {
    securityMonitor.clearOldEvents();
  }, 60 * 60 * 1000);
}

// Export the monitor for advanced usage
export { securityMonitor };
export default securityMonitor;