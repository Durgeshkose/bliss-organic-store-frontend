// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center space-x-2">
            <FaLeaf className="text-3xl text-white" />
            <span className="text-xl font-bold">Bliss Organic</span>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Bringing you 100% organic and eco-friendly products, directly from local farms to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: info@blissorganic.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Indore, Madhya Pradesh</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      <p className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bliss Organic Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
