"use client";
import React from "react";
import CustomButton from "../custom_component/CustomButton";
import { motion } from "framer-motion";

interface ContactFirstLeftBoxAnimationProps {
  onContactClick?: () => void;
}

const ContactFirstLeftBoxAnimation = ({
  onContactClick,
}: ContactFirstLeftBoxAnimationProps) => {
  return (
    <motion.div
      // Initial state: hidden and slightly shifted left
      initial={{ opacity: 0, x: -50 }}
      // Trigger animation when component enters the viewport
      whileInView={{ opacity: 1, x: 0 }}
      // Animation config: smooth ease-out with short duration
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Viewport config: run once when 90% is visible
      className="flex flex-col justify-center gap-1"
    >
      <h1 className="text-lg font-normal text-gray-400">-- contact</h1>

      <h1 className="text-2xl md:text-3xl font-medium text-textPrimary mb-5">
        Any Type Of Query <br className="hidden sm:block" /> & Discussion.
      </h1>

      <div className="text-gray-400 text-xs w-full md:w-80 mb-15">
        Modern Web & Mobile Products Built for Speed, Scale & Impact.
      </div>

      <CustomButton
        btnText="tawhidsoftdev@gmail.com"
        onClick={onContactClick}
      />
    </motion.div>
  );
};

export default ContactFirstLeftBoxAnimation;
