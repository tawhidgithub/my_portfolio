"use client";

import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiAppwrite,
} from "react-icons/si";

import TickerAnimations from "../animation/contactClientTicker";
import { SkillsData } from "@/data";

const skills = [
  {
    title: "Flutter",
    icon: FaFlutter,
    level: "95%",
  },
  {
    title: "React",
    icon: FaReact,
    level: "90%",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    level: "88%",
  },
  {
    title: "Node.js",
    icon: FaNodeJs,
    level: "75%",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    level: "85%",
  },
  {
    title: "Firebase",
    icon: SiFirebase,
    level: "92%",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    level: "80%",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "90%",
  },
  {
    title: "Redux",
    icon: SiRedux,
    level: "82%",
  },
  {
    title: "Git",
    icon: FaGitAlt,
    level: "93%",
  },
  {
    title: "Appwrite",
    icon: SiAppwrite,
    level: "84%",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden py-28 max-w-[80%] mx-auto">
      {/* blur bg */}
      <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div>
        <div className="flex flex-col gap-16">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <div className="mb-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
              <span className="text-sm text-white/70">My Tech Arsenal ⚡</span>
            </div>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Building Modern Apps With
              <span className="text-[var(--color-secondaryBg)]">
                {" "}
                Powerful Technologies
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
              I specialize in crafting scalable, performant, and visually
              polished mobile and web applications using modern technologies and
              best practices.
            </p>
          </motion.div>

          {/* skills grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex flex-col gap-6">
                    {/* icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primaryLightBg)] text-[var(--color-secondaryBg)] transition duration-300 group-hover:scale-110">
                      <Icon size={32} />
                    </div>

                    {/* content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{skill.title}</h3>

                        <span className="text-sm text-white/50">
                          {skill.level}
                        </span>
                      </div>

                      {/* progress */}
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: skill.level,
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-[var(--color-secondaryBg)]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* bottom stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <TickerAnimations TickerData={SkillsData} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
