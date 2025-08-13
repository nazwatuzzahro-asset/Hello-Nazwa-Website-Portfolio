"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      year: "Juni 2025",
      role: "Backend Developer Recipedia Service",
      company: "Recipedia Team",
      description:
        "Responsible for building the backend microservice for the Recipe Service, including data modeling, route creation, and other configurations. Implemented a service-oriented architecture using MQTT as a message broker for inter-service communication.",
    },
    {
      year: "Mei 2025 - Now",
      role: "System Analyst Website Android Portal ",
      company: "KSM Android",
      description:
        "Analyze system requirements based on the needs of users and stakeholders. Design system flow diagrams, use cases, activity diagrams, and entity relationship diagrams (ERD) for both backend and frontend requirements.",
    },
    {
      year: "April - Juni 2025",
      role: "Frontend Developer for Food Delivery Service Website",
      company: "Tipme Team",
      description:
        "Participated in a team to design the application flow and create interactive user interface designs. Developed a dynamic interface for the ‘Titipan’ website using Next.js and Tailwind CSS, including a multi-product shopping cart feature. Retrieved product and transaction data from the server using APIs",
    },
    {
      year: "2024",
      role: "UI/UX Designer for Leftover Redistribution App (BagiSaji) ",
      company: "KSM Android",
      description:
        "Conducted user research on managing leftover food, created personas and journey maps, adapted designs from testing and analytics, applied UCD principles, developed wireframes and high-fidelity prototypes in Figma, and produced interactive videos to present design concepts and user flows.",
    },
    {
      year: "2024",
      role: "UI/UX Designer for AI- and IoT-Based Child Monitoring App (MoonA)",
      company: "The Fairy Team",
      description:
        "Conducted user research and usability testing to understand parents’ needs, identify pain points, and create user personas and journey maps for improved product design.",
    },
  ];

  return (
    <section className="relative py-4 px-6 md:px-16 overflow-hidden" id="experience">
     { /* Bird background */}
<div className="absolute top-0 left-0 w-full aspect-[16/9] opacity-50">
  <Image
    src="/bird.png"
    alt="Bird"
    fill
    className="object-cover opacity-80"
  />
</div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#B99470]">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="relative pl-10 mb-12"
            >
              {/* Circle Overlapping Line */}
              <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#B99470] border-4 border-white shadow-md flex items-center justify-center">
                <Briefcase className="text-white w-4 h-4" />
              </span>

              {/* Content */}
              <div className="backdrop-blur-sm bg-white rounded-xl shadow-md p-6">
                <span className="text-sm font-semibold text-[#B99470]">
                  {exp.year}
                </span>
                <h3 className="text-lg font-bold text-[#153448]">{exp.role}</h3>
                <p className="text-[#153448] mb-2">{exp.company}</p>
                <p className="text-[#153448]">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
