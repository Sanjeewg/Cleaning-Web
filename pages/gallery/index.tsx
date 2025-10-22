import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

// Gallery images data (using placeholder images)
const galleryImages = [
  {
    id: 1,
    title: 'Modern Living Room Deep Clean',
    category: 'residential',
    type: 'after',
    image: '/images/modernlivingroom.jpg',
    isRealImage: true,
    description: 'Complete living room transformation with detailed cleaning and organization.'
  },
  {
    id: 2,
    title: 'Kitchen Sanitization',
    category: 'residential',
    type: 'after',
    image: '/images/kitchen.jpg',
    isRealImage: true,
    description: 'Professional kitchen deep cleaning with appliance sanitization.'
  },
  {
    id: 3,
    title: 'Office Space Cleaning',
    category: 'commercial',
    type: 'after',
    image: '/images/office clean.jpg',
    isRealImage: true,
    description: 'Complete office environment cleaning and disinfection.'
  },
  {
    id: 4,
    title: 'Bathroom Restoration',
    category: 'deep-cleaning',
    type: 'before-after',
    image: '/images/bathroom.jpg',
    isRealImage: true,
    description: 'Intensive bathroom cleaning and restoration service.'
  },
  {
    id: 5,
    title: 'Restaurant Kitchen',
    category: 'commercial',
    type: 'after',
    image: '/images/resturentcleanup.png',
    isRealImage: true,
    description: 'Commercial kitchen deep cleaning and sanitization.'
  },
  {
    id: 6,
    title: 'Post-Construction Cleanup',
    category: 'deep-cleaning',
    type: 'after',
    image: '/images/postconstractioncleanout.png',
    isRealImage: true,
    description: 'Complete post-construction debris removal and deep cleaning.'
  },
  {
    id: 7,
    title: 'Move-Out Cleaning',
    category: 'move-in-out',
    type: 'after',
    image: '/images/Moveoutcleaning.png',
    isRealImage: true,
    description: 'Comprehensive move-out cleaning service for security deposit recovery.'
  },
  {
    id: 8,
    title: 'Carpet Deep Clean',
    category: 'deep-cleaning',
    type: 'before-after',
    image: '/images/carpetdeepclean.jpg',
    isRealImage: true,
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
      <section className="page-header py-12 sm:py-16 md:py-20 mt-16 sm:mt-20">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 relative z-10">
            <h1 className="page-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-2">
              📸 Our Work Gallery 📸
            </h1>
            <p className="page-subtitle text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              See the amazing transformations we&apos;ve achieved for our clients. Before and after photos showcase our commitment to excellence.
            </p>
            <div className="title-divider mb-6 sm:mb-8"></div>
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="cta-btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 touch-manipulation active:scale-95"
            >
              💬 Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12">
        <div className="container px-3 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 touch-manipulation active:scale-95 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:shadow-xl'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
                }`}
              >
                {category === 'all' ? 'All' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-12 sm:pb-20">
        <div className="container px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]"
                onClick={() => openImageModal(image)}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  {image.isRealImage ? (
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl">{image.image}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-blue-600 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg touch-manipulation">
                      👁️ View
                    </button>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                  {/* Title */}
                  <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mb-2 sm:mb-2.5 md:mb-3 line-clamp-2 leading-snug text-center">
                    {image.title}
                  </h3>

                  {/* Description */}
                  <p className="font-normal text-xs sm:text-sm md:text-base text-gray-600 line-clamp-3 leading-relaxed text-center">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 z-50 overflow-y-auto" onClick={closeImageModal}>
          <div className="relative bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto my-auto" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={closeImageModal}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-2xl transition-all hover:scale-110 active:scale-95 touch-manipulation"
            >
              ✕
            </button>

            {/* Image Section */}
            <div className="relative w-full bg-gray-100 rounded-t-lg sm:rounded-t-xl overflow-hidden">
              {selectedImage.isRealImage ? (
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain"
                />
              ) : (
                <div className="flex items-center justify-center h-64 sm:h-80 md:h-96">
                  <span className="text-8xl sm:text-9xl">{selectedImage.image}</span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{selectedImage.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">{selectedImage.description}</p>
              
              {/* Meta Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold">
                  {selectedImage.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
                <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold">
                  {selectedImage.type === 'before-after' ? 'Before/After Comparison' : 'After Cleaning'}
                </span>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => {
                  closeImageModal()
                  setShowQuoteModal(true)
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white font-bold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 touch-manipulation"
              >
                💬 Get Quote for This Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto my-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-sky-300 to-blue-400 text-black p-4 sm:p-6 rounded-t-xl sm:rounded-t-2xl sticky top-0 z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">💬 Get Your Free Quote</h2>
                <button 
                  onClick={() => setShowQuoteModal(false)}
                  className="text-2xl sm:text-3xl hover:bg-white/20 active:bg-white/30 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors touch-manipulation"
                >
                  ×
                </button>
              </div>
              <p className="mt-2 opacity-90 text-xs sm:text-sm md:text-base">Fill out the form below and we&apos;ll get back to you with a personalized quote within 24 hours!</p>
            </div>

            {/* Modal Form */}
            <div className="p-4 sm:p-6">
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="name"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Service Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                  >
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="move-in-out">Move In/Out Cleaning</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
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
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none touch-manipulation"
                    placeholder="Tell us about your specific cleaning needs..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-300 to-blue-400 hover:from-sky-400 hover:to-blue-500 active:from-sky-500 active:to-blue-600 text-black font-semibold py-3 sm:py-3.5 rounded-md text-sm sm:text-base transition-all duration-300 active:scale-95 touch-manipulation shadow-lg"
                >
                  ✈️ Send Request
                </button>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 mt-4 sm:mt-6 pt-4 border-t border-gray-200 px-4 sm:px-6 pb-4 sm:pb-6">
              <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                <span className="mr-1">📞</span>
                Quick response guaranteed within business hours
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span>📞 022 058 5306</span>
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