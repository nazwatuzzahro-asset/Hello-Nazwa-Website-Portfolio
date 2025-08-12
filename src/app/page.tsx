"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import ProjectGallery from "./components/WhatIDo";
import Footer from "./components/Footer";

export default function Page() {
  const [activeSection, setActiveSection] = useState<"hero" | "whatIDo">("hero");

  const handleViewProjectClick = () => {
    setActiveSection("whatIDo");
  };

  const handleBackToHero = () => {
    setActiveSection("hero");
  };

  return (
    <div
      className="overflow-hidden w-full min-h-screen relative flex flex-col"
      style={{
        background: "linear-gradient(160deg, #ffffff 40%, #E4F68F 100%)",
      }}
    >
      <motion.div
        className="flex w-[200vw] flex-grow"
        animate={{ x: activeSection === "hero" ? 0 : "-100vw" }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
      >
        {/* Section Hero */}
        <div className="w-screen min-h-screen">
          <Hero onViewProjectClick={handleViewProjectClick} />
        </div>

        {/* Section Project */}
        <div className="w-screen min-h-screen">
          <ProjectGallery onBack={handleBackToHero} />
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
