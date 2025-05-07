import React from 'react'
import Header from './components/Header'
import MainPage from './components/MainPage'
import About from './components/About.jsx'
import PaymentPlanCard from './components/PaymentPlan.jsx'
import Images from './components/Images.jsx'
import Features from './components/Features.jsx'
import Map from './components/Map.jsx'
import Plans from './components/Plans.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return (
    <div className="App">
      {/* Header with smooth scrolling */}
      <Header logoPath="/path/to/your/logo.png" />
      
      {/* Main Hero Section */}
      <section id="main" className="pt-24">
        <MainPage />
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16">
        <About />
      </section>
      
      {/* Payment Plan Section */}
      <section id="payment-plan" className="py-16 bg-gray-100">
        <PaymentPlanCard />
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <Images />
      </section>
      
      {/* Amenities/Features Section */}
      <section id="amenities" className="py-16 bg-gray-100">
        <Features />
      </section>
      
      {/* Location Section */}
      <section id="location" className="py-16">
        <Map />
      </section>
      
      {/* Floor Plans Section */}
      <section id="floor-plans" className="py-16 bg-gray-100">
        <Plans />
      </section>
      
      {/* Contact/Register Section */}
      <section id="register" className="py-16 bg-blue-900 text-white">
        <Contact />
      </section>
    </div>
  );
}

export default App