import img from "../../../../assets/Frame 1618871733.png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { hoverVariant } from "../../../../variants/hoverVariant";

export function Varient3() {
  const ref = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const rawTextX = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, -200] : [0, 0]
  );
  const textX = useSpring(rawTextX, { stiffness: 80, damping: 20 });

  const rawImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [1, 1.3] : [1, 1]
  );
  const imageScale = useSpring(rawImageScale, { stiffness: 80, damping: 20 });

  const rawBoxY = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [-250, 0] : [0, 0]
  );
  const boxY = useSpring(rawBoxY, { stiffness: 80, damping: 20 });

  const rawBoxOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    isLargeScreen ? [0, 1] : [1, 1]
  );
  const boxOpacity = useSpring(rawBoxOpacity, { stiffness: 80, damping: 20 });
  return (
    <div ref={ref} className="flex flex-col gap-8">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ x: textX }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="w-full sm:w-3/4 text-center text-7xl text-white font-semibold my-3 sm:my-6 md:my-9"
      >
        اللي جرّب، ما استغنى... وش قالوا؟
      </motion.h1>

      <motion.div
        variants={hoverVariant}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col md:flex-row items-end justify-between gap-5"
      >
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
            className=""
          />
        </motion.div>
        <motion.div
          style={{ y: boxY, opacity: boxOpacity }}
          className="p-4 sm:p-8 bg-white rounded-2xl max-w-[450px]"
        >
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[#525252] text-2xl font-semibold">
              بيت الشاورما دايم معي
            </h1>
            <p className="text-text text-lg ">
              أنا أشتغل دايمًا في أماكن مختلفة داخل الرياض، ومع التطبيق صرت أطلب
              من أقرب فرع لي بسهولة. اللي يميزهم إن فروعهم كثيرة، والتطبيق يحدد
              لي الفرع الأقرب ويوصل الطلب بسرعة. الأكل طعمه ثابت، والخدمة ممتازة
              في كل فرع جربته. حتى لما طلبت من البيت أو الدوام، التجربة كانت
              ممتازة.
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-main ">ليلى المطيري</h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
