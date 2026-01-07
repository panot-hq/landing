"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono leading-tight mb-6">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto mb-10">
            {t("subtitle")}
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-mono text-lg hover:bg-neutral-800 transition-colors flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {t("appStore")}
            </button>
            <span className="text-neutral-400 font-mono text-sm">
              {t("comingSoon")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
