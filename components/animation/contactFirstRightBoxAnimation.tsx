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
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.9 }}
      className="flex flex-col justify-center gap-1"
    >
      <div className="text-2xl text-textWhite font-medium mb-5 mt-10">
        You can&apos;t use up creativity, <br />
        the more you use, more you have <br />
        in your significant main
        <br />
      </div>
      <div className="text-gray-400 text-xs drop-shadow-lg w-80 mb-15">
        Modern web and mobile solutions where ideas evolve into scalable,
        high-performance products with real-world impact.
      </div>
      <div className="flex gap-5 w-full">
        <div className="flex gap-2 justify-end items-end">
          <div className="text-6xl font-bold text-secondaryBg">2 </div>
          <div className="max-w-20 text-sm">year of experience</div>
        </div>
        <div className="flex gap-2 justify-end items-end">
          <div className="text-6xl font-bold text-secondaryBg">10+ </div>
          <div className="max-w-20 text-sm">Satisfied Client</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFirstRightBoxAnimation;
