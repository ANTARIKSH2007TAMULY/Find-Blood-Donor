import React from "react";

function InfoSection({ patientData }) {

  // Extract unique cities
  const cities = [
    ...new Set(patientData.map((user) => user.address.city))
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Impact & Services
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* Total Donors */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-4xl font-bold text-red-600">
              {patientData.length}
            </h3>
            <p className="mt-2 text-gray-600 font-medium">
              Registered Donors
            </p>
          </div>

          {/* Cities */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Cities Available
            </h3>

            <ul className="text-gray-600 space-y-1 max-h-40 overflow-y-auto">
              {cities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Help Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Need Help?
            </h3>
            <p className="text-gray-600">
              Go to the <span className="font-semibold">Donors</span> section,
              filter by blood group, and click
              <span className="font-semibold"> Request Help</span>.
              Your request will appear in the Requests section.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default InfoSection;