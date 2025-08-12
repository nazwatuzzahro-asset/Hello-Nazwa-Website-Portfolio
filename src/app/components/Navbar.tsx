"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl text-[#B99470]">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#B99470]">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#B99470]">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-[#B99470]">Projects</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#B99470]">Contact</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-[#B99470] focus:outline-none"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-[#B99470]" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-[#B99470]" onClick={() => setOpen(false)}>About</Link>
            <Link href="/projects" className="block text-gray-700 hover:text-[#B99470]" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-[#B99470]" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
