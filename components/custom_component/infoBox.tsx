"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfoBoxProps {
  title: string;
  icon: React.ReactNode;
  counter: number;
  derection?: "left" | "right" | "middle";
}

const InfoBox = ({
  title,
  icon,
  counter,
  derection = "middle",
}: InfoBoxProps) => {
  return (
    <div>
      <motion.div
        animate={{
          x:
            derection === "left"
              ? [-100, 0]
              : derection === "right"
                ? [100, 0]
                : [0, 0],
          opacity: [0, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className=" h-55 w-55 bg-primaryLightBg shadow-xl rounded-sm flex  items-end justify-center hover:scale-105 hover:bg-secondaryBg transition cursor-pointer gap-2"
      >
        <div className="flex gap-3 w-full justify-center mb-6">
          <div className="text-2xl">{icon}</div>

          <div className="flex flex-col justify-center">
            <div className="text-lg font-bold wrap-break-word w-32 mb-4">
              {title}.
            </div>
            <div className="text-sm  text-gray-400">{counter} Project</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoBox;
