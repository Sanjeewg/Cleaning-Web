import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section 
          className="privacy-page-header py-20 mt-20 relative overflow-hidden"
          style={{
            backgroundImage: 'url("/images/1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12">
              <h1 className="privacy-page-title text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
                🔒 Privacy Policy 🔒
              </h1>
              <p className="text-slate-700 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-sm">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <div className="privacy-title-divider mx-auto drop-shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="privacy-last-updated bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-4 mb-8 text-center text-slate-600 italic">
              <strong>Last Updated:</strong> October 2, 2025
            </div>

            {/* Introduction */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                📋 Introduction
              </h2>
              <div className="text-slate-600 leading-relaxed mb-6">
                <p>
                  At Three Boys Cleaning Limited, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By using our website or services, you consent to the practices described in this Privacy Policy. 
                  If you do not agree with this policy, please do not use our website or services.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📊</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Information We Collect</span>
              </h2>
              <div className="space-y-8">
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-sky-400 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                    Personal Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                    We may collect the following types of personal information:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Contact Information:</span>
                        <span className="text-slate-600 ml-2">Name, email address, phone number, mailing address</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Service Information:</span>
                        <span className="text-slate-600 ml-2">Property details, cleaning preferences, special instructions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Payment Information:</span>
                        <span className="text-slate-600 ml-2">Billing address, payment method details (processed securely through third-party payment processors)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Communication Records:</span>
                        <span className="text-slate-600 ml-2">Messages, emails, and phone calls with our team</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Automatically Collected Information
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Technical Information:</span>
                        <span className="text-slate-600 ml-2">IP address, browser type, device information, operating system</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Usage Information:</span>
                        <span className="text-slate-600 ml-2">Pages visited, time spent on site, referring websites</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Cookies and Tracking:</span>
                        <span className="text-slate-600 ml-2">Information collected through cookies and similar technologies</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">How We Use Your Information</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                We use your personal information for the following purposes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🛠️</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2 text-lg">Service Delivery</h4>
                      <p className="text-slate-600">To provide cleaning services, schedule appointments, and manage your account</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💬</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2 text-lg">Communication</h4>
                      <p className="text-slate-600">To respond to inquiries, send service updates, and provide customer support</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💳</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2 text-lg">Payment Processing</h4>
                      <p className="text-slate-600">To process payments and manage billing</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📢</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2 text-lg">Marketing</h4>
                      <p className="text-slate-600">To send promotional materials, special offers, and newsletters (with your consent)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">⚖️</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2 text-lg">Legal Compliance</h4>
                      <p className="text-slate-600">To comply with legal obligations and protect our rights</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6 border border-indigo-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📈</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2 text-lg">Service Improvement</h4>
                      <p className="text-slate-600">To analyze usage patterns and improve our website and services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🤝</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Information Sharing and Disclosure</span>
              </h2>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 mb-6 border-l-4 border-emerald-400">
                <p className="text-slate-700 leading-relaxed text-lg font-medium">
                  🔒 We do not sell, trade, or rent your personal information to third parties.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                We may share your information in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-blue-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Service Providers</h4>
                      <p className="text-slate-600">With trusted third-party vendors who assist in providing our services (payment processors, scheduling software, etc.)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-red-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📜</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Legal Requirements</h4>
                      <p className="text-slate-600">When required by law, court order, or government request</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Business Protection</h4>
                      <p className="text-slate-600">To protect our rights, property, safety, or that of our employees and customers</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-purple-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💼</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Business Transfers</h4>
                      <p className="text-slate-600">In connection with a merger, acquisition, or sale of our business</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-green-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Consent</h4>
                      <p className="text-slate-600">With your explicit consent for specific purposes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🔐</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Data Security</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                We implement appropriate technical and organizational measures to protect your personal information against:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border border-red-200 text-center">
                  <div className="text-4xl mb-3">🙅</div>
                  <h4 className="font-bold text-slate-700 mb-2">Unauthorized Access</h4>
                  <p className="text-slate-600 text-sm">Protection against unauthorized access, use, or disclosure</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 text-center">
                  <div className="text-4xl mb-3">🛡️</div>
                  <h4 className="font-bold text-slate-700 mb-2">Data Loss Prevention</h4>
                  <p className="text-slate-600 text-sm">Protection against accidental loss, destruction, or damage</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200 text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <h4 className="font-bold text-slate-700 mb-2">Breach Protection</h4>
                  <p className="text-slate-600 text-sm">Protection against malicious attacks and data breaches</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-400">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-bold text-slate-700 mb-2">Our Security Measures</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Our security measures include encryption, secure servers, access controls, and regular security assessments. 
                      However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights and Choices */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">⚖️</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Your Rights and Choices</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-green-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Access</h4>
                      <p className="text-slate-600">Request a copy of the personal information we hold about you</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-blue-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✏️</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Correction</h4>
                      <p className="text-slate-600">Request correction of inaccurate or incomplete information</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-red-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🗑️</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Deletion</h4>
                      <p className="text-slate-600">Request deletion of your personal information (subject to legal requirements)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🙅</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Opt-Out</h4>
                      <p className="text-slate-600">Unsubscribe from marketing communications at any time</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-purple-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📦</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Data Portability</h4>
                      <p className="text-slate-600">Request a copy of your data in a portable format</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-lg p-5 border-l-4 border-indigo-400 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏸️</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Restriction</h4>
                      <p className="text-slate-600">Request restriction of processing in certain circumstances</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
                <p className="text-slate-700 leading-relaxed text-center font-medium">
                  📞 To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🍪</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Cookies and Tracking Technologies</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                We use cookies and similar tracking technologies to:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💾</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Remember Preferences</h4>
                      <p className="text-slate-600">Store your preferences and settings for a better experience</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Traffic Analysis</h4>
                      <p className="text-slate-600">Analyze website traffic and usage patterns</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-5 border border-purple-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Personalization</h4>
                      <p className="text-slate-600">Provide personalized content and advertisements</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">User Experience</h4>
                      <p className="text-slate-600">Improve website functionality and user experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <h4 className="font-bold text-slate-700 mb-2">Cookie Control</h4>
                    <p className="text-slate-600 leading-relaxed">
                      You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">👶</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Children&apos;s Privacy</span>
              </h2>
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border-l-4 border-pink-400">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">🛡️</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-3">Age Restriction: 13+</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-4">
                      Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.
                    </p>
                    <div className="bg-white/60 rounded-lg p-4 border border-pink-200">
                      <p className="text-slate-700 font-medium">
                        🚨 If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🔗</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Third-Party Links</span>
              </h2>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border-l-4 border-orange-400">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">⚠️</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-3">External Website Disclaimer</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-4">
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
                    </p>
                    <div className="bg-white/60 rounded-lg p-4 border border-orange-200">
                      <p className="text-slate-700 font-medium flex items-center gap-2">
                        <span>📄</span>
                        We encourage you to review the privacy policies of any third-party websites you visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📝</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Changes to This Privacy Policy</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-400">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <h4 className="font-bold text-slate-700 mb-2">Policy Updates</h4>
                      <p className="text-slate-600 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                        We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-center gap-3 text-center">
                    <span className="text-2xl">🔍</span>
                    <p className="text-slate-700 font-medium text-lg">
                      We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📞</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Contact Us</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    🏢 Three Boys Cleaning Limited
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  <div className="bg-white/70 rounded-xl p-6 text-center border border-sky-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">📧</div>
                    <h4 className="font-bold text-slate-700 mb-2">Email</h4>
                    <p className="text-sky-600 font-medium">Threeboyscleaning@gmail.com</p>
                  </div>
                  
                  <div className="bg-white/70 rounded-xl p-6 text-center border border-sky-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">📞</div>
                    <h4 className="font-bold text-slate-700 mb-2">Phone</h4>
                    <p className="text-sky-600 font-medium">(555) 123-CLEAN</p>
                    <p className="text-sky-600 font-medium">(555) 123-CLEAN</p>
                  </div>
                  
                  <div className="bg-white/70 rounded-xl p-6 text-center border border-sky-200 hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">📍</div>
                    <h4 className="font-bold text-slate-700 mb-2">Address</h4>
                    <p className="text-sky-600 font-medium">50 Rogers Street<br/>Sydenham, Christchurch 8023<br/>New Zealand</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">⏱️</span>
                    <h4 className="font-bold text-slate-700">Response Time</h4>
                  </div>
                  <p className="text-slate-600">
                    We will respond to your privacy-related inquiries within <span className="font-semibold text-green-600">30 days</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}