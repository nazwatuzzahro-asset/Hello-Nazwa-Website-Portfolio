"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/project";
import { ChevronLeft } from "lucide-react";

export default function ProjectClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const skillId = searchParams.get("skillId");

  const filteredProjects = useMemo(() => {
    if (!skillId) return projects;
    return projects.filter((p) => p.skillId === Number(skillId));
  }, [skillId]);

  const isVideoFile = (src?: string) => {
    if (!src) return false;
    const lower = src.toLowerCase();
    return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".mov");
  };

  return (
    <section
      className="relative min-h-screen px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col"
      style={{
        background: "linear-gradient(160deg, #ade8e8 0%, #E4F68F 100%)",
      }}
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full aspect-[16/9] z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 to-transparent" />
      </div>

      {/* Konten utama */}
      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-[#B99470]">
          Project Showcase
        </h2>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {filteredProjects.map(({ id, title, description, media, link }) => (
            <motion.div
              key={id}
              onClick={() => window.open(link, "_blank")}
              className="group rounded-lg overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-full aspect-[16/9]">
                {isVideoFile(media) ? (
                  <video
                    src={media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:brightness-110 transition duration-300"
                  />
                ) : (
                  <Image
                    src={media || "/placeholder.png"}
                    alt={title}
                    fill
                    className="object-cover group-hover:brightness-110 transition duration-300"
                  />
                )}
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 mb-1">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol back */}
        <div className="mt-8 md:mt-10 w-full flex justify-start">
          <button
            onClick={() => router.push("/?scrollTo=skills")}
            className="inline-flex items-center px-3 md:px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95 gap-2"
          >
            <ChevronLeft className="text-[#B99470]" size={28} />
            <p className="text-sm md:text-md text-[#B99470]">Back to Dashboard</p>
          </button>
        </div>
      </div>
    </section>
  );
}
