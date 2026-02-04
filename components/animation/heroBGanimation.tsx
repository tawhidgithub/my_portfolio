"use client";
import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion

export const HeroBGAnimation = () => {
  return (
    <div className="">
      <motion.div
        className="absolute h-[80vh] inset-0 bg-[url('/image/myImage.png')] bg-center bg-no-repeat bg-contain mt-2"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }} // fade + slight zoom
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </div>
  );
};
