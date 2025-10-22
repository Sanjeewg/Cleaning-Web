import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/layout/Hero'

export default function HomePage() {
  const [showPromoPopup, setShowPromoPopup] = useState(false)

  useEffect(() => {
    // Show popup after 1 second of page load
    const timer = setTimeout(() => {
      setShowPromoPopup(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Three Boys Cleaning Services Christchurch | Professional House & Car Detailing | 022 058 5306</title>
        <meta name="title" content="Three Boys Cleaning Services Christchurch | Professional House & Car Detailing | 022 058 5306" />
        <meta name="description" content="★★★★★ Professional cleaning services in Christchurch, New Zealand. House cleaning, commercial cleaning, car detailing, move-in/out cleaning. Expert team, eco-friendly products, satisfaction guaranteed. Call 022 058 5306 for a free quote!" />
        <meta name="keywords" content="cleaning services christchurch, house cleaning christchurch, car detailing christchurch, commercial cleaning, move out cleaning, bond cleaning, professional cleaners, eco-friendly cleaning, three boys cleaning" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Three Boys Cleaning Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://threeboyscleaning.com/" />
        <meta property="og:title" content="Three Boys Cleaning Services Christchurch | Professional House & Car Detailing" />
        <meta property="og:description" content="Professional cleaning services in Christchurch, NZ. House cleaning, car detailing, commercial cleaning. Expert team, eco-friendly products. Call 022 058 5306 for a free quote!" />
        <meta property="og:image" content="https://threeboyscleaning.com/images/LogoCleaning.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Three Boys Cleaning Services" />
        <meta property="og:locale" content="en_NZ" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://threeboyscleaning.com/" />
        <meta property="twitter:title" content="Three Boys Cleaning Services Christchurch | Professional House & Car Detailing" />
        <meta property="twitter:description" content="Professional cleaning services in Christchurch, NZ. House cleaning, car detailing, commercial cleaning. Expert team, eco-friendly products. Call 022 058 5306!" />
        <meta property="twitter:image" content="https://threeboyscleaning.com/images/LogoCleaning.png" />

        {/* Local Business Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Three Boys Cleaning Services",
              "alternateName": "Three Boys Cleaning",
              "description": "★★★★★ Professional cleaning services in Christchurch, New Zealand. House cleaning, commercial cleaning, car detailing, move-in/out cleaning. Expert team with 5+ years experience.",
              "image": [
                "https://threeboyscleaning.com/images/LogoCleaning.png",
                "https://threeboyscleaning.com/images/cleaning-service-1.jpg",
                "https://threeboyscleaning.com/images/car-detailing-1.jpg"
              ],
              "logo": "https://threeboyscleaning.com/images/LogoCleaning.png",
              "url": "https://threeboyscleaning.com",
              "telephone": "+64220585306",
              "email": "info@threeboyscleaning.com",
              "sameAs": [
                "https://www.facebook.com/threeboyscleaning",
                "https://www.instagram.com/threeboyscleaning"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Christchurch",
                "addressRegion": "Canterbury",
                "addressCountry": "NZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-43.5321",
                "longitude": "172.6362"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "16:00"
                }
              ],
              "serviceArea": {
                "@type": "City",
                "name": "Christchurch"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "House Cleaning",
                      "description": "Professional residential cleaning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Car Detailing",
                      "description": "Complete car grooming and detailing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Cleaning",
                      "description": "Office and commercial space cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Move In/Out Cleaning",
                      "description": "End of tenancy and bond cleaning services"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Excellent service! The team was professional and thorough. My house has never been cleaner."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Mike Chen"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Outstanding car detailing service. My car looks brand new! Highly recommend Three Boys Cleaning."
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "currenciesAccepted": "NZD"
            })
          }}
        />

        {/* Breadcrumb Schema for Better Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://threeboyscleaning.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Cleaning Services",
                  "item": "https://threeboyscleaning.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Contact",
                  "item": "https://threeboyscleaning.com/contact"
                }
              ]
            })
          }}
        />

        {/* FAQ Schema for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What cleaning services do you offer in Christchurch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer house cleaning, car detailing, commercial cleaning, move-in/out cleaning, carpet cleaning, and window cleaning services throughout Christchurch and Canterbury."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much do your cleaning services cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our prices vary based on the size and type of cleaning required. Contact us at 022 058 5306 for a free, no-obligation quote tailored to your specific needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you use eco-friendly cleaning products?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we use environmentally friendly and non-toxic cleaning products that are safe for your family, pets, and the environment while delivering exceptional results."
                  }
                }
              ]
            })
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO */}
        <link rel="canonical" href="https://threeboyscleaning.com/" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
      </Head>

      <div>
      <Navbar />
      <Hero />
      
      {/* Why Choose Us Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container px-3 sm:px-4 md:px-6 mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-2">
              ✨ Why Choose Three Boys Cleaning Service?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional cleaning services you can trust with years of experience serving Christchurch
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all active:scale-95 touch-manipulation">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center">🏆</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Expert Team</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                Highly trained professionals with years of experience in all types of cleaning services
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all active:scale-95 touch-manipulation">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center">♻️</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Eco-Friendly</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                We use environmentally safe products that are tough on dirt but gentle on your home
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all active:scale-95 touch-manipulation">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Fast Service</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                Quick response times and efficient cleaning without compromising on quality
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all active:scale-95 touch-manipulation">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 text-center">💯</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">Satisfaction Guaranteed</h3>
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                100% satisfaction guarantee - if you&apos;re not happy, we&apos;ll make it right
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="container px-3 sm:px-4 md:px-6 mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-2">
              🧹 Our Cleaning Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive cleaning solutions for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏠</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Residential Cleaning</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Keep your home spotless with our regular or one-time cleaning services. We handle everything from dusting to deep cleaning.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Regular house cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Kitchen & bathroom deep clean
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Dusting & vacuuming
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏢</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Commercial Cleaning</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Professional office and commercial space cleaning to maintain a healthy work environment for your team.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Office cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Restaurant kitchens
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Retail spaces
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">✨</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Deep Cleaning</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Intensive cleaning service that reaches every corner. Perfect for spring cleaning or special occasions.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Carpet steam cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Window washing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Appliance cleaning
                </li>
              </ul>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📦</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Move In/Out Cleaning</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Comprehensive cleaning for tenants and landlords. Get your bond back with our thorough end-of-tenancy service.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Bond cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Empty property cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Pre-move preparation
                </li>
              </ul>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🏗️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Post-Construction</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Remove all dust and debris after renovations or construction. We make your space move-in ready.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Dust removal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Paint & debris cleanup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Final polish
                </li>
              </ul>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🪟</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Specialized Services</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Additional services to meet your specific cleaning needs and maintain your property.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Carpet cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Upholstery cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Pressure washing
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
            <Link href="/services">
              <button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 active:from-sky-600 active:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-12 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 touch-manipulation w-full sm:w-auto">
                View All Services →
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Car Detailing Services Section - SEO Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-white" itemScope itemType="https://schema.org/Service">
        <div className="container px-3 sm:px-4 md:px-6 mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 px-2" itemProp="name">
              🚗 Professional Car Detailing Christchurch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4" itemProp="description">
              Expert car grooming and detailing services in Christchurch. Complete interior and exterior car care with eco-friendly products and professional equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Car Detailing Service 1 */}
            <article className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation" itemScope itemType="https://schema.org/Offer">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🚿</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3" itemProp="name">Exterior Car Wash & Wax</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed" itemProp="description">
                Complete exterior car cleaning with premium wax protection. Hand wash, dry, and polish for a showroom finish.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Hand wash & rinse
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Premium wax application
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Tire cleaning & shine
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Chrome polishing
                </li>
              </ul>
            </article>
            
            {/* Car Detailing Service 2 */}
            <article className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation" itemScope itemType="https://schema.org/Offer">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🧽</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3" itemProp="name">Interior Deep Cleaning</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed" itemProp="description">
                Thorough interior car cleaning including seats, carpets, dashboard, and odor elimination for a fresh cabin.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Vacuum seats & carpets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Dashboard cleaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Odor treatment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Window cleaning inside
                </li>
              </ul>
            </article>
            
            {/* Car Detailing Service 3 */}
            <article className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all active:scale-95 touch-manipulation" itemScope itemType="https://schema.org/Offer">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">💡</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3" itemProp="name">Headlight Restoration</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed" itemProp="description">
                Professional headlight restoration to remove oxidation and yellowing. Improve visibility and vehicle appearance.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Remove oxidation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Polish & seal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> UV protection
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500 flex-shrink-0">✓</span> Enhanced brightness
                </li>
              </ul>
            </article>
          </div>
          
          {/* Special Car Detailing Offer */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center mt-8 sm:mt-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">🎉 Car Detailing Special Offer</h3>
            <p className="text-lg sm:text-xl mb-6">Complete Car Detailing Package</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black mb-2">20% OFF</div>
                <div className="text-sm sm:text-base opacity-90">Regular Price: $150</div>
              </div>
              <div className="text-2xl sm:text-3xl">+</div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold mb-2">FREE</div>
                <div className="text-sm sm:text-base opacity-90">Headlight Restoration</div>
              </div>
            </div>
            <a href="tel:+64220585306" className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
              Call Now: 022 058 5306
            </a>
          </div>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 active:from-sky-600 active:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-12 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95 touch-manipulation w-full sm:w-auto">
                Get Your Car Detailed Today →
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Mobile-First Responsive Popup */}
      {showPromoPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-[9999] p-0 sm:p-2 sm:items-center animate-fadeIn">
          
          {/* Mobile-Optimized Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-sky-400/20 rounded-full blur-2xl animate-float opacity-50"></div>
            <div className="absolute bottom-1/3 right-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-blue-500/15 rounded-full blur-2xl animate-pulse opacity-40"></div>
            <div className="absolute top-1/2 right-1/3 w-12 h-12 sm:w-24 sm:h-24 bg-cyan-300/25 rounded-full blur-xl animate-bounce opacity-30"></div>
          </div>

          {/* Ultra Compact Phone Container */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto animate-scaleIn">
            
            {/* Animated Close Button */}
            <button
              onClick={() => setShowPromoPopup(false)}
              className="absolute -top-3 -right-3 z-30 group"
              aria-label="Close popup"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/50 rounded-full blur-md animate-pulse opacity-75 group-hover:opacity-100"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-90 active:scale-95 animate-bounceIn" style={{animationDelay: '0.3s'}}>
                  <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Ultra Compact Mobile Card */}
            <div className="relative bg-white rounded-lg sm:rounded-xl shadow-lg border border-white/50 overflow-hidden animate-slideUp hover:shadow-xl transition-all duration-500 transform">
              
              {/* Subtle Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/30 via-transparent to-blue-50/20 rounded-lg sm:rounded-xl"></div>
              
              
              {/* Ultra Compact Mobile Header */}
              <div className="relative bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 p-2 sm:p-3 text-white text-center overflow-hidden animate-slideInLeft" style={{animationDelay: '0.1s'}}>
                
                {/* Minimal Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 border border-white/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border border-white/15 rounded-full animate-reverse-spin"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block mb-1 animate-bounceIn" style={{animationDelay: '0.2s'}}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-sm sm:text-lg font-bold animate-slideInLeft mb-0.5" style={{animationDelay: '0.3s'}}>
                    🚗 Car Detailing Special
                  </h1>
                  <p className="text-xs sm:text-sm opacity-90 animate-slideInRight" style={{animationDelay: '0.4s'}}>
                    Three Boys Cleaning
                  </p>
                </div>
              </div>

              {/* Phone-Optimized Layout */}
              <div className="relative">
                
                {/* Mobile: Compact Vertical Stack | Desktop: Horizontal Layout */}
                <div className="flex flex-col md:flex-row">
                  
                  {/* Ultra Compact Left Panel */}
                  <div className="w-full md:w-2/5 p-1.5 sm:p-2 md:p-3 space-y-1.5 sm:space-y-2">
                    
                    {/* Minimal Logo & Brand */}
                    <div className="text-center md:text-left animate-slideInLeft" style={{animationDelay: '0.5s'}}>
                      <div className="group relative inline-block">
                        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-md p-1.5 sm:p-2 shadow-sm border border-gray-100/50 group-hover:scale-105 transform transition-all duration-300">
                          <img
                            src="/images/LogoCleaning.png"
                            alt="Three Boys Cleaning Services"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain mx-auto md:mx-0 animate-float"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                              target.style.display = 'none';
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <div className="logo-fallback text-center md:text-left" style={{ display: 'none' }}>
                            <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">THREE BOYS</div>
                            <div className="text-xs font-semibold text-gray-600">CLEANING</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ultra Compact Offer Card */}
                    <div className="text-center md:text-left animate-slideInLeft" style={{animationDelay: '0.6s'}}>
                      <div className="relative mb-1">
                        <h2 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">
                          ✨ Special Offer ✨
                        </h2>
                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                      
                      <div className="group relative">
                        <div className="relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-md p-1.5 sm:p-2 shadow-sm border border-sky-200/50 hover:shadow-md transition-all duration-300 animate-zoomIn">
                          <div className="relative">
                            <div className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 mb-0.5 animate-wiggle">20% OFF</div>
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-bounce flex items-center justify-center">
                              <span className="text-xs text-white font-bold">🔥</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-700 font-semibold mb-0.5">Car Detailing</p>
                          <p className="text-xs text-gray-600 mb-1">+ FREE Headlight Fix</p>
                          
                          <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-2 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold shadow-sm hover:shadow-md transition-all duration-300 animate-pulse cursor-pointer">
                            <svg className="w-2 h-2 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span>Limited!</span>
                          </div>
                        </div>
                      </div>

                      {/* Minimal Social Proof */}
                      <div className="flex items-center justify-center md:justify-start space-x-1 mt-1 text-xs text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-2 sm:py-1 shadow-sm border border-gray-100 animate-slideInUp" style={{animationDelay: '0.7s'}}>
                        <div className="flex space-x-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-2 h-2 text-yellow-500 animate-pulse drop-shadow-sm" style={{animationDelay: `${0.8 + i * 0.1}s`}} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-medium text-xs">500+</span>
                      </div>
                    </div>
                  </div>

                  {/* Ultra Compact Service Details */}
                  <div className="w-full md:w-3/5 p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-gray-50/20 to-white space-y-1.5 sm:space-y-2">
                    
                    {/* Minimal Service Header */}
                    <div className="text-center md:text-left animate-slideInRight" style={{animationDelay: '1.0s'}}>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">
                        🚗 CAR DETAILING
                      </h3>
                      <div className="flex flex-wrap justify-center md:justify-start gap-1 mb-1.5">
                        <div className="bg-sky-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-xs font-bold animate-slideInLeft" style={{animationDelay: '1.1s'}}>Restore</div>
                        <div className="bg-blue-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-xs font-bold animate-slideInUp" style={{animationDelay: '1.2s'}}>Protect</div>
                        <div className="bg-indigo-600 text-white px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-xs font-bold animate-slideInRight" style={{animationDelay: '1.3s'}}>Shine</div>
                      </div>
                    </div>

                    {/* Minimal Service Details */}
                    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-md p-1.5 sm:p-2 shadow-sm border border-sky-200/50 animate-slideInRight" style={{animationDelay: '1.4s'}}>
                      <h4 className="font-bold text-gray-800 text-xs mb-1 text-center md:text-left">Includes:</h4>
                      
                      {/* Compact Service List */}
                      <div className="space-y-0.5 sm:grid sm:grid-cols-2 sm:gap-1 sm:space-y-0 text-xs">
                        <div className="flex items-center space-x-1 animate-slideInLeft" style={{animationDelay: '1.5s'}}>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sky-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">✓ Exterior Wash</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 animate-slideInRight" style={{animationDelay: '1.6s'}}>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">✓ Interior Clean</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 animate-slideInLeft" style={{animationDelay: '1.7s'}}>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">✓ Odour Fix</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 animate-slideInRight" style={{animationDelay: '1.8s'}}>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">✓ Engine Bay</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 sm:col-span-2 justify-center animate-slideInUp" style={{animationDelay: '1.9s'}}>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700">✓ Headlight Fix</span>
                        </div>
                      </div>

                      {/* Mini Special Highlight */}
                      <div className="mt-1.5 text-center animate-bounceIn" style={{animationDelay: '2.0s'}}>
                        <div className="bg-red-500 text-white px-2 py-0.5 sm:px-2 sm:py-1 rounded-md font-bold text-xs shadow-sm inline-block">
                          🎉 FREE HEADLIGHT! 🎉
                        </div>
                      </div>
                    </div>

                    {/* Mini Contact Card */}
                    <div className="bg-white rounded-md p-1.5 sm:p-2 shadow-sm border border-gray-200/50 animate-slideInUp" style={{animationDelay: '2.1s'}}>
                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-gray-800 text-xs mb-1">📞 Contact</h4>
                        <div className="flex flex-col space-y-0.5 sm:flex-row sm:space-y-0 sm:space-x-2 items-center md:items-start justify-center md:justify-start text-xs">
                          <div className="flex items-center space-x-1">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="font-semibold text-sky-600">022 058 5306</span>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="font-semibold text-gray-600 truncate">threeboyscleaning</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Action Footer */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-4 border-t border-gray-200/50 backdrop-blur-sm">
                
                {/* Floating Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                  <div className="absolute bottom-2 left-4 w-8 h-8 bg-sky-400/20 rounded-full blur-lg animate-pulse"></div>
                  <div className="absolute top-2 right-4 w-6 h-6 bg-blue-400/20 rounded-full blur-md animate-bounce"></div>
                </div>
                
                {/* Animated Contact Cards */}
                <div className="relative flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-4">
                  
                  <div className="group animate-slideInLeft" style={{animationDelay: '1.9s'}}>
                    <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-500 border border-sky-200/50 group-hover:scale-110 transform">
                      <div className="relative">
                        <div className="absolute inset-0 bg-sky-400/30 rounded-full blur-md animate-pulse opacity-50"></div>
                        <div className="relative w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 text-sm animate-pulse">022 058 5306</p>
                        <p className="text-xs text-gray-600 font-medium">📞 Call Now</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group animate-slideInRight" style={{animationDelay: '2.0s'}}>
                    <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 group-hover:scale-110 transform">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gray-400/30 rounded-full blur-md animate-pulse opacity-50"></div>
                        <div className="relative w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-700 text-sm">Email Us</p>
                        <p className="text-xs text-gray-600 font-medium">✉️ Quick Response</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ultra Compact Action Buttons */}
                <div className="relative space-y-1.5 sm:space-y-2">
                  
                  {/* Compact Primary CTA */}
                  <Link href="/contact" onClick={() => setShowPromoPopup(false)}>
                    <button className="group relative w-full overflow-hidden bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:via-sky-700 hover:to-blue-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-md sm:rounded-lg transition-all duration-500 shadow-md hover:shadow-lg active:scale-95 transform hover:scale-105 animate-slideInUp border border-white/20" style={{animationDelay: '2.1s'}}>
                      
                      {/* Shimmer Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative flex items-center justify-center space-x-1.5 sm:space-x-2">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce group-hover:animate-pulse drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="drop-shadow-lg text-xs sm:text-sm tracking-wide font-bold">BOOK CAR DETAILING</span>
                      </span>
                    </button>
                  </Link>
                  
                  {/* Mini Secondary Buttons */}
                  <div className="flex gap-1.5 sm:gap-2 animate-slideInUp" style={{animationDelay: '2.2s'}}>
                    
                    <button
                      onClick={() => setShowPromoPopup(false)}
                      className="group flex-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-800 font-bold rounded-md sm:rounded-lg border border-gray-200/50 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-md active:scale-95 transform hover:scale-105 backdrop-blur-sm"
                    >
                      <span className="flex items-center justify-center space-x-1">
                        <svg className="w-3 h-3 group-hover:animate-wiggle" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">Later</span>
                      </span>
                    </button>
                    
                    <button 
                      onClick={() => {
                        const message = encodeURIComponent("Hi! I'm interested in your Car Detailing Special - 20% OFF Complete Package + FREE Headlight Restoration. Can you provide more details?");
                        const phoneNumber = "6422058306"; // New Zealand format without + sign
                        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="group relative flex-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-md sm:rounded-lg transition-all duration-500 shadow-sm hover:shadow-md active:scale-95 transform hover:scale-105 border border-white/20 overflow-hidden"
                    >
                      
                      <span className="relative flex items-center justify-center space-x-1">
                        <svg className="w-3 h-3 group-hover:animate-bounce drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                        </svg>
                        <span className="drop-shadow-sm text-xs">WhatsApp</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
      </div>
    </>
  )
}
