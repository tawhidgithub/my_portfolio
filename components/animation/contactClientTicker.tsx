"use client";
import { motion } from "framer-motion";
import { clientData, TickerType } from "@/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface TickerProps {
  TickerData: TickerType[];
}

const TickerAnimations = ({ TickerData }: TickerProps) => {
  const [width, setWidth] = useState(0);

  const duplicatedData = [...TickerData, ...TickerData];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className=" w-full">
      <motion.div
        ref={containerRef}
        animate={{ x: [0, -width] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        viewport={{ once: true }}
        className="flex gap-6 w-max"
      >
        {duplicatedData.map((data: TickerType, index) => (
          <div
            key={index}
            className="group flex items-center gap-2 px-4 py-2 bg-primaryDarkBg rounded-md shadow-lg/60 hover:scale-105 hover:bg-secondaryBg transition-transform duration-700 "
          >
            {data.logo && (
              <Image src={data.logo} alt={data.name} width={24} height={24} />
            )}
            <div className="text-lg leading-4 whitespace-nowrap text-shadow-lg/60 text-gray-300 font-medium  group-hover:text-primaryDarkBg group-hover:text-shadow-none">
              {data.name}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TickerAnimations;
