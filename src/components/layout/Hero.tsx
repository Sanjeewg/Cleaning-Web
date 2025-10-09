'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'

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
    // Handle form submission here
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
    <div className="modal-overlay fixed inset-0 bg-blue-100/30 flex items-center justify-center z-50 px-4">
      <div className="modal-content bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="modal-header bg-gradient-to-r from-sky-300 to-blue-400 text-black p-6 rounded-t-2xl">
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
              <i className="fas fa-info-circle mr-1"></i>
              We&apos;ll reply by email or phone within business hours.
            </p>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-black font-semibold px-6"
              >
                ✈️ Send Request
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export function Hero() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="hero min-h-screen flex items-center justify-center text-black text-center overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(135, 206, 235, 0.3), rgba(79, 195, 247, 0.3)), url('/images/1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className={`hero-title text-4xl md:text-5xl lg:text-6xl font-black mb-6 transform transition-all duration-700 ${
              isVisible ? 'animate-scale-in' : 'scale-75 opacity-0'
            }`} style={{ fontWeight: '900', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)' }}>
              Professional Cleaning Services You Can Trust
            </h1>
            <p className={`hero-subtitle text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto transform transition-all duration-700 ${
              isVisible ? 'animate-slide-up' : 'translate-y-10 opacity-0'
            }`} style={{ fontWeight: '700', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)', animationDelay: '0.3s' }}>
              We make homes and offices shine with eco-friendly cleaning solutions, reliable staff, and a smile.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 ${
              isVisible ? 'animate-bounce-in' : 'translate-y-10 opacity-0'
            }`} style={{ animationDelay: '0.6s' }}>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hero-btn border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-black rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-110 hover:rotate-1"
                  style={{ fontWeight: '900', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                >
                  🔍 Explore Services
                </Button>
              </Link>
              <Button
                size="lg"
                onClick={() => setIsQuoteModalOpen(true)}
                className="hero-btn bg-gradient-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-black px-8 py-4 text-lg font-black rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-110 hover:rotate-1 animate-pulse-glow"
                style={{ fontWeight: '900', backgroundColor: 'rgba(135, 206, 235, 0.9)' }}
              >
                ➡️ Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  )
}