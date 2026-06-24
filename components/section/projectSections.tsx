"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const projects = [
  {
    num: "01",
    tag: "app",
    title: "Ordhekdeen",
    description:
      "A secure, Shariah-compliant Islamic matrimony application designed to help practicing Muslims in Bangladesh find compatible life partners based on shared faith and values.",
    tech: ["Flutter", "Firebase", "Getx"],
    side: "left",
  },
  {
    num: "02",
    tag: "web",
    title: "Weebard",
    description:
      "A multifunctional SaaS platform designed to streamline professional workflows by integrating ATS-friendly resume management, real-time team collaboration, and automated productivity tools.",
    tech: ["Next.js", "Tailwind", "React query"],
    side: "right",
  },
  {
    num: "03",
    tag: "app",
    title: "Brac Bank Cholo",
    description:
      "An official corporate transport management application designed to streamline daily employee commuting through real-time vehicle tracking, automated booking workflows, and trip history management",
    tech: ["Flutter", "Dart"],
    side: "left",
  },
  {
    num: "04",
    tag: "web",
    title: "Veterinary Information System - NCAH",
    description:
      "Engineered a modular, highly secure React frontend for Bhutan’s National Veterinary Information System (VIS), centralizing livestock registration, mass vaccination campaigns, and clinical record management for government extension centers nationwide.",
    tech: ["React", "Axios", "Clean Architecture"],
    side: "right",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="group relative flex-none w-full md:w-[260px] bg-primaryBg rounded-2xl border border-white/5 p-[22px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-secondaryBg/25">
      {/* Top accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-secondaryBg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Big background number */}
      <span className="absolute top-2.5 right-4 font-bold text-[44px] leading-none text-secondaryBg opacity-[0.10] select-none pointer-events-none">
        {project.num}
      </span>

      {/* Tag */}
      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-[5px] h-[5px] rounded-full bg-secondaryBg flex-shrink-0" />
        <span className="text-[10px] tracking-[3px] uppercase text-secondaryBg">
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold text-textWhite tracking-tight mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-textWhite/50 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium bg-primaryDarkBg text-textWhite/60 border border-white/[0.07] rounded-full px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function BranchRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = project.side === "left";

  return (
    <motion.div
      ref={ref}
      className={`relative z-10 flex flex-col md:flex-row items-center w-full max-w-[640px] mx-auto mb-9 gap-4 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.16,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <ProjectCard project={project} />

      {/* Connector line with dot */}
      <div className="hidden md:block relative flex-1 h-px bg-secondaryBg/35">
        <span
          className={`absolute top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-secondaryBg/50 ${
            isLeft ? "right-0" : "left-0"
          }`}
        />
      </div>

      {/* Center node */}
      <div className="hidden md:flex flex-none items-center justify-center w-7 h-7 z-10">
        <div className="w-7 h-7 rounded-full border border-secondaryBg/35 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-secondaryBg" />
        </div>
      </div>

      {/* Empty side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative py-20 px-6 bg-primaryDarkBg overflow-hidden">
      {/* Soft ambient orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secondaryBg/[0.06] blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-secondaryBg/[0.04] blur-[50px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-2.5 mb-2.5">
          <span className="w-8 h-px bg-secondaryBg opacity-60" />
          <span className="text-[11px] tracking-[4px] uppercase text-secondaryBg">
            My Work
          </span>
          <span className="w-8 h-px bg-secondaryBg opacity-60" />
        </div>
        <h2 className="text-[36px] font-extrabold text-textWhite tracking-tight">
          Featured <span className="text-secondaryBg">Projects</span>
        </h2>
      </div>

      {/* Tree */}
      <div className="relative">
        {/* Vertical trunk */}
        <div className="hidden md:block absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 bg-secondaryBg opacity-20" />

        {projects.map((project, index) => (
          <BranchRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
