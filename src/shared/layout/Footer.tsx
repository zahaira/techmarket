"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-primary-light text-gray-900 sm:pl-[70px]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Column 1 - Shop */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Laptops
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Phones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                New Arrivals
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Support */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Warranty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Track My Order
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - About */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter and get the latest updates on new
            products and offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-black px-4 py-2 rounded-r-md hover:bg-primary-dark transition-all"
            >
              <FiMail className="h-5 w-5" />
            </button>
          </form>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6 text-gray-400">
            <a href="#" className="hover:text-black">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-black">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-black">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 sm:px-10 py-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} YourStore. All rights reserved.</p>

        {/* Payment Methods */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 text-gray-400 text-xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaPaypal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
