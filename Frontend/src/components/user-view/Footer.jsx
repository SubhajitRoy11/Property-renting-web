


import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-white">About Us</h3>
            <p className="leading-relaxed">
              We offer authentic Nordic homes for your perfect getaway, blending
              comfort with nature's beauty.
            </p>
          </div>

          
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact</h3>
            <p className="leading-relaxed">123 Nordic Pine Road, Fjord City, Norway</p>
            <p>Email: <a href="mailto:info@nordichomes.com" className="text-primary hover:underline">info@nordichomes.com</a></p>
            <p>Phone: <a href="tel:+4712345678" className="text-primary hover:underline">+47 123 45 678</a></p>
          </div>

          
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={28} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={28} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={28} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © 2023 Nordic Home Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
