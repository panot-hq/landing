"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScreenProps {
  children: ReactNode;
}

export default function Page({ children }: ScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing curve for smooth ease-in
      }}
    >
      {children}
    </motion.div>
  );
}
