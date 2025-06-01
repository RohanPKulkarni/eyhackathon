"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const branches = ["EIE", "AIDS", "AIML", "CSE", "ISE"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("EIE");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="hidden sm:block text-2xl font-bold text-gray-800 cursor-pointer">
            ADITYA PRIVATE LTD
          </div>
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="block sm:hidden h-10 cursor-pointer"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Search and Branch Dropdown */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="px-3 py-2 border-2 border-black rounded-md bg-white text-gray-700"
          >
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {/* Login / Sign Up buttons on md+ */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Login
          </button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-black">
            Sign Up
          </button>
        </div>

        {/* Hamburger menu on mobile */}
        <button
          className="sm:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            {/* Branch dropdown for mobile */}
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700"
            >
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>

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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
