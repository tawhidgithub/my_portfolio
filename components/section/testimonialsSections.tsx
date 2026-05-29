"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Product Manager",
    image: "/image/user1.jpg",
    feedback:
      "Tawhidul delivered a high-quality Flutter app with clean architecture and smooth performance. Communication was super professional.",
    rating: 5,
  },
  {
    name: "John Carter",
    role: "Startup Founder",
    image: "/image/user2.jpg",
    feedback:
      "One of the best React developers I’ve worked with. Clean code, fast delivery, and great UI sense.",
    rating: 5,
  },
  {
    name: "Ayesha Rahman",
    role: "UI/UX Designer",
    image: "/image/user3.jpg",
    feedback:
      "He perfectly converted my designs into responsive Next.js UI with great attention to detail and animations.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden w-[90%] md:max-w-[80%] mx-auto">
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
            <Star className="h-4 w-4 text-[var(--color-secondaryBg)]" />
            <span className="text-sm text-white/70">Client Feedback</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            What People
            <span className="text-[var(--color-secondaryBg)]"> Say</span>
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Real feedback from clients, collaborators, and people I’ve worked
            with.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl overflow-hidden"
            >
              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-10 -left-10 h-40 w-40 bg-yellow-400/10 blur-3xl rounded-full" />
              </div>

              {/* content */}
              <div className="relative z-10 flex flex-col gap-5">
                {/* user */}
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>

                {/* feedback */}
                <p className="text-white/70 leading-relaxed">“{t.feedback}”</p>

                {/* rating */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
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
