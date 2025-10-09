import { useState, useEffect, useRef } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Animated Counter Component
interface AnimatedCounterProps {
  end: number
  suffix?: string
  duration?: number
  className?: string
}

function AnimatedCounter({ end, suffix = '', duration = 2000, className = 'stat-number' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <span ref={counterRef} className={className}>
      {count}{suffix}
    </span>
  )
}

// Company values data
const companyValues = [
  {
    icon: '🌟',
    title: 'Excellence',
    description: 'We strive for perfection in every cleaning job, ensuring your space sparkles and shines.'
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'Building lasting relationships through reliability, honesty, and transparent communication.'
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'Using eco-friendly products and methods to protect your family and our environment.'
  },
  {
    icon: '💪',
    title: 'Dedication',
    description: 'Committed to exceeding expectations with professional service and attention to detail.'
  }
]

// Team member data
const teamMembers = [
  {
    name: 'Michael Johnson',
    role: 'Lead Cleaning Specialist',
    experience: '8+ years',
    description: 'Expert in deep cleaning and restoration services.'
  },
  {
    name: 'Sarah Wilson',
    role: 'Commercial Cleaning Manager',
    experience: '6+ years',
    description: 'Specializes in office and retail space cleaning.'
  },
  {
    name: 'David Martinez',
    role: 'Residential Services Coordinator',
    experience: '5+ years',
    description: 'Focused on home cleaning and customer satisfaction.'
  },
  {
    name: 'Emma Thompson',
    role: 'Quality Assurance Supervisor',
    experience: '7+ years',
    description: 'Ensures every job meets our high standards.'
  }
]

// Company statistics
const companyStats = [
  {
    number: 500,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Satisfied clients across the city'
  },
  {
    number: 3000,
    suffix: '+',
    label: 'Cleaning Jobs',
    description: 'Successfully completed projects'
  },
  {
    number: 5,
    suffix: '',
    label: 'Years Experience',
    description: 'Serving the community'
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Emergency Service',
    description: 'Available when you need us'
  }
]

export default function About() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'residential',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    // Show success message (you can implement a proper notification system)
    alert('Thank you for your quote request! We\'ll get back to you soon.')
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: 'residential',
      preferredDate: '',
      preferredTime: '',
      message: ''
    })
    setShowQuoteModal(false)
  }

  return (
    <>
      <div className="min-h-screen bg-cleaning-pattern">
        <Navbar />
        
        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="container">
            <div className="about-hero-content">
              <div className="about-hero-badge">
                <span className="about-hero-emoji">🏢</span>
              </div>
              <h1 className="about-hero-title">
                About Three Boys Cleaning Service
              </h1>
              <p className="about-hero-subtitle">
                Professional cleaning services with a personal touch. Your satisfaction is our commitment to excellence and quality.
              </p>
              <div className="about-hero-divider"></div>
              <div className="about-hero-stats">
                <div className="about-hero-stat">
                  <AnimatedCounter 
                    end={500} 
                    suffix="+" 
                    duration={2000}
                    className="about-hero-stat-number"
                  />
                  <span className="about-hero-stat-label">Happy Clients</span>
                </div>
                <div className="about-hero-stat">
                  <AnimatedCounter 
                    end={5} 
                    suffix="+" 
                    duration={1800}
                    className="about-hero-stat-number"
                  />
                  <span className="about-hero-stat-label">Years Experience</span>
                </div>
                <div className="about-hero-stat">
                  <AnimatedCounter 
                    end={24} 
                    suffix="/7" 
                    duration={2200}
                    className="about-hero-stat-number"
                  />
                  <span className="about-hero-stat-label">Service Available</span>
                </div>
              </div>
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="about-hero-cta-btn"
              >
                💬 Get Your Free Quote Today
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story-section">
          <div className="container">
            <div className="about-story-container">
              <div className="about-story-header">
                <span className="about-story-icon">📖</span>
                <h2 className="about-story-title">Our Story</h2>
                <p className="about-story-intro">
                  Discover the journey that made us the trusted cleaning service we are today
                </p>
              </div>
              
              <div className="about-story-content">
                <div className="about-story-text">
                  <div className="about-story-paragraph">
                    <h3 className="about-story-heading">🌱 The Beginning</h3>
                    <p className="about-story-description">
                      Three Boys Cleaning Service began with a simple mission: to provide exceptional cleaning 
                      services that exceed our customers&apos; expectations. Founded by three dedicated professionals 
                      who believed that everyone deserves a clean, healthy environment.
                    </p>
                  </div>
                  
                  <div className="about-story-paragraph">
                    <h3 className="about-story-heading">🚀 Our Growth</h3>
                    <p className="about-story-description">
                      What started as a small local business has grown into a trusted name in the cleaning industry, 
                      expanding our services and expertise while maintaining our personal touch and commitment to quality.
                    </p>
                  </div>
                  
                  <div className="about-story-paragraph">
                    <h3 className="about-story-heading">💚 Our Values</h3>
                    <p className="about-story-description">
                      Today, we&apos;re proud to be known for our reliability, attention to detail, and commitment to 
                      using eco-friendly cleaning products that are safe for your family and pets.
                    </p>
                  </div>
                </div>
                
                <div className="about-mission-card">
                  <div className="about-mission-icon">🏠</div>
                  <h3 className="about-mission-title">Our Mission</h3>
                  <p className="about-mission-text">
                    To provide exceptional cleaning services that create healthy, comfortable environments 
                    where families and businesses can thrive, grow, and succeed.
                  </p>
                  <div className="about-mission-features">
                    <div className="about-mission-feature">
                      <span className="about-mission-feature-icon">✨</span>
                      <span className="about-mission-feature-text">Excellence in Every Detail</span>
                    </div>
                    <div className="about-mission-feature">
                      <span className="about-mission-feature-icon">🌿</span>
                      <span className="about-mission-feature-text">Eco-Friendly Solutions</span>
                    </div>
                    <div className="about-mission-feature">
                      <span className="about-mission-feature-icon">🤝</span>
                      <span className="about-mission-feature-text">Trust & Reliability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-12 bg-blue-gradient">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">🌟 Our Core Values</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                These values guide everything we do and shape how we serve our community.
              </p>
            </div>
            <div className="mobile-grid-2">
              {companyValues.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12">
          <div className="container">
            <div className="section-card">
              <h2 className="section-title">👨‍💼 Meet Our Professional Team</h2>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-card">
                    <div className="team-avatar">
                      👨‍💼
                    </div>
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-experience">{member.experience}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="py-12 bg-blue-gradient">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title">📊 Our Achievements</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Numbers that reflect our dedication to excellence and customer satisfaction.
              </p>
            </div>
            <div className="stats-grid">
              {companyStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2000 + index * 200} 
                  />
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container">
            <div className="cta-section">
              <h2 className="cta-title dark-theme">
                ✨ Ready for a Spotless Space? ✨
              </h2>
              <p className="cta-subtitle dark-theme">
                Join hundreds of satisfied customers who trust us with their cleaning needs.
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-btn-primary"
                  onClick={() => setShowQuoteModal(true)}
                >
                  💬 Get Your Free Quote
                </button>
                <a href="tel:022058+5306">
                  <button className="cta-btn-secondary">
                    📞 Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Modal */}
        {showQuoteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-sky-300 to-blue-400 text-black p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">💬 Get Your Free Quote</h2>
                  <button 
                    onClick={() => setShowQuoteModal(false)}
                    className="text-2xl hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                  >
                    ×
                  </button>
                </div>
                <p className="mt-2 opacity-90">Fill out the form below and we&apos;ll get back to you with a personalized quote within 24 hours!</p>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="move-in-out">Move In/Out Cleaning</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Time</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your specific cleaning needs, square footage, special requirements, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-black font-semibold py-3 rounded-md transition-all duration-300"
                >
                  ✈️ Send My Quote Request
                </button>
              </form>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 px-6 pb-6">
                <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                  <span className="mr-1">📞</span>
                  Quick response guaranteed within business hours
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📱 022 058 5306</span>
                  <span>✉️ Threeboyscleaning@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  )
}