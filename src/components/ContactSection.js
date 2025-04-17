import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-gray-50/50 dark:bg-zinc-950/50 py-12 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 text-left">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600 text-xl" />
            <a href="mailto:pshamn01@gmail.com" className="text-lg hover:underline">
            pshamn01@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <a href="tel:+6287825959253" className="text-lg hover:underline">
              +62 878-2595-9253
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram className="text-pink-500 text-xl" />
            <a
              href="https://instagram.com/_pashamn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              @_pashamn
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

