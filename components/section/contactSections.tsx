"use client";

import { motion } from "motion/react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactSection3D() {
  return (
    <section className="relative py-28 overflow-hidden px-4 md:px-0">
      {/* background glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

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
            <Mail className="h-4 w-4 text-[var(--color-secondaryBg)]" />
            <span className="text-sm text-white/70">Let’s Work Together</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Got a
            <span className="text-[var(--color-secondaryBg)]"> Project?</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Have an idea? Let’s build something amazing together. I’m open to
            freelance, remote work, and collaborations.
          </p>
        </motion.div>

        {/* 3D Card Wrapper */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              rotateY: 8,
              rotateX: -6,
              scale: 1.02,
            }}
            className="relative w-full max-w-2xl perspective-[1200px]"
          >
            {/* glow layer */}
            <div className="absolute inset-0 -z-10 rounded-4xl bg-gradient-to-br from-yellow-400/10 via-transparent to-blue-400/10 blur-2xl" />

            {/* main card */}
            <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl transform-gpu transition">
              {/* email section */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Contact Me</h3>

                  <span className="text-sm text-white/50">
                    Usually replies within 24h
                  </span>
                </div>

                {/* email box */}
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[var(--color-secondaryBg)]" />
                    <span className="text-white/70">
                      tawhidul.dev@email.com
                    </span>
                  </div>

                  <Button className="bg-[var(--color-secondaryBg)] text-black hover:bg-yellow-300">
                    Copy
                  </Button>
                </div>

                {/* message input (UI only) */}
                <div className="space-y-4">
                  <input
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-yellow-400/40"
                  />

                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none focus:border-yellow-400/40"
                  />
                </div>

                {/* send button */}
                <Button className="flex items-center justify-center gap-2 bg-[var(--color-secondaryBg)] text-black hover:bg-yellow-300 rounded-2xl py-6 text-base">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>

                {/* social links */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="rounded-full border border-white/10 bg-white/5 p-3 hover:border-yellow-400/30"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className="rounded-full border border-white/10 bg-white/5 p-3 hover:border-yellow-400/30"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
