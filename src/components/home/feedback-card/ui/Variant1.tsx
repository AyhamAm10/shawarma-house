import img from "../../../../assets/Frame 1618871733.png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hoverVariant } from "../../../../variants/hoverVariant";

export function Variant1() {
  const ref = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rawTextX = useTransform(scrollYProgress, [0, 1], isLargeScreen ? [0, -200] : [0, 0]);
  const textX = useSpring(rawTextX, { stiffness: 80, damping: 20 });

  const rawImageScale = useTransform(scrollYProgress, [0, 1], isLargeScreen ? [1, 1.3] : [1, 1]);
  const imageScale = useSpring(rawImageScale, { stiffness: 80, damping: 20 });

  const rawBoxY = useTransform(scrollYProgress, [0, 1], isLargeScreen ? [-250, 0] : [0, 0]);
  const boxY = useSpring(rawBoxY, { stiffness: 80, damping: 20 });

  const rawBoxOpacity = useTransform(scrollYProgress, [0, 0.3], isLargeScreen ? [0, 1] : [1, 1]);
  const boxOpacity = useSpring(rawBoxOpacity, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className="relative flex flex-col gap-8">

      {/* ===== النصوص ===== */}
      {!isLargeScreen ? (
        // الموبايل: نص واحد فقط فوق المحتوى
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="w-full mb-4 sm:w-2/4 text-center text-4xl sm:text-5xl md:text-6xl text-white font-semibold my-3 sm:my-6 md:my-9"
        >
          اللي جرّب، ما استغنى... وش قالوا؟
        </motion.h1>
      ) : (
        <>
          {/* النص الخلفي */}
          <motion.h1
            className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl font-semibold text-white opacity-50 z-0 text-center"
            style={{ x: textX }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
          >
            اللي جرّب، ما استغنى... وش قالوا؟
          </motion.h1>

          {/* النص المفرغ (outline) */}
          <motion.h1
            className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl font-semibold text-transparent z-20 text-center"
            style={{ WebkitTextStroke: "1.5px white", x: textX }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
          >
            اللي جرّب، ما استغنى... وش قالوا؟
          </motion.h1>
        </>
      )}

      {/* ===== المحتوى الأساسي ===== */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-end justify-between gap-5">
        <motion.div
          variants={hoverVariant}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          style={{ y: boxY, opacity: boxOpacity }}
          className="p-4 sm:p-8 bg-white rounded-2xl max-w-[450px]"
        >
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[#525252] text-2xl font-semibold">أطلب من التطبيق دائماً!</h1>
            <p className="text-text text-lg ">
              أنا زبون دائم لبيت الشاورما، والتطبيق سهّل عليّ كل شيء. الواجهة
              بسيطة، الطلب سريع، وخدمة التوصيل دائمًا ممتازة صار أساسي في جوالي!
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-main ">سعيد القحطاني</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={hoverVariant}
          initial="hidden"
          whileInView="visible"
          className="overflow-hidden rounded-2xl"
        >
          <motion.img
            style={{ scale: imageScale }}
            src={img}
            alt="shawarma house"
          />
        </motion.div>
      </div>
    </div>
  );
}
