"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full h-[540px]">
      {/* Background Image */}
      <Image
        src="/footer-bg.png"
        alt="Footer background"
        fill
        className="object-cover"
      />

      {/* Content di dekat bawah */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white gap-6 px-6 md:px-20 pb-20">
        {/* Judul */}
        <h3 className="text-lg font-semibold tracking-wide drop-shadow-md text-center">
          Contact me through:
        </h3>

        {/* Kontak info */}
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-10 text-sm sm:text-base text-center">
          <a
            href="mailto:nazwatuzzahroo@gmail.com"
            className="flex items-center justify-center lg:justify-start gap-3 hover:underline transition-colors duration-300"
            aria-label="Send email"
          >
            <Mail size={24} className="text-white" />
            <span className="font-medium">nazwatuzzahroo@gmail.com</span>
          </a>

          <a
            onClick={() => window.open("https://wa.me/6282112808708", "_blank")}
            className="flex items-center justify-center lg:justify-start gap-3 hover:underline transition-colors duration-300"
            aria-label="Call phone"
          >
            <Phone size={24} className="text-white" />
            <span className="font-medium">+62 821-1280-8708</span>
          </a>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
            <MapPin size={24} className="text-white" />
            <address className="not-italic font-medium">Bekasi, Indonesia</address>
          </div>
        </div>
      </div>
    </footer>
  );
}
