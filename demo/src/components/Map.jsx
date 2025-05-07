import React, { useState } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send,
  Download
} from 'lucide-react';
import image1 from '../assets/location.png'

const LocationSection = () => {
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

  const handleDownloadClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormErrors({}); 
    setSubmitted(false); 
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/923405245826`, '_blank');
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
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Map image */}
      <div className="w-full md:w-1/2 relative">
        <img 
          src={image1} 
          alt="Binghatti Skyrise Location Map" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
          </div>
        </div>
      </div>
      
      {/* Right side - Location information */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#071F4A] mb-6">
          Binghatti Skyrise Location
        </h2>
        
        <p className="text-gray-700 mb-8">
          Nestled in Business Bay, Binghatti Skyrise offers unrivaled access to 
          Dubai's top attractions, including the Burj Khalifa and Dubai Mall. Its 
          strategic location ensures seamless connectivity to major roads, while a 
          vibrant mix of dining, shopping, and entertainment options nearby makes 
          it an ideal choice for modern city living. With stunning canal views and 
          proximity to key business hubs, it combines convenience with 
          sophistication.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <MapPin className="text-[#071F4A] mr-2" size={20} />
            <span className="text-gray-700">03 Minutes – Drive to Burj Khalifa</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-[#071F4A] mr-2" size={20} />
            <span className="text-gray-700">03 Minutes – Drive to The Dubai Mall</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-[#071F4A] mr-2" size={20} />
            <span className="text-gray-700">03 Minutes – Drive to Downtown Dubai</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-[#071F4A] mr-2" size={20} />
            <span className="text-gray-700">05 Minutes – Drive to Business Bay Marina</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="text-[#071F4A] mr-2" size={20} />
            <span className="text-gray-700">05 Minutes – Drive to Metro Station</span>
          </div>
        </div>
        
        <button 
          onClick={handleDownloadClick}
          className="bg-[#071F4A] hover:bg-[#0a2a60] text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 text-lg cursor-pointer flex items-center justify-center w-full md:w-auto"
        >
          <span>DOWNLOAD BROCHURE</span>
          <Download size={20} className="ml-2" />
        </button>
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LocationSection;