"use client";

import React, { useState } from "react";
import { ThemeToggle } from "@/app/theme-toggle";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold">
                Pashamn
              </a>
            </div>
            <div className="hidden md:flex flex-1 justify-center space-x-8">
              <a href="/" className="hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#about" className="hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#contact" className="hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
  
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden flex justify-center" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-center">Home</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-center">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 text-center">Contact</a>
              <div className="mt-2 px-2 text-center">
                <ThemeToggle />
              </div>
            </div>       
          </div>
        )}
      </nav>
    );
  };
  
