"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AudioVisualizerProps {
  barCount?: number;
  color?: string;
  maxHeight?: number;
  isActive?: boolean;
}

function AudioBar({
  height,
  color,
  maxHeight,
}: {
  height: number;
  color: string;
  maxHeight: number;
}) {
  return (
    <motion.div
      animate={{ height: height * maxHeight }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      style={{
        width: 3,
        backgroundColor: color,
        borderRadius: 1.5,
        minHeight: 2,
      }}
    />
  );
}

export default function AudioVisualizer({
  barCount = 50,
  color = "#000",
  maxHeight = 80,
  isActive = true,
}: AudioVisualizerProps) {
  const initialHeights = Array(barCount).fill(0.1);
  const [barHeights, setBarHeights] = useState<number[]>(initialHeights);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const baseVolume = 0.3 + Math.sin(currentTime / 500) * 0.2;
      const normalized = Math.max(
        0.1,
        Math.min(1, baseVolume + Math.random() * 0.4)
      );

      const newHeights = Array(barCount)
        .fill(0)
        .map((_, index) => {
          const phase = (index / barCount) * Math.PI * 2;
          const variation = Math.sin(phase + currentTime / 200);
          const baseHeight = normalized * 0.8 + 0.1;
          const finalHeight = baseHeight + variation * normalized * 0.3;
          return Math.max(0.1, Math.min(0.95, finalHeight));
        });

      setBarHeights(newHeights);
    }, 100);

    return () => {
      clearInterval(interval);
      setBarHeights(Array(barCount).fill(0.1));
    };
  }, [barCount, isActive]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        gap: 3,
      }}
    >
      {barHeights.map((height, index) => (
        <AudioBar
          key={index}
          height={height}
          color={color}
          maxHeight={maxHeight}
        />
      ))}
    </div>
  );
}
