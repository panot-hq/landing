"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import InteractionColapsible from "../InteractionsCollapsible";

export default function DemoSection() {
  const t = useTranslations("demo");

  const steps = [
    {
      number: 1,
      title: t("steps.1.title"),
      description: t("steps.1.description"),
    },
    {
      number: 2,
      title: t("steps.2.title"),
      description: t("steps.2.description"),
    },
    {
      number: 3,
      title: t("steps.3.title"),
      description: t("steps.3.description"),
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-neutral-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FF5117] font-mono text-sm mb-4 tracking-wider uppercase">
              {t("label")}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono leading-tight mb-8">
              {t("title")}
            </h2>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center text-xs font-mono flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <p className="text-neutral-900 font-medium mb-1">
                      {step.title}
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InteractionColapsible />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
