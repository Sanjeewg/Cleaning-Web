import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Contact information data
const contactInfo = {
  phone: '022 058 5306',
  email: 'Threeboyscleaning@gmail.com',
  address: '50 Rogers Street, Sydenham, Christchurch 8023, New Zealand',
  hours: {
    weekdays: 'Monday - Saturday: 8:00 AM - 6:00 PM',
    weekends: 'Sunday: Closed',
    emergency: '24/7 Emergency Service Available'
  }
}

// Service areas data
const serviceAreas = [
  { name: 'Downtown District', coverage: 'Full Coverage' },
  { name: 'Suburban Heights', coverage: 'Full Coverage' },
  { name: 'Business Center', coverage: 'Commercial Focus' },
  { name: 'Residential Park', coverage: 'Full Coverage' },
  { name: 'Industrial Zone', coverage: 'Commercial Only' },
  { name: 'Metro Area', coverage: 'Full Coverage' }
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
    alternativeDate: '',
    alternativeTime: '',
    serviceDuration: '',
    frequency: '',
    urgency: '',
    timeFlexibility: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const scheduleDetails = [
      `Preferred: ${formData.preferredDate} at ${formData.preferredTime}`,
      formData.alternativeDate && formData.alternativeTime ? `Alternative: ${formData.alternativeDate} at ${formData.alternativeTime}` : '',
      `Duration: ${formData.serviceDuration}`,
      `Frequency: ${formData.frequency}`,
      `Urgency: ${formData.urgency}`
    ].filter(Boolean).join('\n');
    
    alert(`Thank you! We have received your comprehensive quote request:\n\n${scheduleDetails}\n\nWe will contact you within business hours to confirm your appointment and discuss the details.`)
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      alternativeDate: '',
      alternativeTime: '',
      serviceDuration: '',
      frequency: '',
      urgency: '',
      timeFlexibility: '',
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
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-sky-300 to-blue-400 text-black p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">💬 Get a Free Quote</h2>
              <p className="text-sm opacity-90 mt-1">Complete scheduling & service details</p>
            </div>
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
          <div className="mobile-grid-2">
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

          {/* Comprehensive Date and Time Selection */}
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 mt-4 border border-blue-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              📅 Scheduling Preferences
            </h3>
            
            {/* Primary Date and Time */}
            <div className="mobile-grid-2 mb-4">
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

            {/* Alternative Date and Time */}
            <div className="mobile-grid-2 mb-4">
              <div className="space-y-2">
                <label htmlFor="alternativeDate" className="block text-sm font-semibold text-gray-700">
                  Alternative Date (Optional)
                </label>
                <input
                  type="date"
                  id="alternativeDate"
                  name="alternativeDate"
                  value={formData.alternativeDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="alternativeTime" className="block text-sm font-semibold text-gray-700">
                  Alternative Time (Optional)
                </label>
                <select
                  id="alternativeTime"
                  name="alternativeTime"
                  value={formData.alternativeTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
                >
                  <option value="">Select alternative time</option>
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

            {/* Service Duration and Frequency */}
            <div className="mobile-grid-2 mb-4">
              <div className="space-y-2">
                <label htmlFor="serviceDuration" className="block text-sm font-semibold text-gray-700">
                  Expected Duration <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceDuration"
                  name="serviceDuration"
                  value={formData.serviceDuration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select duration</option>
                  <option value="1-2 hours">1-2 hours (Basic cleaning)</option>
                  <option value="2-3 hours">2-3 hours (Standard cleaning)</option>
                  <option value="3-4 hours">3-4 hours (Deep cleaning)</option>
                  <option value="4-6 hours">4-6 hours (Comprehensive cleaning)</option>
                  <option value="full-day">Full day (Move-out/Construction)</option>
                  <option value="not-sure">Not sure - Please advise</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="frequency" className="block text-sm font-semibold text-gray-700">
                  Service Frequency <span className="text-red-500">*</span>
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select frequency</option>
                  <option value="one-time">One-time service</option>
                  <option value="weekly">Weekly (every 7 days)</option>
                  <option value="bi-weekly">Bi-weekly (every 14 days)</option>
                  <option value="monthly">Monthly (every 30 days)</option>
                  <option value="quarterly">Quarterly (every 3 months)</option>
                  <option value="as-needed">As needed basis</option>
                </select>
              </div>
            </div>

            {/* Urgency and Flexibility */}
            <div className="mobile-grid-2">
              <div className="space-y-2">
                <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700">
                  Urgency Level <span className="text-red-500">*</span>
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select urgency</option>
                  <option value="flexible">Flexible - Any available time</option>
                  <option value="within-week">Within this week</option>
                  <option value="within-3-days">Within 3 days</option>
                  <option value="next-day">Next day service</option>
                  <option value="same-day">Same day (Emergency)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="timeFlexibility" className="block text-sm font-semibold text-gray-700">
                  Time Flexibility <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeFlexibility"
                  name="timeFlexibility"
                  value={formData.timeFlexibility}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-sky-300 focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select flexibility</option>
                  <option value="exact-time">Must be exact time requested</option>
                  <option value="1-hour-window">±1 hour from requested time</option>
                  <option value="morning-afternoon">Morning or afternoon flexible</option>
                  <option value="any-business-hours">Any time during business hours</option>
                  <option value="weekends-ok">Weekends are also acceptable</option>
                </select>
              </div>
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

export default function ContactPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: '',
    preferredTime: '',
    address: ''
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you, ${contactForm.name}! We've received your message and will respond within 24 hours.`)
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceType: '',
      preferredTime: '',
      address: ''
    })
  }



  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <style jsx global>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        @media (min-width: 640px) {
          .container {
            padding: 0 1.5rem;
          }
        }
        
        /* Contact Cards */
        .contact-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border: 1px solid rgba(135, 206, 235, 0.2);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(135, 206, 235, 0.1);
          height: 100%;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(135, 206, 235, 0.2);
          border-color: rgba(135, 206, 235, 0.3);
        }
        
        .contact-icon {
          background: linear-gradient(135deg, #87CEEB, #4FC3F7);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          color: white;
        }
        
        .contact-title {
          color: #1e293b;
          font-size: 1.2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .contact-info {
          color: #64748b;
          text-align: center;
          line-height: 1.6;
        }
        
        /* Contact Form */
        .contact-form {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border: 1px solid rgba(135, 206, 235, 0.2);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 8px 25px rgba(135, 206, 235, 0.15);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: #ffffff;
          outline: none;
        }
        
        .form-input:focus {
          border-color: #87CEEB;
          box-shadow: 0 0 0 3px rgba(135, 206, 235, 0.1);
        }
        
        .form-textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: #ffffff;
          outline: none;
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }
        
        .form-textarea:focus {
          border-color: #87CEEB;
          box-shadow: 0 0 0 3px rgba(135, 206, 235, 0.1);
        }
        
        .form-select {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: #ffffff;
          outline: none;
          cursor: pointer;
        }
        
        .form-select:focus {
          border-color: #87CEEB;
          box-shadow: 0 0 0 3px rgba(135, 206, 235, 0.1);
        }
        
        /* Service Areas */
        .service-area-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border: 1px solid rgba(135, 206, 235, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(135, 206, 235, 0.1);
        }
        
        .service-area-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(135, 206, 235, 0.2);
        }
        
        .service-area-name {
          color: #1e293b;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .service-area-coverage {
          color: #4FC3F7;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        /* Page Header */
        .page-header {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%);
          position: relative;
          overflow: hidden;
        }
        
        .page-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="10" cy="60" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="40" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.5;
        }
        
        .page-title {
          background: linear-gradient(135deg, #1e293b, #0369a1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .page-subtitle {
          color: #64748b;
          text-align: center;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .title-divider {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #87CEEB, #4FC3F7, #00BFFF);
          margin: 0 auto;
          border-radius: 2px;
          position: relative;
        }
        
        .title-divider::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: #4FC3F7;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(79, 195, 247, 0.2);
        }
        
        /* Call to Action */
        .cta-section {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(135, 206, 235, 0.1) 0%, transparent 50%);
          animation: simpleRoll 20s linear infinite;
        }
        
        @keyframes simpleRoll {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .cta-title {
          color: #1e293b;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        
        .cta-subtitle {
          color: #64748b;
          font-size: 1.25rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }
        
        .cta-btn-primary {
          background: linear-gradient(135deg, #87CEEB, #4FC3F7);
          color: #1e293b;
          border: none;
          border-radius: 50px;
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(135, 206, 235, 0.4);
        }
        
        .cta-btn-primary:hover {
          background: linear-gradient(135deg, #4FC3F7, #00BFFF);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(135, 206, 235, 0.5);
          color: white;
        }
        
        .cta-btn-secondary {
          background: transparent;
          color: #0369a1;
          border: 2px solid #87CEEB;
          border-radius: 50px;
          padding: 1rem 2rem;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-btn-secondary:hover {
          background: #87CEEB;
          color: #1e293b;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(135, 206, 235, 0.3);
        }
        
        /* Emergency Banner */
        .emergency-banner {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }
        
        .emergency-banner h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .emergency-banner p {
          margin: 0;
          font-size: 1rem;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-form {
            padding: 2rem;
          }
          
          .cta-section {
            padding: 2rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
          
          .cta-btn-primary,
          .cta-btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <Navbar />
      <div className="min-h-screen" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {/* Page Header */}
        <section className="page-header" style={{ 
          padding: '5rem 0', 
          marginTop: '5rem',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(248, 250, 252, 0.85)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
              <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                📞 Contact Us 📞
              </h1>
              <p className="page-subtitle" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                Ready to transform your space? Get in touch with Three Boys Cleaning Service today!
              </p>
              <div className="title-divider"></div>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <div className="emergency-banner">
              <h3>🚨 24/7 Emergency Cleaning Service 🚨</h3>
              <p>
                Need immediate cleaning assistance? Call us now at <strong>{contactInfo.phone}</strong> for emergency service!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <div className="stats-grid mb-16">
              {/* Phone Card */}
              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h3 className="contact-title">Call Us</h3>
                <div className="contact-info">
                  <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#4FC3F7', marginBottom: '0.5rem' }}>
                    {contactInfo.phone}
                  </p>
                  <p>Available for calls and quotes</p>
                  <p>Quick response guaranteed</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3 className="contact-title">Email Us</h3>
                <div className="contact-info">
                  <p style={{ fontSize: '1rem', fontWeight: '600', color: '#4FC3F7', marginBottom: '0.5rem' }}>
                    {contactInfo.email}
                  </p>
                  <p>Send detailed requests</p>
                  <p>We respond within 24 hours</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3 className="contact-title">Visit Us</h3>
                <div className="contact-info">
                  <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    {contactInfo.address}
                  </p>
                  <p>Main office location</p>
                  <p>By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <div style={{ 
              background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
              border: '1px solid rgba(135, 206, 235, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(135, 206, 235, 0.1)',
              marginBottom: '4rem'
            }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '1.5rem' }}>
                ⏰ Business Hours
              </h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                <div>
                  <h4 style={{ color: '#4FC3F7', fontWeight: '600', marginBottom: '0.5rem' }}>Weekdays</h4>
                  <p style={{ color: '#64748b' }}>{contactInfo.hours.weekdays}</p>
                </div>
                <div>
                  <h4 style={{ color: '#4FC3F7', fontWeight: '600', marginBottom: '0.5rem' }}>Weekends</h4>
                  <p style={{ color: '#64748b' }}>{contactInfo.hours.weekends}</p>
                </div>
                <div>
                  <h4 style={{ color: '#ef4444', fontWeight: '600', marginBottom: '0.5rem' }}>Emergency</h4>
                  <p style={{ color: '#64748b' }}>{contactInfo.hours.emergency}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {/* Contact Form */}
              <div className="contact-form" style={{ maxWidth: '800px', width: '100%' }}>
                <h2 style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: '800', 
                  color: '#1e293b', 
                  marginBottom: '1rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #1e293b, #0369a1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  📝 Send Us a Message
                </h2>
                <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '2rem' }}>
                  Fill out the form below and we&apos;ll get back to you as soon as possible!
                </p>

                <form onSubmit={handleContactSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">
                        👤 Full Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        ✉️ Email Address <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className="form-input"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">
                        📱 Phone Number <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactChange}
                        className="form-input"
                        placeholder="022 058 5306"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        🧹 Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={contactForm.serviceType}
                        onChange={handleContactChange}
                        className="form-select"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="deep-cleaning">Deep Cleaning</option>
                        <option value="move-in-out">Move In/Out Cleaning</option>
                        <option value="post-construction">Post-Construction Cleanup</option>
                        <option value="recurring">Recurring Service</option>
                        <option value="emergency">Emergency Cleaning</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">
                        📋 Subject <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        className="form-input"
                        placeholder="Brief subject line"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        ⏰ Preferred Contact Time
                      </label>
                      <select
                        name="preferredTime"
                        value={contactForm.preferredTime}
                        onChange={handleContactChange}
                        className="form-select"
                      >
                        <option value="">Any time</option>
                        <option value="morning">Morning (8AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                        <option value="weekend">Weekend</option>
                      </select>
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="form-group">
                    <label className="form-label">
                      📍 Your Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={contactForm.address}
                      onChange={handleContactChange}
                      className="form-input"
                      placeholder="Enter your full address"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      💬 Message <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      className="form-textarea"
                      placeholder="Tell us about your cleaning needs, space size, special requirements, preferred date/time..."
                      required
                    />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="submit"
                      style={{
                        background: 'linear-gradient(135deg, #87CEEB, #4FC3F7)',
                        color: '#1e293b',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 25px rgba(135, 206, 235, 0.4)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #4FC3F7, #00BFFF)'
                        e.currentTarget.style.color = 'white'
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(135, 206, 235, 0.5)'
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #87CEEB, #4FC3F7)'
                        e.currentTarget.style.color = '#1e293b'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.4)'
                      }}
                    >
                      ✈️ Send Message
                    </button>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </section>

        {/* Company Location Map */}
        <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: '800', 
                color: '#1e293b', 
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #1e293b, #0369a1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🏢 Our Location
              </h2>
              <div className="title-divider" style={{ marginBottom: '1.5rem' }}></div>
              <p style={{ 
                color: '#64748b', 
                fontSize: '1.1rem', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Visit us at our headquarters or simply use the map to get directions to our office
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Company Address Info */}
              <div style={{
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(135, 206, 235, 0.15)',
                border: '1px solid rgba(135, 206, 235, 0.2)'
              }}>
                <h3 style={{ 
                  color: '#1e293b', 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  📍 Three Boys Cleaning Service
                </h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(79, 195, 247, 0.1))',
                    borderRadius: '12px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>🏠</span>
                    <div>
                      <p style={{ margin: '0', fontWeight: '600', color: '#1e293b' }}>
                        50 Rogers Street
                      </p>
                      <p style={{ margin: '0', color: '#64748b' }}>
                        Sydenham, Christchurch 8023, New Zealand
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(79, 195, 247, 0.1))',
                    borderRadius: '12px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📞</span>
                    <div>
                      <p style={{ margin: '0', fontWeight: '600', color: '#1e293b' }}>
                        022 058 5306
                      </p>
                      <p style={{ margin: '0', color: '#64748b', fontSize: '0.9rem' }}>
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(79, 195, 247, 0.1))',
                    borderRadius: '12px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>🕒</span>
                    <div>
                      <p style={{ margin: '0', fontWeight: '600', color: '#1e293b' }}>
                        Mon - Fri: 8:00 AM - 6:00 PM
                      </p>
                      <p style={{ margin: '0', color: '#64748b', fontSize: '0.9rem' }}>
                        Sat: 9:00 AM - 4:00 PM | Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.open('https://maps.google.com/?q=50+Rogers+Street+Sydenham+Christchurch+8023+New+Zealand', '_blank')}
                  style={{
                    background: 'linear-gradient(135deg, #87CEEB, #4FC3F7)',
                    color: '#1e293b',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.3)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  🗺️ Get Directions
                </button>
              </div>

              {/* Interactive Map */}
              <div style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(135, 206, 235, 0.15)',
                border: '1px solid rgba(135, 206, 235, 0.2)',
                height: '400px',
                position: 'relative'
              }}>
                {/* Google Maps Embed - Works without API key */}
                {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY' ? (
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=50+Rogers+Street+Sydenham+Christchurch+8023+New+Zealand&zoom=15&maptype=roadmap`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Three Boys Cleaning Limited - 50 Rogers Street, Sydenham, Christchurch"
                  >
                  </iframe>
                ) : (
                  /* Fallback: Simple Google Maps link - No API key required */
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</div>
                    <h4 style={{ color: '#1e293b', fontWeight: '700', marginBottom: '1rem' }}>
                      Three Boys Cleaning Limited
                    </h4>
                    <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                      50 Rogers Street<br />
                      Sydenham, Christchurch 8023<br />
                      New Zealand
                    </p>
                    <a
                      href="https://maps.google.com/maps?q=50+Rogers+Street,Sydenham,Christchurch+8023,New+Zealand"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'linear-gradient(135deg, #87CEEB, #4FC3F7)',
                        color: '#1e293b',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.75rem 1.5rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      📍 View on Google Maps
                    </a>
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: '#64748b', 
                      marginTop: '1rem',
                      fontStyle: 'italic'
                    }}>
                      Get directions and explore our location
                    </p>
                  </div>
                )}
                <div style={{ display: 'none' }}>
                  {/* Fallback if Google Maps doesn't load */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🗺️</div>
                    <h4 style={{ color: '#1e293b', fontWeight: '700', marginBottom: '0.5rem' }}>
                      Three Boys Cleaning Limited
                    </h4>
                    <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                      50 Rogers Street<br />
                      Sydenham, Christchurch 8023<br />
                      New Zealand
                    </p>
                    <button
                      onClick={() => window.open('https://maps.google.com/?q=50+Rogers+Street+Sydenham+Christchurch+8023+New+Zealand', '_blank')}
                      style={{
                        background: 'linear-gradient(135deg, #87CEEB, #4FC3F7)',
                        color: '#1e293b',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.5rem 1rem',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📍 Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Location Info */}
            <div style={{ 
              marginTop: '3rem',
              background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1), rgba(79, 195, 247, 0.1))',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#1e293b', fontWeight: '700', marginBottom: '1rem', fontSize: '1.3rem' }}>
                🚗 Easy to Find & Convenient Parking
              </h4>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🅿️</div>
                  <h5 style={{ color: '#1e293b', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Free Parking
                  </h5>
                  <p style={{ color: '#64748b', margin: '0', fontSize: '0.9rem' }}>
                    Plenty of free parking spaces available for visitors
                  </p>
                </div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>♿</div>
                  <h5 style={{ color: '#1e293b', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Accessible
                  </h5>
                  <p style={{ color: '#64748b', margin: '0', fontSize: '0.9rem' }}>
                    Wheelchair accessible entrance and facilities
                  </p>
                </div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚌</div>
                  <h5 style={{ color: '#1e293b', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Public Transit
                  </h5>
                  <p style={{ color: '#64748b', margin: '0', fontSize: '0.9rem' }}>
                    Bus stop #15 located just 2 blocks away
                  </p>
                </div>
              </div>
            </div>
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
                <Link href="tel:022058+5306">
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