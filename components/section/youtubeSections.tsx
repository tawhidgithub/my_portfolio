"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Play, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";

const videos = [
  {
    id: 1,
    title: "Reviewing Crazy New AI Tools For Developers",
    thumbnail: "/image/youtube-thumb-1.jpg",
    views: "12K Views",
    duration: "08:24",
  },
  {
    id: 2,
    title: "Funny JavaScript Developer Moments 😂",
    thumbnail: "/image/youtube-thumb-2.jpg",
    views: "8.4K Views",
    duration: "05:12",
  },
  {
    id: 3,
    title: "Building My Portfolio With Next.js 16",
    thumbnail: "/image/youtube-thumb-3.jpg",
    views: "15K Views",
    duration: "11:45",
  },
];

export default function YoutubeSection() {
  return (
    <section className="relative overflow-hidden py-28 max-w-[80%] mx-auto">
      {/* background blur */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      <div>
        <div className="flex flex-col gap-16">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Youtube className="h-4 w-4 text-yellow-400" />

              <span className="text-sm text-white/70">
                Content Creator Journey
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Sharing Dev Knowledge &
              <span className="text-[var(--color-secondaryBg)]">
                {" "}
                Funny Tech Content
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              I create developer content about AI tools, coding struggles,
              modern web development, and funny programming moments.
            </p>
          </motion.div>

          {/* featured video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <div className="relative h-[250px] overflow-hidden rounded-3xl md:h-[550px]">
              <Image
                src="/image/youtube-featured.jpg"
                alt="Featured Youtube Video"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-secondaryBg)] shadow-2xl"
                >
                  <Play className="ml-1 h-10 w-10 text-black" fill="black" />
                </motion.button>
              </div>

              {/* content */}
              <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-4 p-6 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-red-500 px-4 py-1 text-xs font-semibold">
                    FEATURED VIDEO
                  </span>

                  <span className="text-sm text-white/70">24K Views</span>
                </div>

                <h3 className="max-w-2xl text-2xl font-bold leading-snug md:text-5xl">
                  Exploring Insane AI Tools That Every Developer Should Try in
                  2026 🚀
                </h3>
              </div>
            </div>
          </motion.div>

          {/* videos grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {/* thumbnail */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute right-4 bottom-4 rounded-lg bg-black/70 px-2 py-1 text-xs font-medium">
                    {video.duration}
                  </div>

                  {/* play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondaryBg)]">
                      <Play className="ml-1 h-7 w-7 text-black" fill="black" />
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold leading-snug transition duration-300 group-hover:text-[var(--color-secondaryBg)]">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">{video.views}</span>

                    <Button className="rounded-full bg-[var(--color-secondaryBg)] px-5 text-black hover:bg-yellow-300">
                      Watch
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
