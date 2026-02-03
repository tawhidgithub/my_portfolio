"use client";

import React from "react";
import { motion } from "framer-motion"; // ✅ Import motion
import { Button } from "../ui/button";
import { ArrowBigRight } from "lucide-react";

const HeroRightAnimation = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
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
      <div className="flex flex-col gap-4 max-w-lg pl-[12.5rem] mt-5">
        <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
          Software Engineer — Bangladesh
        </div>
        <div className="text-gray-300 text-lg drop-shadow-lg">
          Modern Mobile & Web Development Focused on Speed, Scale & UX
        </div>
        <div className="flex justify-start">
          <Button className="bg-transparent border-2 border-black text-secondaryBg flex items-center gap-2 hover:scale-110 transition cursor-pointer">
            My Story
            <ArrowBigRight size={32} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroRightAnimation;
