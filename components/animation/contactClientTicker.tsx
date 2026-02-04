"use client";
import { motion } from "framer-motion";
import { clientData, Client } from "@/data";

const ContactClientTicker = () => {
  return (
    <div>
      <motion.div
        animate={{ x: [-0, -100] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        }}
        viewport={{ once: true }}
        className="flex gap-6"
      >
        {clientData.map((data: Client) => (
          <div key={data.id} className="">
            {data.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactClientTicker;
