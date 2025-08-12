// app/project/ProjectClient.js (Client Component)
"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/project";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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
  return (
    src.endsWith(".mp4") ||
    src.endsWith(".webm") ||
    src.endsWith(".mov")
  );
};


  return (
    <section
      className="min-h-screen px-6 md:px-16 py-16 flex flex-col"
      style={{
        background: `linear-gradient(200deg, #ffffff 40%, #E4F68F 100%)`,
      }}
    >
      <h2 className="text-2xl font-bold mb-8 text-center text-[#B99470]">
        Project Showcase
      </h2>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {filteredProjects.map(({ id, title, description, media, link }) => (
          <motion.div
            key={id}
            onClick={() => window.open(link, "_blank")}
            className="group rounded-lg overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
                  src={media || ""}
                  alt={title}
                  fill
                  className="object-cover group-hover:brightness-110 transition duration-300"
                />
              )}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-base text-gray-900 mb-1">
                {title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tombol back */}
      <div className="mt-10 w-full flex justify-start">
        <button
          onClick={() => router.push("/?scrollTo=skills")}
          className="inline-flex items-center px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95 gap-2"
        >
          <ChevronLeft className="text-[#B99470]" size={20} />
          <p className="text-md text-[#B99470]">Back to Dashboard</p>
        </button>
      </div>
    </section>
  );
}
