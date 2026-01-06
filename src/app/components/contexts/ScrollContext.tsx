"use client";

import { useEffect, createContext, useContext, useRef } from "react";
import Lenis from "lenis";

type LenisRef = { current: Lenis | null };

export const ScrollContext = createContext<LenisRef | null>(null);

export const useScroller = () => useContext(ScrollContext);

export default function ScrollContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    lenisRef.current = scroller;
    let frameId: number;
    function raf(time: number) {
      scroller.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      scroller.destroy();
      lenisRef.current = null;
    };
  }, []);
  return (
    <ScrollContext.Provider value={lenisRef}>{children}</ScrollContext.Provider>
  );
}
