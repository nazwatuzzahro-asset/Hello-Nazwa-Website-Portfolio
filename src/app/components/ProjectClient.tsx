"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/project";
import { ChevronLeft } from "lucide-react";

export default function ProjectClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const skillId = searchParams.get("skillId");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading (misal ambil data dari API)
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (!skillId) return projects;
    return projects.filter((p) => p.skillId === Number(skillId));
  }, [skillId]);

  const isVideoFile = (src?: string) => {
    if (!src) return false;
    const lower = src.toLowerCase();
    return lower.endsWith(".mp4") || lower.endsWith(".webm") || lower.endsWith(".mov");
  };

  // Skeleton Card
  const SkeletonCard = () => (
    <div className="rounded-xl border border-gray-300 bg-white shadow-md p-4 animate-pulse">
      <div className="w-full aspect-[16/9] bg-gray-200 rounded-md mb-3" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-full mb-1" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  );

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
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 to-transparent" />
      </div>

      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center text-[#B99470]">
          Project Showcase
        </h2>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : filteredProjects.map(({ id, title, description, media, link }) => (
                <motion.div
                  key={id}
                  onClick={() => window.open(link, "_blank")}
                  className="group rounded-xl border border-gray-300 bg-white shadow-md p-4 flex flex-col cursor-pointer hover:shadow-lg transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-3">
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
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
                    {description}
                  </p>
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
