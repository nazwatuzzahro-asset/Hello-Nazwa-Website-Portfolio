"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutMe() {
  const router = useRouter();

  const tools = [
    { name: "Figma", src: "/figma.png" },
    { name: "VSCode", src: "/vscode.png" },
    { name: "GitHub", src: "/github.png" },
    { name: "Postman", src: "/postman.png" },
  ];

  const skillsData = [
    { name: "Figma", role: "UI/UX Designer" },
    { name: "Wireframing", role: "UI/UX Designer" },
    { name: "Prototyping", role: "UI/UX Designer" },
    { name: "JavaScript", role: "Frontend" },
    { name: "React", role: "Frontend" },
    { name: "Next.js", role: "Frontend" },
    { name: "Tailwind CSS", role: "Frontend" },
    { name: "TypeScript", role: "Frontend" },
    { name: "Git", role: "Frontend" },
    { name: "Node.js", role: "Backend" },
    { name: "Express.js", role: "Backend" },
    { name: "MongoDB", role: "Backend" },
    { name: "MySQL", role: "Backend" },
    { name: "PostgreSQL", role: "Backend" },
    { name: "Firebase", role: "Backend" },
  ];

  const [selectedRole, setSelectedRole] = useState("All");
  const roles = ["All", ...new Set(skillsData.map((s) => s.role))];
  const filteredSkills =
    selectedRole === "All"
      ? skillsData
      : skillsData.filter((s) => s.role === selectedRole);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16"
      style={{
        background: "linear-gradient(-20deg, #ffffff 40%, #E4F68F 100%)",
      }}
    >
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
          type: "spring",
        }}
        className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-16 flex flex-col gap-8 origin-bottom"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/about.png"
              alt="Nazwatuzzahro Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#B99470] whitespace-nowrap">
            About Me
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 text-sm sm:text-base">
          <p className="text-gray-700 leading-relaxed">
            Hello! I’m{" "}
            <span className="text-[#B99470] font-semibold">Nazwatuzzahro</span>,
            a passionate Web Developer and UI/UX Designer focused on creating
            modern, responsive, and user-friendly web applications. With a
            strong foundation in JavaScript, React, and Next.js, I enjoy turning
            ideas into beautiful digital experiences.
          </p>

          <p className="text-gray-600">
            When I’m not coding, I love to involved in student organizations
            such as the Student Association (HIMA), Faculty Study Group (KSM),
            and the AI4IMPACT Indonesia scholarship community, I have gained
            valuable experience in leadership, teamwork, and practical
            application of knowledge in dynamic and collaborative environments.
          </p>

          {/* Skills */}
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-[#B99470] mb-3 sm:mb-4">
              Skills
            </h2>
            {/* Filter Buttons */}
<div className="flex gap-2 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#B99470] scrollbar-track-gray-200 whitespace-nowrap py-2">
  <p className="text-[#B99470] flex-shrink-0">Choose My Role:</p>
  {roles.map((role) => (
    <button
      key={role}
      onClick={() => setSelectedRole(role)}
      className={`px-3 py-1 rounded-full text-sm shadow flex-shrink-0 ${
        selectedRole === role
          ? "bg-[#B99470] text-white"
          : "bg-[#FEFAE0] text-[#B99470]"
      }`}
    >
      {role}
    </button>
  ))}
</div>

            {/* Skills List */}
            <ul className="flex flex-wrap gap-3 sm:gap-4 text-gray-700">
              {filteredSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="bg-[#FEFAE0] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow text-xs sm:text-sm font-medium"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-[#B99470] mb-3 sm:mb-4">
              Tools
            </h2>
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {tools.map(({ name, src }) => (
                <li key={name} className="w-10 h-10 sm:w-12 sm:h-12 relative">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-contain"
                    priority
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Organization Activities */}
          <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-[#B99470] mb-3 sm:mb-4">
              Organization Activities
            </h2>
            <div
              className="flex overflow-x-auto space-x-3 sm:space-x-4 py-3 sm:py-4 scrollbar-thin scrollbar-thumb-[#B99470] scrollbar-track-gray-200"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {[
                { src: "/ai4impact.jpeg", desc: "AI4IMPACT Indonesia" },
                { src: "/hmif.jpeg", desc: "OPRESIF HMIF 2024" },
                { src: "/elc.jpeg", desc: "ELC 2024" },
                { src: "/comvis-hmif.jpeg", desc: "Company Visit at Telkomsigma" },
                { src: "/mabim.jpeg", desc: "Masa Bimbingan Informatika" },
                {
                  src: "/studi-banding-hmif.jpeg",
                  desc: "Studi Banding HMIF x UIN Jakarta",
                },
                { src: "/iftar.jpeg", desc: "Iftar with Android 2025" },
                {
                  src: "/ksm-android.jpeg",
                  desc: "Studi Banding KSM Android x BNCC",
                },
              ].map(({ src, desc }, idx) => (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-48 h-28 sm:w-64 sm:h-36 rounded-lg overflow-hidden shadow-lg scroll-snap-align-start"
                >
                  <Image
                    src={src}
                    alt={desc}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white text-xs sm:text-sm font-medium">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Find Me */}
          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-2xl font-semibold text-[#B99470]">
              Find Me
            </h2>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://github.com/nazwatuzzahro-asset"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 sm:p-3 bg-[#B99470] rounded-full text-white shadow hover:bg-[#a07d55] transition"
              >
                <Github size={20} className="sm:size-6" />
              </a>
              <a
                href="mailto:nazwatuzzahroo@gmail.com"
                aria-label="Email"
                className="p-2 sm:p-3 bg-[#B99470] rounded-full text-white shadow hover:bg-[#a07d55] transition"
              >
                <Mail size={20} className="sm:size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nazwatuzzahro-65186820b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 sm:p-3 bg-[#B99470] rounded-full text-white shadow hover:bg-[#a07d55] transition"
              >
                <Linkedin size={20} className="sm:size-6" />
              </a>
            </div>
          </div>

          {/* Back to Dashboard */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-1 sm:gap-2 text-[#B99470] hover:text-[#a07d55] transition font-medium text-sm sm:text-base"
            >
              <ChevronLeft size={18} className="sm:size-5" />
              Back to Dashboard
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
