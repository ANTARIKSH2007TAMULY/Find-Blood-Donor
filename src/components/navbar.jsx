import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-red-700 text-white shadow-md relative h-20">

      {/* Logo on left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 ml-14">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGQMav2bhYC_mB5PoJJaBJBLKzJOmsaoo-w&s"
          alt="Blood Donor Logo"
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* Centered title */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold tracking-wide">
          Find-My-Donor 🩸
        </h1>
      </div>

      {/* Links on right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-x-8 mr-14">
        <Link to="/" className="text-xl hover:text-red-200 transition duration-200">
          Home
        </Link>
        <Link to="/donors" className="text-xl hover:text-red-200 transition duration-200">
          Donors
        </Link>
        <Link to="/requests" className="text-xl hover:text-red-200 transition duration-200">
          Requests
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;