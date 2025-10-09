import React, { useEffect, useState, createContext } from 'react';
import { securityConfig } from '../../utils/securityConfig';

// Security hooks and components for client-side protection
export const useSecurityHeaders = () => {
  useEffect(() => {
    // Set security-related meta tags
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Set security meta tags
    setMetaTag('referrer', 'origin-when-cross-origin');
    setMetaTag('format-detection', 'telephone=no');
    
    // Disable right-click context menu on production
    const handleContextMenu = (e: MouseEvent) => {
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+U on production
    const handleKeyDown = (e: KeyboardEvent) => {
      if (process.env.NODE_ENV === 'production') {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.key === 'u')
        ) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

// Console warning for developers
export const useConsoleWarning = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.clear();
      console.log(
        '%c🛡️ SECURITY WARNING!',
        'color: red; font-size: 40px; font-weight: bold;'
      );
      console.log(
        '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your information.',
        'color: red; font-size: 16px;'
      );
      console.log(
        '%cFor more information, visit: https://en.wikipedia.org/wiki/Self-XSS',
        'color: red; font-size: 14px;'
      );
    }
  }, []);
};

// Anti-tamper protection
export const useAntiTamper = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Detect DevTools
      let devtools = { open: false, orientation: null as string | null };
      setInterval(() => {
        if (
          window.outerHeight - window.innerHeight > 200 ||
          window.outerWidth - window.innerWidth > 200
        ) {
          if (!devtools.open) {
            devtools.open = true;
            console.clear();
            document.body.innerHTML = `
              <div style="
                position: fixed; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                background: #1a1a1a; 
                color: #ff4444; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                font-family: monospace; 
                font-size: 24px; 
                z-index: 999999;
              ">
                🛡️ Developer Tools Detected<br>
                <small style="font-size: 14px; margin-top: 20px; display: block;">
                  Please close developer tools to continue
                </small>
              </div>
            `;
          }
        } else {
          if (devtools.open) {
            devtools.open = false;
            window.location.reload();
          }
        }
      }, 500);
    }
  }, []);
};

// Form security component
interface SecureFormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  rateLimitKey?: string;
}

export const SecureForm: React.FC<SecureFormProps> = ({ 
  children, 
  onSubmit, 
  rateLimitKey = 'form' 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limiting
    const now = Date.now();
    const key = `rateLimit_${rateLimitKey}`;
    const lastSubmit = localStorage.getItem(key);
    
    if (lastSubmit && now - parseInt(lastSubmit) < 5000) {
      alert('Please wait before submitting again.');
      return;
    }
    
    localStorage.setItem(key, now.toString());
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} data-security="protected">
      {children}
    </form>
  );
};

// Input sanitization component
interface SecureInputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  pattern?: string;
  className?: string;
  name?: string;
}

export const SecureInput: React.FC<SecureInputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  maxLength,
  pattern,
  className,
  name
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let sanitizedValue = e.target.value;
    
    // Basic sanitization
    sanitizedValue = sanitizedValue.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    sanitizedValue = sanitizedValue.replace(/[<>]/g, '');
    
    // Check for suspicious patterns
    const suspicious = securityConfig.blockedPatterns.some((pattern: RegExp) => 
      pattern.test(sanitizedValue)
    );
    
    if (!suspicious) {
      onChange(sanitizedValue);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      pattern={pattern}
      className={className}
      name={name}
      autoComplete="off"
      spellCheck="false"
    />
  );
};

// Security context provider
interface SecurityContextType {
  isSecure: boolean;
  rateLimitExceeded: boolean;
}

export const SecurityContext = createContext<SecurityContextType>({
  isSecure: true,
  rateLimitExceeded: false
});

export const SecurityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(true);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  useSecurityHeaders();
  useConsoleWarning();
  // Uncomment for production: useAntiTamper();

  return (
    <SecurityContext.Provider value={{ isSecure, rateLimitExceeded }}>
      {children}
    </SecurityContext.Provider>
  );
};