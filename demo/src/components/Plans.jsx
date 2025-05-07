import { useState } from 'react';
import image1 from '../assets/studio.webp';
import image2 from '../assets/bedroom1.webp';
import image3 from '../assets/bedroom2.webp';
import image4 from '../assets/bedroom3.webp';

export default function Plans() {
  // State to track which floor plan is selected
  const [selectedPlan, setSelectedPlan] = useState('1bedroom');

  // Floor plan data
  const floorPlans = {
    studio: {
      title: "Studio",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      image: image1
    },
    '1bedroom': {
      title: "1 Bedroom Apartment",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      image: image2
    },
    '2bedroom': {
      title: "2 Bedroom Apartment",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      image: image3
    },
    '3bedroom': {
      title: "3 Bedroom Apartment",
      priceText: "Starting Price: Ask for Price",
      areaText: "Total Area: On Request",
      image: image4
    }
  };


  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Binghatti Skyrise at Business Bay Floor Plan</h1>
        <p className="text-gray-700">
          Binghatti Skyrise features modern, open-concept floor plans with clean lines and high-quality finishes. 
          The spacious, well-lit apartments are designed for maximum efficiency, offering ample storage and smart use of space.
        </p>
      </div>
      
      {/* Apartment type tabs */}
      <div className="flex border-b border-gray-300 mb-8">
        {Object.keys(floorPlans).map((planKey) => (
          <button
            key={planKey}
            className={`py-3 px-6 font-medium text-gray-800 ${
              selectedPlan === planKey 
                ? 'bg-gray-200 border-t border-l border-r border-gray-300' 
                : 'bg-white hover:bg-gray-100'
            }`}
            onClick={() => setSelectedPlan(planKey)}
          >
            {floorPlans[planKey].title}
          </button>
        ))}
      </div>
      
      {/* Selected floor plan details */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">{floorPlans[selectedPlan].title}</h2>
        
        {/* Price and area information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-300 p-4 rounded flex items-center">
            <div className="bg-gray-100 p-2 rounded mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>{floorPlans[selectedPlan].priceText}</div>
          </div>
          
          <div className="border border-gray-300 p-4 rounded flex items-center">
            <div className="bg-gray-100 p-2 rounded mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>{floorPlans[selectedPlan].areaText}</div>
          </div>
        </div>
        
        {/* Floor plan image placeholder - you'll replace this with your actual images */}
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 h-96 flex items-center justify-center">
        <img 
            src={floorPlans[selectedPlan].image} 
            alt={floorPlans[selectedPlan].title} 
            className="max-h-full max-w-full object-contain" 
        />
        </div>
        </div>
      
      
    </div>
  );
}