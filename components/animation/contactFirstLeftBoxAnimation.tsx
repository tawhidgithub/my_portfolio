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
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.9 }}
      className="flex flex-col justify-center gap-1"
    >
      <h1 className="text-lg font-normal text-gray-400">-- contact</h1>

      <h1 className="text-3xl font-medium text-textPrimary mb-5">
        Any Type Of Query <br /> & Discussion.
      </h1>

      <div className="text-gray-400 text-xs w-80 mb-15">
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
