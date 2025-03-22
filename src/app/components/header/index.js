"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          {/* Show text for large screens */}
          <div className="hidden sm:block text-2xl font-bold text-gray-800">
            ADITYA PRIVATE LTD
          </div>
          {/* Show image for small screens */}
          <img
            src="/images/logo.jpg" // Replace with your actual image path
            alt="Logo"
            className="block sm:hidden h-10" // Adjust height as needed
          />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Login
          </button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-black">
            Sign Up
          </button>
        </div>

        <button
          className="sm:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="flex space-x-4">
              <button className="text-gray-600" onClick={() => setIsOpen(false)}>
                Login
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
