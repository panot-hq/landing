"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AudioVisualizer from "../AudioVisualizer";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-16 pt-24 sm:px-8">
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-row gap-4 sm:gap-10 items-center mb-5 flex-wrap">
            <p className="text-4xl sm:text-5xl md:text-7xl font-mono">
              {t("title")}{" "}
            </p>{" "}
            <div className="bg-black w-20 sm:w-30 h-2 hidden sm:block" />{" "}
            <p className="text-4xl sm:text-5xl md:text-7xl font-mono">,</p>
          </div>
          <p className="text-xl sm:text-2xl md:text-4xl font-mono">
            {t("subtitle")}
          </p>

          <div className="flex justify-center items-center">
            <div className="mt-12 flex justify-center items-center bg-stone-100 rounded-full p-4 h-20 w-80">
              <AudioVisualizer barCount={30} color="#000" maxHeight={40} />
            </div>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-neutral-400"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
