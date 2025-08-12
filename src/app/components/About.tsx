"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutMe() {
    const router = useRouter();

  const orgPhotos = [
    "/org1.jpg",
    "/org2.jpg",
    "/org3.jpg",
    "/org4.jpg",
  ];

  const tools = [
    { name: "Figma", src: "/figma.png" },
    { name: "VSCode", src: "/vscode.png" },
    { name: "GitHub", src: "/github.png" },
    { name: "Postman", src: "/postman.png" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FEFAE0] to-white flex flex-col items-center justify-center px-6 py-16"
    style={{
        background: "linear-gradient(-20deg, #ffffff 40%, #E4F68F 100%)",
      }}>
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 md:p-16 flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex items-center gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src="/about.png"
              alt="Nazwatuzzahro Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-[#B99470] whitespace-nowrap">
            About Me
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-700 leading-relaxed">
            Hello! I’m <span className="text-[#B99470] font-semibold">Nazwatuzzahro</span>, a passionate Web Developer and UI/UX Designer focused on creating modern, responsive, and user-friendly web applications. With a strong foundation in JavaScript, React, and Next.js, I enjoy turning ideas into beautiful digital experiences.
          </p>

          <p className="text-gray-600">
            When I’m not coding, I love to involved in student organizations such as the Student Association (HIMA), Faculty Study Group (KSM), and the AI4IMPACT Indonesia scholarship community, I have gained valuable experience in leadership, teamwork, and practical application of knowledge in dynamic and collaborative environments.
          </p>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-[#B99470] mb-4">Skills</h2>
            <ul className="flex flex-wrap gap-4 text-gray-700">
              {["JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Git"].map((skill) => (
                <li
                  key={skill}
                  className="bg-[#FEFAE0] px-4 py-2 rounded-full shadow text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-2xl font-semibold text-[#B99470] mb-4">Tools</h2>
            <ul className="flex flex-wrap gap-6">
              {tools.map(({ name, src }) => (
                <li key={name} className="w-12 h-12 relative">
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
<div className="mt-6">
  <h2 className="text-2xl font-semibold text-[#B99470] mb-4">
    Organization Activities
  </h2>

  <div
    className="flex overflow-x-auto space-x-4 py-4 scrollbar-thin scrollbar-thumb-[#B99470] scrollbar-track-gray-200"
    style={{ scrollSnapType: "x mandatory" }}
  >
   {[
      { src: "/ai4impact.jpeg", desc: "AI4IMPACT Indonesia" },
      { src: "/hmif.jpeg", desc: "OPRESIF HMIF 2024" },
      { src: "/elc.jpeg", desc: "ELC 2024" },
      { src: "/comvis-hmif.jpeg", desc: "Company Visit at Telkomsigma" },
      { src: "/mabim.jpeg", desc: "Masa Bimbingan Informatika" },
      { src: "/studi-banding-hmif.jpeg", desc: "Studi Banding HMIF x UIN Jakarta" },
      { src: "/iftar.jpeg", desc: "Iftar with Android 2025" },
      { src: "/ksm-android.jpeg", desc: "Studi Banding KSM Androi x BNCC" },
    ].map(({ src, desc }, idx) => (
      <div
        key={idx}
        className="relative flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden shadow-lg scroll-snap-align-start"
      >
        {/* Image */}
        <Image
          src={src}
          alt={desc}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Description Text */}
        <p className="absolute bottom-2 left-2 text-white text-sm font-medium">
          {desc}
        </p>
      </div>
    ))}
  </div>
</div>


        {/* Find Me */}
          <div className="mt-6 flex flex-col items-start gap-4">
            <h2 className="text-2xl font-semibold text-[#B99470]">Find Me</h2>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/nazwatuzzahro-asset"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-[#B99470] rounded-full text-white shadow hover:bg-[#a07d55] transition"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:nazwatuzzahroo@gmail.com"
                aria-label="Email"
                className="p-3 bg-[#B99470] rounded-full text-white shadow hover:bg-[#a07d55] transition"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nazwatuzzahro-65186820b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-[#B99470] rounded-full text-white shadow hover:bg-[#a07d55] transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

         {/* Back to Dashboard Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-[#B99470] hover:text-[#a07d55] transition font-medium"
            >
              <ChevronLeft size={20} />
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
