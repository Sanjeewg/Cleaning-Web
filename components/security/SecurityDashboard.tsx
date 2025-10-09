import React, { useState, useEffect } from 'react';
import { securityMonitor } from '../../utils/securityMonitor';

interface SecurityDashboardProps {
  isVisible: boolean;
  onClose: () => void;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ isVisible, onClose }) => {
  const [report, setReport] = useState(securityMonitor.generateSecurityReport());
  const [recentEvents, setRecentEvents] = useState(securityMonitor.getRecentEvents(20));

  useEffect(() => {
    if (isVisible) {
      const updateData = () => {
        setReport(securityMonitor.generateSecurityReport());
        setRecentEvents(securityMonitor.getRecentEvents(20));
      };

      updateData();
      const interval = setInterval(updateData, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatEventType = (type: string) => {
    return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Security Dashboard</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-900">Total Events</h3>
              <p className="text-2xl font-bold text-blue-600">{report.totalEvents}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-red-900">Critical Events</h3>
              <p className="text-2xl font-bold text-red-600">{report.eventsBySeverity.critical || 0}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-orange-900">High Severity</h3>
              <p className="text-2xl font-bold text-orange-600">{report.eventsBySeverity.high || 0}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-yellow-900">Attack Patterns</h3>
              <p className="text-2xl font-bold text-yellow-600">{report.recentAttackPatterns.length}</p>
            </div>
          </div>

          {/* Attack Patterns Alert */}
          {report.recentAttackPatterns.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">⚠️ Active Threats Detected</h3>
              <ul className="list-disc list-inside text-red-800">
                {report.recentAttackPatterns.map((pattern: string, index: number) => (
                  <li key={index}>{pattern}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Events by Type */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Events by Type</h3>
              <div className="space-y-2">
                {Object.entries(report.eventsByType).map(([type, count]: [string, number]) => (
                  <div key={type} className="flex justify-between items-center">
                    <span className="text-sm">{formatEventType(type)}</span>
                    <span className="font-medium">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Events by Severity</h3>
              <div className="space-y-2">
                {(['critical', 'high', 'medium', 'low'] as const).map(severity => (
                  <div key={severity} className="flex justify-between items-center">
                    <span className={`text-sm px-2 py-1 rounded ${getSeverityColor(severity)}`}>
                      {severity.charAt(0).toUpperCase() + severity.slice(1)}
                    </span>
                    <span className="font-medium">{report.eventsBySeverity[severity] || 0}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Recent Events</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {recentEvents.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent events</p>
              ) : (
                recentEvents.map((event: any, index: number) => (
                  <div key={index} className="bg-white p-3 rounded border text-sm">
                    <div className="flex justify-between items-start mb-1">
                      <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(event.severity)}`}>
                        {event.severity.toUpperCase()}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {formatTimestamp(event.timestamp)}
                      </span>
                    </div>
                    <div className="font-medium">{formatEventType(event.type)}</div>
                    {event.ip && (
                      <div className="text-gray-600 text-xs">IP: {event.ip}</div>
                    )}
                    {event.details && (
                      <div className="text-gray-600 text-xs mt-1">
                        {JSON.stringify(event.details, null, 2)}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityDashboard;