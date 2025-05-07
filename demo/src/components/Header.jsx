import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import image1 from '../assets/logo.webp'

const Header = ({ logoPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items matching your actual components
  const navItems = [
    { name: 'PAYMENT PLAN', sectionId: 'payment-plan' },  // Maps to PaymentPlanCard component
    { name: 'GALLERY', sectionId: 'gallery' },            // Maps to Images component
    { name: 'AMENITIES', sectionId: 'amenities' },        // Maps to Features component
    { name: 'LOCATION', sectionId: 'location' },          // Maps to Map component
    { name: 'FLOOR PLANS', sectionId: 'floor-plans' }     // Maps to Plans component
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsMobileMenuOpen(false);
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
          onClick={() => scrollToSection('main')} // Navigate to top/main section when logo is clicked
        >
          <img src={image1} alt="Binghatti Logo" className="h-10 cursor-pointer" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-800 font-medium text-sm tracking-wide hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('register')} // Maps to Contact component
          className="hidden lg:block bg-blue-900 text-white px-6 py-2 rounded-sm font-bold text-sm shadow-md hover:bg-blue-800 transition-colors  cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          REGISTER YOUR INTEREST
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-800 font-medium text-sm py-2 border-b border-gray-100 text-left cursor-pointer bg-transparent border-none w-full"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isMobileMenuOpen ? 0 : -20, opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button 
            onClick={() => scrollToSection('register')}
            className="bg-blue-900 text-white px-6 py-3 rounded-sm font-bold text-sm shadow-md hover:bg-blue-800 transition-colors mt-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            REGISTER YOUR INTEREST
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;