import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import logo from "../../../../assets/SVG.svg";
import heroImage from "../../../../assets/Rectangle 1.png";
import { Navbar } from "../../../layout/navbar";
import googleIcon from "../../../../assets/google-play-link.svg"
import appStoreLink from "../../../../assets/app-storelink.svg"
export default function HeroScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const endPoint = 0.9;

  const rawScale = useTransform(scrollYProgress, [0, endPoint], [1.6, 1]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  const rawLogoY = useTransform(scrollYProgress, [0, endPoint], [0, -200]);
  const rawLogoX = useTransform(scrollYProgress, [0, endPoint], [0, 300]);
  const rawLogoOpacity = useTransform(scrollYProgress, [0.5, endPoint], [1, 0]);
  const logoY = useSpring(rawLogoY, { stiffness: 80, damping: 20 });
  const logoX = useSpring(rawLogoX, { stiffness: 80, damping: 20 });
  const logoOpacity = useSpring(rawLogoOpacity, { stiffness: 80, damping: 20 });

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setShowNavbar(v > endPoint);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <div ref={sectionRef} className="relative w-full h-[200vh]">
        <motion.div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <motion.img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
            style={{ scale }}
          />

          <motion.img
            src={logo}
            alt="Logo"
            className="absolute w-48"
            style={{ y: logoY, x: logoX, opacity: logoOpacity }}
          />
        </motion.div>
      </div>

      {showNavbar && <Navbar />}
      <div className="bg-main-light h-[111px] flex items-center justify-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 font-black text-xl sm:text-2xl md:text-4xl text-white">
            <span>M</span>
            <span>10</span>
            <span>+</span>
          </div>
          <span className="text-white text-lg sm:text-xl font-black">
            وجبة تم تقديمها
          </span>
          <img src={googleIcon} alt="google play link for shawarma house" className="h-7 sm:h-9 md:h-12" />
          <img src={appStoreLink} alt="app store link for shawarma house" className="h-7 sm:h-9 md:h-12"/>
        </div>
      </div>
    </>
  );
}
