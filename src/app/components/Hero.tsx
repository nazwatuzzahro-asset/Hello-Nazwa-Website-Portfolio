"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Download, ChevronRight, Github, Mail } from "lucide-react";
interface HeroProps {
  onViewProjectClick: () => void;
}

export default function Hero({ onViewProjectClick }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fungsi download CV
  const handleDownloadCV = () => {
    const cvUrl = "/cv-nazwatuzzahro.pdf"; // letakkan file di folder public
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Nazwatuzzahro.pdf"; // nama file saat download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-xl flex flex-col gap-6"
      >
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl text-gray-900 leading-tight">
            Halo, Saya{" "}
            <span className="text-[#B99470] font-bold">Nazwatuzzahro!</span>
          </h1>

          <p className="text-lg text-gray-600">
            Saya adalah seorang{" "}
            <span className="font-medium">Web Developer</span> yang fokus pada
            pembuatan aplikasi modern, responsif, dan user-friendly.
          </p>
        </div>

        <div className="flex justify-center md:justify-start gap-4">
          <button
  onClick={handleDownloadCV}
  className="inline-flex items-center justify-center bg-[#FEFAE0] px-3 py-1.5 rounded-full tracking-wide shadow-lg hover:shadow-indigo-500/50 transition-transform duration-300 hover:scale-105 active:scale-95"
>
  <Download className="text-[#5F6F52] mr-2" size={isMobile ? 16 : 20} />
  <p className={`text-[#5F6F52] ${isMobile ? "text-sm" : "text-base"}`}>Download CV</p>
</button>

<button
  onClick={onViewProjectClick}
  className="inline-flex items-center justify-center bg-[#FEFAE0] px-3 py-1.5 rounded-full tracking-wide shadow-lg hover:shadow-indigo-500/50 transition-transform duration-300 hover:scale-105 active:scale-95"
>
  <p className={`text-[#5F6F52] mr-2 ${isMobile ? "text-sm" : "text-base"}`}>What I Do</p>
  <ChevronRight className="text-[#5F6F52]" size={isMobile ? 16 : 20} />
</button>

        </div>
      </motion.div>

      {/* Right Image + Tombol */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center relative"
      >
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-lg shadow-[0_8px_0_rgba(0,0,0,0.08)] cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/profile.png"
              alt="Profile Nazwatuzzahro"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Tombol muncul selalu di mobile, hover di desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={
              isHovered || isMobile
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 20 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute right-[-64px] top-1/2 -translate-y-1/2 flex flex-col gap-4"
          >
            <button
              className="p-3 rounded-full bg-[#B99470] text-white shadow-lg hover:bg-[#a07d55] transition"
              onClick={() =>
                window.open("https://github.com/nazwatuzzahro-asset", "_blank")
              }
              aria-label="Github"
            >
              <Github size={20} />
            </button>
            <button
              className="p-3 rounded-full bg-[#B99470] text-white shadow-lg hover:bg-[#a07d55] transition"
              onClick={() => window.open("mailto:nazwatuzzahroo@gmail.com")}
              aria-label="Email"
            >
              <Mail size={20} />
            </button>
            <button
              className="p-3 rounded-full bg-[#B99470] text-white shadow-lg hover:bg-[#a07d55] transition"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nazwatuzzahro-65186820b/",
                  "_blank"
                )
              }
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
