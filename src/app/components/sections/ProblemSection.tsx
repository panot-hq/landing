"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 bg-neutral-900 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono leading-tight">
            Tu agenda es estática.
            <br />
            <span className="text-neutral-500">Tu vida social no.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
