import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [acceptedCookies, setAcceptedCookies] = useState<string[]>([]);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setAcceptedCookies(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const allCookies = ['necessary', 'analytics', 'marketing'];
    localStorage.setItem('cookie-consent', JSON.stringify(allCookies));
    setAcceptedCookies(allCookies);
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryCookies = ['necessary'];
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryCookies));
    setAcceptedCookies(necessaryCookies);
    setShowBanner(false);
  };

  const handleCustomize = () => {
    // You could open a modal with detailed cookie settings here
    alert('Cookie customization feature coming soon. For now, choosing "Accept Necessary" will only use essential cookies.');
    handleAcceptNecessary();
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      color: 'white',
      padding: '1.5rem',
      zIndex: 9999,
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
      borderTop: '3px solid #4FC3F7'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h4 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            marginBottom: '0.5rem',
            color: '#87CEEB'
          }}>
            🍪 Cookie Notice
          </h4>
          <p style={{ 
            fontSize: '0.9rem', 
            lineHeight: '1.4',
            color: '#e2e8f0'
          }}>
            We use cookies to improve your experience on our website. Essential cookies are necessary for the site to function, 
            while analytics cookies help us understand how you use our services.{' '}
            <Link 
              href="/privacy-policy" 
              style={{ color: '#87CEEB', textDecoration: 'underline' }}
            >
              Learn more
            </Link>
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <button
            onClick={handleAcceptNecessary}
            style={{
              background: 'transparent',
              color: '#e2e8f0',
              border: '1px solid #475569',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#475569';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e2e8f0';
            }}
          >
            Necessary Only
          </button>
          
          <button
            onClick={handleCustomize}
            style={{
              background: 'transparent',
              color: '#87CEEB',
              border: '1px solid #87CEEB',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#87CEEB';
              e.currentTarget.style.color = '#1e293b';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#87CEEB';
            }}
          >
            Customize
          </button>
          
          <button
            onClick={handleAcceptAll}
            style={{
              background: 'linear-gradient(135deg, #87CEEB, #4FC3F7)',
              color: '#1e293b',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(135, 206, 235, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;