import { HeroSection } from "../../../components/home/hero";
import { Footer } from "../../../components/layout/footer";
import Sections from "./sections";
import ToKnow from "./to-know";
import { motion, useScroll } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

export default function RenderUi() {
  const heroRef = useRef<HTMLDivElement>(null);
  const toKnowRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const [toKnowHeight, setToKnowHeight] = useState(0);

  useLayoutEffect(() => {
    if (heroRef.current) setHeroHeight(heroRef.current.clientHeight);
    if (toKnowRef.current) setToKnowHeight(toKnowRef.current.clientHeight);
  }, []);

  const startScroll = heroHeight + toKnowHeight;

  useLayoutEffect(() => {
    if (startScroll === 0) return;

    const unsubscribe = scrollY.onChange((y) => {
      const animationDistance = toKnowHeight * 0.4;

      if (y >= startScroll) {
        const progress = Math.min((y - startScroll) / animationDistance, 1);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    });

    return () => unsubscribe();
  }, [scrollY, startScroll, toKnowHeight]);

  const xToKnow = -scrollProgress * 100;
  const xSections = 100 - scrollProgress * 100;

  const isSliding = scrollProgress < 1;

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div className="overflow-hidden relative z-0">
        <motion.div
          ref={toKnowRef}
          style={{
            x: `${xToKnow}%`,
            position: isSliding ? "sticky" : "relative",
            top: isSliding ? "0" : "auto",
            zIndex: 2,
          }}
        >
          <ToKnow />
        </motion.div>

        <motion.div
          style={{
            x: `${xSections}%`,
            position: isSliding ? "sticky" : "relative",
            top: isSliding ? "0" : "auto",
            zIndex: 1,
          }}
        >
          <Sections />
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
