"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSections() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[var(--color-primaryDarkBg)] py-20 ">
      {/* glow background */}
      <div className="absolute top-0 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="w-[90%] md:max-w-[80%] mx-auto">
        <div className="flex flex-col gap-14">
          {/* top grid */}
          <div className="grid gap-10 md:grid-cols-3">
            {/* brand */}
            <div>
              <h2 className="text-2xl font-bold">
                Tawhidul
                <span className="text-[var(--color-secondaryBg)]">.dev</span>
              </h2>

              <p className="mt-4 text-white/60 leading-relaxed">
                Building modern mobile & web apps with Flutter, React & Next.js.
                Focused on clean UI, performance, and scalable architecture.
              </p>

              {/* socials */}
              <div className="mt-6 flex items-center gap-4">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -4, scale: 1.1 }}
                    href="#"
                    className="rounded-full border border-white/10 bg-white/5 p-3 hover:border-yellow-400/30 transition"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between text-white/60 hover:text-white transition"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact quick */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Let’s Talk</h3>

              <div className="space-y-3 text-white/60">
                <p>📍 Mymensingh, Bangladesh</p>
                <p>📧 tawhidul.dev@email.com</p>
                <p>💼 Available for freelance & remote work</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 rounded-2xl bg-[var(--color-secondaryBg)] px-6 py-3 text-black font-medium hover:bg-yellow-300 transition"
              >
                Hire Me
              </motion.button>
            </div>
          </div>

          {/* divider */}
          <div className="h-px w-full bg-white/10" />

          {/* bottom bar */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Tawhidul. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
