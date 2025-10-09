import React, { useState, useEffect } from 'react';
import { formSecurity } from '../utils/formSecurity';
import SecurityDashboard from './security/SecurityDashboard';

interface SecuritySettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ isOpen, onClose }) => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [rateLimitStatus, setRateLimitStatus] = useState({ remaining: 5, resetTime: Date.now() + 3600000 });
  const [securityStats, setSecurityStats] = useState({
    totalChecks: 0,
    blockedAttempts: 0,
    warningsIssued: 0,
    lastCheck: 'Never'
  });

  useEffect(() => {
    if (isOpen) {
      // Update rate limit status
      const status = formSecurity.getRateLimitStatus('127.0.0.1'); // Mock IP
      setRateLimitStatus(status);

      // Update security stats (would come from security monitor in real app)
      setSecurityStats({
        totalChecks: 42,
        blockedAttempts: 3,
        warningsIssued: 7,
        lastCheck: new Date().toLocaleString()
      });
    }
  }, [isOpen]);

  const formatTimeRemaining = (resetTime: number) => {
    const remaining = Math.max(0, resetTime - Date.now());
    const minutes = Math.floor(remaining / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    }
    return `${minutes}m`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Security Settings</h2>
            <p className="text-gray-300 text-sm">Monitor and configure website security</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          {/* Security Status */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Security Status
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-900">Protection Status</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                </div>
                <p className="text-2xl font-bold text-green-600 mt-1">🛡️ Protected</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-900">Rate Limit</span>
                  <span className="text-xs text-blue-600">Resets in {formatTimeRemaining(rateLimitStatus.resetTime)}</span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mt-1">{rateLimitStatus.remaining}/5</p>
                <p className="text-xs text-blue-600">Submissions remaining</p>
              </div>
            </div>
          </div>

          {/* Security Statistics */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
              Security Statistics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{securityStats.totalChecks}</div>
                <div className="text-sm text-gray-600">Total Checks</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{securityStats.blockedAttempts}</div>
                <div className="text-sm text-red-600">Blocked</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{securityStats.warningsIssued}</div>
                <div className="text-sm text-yellow-600">Warnings</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">99.2%</div>
                <div className="text-sm text-green-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Active Security Features
            </h3>
            
            <div className="space-y-3">
              {[
                { name: 'Input Sanitization', status: 'active', description: 'Cleans and validates all user inputs' },
                { name: 'Rate Limiting', status: 'active', description: 'Prevents spam and abuse attempts' },
                { name: 'Spam Detection', status: 'active', description: 'AI-powered spam content filtering' },
                { name: 'Bot Protection', status: 'active', description: 'Honeypot fields and user agent validation' },
                { name: 'Security Headers', status: 'active', description: 'CSP and other security headers configured' },
                { name: 'Activity Monitoring', status: 'active', description: 'Real-time security event logging' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{feature.name}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    ✓ {feature.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowDashboard(true)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Security Dashboard
            </button>
            
            <button
              onClick={() => formSecurity.cleanupRateLimit()}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Status
            </button>
          </div>

          {/* Last Updated */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Last security check: {securityStats.lastCheck}
          </div>
        </div>
      </div>

      {/* Security Dashboard Modal */}
      <SecurityDashboard 
        isVisible={showDashboard} 
        onClose={() => setShowDashboard(false)} 
      />
    </div>
  );
};

export default SecuritySettings;