"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#1F4B32] text-white py-10 px-6 md:px-20 shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
        
        {/* Judul */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold tracking-wide drop-shadow-md">
            Contact me through:
          </h3>
        </div>

        {/* Kontak info */}
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-10 text-sm sm:text-base text-center lg:text-left">
          <a
            href="mailto:nazwatuzzahroo@gmail.com"
            className="flex items-center justify-center lg:justify-start gap-3 hover:underline hover:text-[#A8D5BA] transition-colors duration-300"
            aria-label="Send email"
          >
            <Mail size={24} className="text-[#A8D5BA]" />
            <span className="font-medium">nazwatuzzahroo@gmail.com</span>
          </a>

          <a
            onClick={() => window.open("https://wa.me/6282112808708", "_blank")}
            className="flex items-center justify-center lg:justify-start gap-3 hover:underline hover:text-[#A8D5BA] transition-colors duration-300"
            aria-label="Call phone"
          >
            <Phone size={24} className="text-[#A8D5BA]" />
            <span className="font-medium">+62 821-1280-8708</span>
          </a>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-300">
            <MapPin size={24} className="text-[#A8D5BA]" />
            <address className="not-italic font-medium">Bekasi, Indonesia</address>
          </div>
        </div>
      </div>
    </footer>
  );
}
