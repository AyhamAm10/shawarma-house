import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import logo from "../../../../assets/SVG.svg";
import heroImage from "../../../../assets/Rectangle 1.png";
import { Navbar } from "../../../layout/navbar";

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

  // ✅ الطريقة الصحيحة للتعامل مع onChange
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setShowNavbar(v > endPoint);
    });

    return () => unsubscribe(); // تنظيف الاشتراك عند unmount
  }, [scrollYProgress]);

  return (
    <>
      {/* القسم الكبير اللي بنسكرول عليه */}
      <div ref={sectionRef} className="relative w-full h-[200vh]">
        {/* الهيرو يضل ثابت */}
        <motion.div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          {/* الصورة الخلفية */}
          <motion.img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
            style={{ scale }}
          />

          {/* اللوغو */}
          <motion.img
            src={logo}
            alt="Logo"
            className="absolute w-48"
            style={{ y: logoY, x: logoX, opacity: logoOpacity }}
          />
        </motion.div>
      </div>

      {/* بعد ما يخلص الهيرو بيظهر النـافبار والمحتوى */}
      {showNavbar && (
        // <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-500">
          <Navbar />
        // </div>
      )}

      {/* باقي الصفحة */}
      {/* <div className="h-[200vh] bg-gray-100"></div> */}
    </>
  );
}
