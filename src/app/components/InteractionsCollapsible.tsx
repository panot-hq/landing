"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface Interaction {
  id: number;
  messageKey: string;
  time: string;
  dateKey: string;
}

const interactionsData: Interaction[] = [
  {
    id: 1,
    messageKey: "1",
    time: "12:36 PM",
    dateKey: "today",
  },
  {
    id: 2,
    messageKey: "2",
    time: "07:34 AM",
    dateKey: "yesterday",
  },
  {
    id: 3,
    messageKey: "3",
    time: "04:30 PM",
    dateKey: "today",
  },
  {
    id: 4,
    messageKey: "4",
    time: "10:13 PM",
    dateKey: "today",
  },
  {
    id: 5,
    messageKey: "5",
    time: "11:20 AM",
    dateKey: "yesterday",
  },
];

export default function InteractionColapsible() {
  const t = useTranslations("interactions");
  const [visibleInteractions, setVisibleInteractions] = useState<Interaction[]>(
    [interactionsData[0]]
  );
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleInteractions((prev) => {
        const newInteraction = interactionsData[currentIndex];
        const updated = [newInteraction, ...prev].slice(0, 3);
        return updated;
      });
      setCurrentIndex((prev) => (prev + 1) % interactionsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getDate = (dateKey: string) => {
    return t(dateKey);
  };

  const getMessage = (messageKey: string) => {
    return t(`messages.${messageKey}`);
  };

  return (
    <div className="mt-8 sm:mt-12 flex flex-col items-center px-4 sm:px-0">
      <div className="relative w-full max-w-md" style={{ height: "200px" }}>
        <AnimatePresence mode="popLayout">
          {visibleInteractions.map((interaction, index) => {
            const stackOffset = index * 10;
            const scale = 1 - index * 0.04;
            const opacity = index === 0 ? 1 : 1 - index * 0.25;
            const zIndex = visibleInteractions.length - index;
            const blur = index > 0 ? index * 0.5 : 0;

            return (
              <motion.div
                key={interaction.id}
                initial={{
                  y: -30,
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  y: stackOffset,
                  opacity: opacity,
                  scale: scale,
                  filter: `blur(${blur}px)`,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 40,
                }}
                className="absolute left-0 right-0"
                style={{
                  zIndex: zIndex,
                  transformOrigin: "top center",
                }}
              >
                <div
                  className="relative bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 p-4 sm:p-5 mx-auto"
                  style={{
                    boxShadow:
                      index === 0
                        ? "0 4px 12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)"
                        : `0 ${2 + index * 2}px ${8 + index * 4}px rgba(0,0,0,${
                            0.05 + index * 0.02
                          })`,
                  }}
                >
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FF5117] rounded-full mb-1.5 absolute top-[-20] sm:top-[-25] right-[-15] sm:right-[-20]" />
                    <div className="flex items-start justify-between gap-2 sm:gap-0">
                      <div className="flex-1 pr-2 sm:pr-3">
                        <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1.5">
                          {getDate(interaction.dateKey)}
                        </p>
                        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                          {getMessage(interaction.messageKey)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0">
                        <span className="text-xs sm:text-base text-gray-500 font-medium">
                          {interaction.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
