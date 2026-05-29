"use client";
import React from "react";
import CustomButton from "../custom_component/CustomButton";
import { motion } from "framer-motion";

interface ContactFirstLeftBoxAnimationProps {
  onContactClick?: () => void;
}

const ContactFirstRightBoxAnimation = ({
  onContactClick,
}: ContactFirstLeftBoxAnimationProps) => {
  return (
    <motion.div
      // Initial state: hidden and slightly shifted right
      initial={{ opacity: 0, x: 50 }}
      // Trigger animation when component enters the viewport
      whileInView={{ opacity: 1, x: 0 }}
      // Animation config: smooth ease-out with short duration
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Viewport config: run once when 90% is visible
      className="flex flex-col justify-center gap-1"
    >
      <div className="text-xl md:text-2xl text-textWhite font-medium mb-5 mt-10">
        You can&apos;t use up creativity, <br className="hidden sm:block" />
        the more you use, more you have <br className="hidden sm:block" />
        in your significant main
        <br />
      </div>
      <div className="text-gray-400 text-xs drop-shadow-lg w-full md:w-80 mb-15">
        Modern web and mobile solutions where ideas evolve into scalable,
        high-performance products with real-world impact.
      </div>
      <div className="flex gap-4 md:gap-5 w-full">
        <div className="flex gap-2 justify-end items-end">
          <div className="text-5xl md:text-6xl font-bold text-secondaryBg">2 </div>
          <div className="max-w-20 text-sm">year of experience</div>
        </div>
        <div className="flex gap-2 justify-end items-end">
          <div className="text-5xl md:text-6xl font-bold text-secondaryBg">10+ </div>
          <div className="max-w-20 text-sm">Satisfied Client</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFirstRightBoxAnimation;
