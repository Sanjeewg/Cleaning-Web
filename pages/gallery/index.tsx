import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Gallery images data (using placeholder images)
const galleryImages = [
  {
    id: 1,
    title: 'Modern Living Room Deep Clean',
    category: 'residential',
    type: 'after',
    image: '🏠',
    description: 'Complete living room transformat                <span>📱 022 058 5306</span>on with detailed cleaning and organization.'
  },
  {
    id: 2,
    title: 'Kitchen Sanitization',
    category: 'residential',
    type: 'after',
    image: '🍳',
    description: 'Professional kitchen deep cleaning with appliance sanitization.'
  },
  {
    id: 3,
    title: 'Office Space Cleaning',
    category: 'commercial',
    type: 'after',
    image: '🏢',
    description: 'Complete office environment cleaning and disinfection.'
  },
  {
    id: 4,
    title: 'Bathroom Restoration',
    category: 'deep-cleaning',
    type: 'before-after',
    image: '🛁',
    description: 'Intensive bathroom cleaning and restoration service.'
  },
  {
    id: 5,
    title: 'Restaurant Kitchen',
    category: 'commercial',
    type: 'after',
    image: '👨‍🍳',
    description: 'Commercial kitchen deep cleaning and sanitization.'
  },
  {
    id: 6,
    title: 'Post-Construction Cleanup',
    category: 'deep-cleaning',
    type: 'after',
    image: '🏗️',
    description: 'Complete post-construction debris removal and deep cleaning.'
  },
  {
    id: 7,
    title: 'Move-Out Cleaning',
    category: 'move-in-out',
    type: 'after',
    image: '📦',
    description: 'Comprehensive move-out cleaning service for security deposit recovery.'
  },
  {
    id: 8,
    title: 'Carpet Deep Clean',
    category: 'deep-cleaning',
    type: 'before-after',
    image: '🧽',
    description: 'Professional carpet cleaning and stain removal service.'
  }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
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

  const categories = ['all', 'residential', 'commercial', 'deep-cleaning', 'move-in-out']

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

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

  const openImageModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-cleaning-pattern">
      <Navbar />
      
      {/* Hero Section */}
      <section className="page-header py-20 mt-20">
        <div className="container">
          <div className="text-center mb-12 relative z-10">
            <h1 className="page-title text-4xl md:text-6xl mb-6">
              📸 Our Work Gallery 📸
            </h1>
            <p className="page-subtitle text-lg md:text-xl max-w-2xl mx-auto mb-8">
              See the amazing transformations we&apos;ve achieved for our clients. Before and after photos showcase our commitment to excellence.
            </p>
            <div className="title-divider mb-8"></div>
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="cta-btn-primary"
            >
              💬 Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category === 'all' ? 'All' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-card"
                onClick={() => openImageModal(image)}
              >
                <div className="gallery-image-container">
                  <span className="gallery-emoji">{image.image}</span>
                  <div className="gallery-overlay">
                    <button className="gallery-view-btn">
                      👁️ View Details
                    </button>
                  </div>
                </div>
                <div className="gallery-content">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                  <div className="gallery-meta">
                    <span className="gallery-category">
                      {image.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                    <span className="gallery-type">
                      {image.type === 'before-after' ? 'Before/After' : 'After'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closeImageModal}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-content">
              <div className="gallery-modal-header">
                <h2 className="gallery-modal-title">{selectedImage.title}</h2>
                <button 
                  onClick={closeImageModal}
                  className="gallery-modal-close"
                >
                  ✕
                </button>
              </div>
              <div className="gallery-modal-image">
                <span className="gallery-modal-emoji">{selectedImage.image}</span>
              </div>
              <div className="gallery-modal-info">
                <p className="gallery-modal-description">{selectedImage.description}</p>
                <div className="gallery-modal-meta">
                  <span className="gallery-modal-category">
                    {selectedImage.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  <span className="gallery-modal-type">
                    {selectedImage.type === 'before-after' ? 'Before/After Comparison' : 'After Cleaning'}
                  </span>
                </div>
                <button 
                  onClick={() => setShowQuoteModal(true)}
                  className="gallery-modal-quote-btn"
                >
                  💬 Get Quote for This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <div className="p-6">
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    <option value="">Select a time</option>
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

                <div>
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
                    placeholder="Tell us about your specific cleaning needs..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 text-black font-semibold py-3 rounded-md transition-all duration-300"
                >
                  ✈️ Send Request
                </button>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 px-6 pb-6">
              <p className="text-sm text-gray-600 mb-4 sm:mb-0">
                <span className="mr-1">📞</span>
                Quick response guaranteed within business hours
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>� (555) 123-4567</span>
                <span>✉️ Threeboyscleaning@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}