"use client";
import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons";

const HeroLeftContent = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      <div className="flex flex-col">
        <FontAwesomeIcon
          icon={faFaceGrin}
          className="text-secondaryBg size-8"
        />
        <div className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg tracking-wide">
          Tawhid <br />
          <span className="ml-4">Islam.</span>
        </div>
        <div className="w-24 h-3 bg-secondaryBg rounded"></div>
      </div>
    </motion.div>
  );
};

export default HeroLeftContent;
