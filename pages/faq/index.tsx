import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// FAQ data
const faqData = [
  {
    category: 'General Services',
    questions: [
      {
        id: 1,
        question: 'What cleaning services do you offer?',
        answer: 'We offer a comprehensive range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, carpet cleaning, and recurring maintenance cleaning. Each service is tailored to meet your specific needs.'
      },
      {
        id: 2,
        question: 'What areas do you serve?',
        answer: 'Three Boys Cleaning Limited proudly serves Christchurch and surrounding Canterbury suburbs including Sydenham, Addington, Riccarton, and Papanui. We cover residential neighborhoods, commercial districts, and industrial areas throughout the greater Christchurch area. Contact us to confirm service availability in your specific location.'
      },
      {
        id: 3,
        question: 'Are you licensed and insured?',
        answer: 'Yes, we are fully licensed, bonded, and insured. Our comprehensive insurance coverage protects both our team and your property. We carry liability insurance and workers compensation to ensure complete peace of mind for our clients.'
      }
    ]
  },
  {
    category: 'Pricing & Booking',
    questions: [
      {
        id: 4,
        question: 'How do you determine pricing?',
        answer: 'Our pricing is based on several factors including the size of your space, type of cleaning service, frequency of service, and specific requirements. We provide free, no-obligation quotes and ensure transparent pricing with no hidden fees.'
      },
      {
        id: 5,
        question: 'Do you offer free estimates?',
        answer: 'Absolutely! We provide free estimates for all our services. Our team can assess your space either in-person or through our detailed online quote form to give you an accurate estimate tailored to your needs.'
      },
      {
        id: 6,
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including cash, checks, credit cards (Visa, MasterCard, American Express), and digital payments. Payment is typically due upon completion of service unless prior arrangements have been made.'
      },
      {
        id: 7,
        question: 'Can I schedule recurring cleaning services?',
        answer: 'Yes! We offer flexible recurring cleaning schedules including weekly, bi-weekly, monthly, or custom frequencies. Recurring clients receive priority scheduling and discounted rates for their loyalty.'
      }
    ]
  },
  {
    category: 'Service Details',
    questions: [
      {
        id: 8,
        question: 'Do I need to be home during the cleaning?',
        answer: 'No, you don\'t need to be present during cleaning. Many of our clients provide us with access instructions and go about their day. We are fully bonded and insured, and our team is thoroughly background-checked for your security and peace of mind.'
      },
      {
        id: 9,
        question: 'What cleaning supplies do you use?',
        answer: 'We use professional-grade, eco-friendly cleaning products that are safe for your family and pets. We bring all necessary equipment and supplies. If you have specific product preferences or allergies, we\'re happy to accommodate your requests.'
      },
      {
        id: 10,
        question: 'What if I\'m not satisfied with the cleaning?',
        answer: 'Your satisfaction is our top priority. If you\'re not completely satisfied with our service, please contact us within 24 hours, and we\'ll return to address any concerns at no additional charge. We stand behind our work with a 100% satisfaction guarantee.'
      },
      {
        id: 11,
        question: 'How long does a typical cleaning take?',
        answer: 'Cleaning time varies based on the size of your space and type of service. A standard residential cleaning typically takes 2-4 hours, while deep cleaning may take 4-8 hours. Commercial cleaning schedules are customized based on your business needs.'
      }
    ]
  },
  {
    category: 'Special Services',
    questions: [
      {
        id: 12,
        question: 'Do you clean offices and commercial spaces?',
        answer: 'Yes, we specialize in commercial cleaning services including offices, retail spaces, restaurants, medical facilities, and industrial locations. We offer flexible scheduling including after-hours and weekend cleaning to minimize disruption to your business.'
      },
      {
        id: 13,
        question: 'Can you handle post-construction cleanup?',
        answer: 'Absolutely! We have extensive experience with post-construction and renovation cleanup. Our team uses specialized equipment to remove construction dust, debris, and residue, leaving your space move-in ready and spotless.'
      },
      {
        id: 14,
        question: 'Do you offer carpet and upholstery cleaning?',
        answer: 'Yes, we provide professional carpet and upholstery cleaning services using advanced steam cleaning and extraction methods. We can remove tough stains, eliminate odors, and restore the appearance of your carpets and furniture.'
      }
    ]
  }
]

// Quote Modal Component
interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! We have received your quote request for ${formData.preferredDate} at ${formData.preferredTime}. We will contact you within business hours to confirm your appointment.`)
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-blue-100/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-sky-300 to-blue-400 text-black p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">💬 Get a Free Quote</h2>
            <button
              onClick={onClose}
              className="text-black hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
              />
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Service Type Field */}
          <div className="space-y-2 mt-4">
            <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
            >
              <option value="" disabled>Select a service</option>
              <option value="residential">Residential Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="deep-cleaning">Deep Cleaning</option>
              <option value="move-in-out">Move In/Out Cleaning</option>
              <option value="post-construction">Post-Construction Cleanup</option>
              <option value="recurring">Recurring Service</option>
              <option value="other">Other (specify in message)</option>
            </select>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Preferred Date Field */}
            <div className="space-y-2">
              <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
              />
            </div>

            {/* Preferred Time Field */}
            <div className="space-y-2">
              <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700">
                Preferred Time <span className="text-red-500">*</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
              >
                <option value="" disabled>Select preferred time</option>
                <option value="7:00-8:00">7:00 AM - 8:00 AM</option>
                <option value="8:00-9:00">8:00 AM - 9:00 AM</option>
                <option value="9:00-10:00">9:00 AM - 10:00 AM</option>
                <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                <option value="12:00-13:00">12:00 PM - 1:00 PM</option>
                <option value="13:00-14:00">1:00 PM - 2:00 PM</option>
                <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
                <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
                <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
                <option value="17:00-18:00">5:00 PM - 6:00 PM</option>
                <option value="18:00-19:00">6:00 PM - 7:00 PM</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2 mt-4">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your space, specific requirements, or any special instructions..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Modal Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 sm:mb-0">
              <span className="mr-1">ℹ️</span>
              We&apos;ll reply by email or phone within business hours.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-black font-semibold px-6 py-2 rounded-md transition-all duration-300"
              >
                ✈️ Send Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-cleaning-pattern">
        {/* Page Header */}
        <section className="page-header py-20 mt-20 bg-cleaning-pattern">
          <div className="container">
            <div className="text-center mb-12 relative z-10">
              <h1 className="page-title text-4xl md:text-6xl mb-6">
                ❓ Frequently Asked Questions ❓
              </h1>
              <p className="page-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Find answers to common questions about our professional cleaning services
              </p>
              <div className="title-divider"></div>
            </div>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-8">
          <div className="container">
            <div className="quick-contact">
              <h2 className="quick-contact-title">📞 Need Immediate Help?</h2>
              <div className="quick-contact-info">
                <div className="contact-item">
                  <span className="contact-item-icon">📱</span>
                  <span>Call: 022 058 5306</span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">✉️</span>
                  <span>Email: Threeboyscleaning@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-item-icon">⏰</span>
                  <span>24/7 Emergency Response</span>
                </div>
              </div>
              <p className="text-slate-500 text-sm">
                Can&apos;t find your answer below? Our friendly team is ready to help!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-8">
          <div className="container">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <div className="faq-category-header">
                  <h2>{category.category}</h2>
                </div>
                <div>
                  {category.questions.map((faq) => (
                    <div key={faq.id} className="faq-question">
                      <button
                        className="faq-question-button"
                        onClick={() => toggleQuestion(faq.id)}
                        aria-expanded={openQuestions.includes(faq.id)}
                      >
                        <span>{faq.question}</span>
                        <span className={`faq-question-icon ${openQuestions.includes(faq.id) ? 'open' : ''}`}>
                          ➕
                        </span>
                      </button>
                      <div className={`faq-answer ${openQuestions.includes(faq.id) ? 'open' : ''}`}>
                        <div className="faq-answer-content">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 pb-16">
          <div className="container">
            <div className="cta-section gradient-blue">
              <h2 className="cta-title dark-theme">
                ✨ Ready to Experience the Difference? ✨
              </h2>
              <p className="cta-subtitle dark-theme">
                Join hundreds of satisfied customers who trust Three Boys Cleaning with their spaces.
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-btn-quote"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  💬 Get Your Free Quote
                </button>
                <Link href="/contact">
                  <button className="cta-btn-contact">
                    � Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </div>
      <Footer />
    </>
  )
}