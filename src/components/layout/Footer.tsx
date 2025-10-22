import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1EZkHVnsea/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6422058306',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@threeboyscleaning',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="footer-gradient py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <Image
                src="/images/LogoCleaning.png"
                alt="Three Boys Logo"
                width={50}
                height={50}
                className="footer-logo mb-2 sm:mb-0 sm:mr-3"
              />
              <h5 className="footer-company-name text-lg sm:text-xl font-bold mb-0 text-center sm:text-left">
                Three Boys Cleaning Service
              </h5>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed text-center sm:text-left text-sm sm:text-base">
              Professional cleaning services you can trust. We make homes and offices shine with eco-friendly solutions.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link w-10 h-10 bg-white/20 hover:bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:text-gray-800 transition-all duration-300 hover:transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h6 className="footer-section-heading text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black uppercase tracking-wide">
              Quick Links
            </h6>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'About', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link text-gray-700 hover:text-black transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h6 className="footer-section-heading text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black uppercase tracking-wide">
              Our Services
            </h6>
            <ul className="space-y-2">
              {[
                '🏠 Residential Cleaning',
                '🏢 Commercial Cleaning',
                '🌿 Eco-Friendly Solutions',
                '🧹 Deep Cleaning',
                '📦 Move In/Out Cleaning',
              ].map((service) => (
                <li key={service}>
                  <span className="footer-service text-gray-700 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h6 className="footer-section-heading text-base sm:text-lg font-bold mb-3 sm:mb-4 text-black uppercase tracking-wide">
              Contact Us
            </h6>
            <div className="contact-info space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-5 text-gray-800 mr-3">📞</span>
                <span className="text-gray-700 text-sm sm:text-base">022 058 5306</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-5 text-gray-800 mr-3">✉️</span>
                <span className="text-gray-700 text-sm sm:text-base break-all sm:break-normal">Threeboyscleaning@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-5 text-gray-800 mr-3">📍</span>
                <span className="text-gray-700 text-sm sm:text-base">50 Rogers Street, Sydenham, Christchurch 8023, NZ</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <span className="w-5 text-gray-800 mr-3">🕐</span>
                <span className="text-gray-700 text-sm sm:text-base">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-6 sm:my-8 border-gray-600/30" />
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-700 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Three Boys Cleaning Service. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <Link
              href="/privacy-policy"
              className="footer-link text-gray-700 hover:text-black transition-colors duration-200 text-xs sm:text-sm text-center"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="footer-link text-gray-700 hover:text-black transition-colors duration-200 text-xs sm:text-sm text-center"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}