"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "Metal Studio",
    period: "May 2025 - Present",
    description:
      "Developing scalable React applications and shared component systems. Integrated AI-powered chat and voice-to-text features, built centralized API services, and resolved critical production issues across multiple projects.",
    tags: ["React", "Next.js", "TypeScript","Flutter", "AI Integration", "REST API"],
  },
  {
    role: "Junior Software Engineer",
    company: "Appartisans Lab",
    period: "Jul 2024 - Apr 2025",
    description:
      "Built and maintained Flutter applications for international clients. Developed reusable UI components, implemented GetX state management, integrated REST APIs, and delivered production-ready mobile features.",
    tags: ["Flutter", "Dart", "GetX", "REST API", "Firebase"],
  },
  {
    role: "Full Stack Developer",
    company: "Selected Projects",
    period: "2023 - Present",
    description:
      "Delivered government, fintech, and consumer applications including veterinary management, fleet tracking, and matrimonial platforms using Flutter, React, Node.js, Firebase, and MongoDB.",
    tags: ["Flutter", "React", "Node.js", "MongoDB", "Firebase"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="relative py-28 w-[90%] md:max-w-[80%] mx-auto">
      {/* background glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <Briefcase className="h-4 w-4 text-[var(--color-secondaryBg)]" />
            <span className="text-sm text-white/70">Work Experience</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            My Professional
            <span className="text-[var(--color-secondaryBg)]"> Journey</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            A timeline of my work experience, projects, and contributions in
            mobile and web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="mb-12 ml-6"
            >
              {/* dot */}
              <span className="absolute -left-[9px] flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-secondaryBg)] opacity-30" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-[var(--color-secondaryBg)]" />
              </span>

              {/* card */}
              <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:translate-x-1">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>

                  <span className="text-sm text-white/50">{exp.period}</span>
                </div>

                <p className="mt-1 text-white/70">{exp.company}</p>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {exp.description}
                </p>

                {/* tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
