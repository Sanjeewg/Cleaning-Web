import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function TermsOfServicePage() {
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
                📋 Terms of Service 📋
              </h1>
              <p className="text-slate-700 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-sm">
                Please read these terms and conditions carefully before using our cleaning services.
              </p>
              <div className="privacy-title-divider mx-auto drop-shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="privacy-last-updated bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-4 mb-8 text-center text-slate-600 italic">
              <strong>Last Updated:</strong> October 2, 2025
            </div>

            {/* Introduction */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📋</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Agreement to Terms</span>
              </h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                <p className="text-lg">
                  Welcome to Three Boys Cleaning Service. These Terms of Service (&quot;Terms&quot;) govern your use of our cleaning services and website. 
                  By engaging our services or using our website, you agree to be bound by these Terms.
                </p>
                <p className="text-lg">
                  If you do not agree with any part of these terms, please do not use our services or website. 
                  We reserve the right to update these Terms at any time, and your continued use constitutes acceptance of any changes.
                </p>
              </div>
            </div>

            {/* Services Offered */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🧹</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Services Offered</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏠</span>
                    Residential Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Regular House Cleaning:</span>
                        <span className="text-slate-600 ml-2">Weekly, bi-weekly, or monthly maintenance cleaning</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Deep Cleaning:</span>
                        <span className="text-slate-600 ml-2">Comprehensive top-to-bottom cleaning service</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Move-in/Move-out:</span>
                        <span className="text-slate-600 ml-2">Specialized cleaning for property transitions</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Post-Construction:</span>
                        <span className="text-slate-600 ml-2">Cleanup after renovation or construction work</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏢</span>
                    Commercial Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Office Cleaning:</span>
                        <span className="text-slate-600 ml-2">Daily, weekly, or custom commercial cleaning</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Retail Spaces:</span>
                        <span className="text-slate-600 ml-2">Storefront and retail facility maintenance</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Medical Facilities:</span>
                        <span className="text-slate-600 ml-2">Specialized sanitization for healthcare settings</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Restaurant Cleaning:</span>
                        <span className="text-slate-600 ml-2">Kitchen and dining area deep cleaning services</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking and Scheduling */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📅</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Booking and Scheduling</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Appointment Booking
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                    Services must be scheduled in advance through our website, phone, or email. We recommend booking at least 48 hours in advance to ensure availability.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">⏰</span>
                        <h4 className="font-bold text-slate-700">Standard Booking</h4>
                      </div>
                      <p className="text-slate-600 text-sm">Minimum 24-hour advance booking required</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h4 className="font-bold text-slate-700">Emergency Service</h4>
                      </div>
                      <p className="text-slate-600 text-sm">Same-day service available with additional fees</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">🔄</span>
                        <h4 className="font-bold text-slate-700">Recurring Services</h4>
                      </div>
                      <p className="text-slate-600 text-sm">Weekly, bi-weekly, or monthly scheduling available</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-orange-400 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Cancellation Policy
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                      <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                        <span className="text-xl">✅</span>
                        Standard Cancellation
                      </h4>
                      <p className="text-slate-600">24-hour notice required for cancellation without penalty</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200">
                      <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                        <span className="text-xl">⚠️</span>
                        Late Cancellation
                      </h4>
                      <p className="text-slate-600">Less than 24 hours: 50% service fee applies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">💳</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Payment Terms</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Accepted Payment Methods
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Credit/Debit Cards:</span>
                        <span className="text-slate-600 ml-2">Visa, MasterCard, American Express</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Online Payments:</span>
                        <span className="text-slate-600 ml-2">Secure portal payments</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Cash Payments:</span>
                        <span className="text-slate-600 ml-2">Accepted upon service completion</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Check Payments:</span>
                        <span className="text-slate-600 ml-2">With prior approval</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⏱️</span>
                    Payment Schedule
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <div>
                        <span className="font-semibold text-slate-700">One-time Services:</span>
                        <span className="text-slate-600 ml-2">Payment due upon completion</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Recurring Services:</span>
                        <span className="text-slate-600 ml-2">Monthly payment in advance</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Large Projects:</span>
                        <span className="text-slate-600 ml-2">50% deposit, balance due upon completion</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Agreement */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📝</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Service Agreement</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-green-400 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤝</span>
                    Our Commitments
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Professional, uniformed, and background-checked staff</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Eco-friendly cleaning products and methods</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Fully licensed, bonded, and insured services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Quality guarantee and satisfaction promise</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Client Responsibilities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Provide safe and accessible working environment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Secure valuable and fragile items before service</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Provide access to property at scheduled times</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                        <span className="text-slate-600">Communicate special instructions in advance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Liability and Insurance */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🛡️</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Liability and Insurance</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    We Are Covered
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                      <div>
                        <span className="font-semibold text-slate-700">General Liability:</span>
                        <span className="text-slate-600 ml-2">Up to $2 million coverage</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Bonded Employees:</span>
                        <span className="text-slate-600 ml-2">For your protection and peace of mind</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></span>
                      <div>
                        <span className="font-semibold text-slate-700">Workers&apos; Compensation:</span>
                        <span className="text-slate-600 ml-2">Full employee coverage</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    Damage Policy
                  </h3>
                  <div className="space-y-3 text-slate-600">
                    <p className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      We take full responsibility for any damage caused by our negligence during service delivery.
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      Claims must be reported within 24 hours with supporting documentation.  
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                      Pre-existing damage should be reported before service begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Guarantee */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">⭐</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Quality Guarantee</span>
              </h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-400 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">💯</span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">100% Satisfaction Promise</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      We stand behind our work with a complete satisfaction guarantee. If you&apos;re not happy with our service, we&apos;ll make it right.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                      <div className="bg-white/60 rounded-lg p-5 border border-green-200">
                        <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                          <span className="text-xl">🔄</span>
                          Re-Clean Guarantee
                        </h4>
                        <p className="text-slate-600">
                          We&apos;ll return within 24 hours to re-clean any missed areas at no additional charge.
                        </p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-5 border border-green-200">
                        <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
                          <span className="text-xl">💰</span>
                          Money-Back Option
                        </h4>
                        <p className="text-slate-600">
                          If re-cleaning doesn&apos;t meet your standards, we&apos;ll provide a full refund.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Termination */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">🚪</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Service Termination</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">👋</span>
                    Client Termination
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      Recurring services can be cancelled with 7 days&apos; notice
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      No cancellation fees for standard termination
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      Final payment due for completed services
                    </li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-6 border-l-4 border-red-400 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    Service Termination
                  </h3>
                  <p className="text-slate-600 mb-3">We reserve the right to terminate service for:</p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                      Non-payment or late payment issues
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                      Unsafe working conditions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                      Abusive behavior toward staff
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Compliance */}
            <div className="privacy-content-section bg-gradient-to-br from-white to-slate-50 rounded-2xl p-10 mb-8 shadow-lg border border-sky-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">⚖️</span>
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Legal Compliance</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-400">
                  <h3 className="text-xl font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📜</span>
                    Governing Law
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    These Terms of Service are governed by and construed in accordance with the laws of the state in which our services are provided. 
                    Any disputes arising from these terms will be resolved in the appropriate local courts.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-400">
                  <h3 className="text-xl font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Changes to Terms
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes will be posted on our website with an updated &quot;Last Updated&quot; date. 
                    Continued use of our services constitutes acceptance of any changes.
                  </p>
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
                If you have any questions about these Terms of Service or need clarification on any policies, please contact us:
              </p>
              
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    🏢 Three Boys Cleaning Service
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
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
                    <h4 className="font-bold text-slate-700">Business Hours</h4>
                  </div>
                  <p className="text-slate-600">
                    Monday - Saturday: 8:00 AM - 6:00 PM<br/>
                    Sunday: Closed<br/>

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