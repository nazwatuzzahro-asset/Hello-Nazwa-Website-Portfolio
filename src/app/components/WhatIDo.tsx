"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { skills } from "../data/skill";
import { useRouter } from "next/navigation";

interface SkillsSectionProps {
  onBack: () => void;
}

export default function SkillsSection({ onBack }: SkillsSectionProps) {
  const router = useRouter();

  const handleSkillClick = (skillId: number) => {
    router.push(`/project?skillId=${skillId}`);
  };

  return (
   <section
  id="whatIDo"
  className="min-h-screen flex flex-col justify-center items-center py-16 bg-gray-50"
  style={{
    background: `linear-gradient(200deg, #ffffff 40%, #E4F68F 100%)`,
  }}
>
  {/* Container agar header & grid sejajar dan maksimal lebar 1200px */}
  <div className="w-full max-w-[1200px] px-6 md:px-16">
    {/* Header sejajar */}
    <div className="grid grid-cols-[auto_1fr_auto] items-center mb-8">
      <button onClick={onBack} className="">
        <ChevronLeft className="text-[#B99470]" size={24} />
      </button>
      <h2 className="text-2xl font-bold text-[#B99470] text-center">What I Do</h2>
      <div /> {/* spacer */}
    </div>

    {/* Grid Skills */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map(({ id, title, description, icon: Icon, image }) => (
        <motion.div
          key={id}
          onClick={() => handleSkillClick(id)}
          className="group rounded-lg overflow-hidden shadow-md bg-white flex flex-col cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:brightness-110 transition duration-300"
            />

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
              <Icon size={24} className="text-[#E4F68F]" />
              <span className="font-semibold text-sm">{title}</span>
            </div>

            <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}
