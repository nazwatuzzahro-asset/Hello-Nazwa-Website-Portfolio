"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ProjectGallery from "./components/WhatIDo";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Page() {
  const [activeSection, setActiveSection] = useState<"hero" | "whatIDo">("hero");
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const handleViewProjectClick = () => {
    setActiveSection("whatIDo");
  };

  const handleBackToHero = () => {
    setActiveSection("hero");
  };

  const handleScrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden w-full min-h-screen relative flex flex-col"
      style={{
        background: "linear-gradient(160deg, #ade8e8 0%, #E4F68F 100%)",
      }}
    >
      {/* Background image & gradient di atas */}
      <div className="absolute top-0 left-0 w-full aspect-[16/9]">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />

        {/* Gradient overlay full layar */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 to-transparent" />
      </div>

      {/* Konten utama */}
      <motion.div
        className="flex w-[200vw] flex-grow relative z-10"
        animate={{ x: activeSection === "hero" ? 0 : "-100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
      >
        <div className="w-screen min-h-screen">
          <Hero
            onViewProjectClick={handleViewProjectClick}
            onScrollToExperience={handleScrollToExperience}
          />
        </div>

        <div className="w-screen min-h-screen">
          <ProjectGallery onBack={handleBackToHero} />
        </div>
      </motion.div>

      {activeSection === "hero" && (
        <div ref={experienceRef} className="relative z-10">
          <Experience />
        </div>
      )}

      <Footer />
    </div>
  );
}
