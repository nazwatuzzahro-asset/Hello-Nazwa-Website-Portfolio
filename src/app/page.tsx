"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ProjectGallery from "./components/WhatIDo";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

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
    <div
      className="overflow-hidden w-full min-h-screen relative flex flex-col"
      style={{
        background: "linear-gradient(140deg, #ffffff 0%, #E4F68F 100%)",
      }}
    >
      {/* Hero & Project Section */}
      <motion.div
        className="flex w-[200vw] flex-grow"
        animate={{ x: activeSection === "hero" ? 0 : "-100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
      >
        {/* Section Hero */}
        <div className="w-screen min-h-screen">
          <Hero
            onViewProjectClick={handleViewProjectClick}
            onScrollToExperience={handleScrollToExperience}
          />
        </div>

        {/* Section Project */}
        <div className="w-screen min-h-screen">
          <ProjectGallery onBack={handleBackToHero} />
        </div>
      </motion.div>

      {/* Section Experience hanya render kalau di Hero */}
      {activeSection === "hero" && (
        <div ref={experienceRef}>
          <Experience />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
