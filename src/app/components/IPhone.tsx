"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import iphoneImage from "@/assets/iphone.png";
import AudioVisualizer from "./AudioVisualizer";

export default function IPhone() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const baseVolume = 0.3 + Math.sin(currentTime / 500) * 0.2;
      const normalized = Math.max(
        0.1,
        Math.min(1, baseVolume + Math.random() * 0.4),
      );
      const newScale = 1 + normalized * 0.2;
      setScale(newScale);
    }, 100);

    return () => {
      clearInterval(interval);
      setScale(1);
    };
  }, []);

  return (
    <div className="flex justify-center items-center rounded-lg mt-50 w-[400px] h-[600px] relative mb-20">
      <div className="flex justify-center items-center bg-stone-200 rounded-4xl p-4 h-35 w-80 absolute top-[0px] left-1/2 -translate-x-1/2">
        <AudioVisualizer barCount={40} color="#000" maxHeight={40} />
      </div>
      <Image src={iphoneImage} alt="iPhone" width={400} height={600} />
      <div className="flex justify-center items-center bg-stone-200 rounded-[50px] p-4 h-50 w-50 absolute bottom-[10px] right-[45px]">
        <motion.div
          className="w-30 h-30 bg-[#FF5117] rounded-full"
          animate={{ scale }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
        />
      </div>
    </div>
  );
}
