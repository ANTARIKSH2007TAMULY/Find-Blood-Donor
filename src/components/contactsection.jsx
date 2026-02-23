import React from "react";

function ContactSection() {
  return (
    <div className="bg-red-600 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Reach Out To Us
        </h2>

        <div className="space-y-4 text-lg">

          <p>
            🌐 Website: 
            <span className="font-semibold ml-2">
              findmydonor.com
            </span>
          </p>

          <p>
            📧 Email: 
            <span className="font-semibold ml-2">
              findmydonor@gmail.com
            </span>
          </p>

          <p>
            📞 Phone: 
            <span className="font-semibold ml-2">
              9XXXXXXXXX
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default ContactSection;