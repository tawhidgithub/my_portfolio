"use client";
import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons";

const HeroLeftContent = () => {
  return (
    <motion.div
      // Initial state: hidden and slightly shifted left
      initial={{ opacity: 0, x: -50 }}
      // Final state: fully visible and in original position
      animate={{ opacity: 1, x: 0 }}
      // Animation config: smooth ease-out over 0.8 seconds
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col">
        <FontAwesomeIcon
          icon={faFaceGrin}
          className="text-secondaryBg size-8"
        />
        <div className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white drop-shadow-lg tracking-wide">
          Tawhid <br />
          <span className="ml-4">Islam.</span>
        </div>
        <div className="w-24 h-3 bg-secondaryBg rounded"></div>
      </div>
    </motion.div>
  );
};

export default HeroLeftContent;
