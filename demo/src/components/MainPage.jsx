import { useState, useEffect } from 'react';
import image1 from '../assets/MainPage.jpg'
import image2 from '../assets/SecondPage.jpg'
import { 
  ChevronRight, 
  MapPin, 
  CreditCard, 
  DollarSign, 
  Download, 
  X, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send 
} from 'lucide-react';

export default function PropertyShowcaseFull() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [focused, setFocused] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  
  useEffect(() => {
    // Trigger main section animations after component mounts
    setIsVisible(true);
    
    // Trigger about section animations after a delay
    const timer = setTimeout(() => {
      setIsAboutVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/923405245826`, '_blank');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormErrors({}); 
    setSubmitted(false); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Please fill out this field.';
    if (!formData.email) errors.email = 'Please fill out this field.';
    if (!formData.phone) errors.phone = 'Please fill out this field.';
    if (!formData.country) errors.country = 'Please fill out this field.';
    if (!formData.message) errors.message = 'Please fill out this field.';
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    // Mock API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
      
      // Close popup after delay
      setTimeout(() => {
        setShowPopup(false);
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="font-sans">
      {/* Header space - to be designed later */}
      <div className="h-16 bg-transparent w-full"></div>
      
      {/* Main Showcase Section */}
      <section className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        {/* Property image section - shows first on mobile */}
        <div className="w-full lg:w-1/2 relative overflow-hidden order-1 lg:order-2">
          <div className={`h-full transition-all duration-1500 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
            <div className="bg-blue-500 h-full w-full min-h-64 lg:min-h-full">
              {/* Using placeholder image due to import restrictions */}
              <div className="bg-blue-500 h-full w-full"><img src={image1} alt="" /></div>
              <div className="absolute bottom-0 left-0 w-full">
                  <svg 
                    className={`w-full transition-all duration-2000 ease-in-out ${isAboutVisible ? 'translate-y-0 opacity-90' : 'translate-y-full opacity-0'}`} 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                      fill="#0066cc" 
                      fillOpacity="0.3"
                    />
                    <path 
                      d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                      fill="#0066cc" 
                      fillOpacity="0.4"
                      className="translate-y-2"
                    />
                  </svg>
              </div>
            </div> 
          </div>
          
          {/* Moon overlay in top-right */}
          <div 
            className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/70 blur-sm transition-all duration-1500 ${isVisible ? 'opacity-80' : 'opacity-0'}`}
          />
        </div>
        
        {/* Property info section - shows second on mobile */}
        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                LUXURY WATERFRONT STUDIO, 1, 2, AND 3-BEDROOM APARTMENTS IN BUSINESS BAY
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="block transition-all duration-700 delay-300 transform origin-left hover:scale-105">
                Skyrise at
              </span>
              <span className="block transition-all duration-700 delay-500 transform origin-left hover:scale-105">
                Business Bay, Dubai
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed transition-all duration-1000 delay-700 transform origin-left">
              A stunning waterfront development in Business Bay featuring three luxury towers. 
              The complex offers studios and 1 to 3-bedroom apartments, each with breathtaking 
              views of the Dubai Water Canal, Downtown Dubai, and the Burj Khalifa.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className={`flex items-center transition-all duration-700 delay-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="bg-blue-50 p-4 rounded-full mr-4">
                  <DollarSign size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Starting Price</p>
                  <p className="font-semibold text-gray-800">Upon Request</p>
                </div>
              </div>
              
              <div className={`flex items-center transition-all duration-700 delay-1200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="bg-blue-50 p-4 rounded-full mr-4">
                  <CreditCard size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Payment Plan</p>
                  <p className="font-semibold text-gray-800">70/30</p>
                </div>
              </div>
              
              <div className={`flex items-center transition-all duration-700 delay-1400 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="bg-blue-50 p-4 rounded-full mr-4">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-semibold text-gray-800">Business Bay</p>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-1600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md group transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg"
                onClick={handleRegisterClick}
              >
                REGISTER YOUR INTEREST
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Directly after main section with no space */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Image side - Left on desktop, top on mobile */}
            <div className="w-full lg:w-1/2 relative overflow-hidden order-1">
              <div className={`transition-all duration-1000 transform ${isAboutVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                {/* Image placeholder */}
                <div className="bg-blue-100 rounded-lg h-64 md:h-96 lg:h-full min-h-64 w-full flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for second image */}
                  <div className="bg-blue-200 h-full w-full">
                    <img src={image2} alt="" />
                    </div>
                  
                  {/* Animated wave effect at bottom */}
                  <div className="absolute bottom-0 left-0 w-full">
                    <svg 
                      className={`w-full transition-all duration-2000 ease-in-out ${isAboutVisible ? 'translate-y-0 opacity-90' : 'translate-y-full opacity-0'}`} 
                      viewBox="0 0 1200 120" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                        fill="#0066cc" 
                        fillOpacity="0.3"
                      />
                      <path 
                        d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,74.7C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                        fill="#0066cc" 
                        fillOpacity="0.4"
                        className="translate-y-2"
                      />
                    </svg>
                  </div>
                  
                  {/* Animated dots overlay */}
                  {isAboutVisible && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={`about-dot-${i}`}
                          className="absolute w-6 h-6 rounded-full bg-blue-300/30 animate-ping"
                          style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                            animationDelay: `${Math.random() * 2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Text side - Right on desktop, bottom on mobile */}
            <div className="w-full lg:w-1/2 order-2 flex flex-col justify-center">
              <div className={`transition-all duration-700 transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Binghatti Skyrise at Business Bay
                </h2>
                
                <div className={`space-y-4 transition-all duration-1000 delay-200 transform ${isAboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <p className="text-gray-700">
                    Binghatti Skyrise is an impressive residential development nestled in the
                    dynamic Business Bay district of Dubai. Comprising three elegant towers
                    connected by a shared podium, the project offers a unique blend of
                    luxury, comfort, and convenience. Its prime location, just minutes from
                    the Burj Khalifa, makes it an exclusive choice for those seeking a
                    prestigious address in Dubai.
                  </p>
                  
                  <p className="text-gray-700">
                    The development features sleek, modern architecture and panoramic
                    waterfront views, offering a range of apartments from studios to 3-
                    bedroom units. With a total of 3,302 residential units spread across 48
                    floors, Binghatti Skyrise is designed to cater to diverse lifestyles, providing
                    residents with both privacy and community living in one of Dubai's most
                    sought-after neighborhoods.
                  </p>
                  
                  <p className="text-gray-700 italic cursor-pointer hover:text-blue-600 transition-colors duration-300">
                    Read More
                  </p>
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button onClick={handleRegisterClick} 
                  className={`
                     cursor-pointer relative 
                    overflow-hidden 
                    text-gray-900 
                    font-semibold 
                    py-3 px-6 
                    rounded-md 
                    border-2 border-gray-900 
                    bg-white 
                    transition-all duration-300 
                    flex items-center justify-center gap-2 
                    group 
                    transform 
                    hover:scale-105 hover:shadow-md
                    ${
                      isAboutVisible 
                        ? 'translate-y-0 opacity-100 delay-100' 
                        : 'translate-y-10 opacity-0 pointer-events-none'
                    }
                    
                    /* Add these for cool effects */
                    hover:bg-gray-50
                    before:content-[''] 
                    before:absolute 
                    before:left-0 
                    before:top-0 
                    before:w-0 
                    before:h-full 
                    before:bg-gray-100 
                    before:transition-all 
                    before:duration-500 
                    before:-z-10 
                    hover:before:w-full
                    after:content-[''] 
                    after:absolute 
                    after:right-0 
                    after:bottom-0 
                    after:w-0 
                    after:h-[2px] 
                    after:bg-gray-900 
                    after:transition-all 
                    after:duration-300 
                    hover:after:w-full
                    hover:after:left-0
                  `}                
                  >
                    <Download size={18} />
                    DOWNLOAD BROCHURE
                  </button>
                  
                  <button 
                    onClick={handleRegisterClick}
                    className={` 
                         cursor-pointer relative 
                        overflow-hidden 
                        text-gray-900 
                        font-semibold 
                        py-3 px-6 
                        rounded-md 
                        border-2 border-gray-900 
                        bg-white 
                        transition-all duration-300 
                        flex items-center justify-center gap-2 
                        group 
                        transform 
                        hover:scale-105 hover:shadow-md
                        ${
                          isAboutVisible 
                            ? 'translate-y-0 opacity-100 delay-100' 
                            : 'translate-y-10 opacity-0 pointer-events-none'
                        }
                        
                        /* Add these for cool effects */
                        hover:bg-gray-50
                        before:content-[''] 
                        before:absolute 
                        before:left-0 
                        before:top-0 
                        before:w-0 
                        before:h-full 
                        before:bg-gray-100 
                        before:transition-all 
                        before:duration-500 
                        before:-z-10 
                        hover:before:w-full
                        after:content-[''] 
                        after:absolute 
                        after:right-0 
                        after:bottom-0 
                        after:w-0 
                        after:h-[2px] 
                        after:bg-gray-900 
                        after:transition-all 
                        after:duration-300 
                        hover:after:w-full
                        hover:after:left-0
                      `}
                      
                  >
                    DISCOVER MORE
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     {/* WhatsApp floating button - Fixed Version */}
<div 
  className="fixed bottom-6 left-6 z-50"
  onClick={handleWhatsApp}
>
  <div className="relative group">
    {/* Ping animation */}
    <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 animate-ping"></div>
    
    {/* Main button with smoother hover effects */}
    <div className="relative bg-green-500 p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-all duration-300 transform group-hover:scale-110 z-10 overflow-hidden">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-8 w-8 text-white" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </div>
    
    
  </div>
</div>

      {/* Contact Form Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl relative overflow-auto max-h-screen"
            style={{
              animation: 'fadeInScale 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
            }}
          >
            {/* Close button with animation */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-300 hover:rotate-90 transform p-1"
              onClick={handleClosePopup}
            >
              <X size={24} />
            </button>
            
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">CONTACT US</h2>
                <p className="text-gray-600">Leave your contact details below to register your interest</p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mt-4 rounded-full"></div>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 ${focused === 'fullName' || formData.fullName ? 'text-blue-500' : 'text-gray-400'}`}>
                        <User size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="fullName"
                        placeholder="Full Name" 
                        className={`w-full border ${formErrors.fullName ? 'border-red-500' : focused === 'fullName' ? 'border-blue-500' : 'border-gray-300'} rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('fullName')}
                        onBlur={() => setFocused(null)}
                      />
                      {formErrors.fullName && <p className="text-red-500 mt-1 text-sm">{formErrors.fullName}</p>}
                    </div>
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 ${focused === 'email' || formData.email ? 'text-blue-500' : 'text-gray-400'}`}>
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        className={`w-full border ${formErrors.email ? 'border-red-500' : focused === 'email' ? 'border-blue-500' : 'border-gray-300'} rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                      />
                      {formErrors.email && <p className="text-red-500 mt-1 text-sm">{formErrors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 ${focused === 'phone' || formData.phone ? 'text-blue-500' : 'text-gray-400'}`}>
                        <Phone size={18} />
                      </div>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number" 
                        className={`w-full border ${formErrors.phone ? 'border-red-500' : focused === 'phone' ? 'border-blue-500' : 'border-gray-300'} rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                      />
                      {formErrors.phone && <p className="text-red-500 mt-1 text-sm">{formErrors.phone}</p>}
                    </div>
                    <div className="relative">
                      <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-all duration-300 ${focused === 'country' || formData.country ? 'text-blue-500' : 'text-gray-400'}`}>
                        <MapPin size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="country"
                        placeholder="Country of Residence" 
                        className={`w-full border ${formErrors.country ? 'border-red-500' : focused === 'country' ? 'border-blue-500' : 'border-gray-300'} rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                          value={formData.country}
                          onChange={handleInputChange}
                          onFocus={() => setFocused('country')}
                          onBlur={() => setFocused(null)}
                        />
                        {formErrors.country && <p className="text-red-500 mt-1 text-sm">{formErrors.country}</p>}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className={`absolute top-3 left-3 flex items-center pointer-events-none transition-all duration-300 ${focused === 'message' || formData.message ? 'text-blue-500' : 'text-gray-400'}`}>
                        <MessageSquare size={18} />
                      </div>
                      <textarea 
                        name="message"
                        placeholder="Message" 
                        rows="4"
                        className={`w-full border ${formErrors.message ? 'border-red-500' : focused === 'message' ? 'border-blue-500' : 'border-gray-300'} rounded-md p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                      ></textarea>
                      {formErrors.message && <p className="text-red-500 mt-1 text-sm">{formErrors.message}</p>}
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-start cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="peer sr-only" />
                          <div className="w-5 h-5 border border-gray-300 rounded mr-2 peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all duration-300"></div>
                          <div className="absolute text-white w-5 h-5 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-300">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          I hereby authorize company representatives to reach out to me via Call, SMS, Email,
                          or WhatsApp to share details about their products and offers, regardless of my
                          registration on the Do Not Call registry.
                        </span>
                      </label>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-medium py-3 rounded-md transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 transform hover:-translate-y-1"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>SUBMIT</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    
                    {/* WhatsApp direct contact option */}
                    <div className="mt-4 text-center">
                      <p className="text-gray-600 text-sm mb-2">Or contact us directly via WhatsApp</p>
                      <button 
                        type="button"
                        onClick={handleWhatsApp}
                        className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>+92 340 5245826</span>
                      </button>
                    </div>
                    </form>
                    ) : (
                    <div className="flex flex-col items-center justify-center py-10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                        <p className="text-gray-600 text-center">Your message has been submitted successfully. We'll get back to you soon.</p>
                    </div>
                    )}
              </div>
            </div>
          </div>
        )}
  
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse 2s ease-in-out infinite;
          }

            @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        `}</style>
      </div>
    
        

  );
}