import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hoverVariant } from "../../../../variants/hoverVariant";

export function Varient2() {
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

  const rawBox1Y = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [200, 0] : [0, 0]
  );
  const box1Y = useSpring(rawBox1Y, { stiffness: 80, damping: 20 });
  const rawBox1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    isLargeScreen ? [0, 1] : [1, 1]
  );
  const box1Opacity = useSpring(rawBox1Opacity, { stiffness: 80, damping: 20 });

  const rawBox2Y = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [200, 0] : [0, 0]
  );
  const rawBox2X = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [150, 0] : [0, 0]
  );
  const box2Y = useSpring(rawBox2Y, { stiffness: 80, damping: 20 });
  const box2X = useSpring(rawBox2X, { stiffness: 80, damping: 20 });
  const rawBox2Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    isLargeScreen ? [0, 1] : [1, 1]
  );
  const box2Opacity = useSpring(rawBox2Opacity, { stiffness: 80, damping: 20 });
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

      <div className="flex flex-col-reverse md:flex-row items-end justify-between gap-5">
        <motion.div
          variants={hoverVariant}
          style={{ y: box1Y, opacity: box1Opacity }}
          initial="hidden"
          whileInView="visible"
          className="p-4 sm:p-8 bg-white rounded-2xl max-w-[420px]"
        >
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[#525252] text-2xl font-semibold">
              عروضهم ما تتفوّت
            </h1>
            <p className="text-text text-lg ">
              كنت دايم أطلب من الفروع بشكل مباشر، لكن مع الوقت جربت التطبيق
              وصراحة انصدمت من كمية العروض الحلوة اللي ما تكون متوفرة إلا
              أونلاين. كل فترة ألقاهم مسوين خصومات أو مفاجآت حلوة، وأحيانًا تكون
              على وجبتي المفضلة! أحسهم يهتمون بالزبائن ويحبون يكافئوننا. تطبيقهم
              سهل والاستخدام ممتع، وهذا يخلي تجربة الطلب ممتعة بحد ذاتها.
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-main ">ليلى المطيري</h1>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={hoverVariant}
          style={{ y: box2Y, x: box2X, opacity: box2Opacity }}
          initial="hidden"
          whileInView="visible"
          className="p-4 sm:p-8 bg-white rounded-2xl max-w-[420px]"
        >
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[#525252] text-2xl font-semibold">
              عجلة الحظ خلتني أربح!
            </h1>
            <p className="text-text text-lg ">
              جربت لعبة عجلة الحظ الموجودة في التطبيق، وفزت بوجبة مجانية! حسيت
              إنهم فعلاً يهتمّون بعملاءهم ويحبون يفاجئونهم.
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-main ">ليلى المطيري</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
