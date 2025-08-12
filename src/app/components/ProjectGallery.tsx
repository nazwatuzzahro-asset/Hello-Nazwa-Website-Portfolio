"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { projects } from "../data/project";

interface ProjectGalleryProps {
  onBack: () => void;
  selectedSkillId?: number;
}

function isVideoFile(src: string) {
  return /\.(mp4|webm|ogg|gif)$/i.test(src);
}

export default function ProjectGallery({ onBack, selectedSkillId }: ProjectGalleryProps) {
  const filteredProjects = useMemo(() => {
    if (!selectedSkillId) return projects;
    return projects.filter((p) => p.skillId === selectedSkillId);
  }, [selectedSkillId]);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-16 py-16 bg-gray-50 flex flex-col"
      style={{
        background: `linear-gradient(200deg, #ffffff 40%, #E4F68F 100%)`,
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-[#B99470]">
        Project Showcase
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {filteredProjects.map(({ id, title, description, media, link }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-full aspect-[16/9]">
              {media ? (
                isVideoFile(media) ? (
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
                    src={media}
                    alt={title}
                    fill
                    className="object-cover group-hover:brightness-110 transition duration-300"
                  />
                )
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">No media</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 w-full flex justify-start">
        <button
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 transition-all duration-300 hover:scale-105 active:scale-95 gap-2"
        >
          <ArrowLeft className="text-[#B99470]" size={20} />
          <p className="text-[#B99470]">Back</p>
        </button>
      </div>
    </section>
  );
}
