import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Service data structure
const services = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
    icon: '🏠',
    features: [
      'Deep cleaning',
      'Regular maintenance',
      'Kitchen & bathroom sanitization',
      'Floor cleaning & mopping',
      'Dusting & vacuuming'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'Professional office and commercial space cleaning for a productive work environment.',
    icon: '🏢',
    features: [
      'Office spaces',
      'Retail stores',
      'Medical facilities',
      'Restaurant cleaning',
      'Industrial spaces'
    ]
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Intensive cleaning service that reaches every corner and surface of your space.',
    icon: '🧽',
    features: [
      'Detailed scrubbing',
      'Appliance cleaning',
      'Window cleaning',
      'Baseboards & trim',
      'Light fixture cleaning'
    ]
  },
  {
    id: 'move-in-out',
    title: 'Move In/Out Cleaning',
    description: 'Comprehensive cleaning for moving situations, ensuring spaces are spotless.',
    icon: '📦',
    features: [
      'Empty home cleaning',
      'Cabinet interiors',
      'Light fixtures',
      'Switch plates & outlets',
      'Closet cleaning'
    ]
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleanup',
    description: 'Specialized cleaning after construction or renovation projects.',
    icon: '🏗️',
    features: [
      'Dust removal',
      'Paint splatter cleanup',
      'Debris removal',
      'Final polish',
      'Safety cleanup'
    ]
  },
  {
    id: 'recurring',
    title: 'Recurring Service',
    description: 'Regular cleaning schedules to keep your space consistently clean.',
    icon: '📅',
    features: [
      'Weekly cleaning',
      'Bi-weekly service',
      'Monthly maintenance',
      'Flexible scheduling',
      'Discounted rates'
    ]
  }
]

const whyChooseUs = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Full protection and peace of mind'
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly',
    description: 'Safe products for family & pets'
  },
  {
    icon: '⏰',
    title: 'Reliable Service',
    description: 'On-time, every time'
  },
  {
    icon: '⭐',
    title: '5-Star Rated',
    description: 'Exceptional customer satisfaction'
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
    <div className="fixed inset-0 bg-blue-100/30 flex items-center justify-center z-40 px-4 pt-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

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
        
        /* Beautiful Service Cards */
        .service-card-custom {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border: 1px solid rgba(135, 206, 235, 0.2);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-align: center;
          height: 100%;
        }
        
        .service-card-custom::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #87CEEB, #4FC3F7, #00BFFF);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .service-card-custom:hover::before {
          transform: scaleX(1);
        }
        
        .service-card-custom:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(135, 206, 235, 0.3),
            0 0 0 1px rgba(135, 206, 235, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          border-color: rgba(135, 206, 235, 0.4);
        }
        
        /* Service Icons */
        .service-icon {
          background: linear-gradient(135deg, #87CEEB, #4FC3F7);
          border-radius: 20px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(135, 206, 235, 0.3);
        }
        
        .service-card-custom:hover .service-icon {
          transform: rotate(5deg) scale(1.1);
          box-shadow: 0 12px 35px rgba(135, 206, 235, 0.4);
        }
        
        /* Service Titles */
        .service-title {
          color: #1e293b;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
          text-align: center;
          line-height: 1.3;
        }
        
        .service-card-custom:hover .service-title {
          color: #0369a1;
        }
        
        /* Service Description */
        .service-description {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          text-align: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        
        /* Service Features */
        .service-features {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .service-feature {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0.5rem 0;
          color: #475569;
          transition: color 0.3s ease;
          text-align: left;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .service-feature::before {
          content: '✓';
          color: #10b981;
          font-weight: bold;
          margin-right: 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }
        
        /* Beautiful Buttons */
        .service-btn {
          background: linear-gradient(135deg, #87CEEB, #4FC3F7);
          border: none;
          border-radius: 12px;
          color: #1e293b;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          width: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(135, 206, 235, 0.3);
          cursor: pointer;
          margin-top: auto;
          font-size: 1rem;
          text-align: center;
          letter-spacing: 0.5px;
        }
        
        .service-btn:hover {
          background: linear-gradient(135deg, #4FC3F7, #00BFFF);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(135, 206, 235, 0.4);
          color: white;
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
        
        /* Why Choose Us Section */
        .why-choose-card {
          background: linear-gradient(145deg, #ffffff, #f8fafc);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(135, 206, 235, 0.1);
        }
        
        .feature-icon {
          background: linear-gradient(135deg, #87CEEB, #4FC3F7);
          border-radius: 16px;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          box-shadow: 0 8px 20px rgba(135, 206, 235, 0.3);
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
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
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
        
        /* Services Responsive Grid */
        .services-responsive-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .services-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 1rem !important;
          }
          
          .service-card-custom {
            padding: 1.5rem;
            margin: 0 auto;
            max-width: 400px;
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

        @media (max-width: 480px) {
          .services-responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 0 0.5rem !important;
          }
          
          .service-card-custom {
            padding: 1.25rem !important;
            max-width: 100% !important;
          }
          
          .service-icon {
            width: 60px !important;
            height: 60px !important;
            font-size: 2rem !important;
          }
          
          .service-title {
            font-size: 1.25rem !important;
          }
          
          .service-description {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
      <Navbar />
      <div className="min-h-screen" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)), url('https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      {/* Page Header */}
      <section className="page-header" style={{ 
        padding: '5rem 0', 
        marginTop: '5rem',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(248, 250, 252, 0.85)), url('https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
            <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              ✨ Our Professional Services ✨
            </h1>
            <p className="page-subtitle" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Comprehensive cleaning solutions tailored to your specific needs with premium quality and exceptional service
            </p>
            <div className="title-divider"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="services-responsive-grid">
            {services.slice(0, 2).map((service) => (
              <div key={service.id} className="service-card-custom">
                {/* Service Icon */}
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>

                {/* Service Title */}
                <h3 className="service-title">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="service-description">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Get Quote Button */}
                <button
                  className="service-btn"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="why-choose-card">
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', color: '#1e293b', marginBottom: '3rem' }}>
                💎 Why Choose Three Boys Cleaning Service? 💎
              </h2>
              <div className="mobile-grid-2">
                {whyChooseUs.map((item, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div className="feature-icon">
                      <span>{item.icon}</span>
                    </div>
                    <h4 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
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
                  📞 Contact Us
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