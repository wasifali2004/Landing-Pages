import React from 'react';

const PaymentPlanCard = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="p-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 animate-fade-in">
            Binghatti Skyrise at Business Bay Payment Plan
          </h1>
          <p className="text-gray-600 mb-2 animate-fade-in delay-100">
            Binghatti Skyrise offers a flexible payment plan designed to suit your needs.
          </p>
          <p className="text-gray-600 animate-fade-in delay-200">
            Take advantage of this opportunity to own a luxury apartment in one of Dubai’s most sought-after neighborhoods.
          </p>
        </div>

        {/* Payment Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-8 animate-fade-up">
          {/* Plan 1 */}
          <div className="bg-blue-100 border border-blue-300 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">20%</div>
              <div className="text-lg font-semibold text-gray-800">Down Payment</div>
              <p className="text-sm text-gray-600 mt-1">On Booking</p>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="bg-green-100 border border-green-300 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">50%</div>
              <div className="text-lg font-semibold text-gray-800">During Construction</div>
              <p className="text-sm text-gray-600 mt-1">Easy Installments</p>
            </div>
          </div>

          {/* Plan 3 */}
          <div className="bg-purple-100 border border-purple-300 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-700 mb-2">30%</div>
              <div className="text-lg font-semibold text-gray-800">On Handover</div>
              <p className="text-sm text-gray-600 mt-1">100% Completion</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentPlanCard;
