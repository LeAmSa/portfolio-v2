import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h3
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="absolute top-16 md:top-20 uppercase tracking-[20px] -mr-[20px] text-gray-500 text-xl md:text-2xl"
    >
      {title}
    </motion.h3>
  );
}

export default SectionTitle;
