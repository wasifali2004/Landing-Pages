import { useState, useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function FloorPlanDisplay() {
  // State to track which floor plan is selected
  const [selectedPlan, setSelectedPlan] = useState('1bedroom');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  
  // Refs for animated elements
  const footerRef = useRef(null);
  const formRef = useRef(null);
  
  // State for animation control
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState(null);
  
  // Animation effects
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 300);
    
    // Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  
  // Floor plan data - you can replace descriptions and add your images later
  const floorPlans = {
    studio: {
      title: "Studio",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      // This is where you'll add your image
    },
    '1bedroom': {
      title: "1 Bedroom Apartment",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      // This is where you'll add your image
    },
    '2bedroom': {
      title: "2 Bedroom Apartment",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      // This is where you'll add your image
    },
    '3bedroom': {
      title: "3 Bedroom Apartment",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      // This is where you'll add your image
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
    }, 3000);
  };

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <div>
      
      {/* Enhanced Footer with Contact Form */}
      <div 
        ref={footerRef}
        className={`relative mt-24 mb-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-900 to-blue-800 transform -skew-y-2 -translate-y-12 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-800 to-blue-700 transform -skew-y-1 -translate-y-6 z-0 opacity-70"></div>
        
        {/* Contact Form Container */}
        <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Contact Form */}
            <div 
              ref={formRef} 
              className="p-8 lg:p-12"
              style={{
                background: 'radial-gradient(circle at top right, #f7f7f7, #ffffff)',
                borderRight: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-4 relative inline-block">
                  GET IN TOUCH
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
                </h2>
                <p className="text-gray-600">We're excited to help you find your perfect home at Binghatti Skyrise</p>
              </div>
              
              {formSubmitted ? (
                <div 
                  className="bg-green-50 border-l-4 border-green-500 text-green-700 p-6 rounded relative text-center animate-fadeIn shadow-md" 
                  role="alert"
                >
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <strong className="font-bold text-xl block mb-2">Thank you!</strong>
                  <p className="text-sm"> Your message has been submitted successfully. One of our representatives will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className={`relative transition-all duration-300 ${activeField === 'fullName' ? 'transform -translate-y-2' : ''}`}>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder=" "
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('fullName')}
                        onBlur={handleBlur}
                        className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        required
                      />
                      <label 
                        htmlFor="fullName"
                        className={`absolute top-3 left-4 transition-all duration-300 pointer-events-none ${
                          formData.fullName || activeField === 'fullName' 
                            ? 'text-xs text-blue-600 -translate-y-6 bg-white px-1' 
                            : 'text-gray-500'
                        }`}
                      >
                        Full Name
                      </label>
                    </div>
                    
                    <div className={`relative transition-all duration-300 ${activeField === 'email' ? 'transform -translate-y-2' : ''}`}>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        required
                      />
                      <label 
                        htmlFor="email"
                        className={`absolute top-3 left-4 transition-all duration-300 pointer-events-none ${
                          formData.email || activeField === 'email' 
                            ? 'text-xs text-blue-600 -translate-y-6 bg-white px-1' 
                            : 'text-gray-500'
                        }`}
                      >
                        Email Address
                      </label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`relative transition-all duration-300 ${activeField === 'phone' ? 'transform -translate-y-2' : ''}`}>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder=" "
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={handleBlur}
                          className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          required
                        />
                        <label 
                          htmlFor="phone"
                          className={`absolute top-3 left-4 transition-all duration-300 pointer-events-none ${
                            formData.phone || activeField === 'phone' 
                              ? 'text-xs text-blue-600 -translate-y-6 bg-white px-1' 
                              : 'text-gray-500'
                          }`}
                        >
                          Phone Number
                        </label>
                      </div>
                      
                      <div className={`relative transition-all duration-300 ${activeField === 'country' ? 'transform -translate-y-2' : ''}`}>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          placeholder=" "
                          value={formData.country}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus('country')}
                          onBlur={handleBlur}
                          className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          required
                        />
                        <label 
                          htmlFor="country"
                          className={`absolute top-3 left-4 transition-all duration-300 pointer-events-none ${
                            formData.country || activeField === 'country' 
                              ? 'text-xs text-blue-600 -translate-y-6 bg-white px-1' 
                              : 'text-gray-500'
                          }`}
                        >
                          Country of Residence
                        </label>
                      </div>
                    </div>
                  
                    <div className={`relative transition-all duration-300 ${activeField === 'message' ? 'transform -translate-y-2' : ''}`}>
                      <textarea
                        name="message"
                        id="message"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all resize-none"
                        rows="4"
                        required
                      ></textarea>
                      <label 
                        htmlFor="message"
                        className={`absolute top-3 left-4 transition-all duration-300 pointer-events-none ${
                          formData.message || activeField === 'message' 
                            ? 'text-xs text-blue-600 -translate-y-6 bg-white px-1' 
                            : 'text-gray-500'
                        }`}
                      >
                        Your Message
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 rounded-full bg-white opacity-10 group-hover:w-full group-hover:h-full" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></span>
                    <span className="relative flex items-center justify-center">
                      <span>SUBMIT</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                  
                  <p className="text-xs text-gray-600 text-center mt-4">
                    I hereby authorize company representatives to reach out to me via Call, SMS, Email, or WhatsApp to 
                    share details about their products and offers, regardless of my DNC/NDNC registration.
                  </p>
                </form>
              )}
            </div>
            
            {/* Right side - Contact Information */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-8 relative">
                Contact Information
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-white mt-2"></span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Phone</div>
                    <div className="font-medium">+92 340 5245826</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Email</div>
                    <div className="font-medium">info@binghattiskyrise.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-300">Address</div>
                    <div className="font-medium">Business Bay, Dubai UAE</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition-all duration-300">
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full width WhatsApp Section */}
      <div 
        className={`w-full bg-blue-900 relative overflow-hidden py-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          width: '100vw'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-700 opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-700 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-2/3 w-24 h-24 rounded-full bg-blue-700 opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">FOR FURTHER DETAILS, FEEL FREE TO REACH OUT TO US VIA WHATSAPP</h3>
          
          <a 
            href="https://wa.me/923405245826" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white flex items-center justify-center p-4 rounded-lg mx-auto max-w-md hover:bg-green-600 transition-all duration-300 group animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <div className="flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.489 1.2.531 1.286.042.086.071.183.014.288-.057.105-.11.202-.173.31l-.26.309c-.085.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.102-.114.44-.513.558-.687.118-.174.236-.145.398-.087s1.039.491 1.217.581c.177.091.289.134.332.21.042.076.042.433-.102.85z"/>
                <path d="M17.074 4.956c-2.022-2.022-4.708-3.138-7.56-3.138-5.874 0-10.618 4.744-10.618 10.617 0 1.846.478 3.65 1.387 5.25l-1.478 5.398 5.53-1.451c1.55.85 3.3 1.299 5.078 1.299 5.872 0 10.616-4.744 10.616-10.618 0-2.851-1.116-5.537-3.137-7.559l.18.102zm-7.56 18.243c-1.584 0-3.146-.429-4.508-1.24l-.323-.191-3.349.878.893-3.265-.209-.342c-.88-1.415-1.349-3.049-1.349-4.736 0-4.91 3.994-8.905 8.905-8.905 2.377 0 4.612.929 6.291 2.608 1.677 1.677 2.605 3.913 2.605 6.289 0 4.91-3.995 8.904-8.905 8.904z"/>
              </svg>
              <span className="text-lg font-medium">+92 340 5245826</span>
            </div>
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div 
        className={`w-full bg-blue-900 text-white py-8 border-t border-blue-800 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        style={{
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          width: '100vw'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-sm max-w-4xl mx-auto">
              Disclaimer: Please note that this website is not an official site but serves as an informational portal managed by a RERA-authorized real estate agent. 
              The content provided does not constitute an offer or guarantee of any services. Prices displayed on this website are subject to change without prior notice. 
              Images showcased are for representational purposes only and may not accurately reflect the actual properties.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">Terms and Conditions</a>
          </div>
          
          <p className="text-center text-sm text-gray-300">© 2024 All Rights Reserved.</p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(72, 187, 120, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-bounce {
          animation: float 3s ease-in-out infinite;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

    </div>
)
}