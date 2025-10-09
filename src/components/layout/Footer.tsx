import Link from 'next/link'
import Image from 'next/image'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/threeboyscleaning',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/threeboyscleaning',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.509 0-4.541-2.032-4.541-4.541s2.032-4.541 4.541-4.541 4.541 2.032 4.541 4.541-2.032 4.541-4.541 4.541zm7.519 0c-2.509 0-4.541-2.032-4.541-4.541s2.032-4.541 4.541-4.541 4.541 2.032 4.541 4.541-2.032 4.541-4.541 4.541z"/>
        <path d="M12 7.378c-2.552 0-4.622 2.069-4.622 4.622S9.448 16.622 12 16.622s4.622-2.069 4.622-4.622S14.552 7.378 12 7.378zM12 14.756c-1.497 0-2.711-1.214-2.711-2.711S10.503 9.334 12 9.334s2.711 1.214 2.711 2.711-1.214 2.711-2.711 2.711z"/>
        <circle cx="16.804" cy="7.217" r="1.078"/>
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