"use client";
import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion

export const HeroBGAnimation = () => {
  return (
    <div className="">
      <motion.div
        className="absolute h-122.5 inset-0 bg-[url('/image/myImage.png')] bg-center bg-no-repeat bg-contain mt-2"
        // Initial state: hidden and normal scale
        initial={{ opacity: 0, scale: 1 }}
        // Final state: visible with slight zoom effect
        animate={{ opacity: 1, scale: 1.05 }}
        // Animation config: smooth ease-in-out over 0.9s
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </div>
  );
};
