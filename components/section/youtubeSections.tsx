"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Youtube, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredVideo = {
  id: "M0LxhuZPlEw",
  title: "Exploring Insane AI Tools That Every Developer Should Try in 2026 🚀",
  thumbnail: "https://img.youtube.com/vi/M0LxhuZPlEw/maxresdefault.jpg",
  views: "Latest Upload",
};

const videos = [
  {
    id: "M0LxhuZPlEw",
    title: "Reviewing Crazy New AI Tools For Developers",
    thumbnail: "https://img.youtube.com/vi/M0LxhuZPlEw/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=M0LxhuZPlEw",
    views: "Latest Upload",
    duration: "Watch",
  },
  {
    id: "pVadKFDpodY",
    title: "My Developer Journey & Content Creation",
    thumbnail: "https://img.youtube.com/vi/pVadKFDpodY/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=pVadKFDpodY",
    views: "Watch on YouTube",
    duration: "Watch",
  },
];

export default function YoutubeSection() {
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden py-28 w-[90%] md:max-w-[80%] mx-auto">
      {/* background blur */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

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
            I create developer content about AI tools, coding struggles, modern
            web development, and funny programming moments.
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
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
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
                onClick={() => setModalVideoId(featuredVideo.id)}
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
                <span className="text-sm text-white/70">
                  {featuredVideo.views}
                </span>
              </div>
              <h3 className="max-w-2xl text-2xl font-bold leading-snug md:text-5xl">
                {featuredVideo.title}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* videos grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* thumbnail */}
              <div
                className="relative h-60 overflow-hidden cursor-pointer"
                onClick={() => setModalVideoId(video.id)}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* play icon on hover */}
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
                  <Button
                    onClick={() => setModalVideoId(video.id)}
                    className="rounded-full bg-[var(--color-secondaryBg)] px-5 text-black hover:bg-yellow-300"
                  >
                    Watch
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setModalVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close button */}
              <button
                onClick={() => setModalVideoId(null)}
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
