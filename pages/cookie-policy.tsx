import React from 'react';
import { Navbar } from '../src/components/layout/Navbar';
import { Footer } from '../src/components/layout/Footer';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              🍪 Cookie Policy
            </h1>
            <p className="text-gray-600">
              Learn about how Three Boys Cleaning Limited uses cookies to improve your experience
            </p>
            <div className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Cookie Policy Content */}
          <div className="prose max-w-none">
            
            {/* What Are Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                ensuring our security features work properly.
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                    <h3 className="text-lg font-semibold text-green-900">Essential Cookies (Required)</h3>
                  </div>
                  <p className="text-green-800 mb-3">
                    These cookies are necessary for our website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    <li><strong>Security cookies:</strong> Protect against spam, fraud, and malicious attacks</li>
                    <li><strong>Form functionality:</strong> Remember your form progress and prevent data loss</li>
                    <li><strong>Rate limiting:</strong> Prevent abuse by tracking submission frequency</li>
                    <li><strong>Session management:</strong> Maintain secure connections during your visit</li>
                  </ul>
                </div>

                {/* Functional Cookies */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                    <h3 className="text-lg font-semibold text-blue-900">Functional Cookies (Optional)</h3>
                  </div>
                  <p className="text-blue-800 mb-3">
                    These cookies enhance your experience by remembering your preferences.
                  </p>
                  <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li><strong>Preference storage:</strong> Remember your cookie choices and settings</li>
                    <li><strong>Language settings:</strong> Store your preferred language</li>
                    <li><strong>Theme preferences:</strong> Remember your display preferences</li>
                    <li><strong>Form auto-fill:</strong> Remember non-sensitive form information</li>
                  </ul>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                    <h3 className="text-lg font-semibold text-purple-900">Analytics Cookies (Optional)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    These cookies help us understand how visitors use our website to improve our services.
                  </p>
                  <ul className="list-disc list-inside text-purple-700 space-y-1">
                    <li><strong>Usage statistics:</strong> Track page views and popular content</li>
                    <li><strong>Performance monitoring:</strong> Monitor website speed and functionality</li>
                    <li><strong>Error tracking:</strong> Identify and fix technical issues</li>
                    <li><strong>User journey:</strong> Understand how users navigate our site</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookie Management */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">On Our Website</h3>
                <p className="text-gray-700 mb-4">
                  You can manage your cookie preferences by:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Using the cookie banner when you first visit our site</li>
                  <li>Clicking the &quot;Cookie Settings&quot; link in our footer (if available)</li>
                  <li>Clearing your browser cookies (this will reset all preferences)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">In Your Browser</h3>
                <p className="text-yellow-800 mb-4">
                  You can also control cookies through your browser settings:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Chrome</h4>
                    <p className="text-yellow-700">Settings → Privacy and Security → Cookies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Firefox</h4>
                    <p className="text-yellow-700">Preferences → Privacy & Security → Cookies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Safari</h4>
                    <p className="text-yellow-700">Preferences → Privacy → Cookies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Edge</h4>
                    <p className="text-yellow-700">Settings → Cookies and Site Permissions</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security & Privacy</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 mb-4">
                  <strong>We take your privacy seriously.</strong> Our cookies are designed with security in mind:
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li>We never store sensitive personal information in cookies</li>
                  <li>All data is encrypted and securely transmitted</li>
                  <li>We comply with GDPR and other privacy regulations</li>
                  <li>Cookies expire automatically after a reasonable time period</li>
                  <li>We regularly audit and update our cookie practices</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Cookies?</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about our cookie policy or how we use cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@threeboyscleaning.co.nz</p>
                  <p><strong>Phone:</strong> +64 21 123 4567</p>
                  <p><strong>Address:</strong> Auckland, New Zealand</p>
                </div>
              </div>
            </section>

            {/* Last Updated */}
            <section className="border-t pt-6">
              <p className="text-sm text-gray-500 text-center">
                This cookie policy was last updated on {new Date().toLocaleDateString()}. 
                We may update this policy from time to time to reflect changes in our practices or legal requirements.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;