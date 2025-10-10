import { useRef } from "react";
import bg from "../../../assets/download app.png";
import phone from "../../../assets/iPhone 13 Pro.png";
import google from "../../../assets/app-store-and-google-play 2.png";
import apple from "../../../assets/app-store-and-google-play 3.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { hoverVariant } from "../../../variants/hoverVariant";

export default function DownloadApp() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawTranslateY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateY = useSpring(rawTranslateY, { stiffness: 80, damping: 20 });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  return (
    <div
      ref={ref}
      className="relative my-20 md:my-0 h-auto md:h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.img
          style={{ y: translateY, scale }}
          src={bg}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 px-5 sm:px-10 md:px-20 w-full max-w-7xl mx-auto py-20 md:py-0">
        {/* النصوص */}
        <div className="flex flex-col gap-5 text-center md:text-left w-full md:w-1/2">
          <motion.h1
            variants={hoverVariant}
            initial="hidden"
            whileInView="visible"
            className="font-semibold text-white text-3xl sm:text-4xl lg:text-5xl"
          >
            حمّل تطبيق بيت الشاورما الآن!
          </motion.h1>
          <motion.p
            variants={hoverVariant}
            initial="hidden"
            whileInView="visible"
            className="text-white text-base sm:text-lg leading-relaxed"
          >
            جرّب طعامك المفضل بطريقة أسهل مع تطبيق بيت الشاورما! اطلب، تابع،
            واستمتع بعروض حصرية من أقرب فرع لك، وكل هذا بخطوات بسيطة من جوالك.
          </motion.p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <img
              src={google}
              alt="google play"
              className="w-32 sm:w-36 cursor-pointer"
            />
            <img
              src={apple}
              alt="app store"
              className="w-32 sm:w-36 cursor-pointer"
            />
          </div>
        </div>

        {/* صورة الجوال */}
        <motion.img
          variants={hoverVariant}
          initial="hidden"
          whileInView="visible"
          src={phone}
          alt="iPhone 13 Pro"
          className="max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
        />
      </div>
    </div>
  );
}
