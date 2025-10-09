// Form validation and security utilities
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/[<>]/g, '') // Remove < and > characters
    .slice(0, 1000); // Limit length
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateLength = (value: string, min: number = 0, max: number = 1000): boolean => {
  const length = value.trim().length;
  return length >= min && length <= max;
};

export const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export const checkRateLimit = (
  identifier: string, 
  maxRequests: number = 5, 
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record) {
    rateLimitMap.set(identifier, { count: 1, lastReset: now });
    return true;
  }
  
  if (now - record.lastReset > windowMs) {
    record.count = 1;
    record.lastReset = now;
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Enhanced security functions
export const hashString = async (str: string): Promise<string> => {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const msgBuffer = new TextEncoder().encode(str);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback for server-side or unsupported browsers
  return btoa(str).replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
};

export const detectSuspiciousActivity = (formData: any): boolean => {
  const suspiciousPatterns = [
    /script\s*:/i,
    /javascript\s*:/i,
    /data\s*:/i,
    /vbscript\s*:/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /on\w+\s*=/i, // Event handlers like onclick, onload
    /expression\s*\(/i,
    /url\s*\(/i,
    /@import/i,
    /behavior\s*:/i
  ];
  
  const text = JSON.stringify(formData).toLowerCase();
  return suspiciousPatterns.some(pattern => pattern.test(text));
};

export const sanitizeFileName = (fileName: string): string => {
  return fileName
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .replace(/_{2,}/g, '_')
    .slice(0, 255);
};

export const validateFileUpload = (file: File): { isValid: boolean; error?: string } => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, error: 'Invalid file type. Only images are allowed.' };
  }
  
  if (file.size > maxSize) {
    return { isValid: false, error: 'File too large. Maximum size is 5MB.' };
  }
  
  return { isValid: true };
};

export const generateSecureToken = (length: number = 32): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const validateFormData = (formData: any) => {
  const errors: string[] = [];
  
  // Check for suspicious activity first
  if (detectSuspiciousActivity(formData)) {
    errors.push('Invalid data detected. Please check your input.');
    return { isValid: false, errors };
  }
  
  // Sanitize all inputs
  const sanitizedData = {
    name: sanitizeInput(formData.name || ''),
    email: sanitizeInput(formData.email || ''),
    phone: sanitizeInput(formData.phone || ''),
    message: sanitizeInput(formData.message || ''),
    service: sanitizeInput(formData.service || '')
  };
  
  // Validate required fields
  if (!validateRequired(sanitizedData.name)) {
    errors.push('Name is required');
  }
  
  if (!validateRequired(sanitizedData.email)) {
    errors.push('Email is required');
  } else if (!validateEmail(sanitizedData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!validateRequired(sanitizedData.phone)) {
    errors.push('Phone number is required');
  } else if (!validatePhone(sanitizedData.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  // Validate field lengths
  if (!validateLength(sanitizedData.name, 2, 50)) {
    errors.push('Name must be between 2 and 50 characters');
  }
  
  if (sanitizedData.message && !validateLength(sanitizedData.message, 0, 1000)) {
    errors.push('Message must be less than 1000 characters');
  }
  
  // Additional security checks
  const commonSpamWords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'free money'];
  const messageText = sanitizedData.message.toLowerCase();
  const hasSpamWords = commonSpamWords.some(word => messageText.includes(word));
  
  if (hasSpamWords) {
    errors.push('Message contains inappropriate content');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  };
};