"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Download, ChevronRight, Github, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeroProps {
  onViewProjectClick: () => void;
  onScrollToExperience: () => void;
}

export default function Hero({ onViewProjectClick, onScrollToExperience }: HeroProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const checkDeviceSize = () => setIsTabletOrMobile(window.innerWidth < 1024);
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);
    return () => window.removeEventListener("resize", checkDeviceSize);
  }, []);

  const handleDownloadCV = () => {
    const cvUrl = "/cv-nazwatuzzahro.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Nazwatuzzahro.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProfileClick = () => {
    router.push("/about");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-16"
    >
      {/* Left Section - Foto & Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center relative"
      >
        {/* Social icons di kiri gambar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={
            isHovered || isTabletOrMobile
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -20 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute left-[-56px] lg:left-[-64px] top-1/2 -translate-y-1/2 flex flex-col gap-4"
        >
          <button
            className="p-3 rounded-full bg-[#B99470] text-white shadow-lg hover:bg-[#a07d55] transition"
            onClick={() =>
              window.open("https://github.com/nazwatuzzahro-asset", "_blank")
            }
            aria-label="GitHub"
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

        {/* Foto Profil */}
        <div
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleProfileClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleProfileClick();
          }}
          aria-label="Go to About page"
        >
          <motion.div
            className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-lg shadow-[0_6px_0_rgba(0,0,0,0.08)]"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/profile-new.png"
              alt="Profile Nazwatuzzahro"
              fill
              className="object-cover"
              priority
            />
            <motion.img
              src="/clicks-brown.png"
              alt="Click me"
              className="absolute bottom-2 right-1 w-10 h-10 opacity-80"
              initial={{ x: 80, opacity: 0 }}
              animate={{
                x: [80, 5, 0],
                opacity: [0, 1, 1],
                scale: [1, 0.6, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 1,
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Text & Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left max-w-xl flex flex-col gap-6"
      >
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#153448] leading-tight">
            Hello, I&apos;m{" "}
            <span className="text-[#153448] font-bold">Nazwatuzzahro!</span>
          </h1>
          <p className="text-base sm:text-lg text-[#153448]">
            I am a <span className="font-medium">Web Developer</span> and{" "}
            <span className="font-medium">UI/UX Designer</span> specializing in
            building modern, responsive, and user-friendly applications.
          </p>
        </div>

        {/* Buttons */}
<div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
  <button
    onClick={handleDownloadCV}
    className="inline-flex items-center justify-center bg-[#FEFAE0] 
               px-2 sm:px-3 py-1 sm:py-1.5 rounded-full tracking-wide shadow-lg 
               hover:shadow-indigo-500/50 transition-transform duration-300 
               hover:scale-105 active:scale-95 flex-shrink"
  >
    <Download
      className="text-[#5F6F52] mr-1 sm:mr-2"
      size={isTabletOrMobile ? 14 : 20}
    />
    <p className={`text-[#5F6F52] ${isTabletOrMobile ? "text-xs" : "text-base"}`}>
      Download CV
    </p>
  </button>

  <button
    onClick={onScrollToExperience}
    className="inline-flex items-center justify-center bg-[#FEFAE0] 
               px-2 sm:px-3 py-1 sm:py-1.5 rounded-full tracking-wide shadow-lg 
               hover:shadow-indigo-500/50 transition-transform duration-300 
               hover:scale-105 active:scale-95 flex-shrink"
  >
    <p className={`text-[#5F6F52] ${isTabletOrMobile ? "text-xs" : "text-base"}`}>
      Experience
    </p>
  </button>

  <button
    onClick={onViewProjectClick}
    className="inline-flex items-center justify-center bg-[#FEFAE0] 
               px-2 sm:px-3 py-1 sm:py-1.5 rounded-full tracking-wide shadow-lg 
               hover:shadow-[#153448]/50 transition-transform duration-300 
               hover:scale-105 active:scale-95 flex-shrink"
  >
    <p className={`text-[#5F6F52] mr-1 sm:mr-2 ${isTabletOrMobile ? "text-xs" : "text-base"}`}>
      What I Do
    </p>
    <ChevronRight
      className="text-[#5F6F52]"
      size={isTabletOrMobile ? 14 : 20}
    />
  </button>
</div>

      </motion.div>
    </section>
  );
}
