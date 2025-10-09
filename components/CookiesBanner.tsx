import React, { useState, useEffect } from 'react';

interface CookiesBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const CookiesBanner: React.FC<CookiesBannerProps> = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsLoaded(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    if (onDecline) onDecline();
  };

  const handleCustomize = () => {
    // For now, we'll just accept - you can extend this for more detailed preferences
    handleAccept();
  };

  // Don't render anything on server-side or if not visible
  if (typeof window === 'undefined' || !isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300" />
      
      {/* Cookie Banner */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ${
        isLoaded ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-white border-t-4 border-blue-600 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              
              {/* Cookie Icon and Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍪</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Three Boys Cleaning Limited</strong> uses cookies to enhance your browsing experience, 
                    provide secure form submissions, and improve our services. We use essential cookies for 
                    website functionality and security.
                  </p>
                  
                  {/* Cookie Details */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-xs text-gray-600 font-medium mb-2">Cookie Types We Use:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-gray-700"><strong>Essential:</strong> Security & functionality</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-700"><strong>Preferences:</strong> Remember your choices</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="text-gray-700"><strong>Analytics:</strong> Improve our services</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600">
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can manage your preferences anytime.
                    <a href="/cookie-policy" className="text-blue-600 hover:text-blue-700 underline ml-1 font-medium">
                      Learn more about our cookie policy
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200 order-2 sm:order-1"
                >
                  Decline
                </button>
                
                <button
                  onClick={handleCustomize}
                  className="px-6 py-2 text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200 order-3 sm:order-2"
                >
                  Customize
                </button>
                
                <button
                  onClick={handleAccept}
                  className="px-8 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg order-1 sm:order-3"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesBanner;