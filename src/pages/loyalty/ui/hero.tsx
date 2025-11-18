import loyatlyCard from "../../../assets/loyalty.png";
import vector from "../../../assets/Vector_left.svg";
import { motion, type Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Hero() {

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const wordAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.35 },
    }),
  };

  return (
    <div className="h-screen flex items-center justify-center max-w-[1750px] mx-auto px-5 sm:px-9">
      <div className="w-full justify-between flex flex-col-reverse lg:flex-row items-start lg:items-center">
        <motion.div
          className="max-w-[631px] flex flex-col gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-7xl text-[#222222] flex flex-wrap">
            {"اجمع النقاط… وخلّها تكافئك!".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordAnimation}
                custom={i}
                initial="hidden"
                animate="show"
                style={{ display: "inline-block", marginRight: "8px" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p className="text-sm sm:text-xl md:text-3xl text-[#222222] flex flex-wrap">
            {"كل طلب تطلبه من بيت الشاورما يقربك أكثر للمكافأة التالية اجمع النقاط مع كل عملية شراء واستبدلها بوجبات مجانية أو خصومات حصرية على طلباتك القادمة."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordAnimation}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  style={{ display: "inline-block", marginRight: "6px" }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>

          <motion.div
            variants={container}
            className="flex items-center gap-4 border-b-[#ED6A22] border-b-3 w-fit py-4 cursor-pointer"
          >
            <motion.span
              className="font-semibold text-lg sm:text-3xl text-[#222222]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              حمل التطبيق الان
            </motion.span>
            <motion.img
              src={vector}
              alt="left vector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            />
          </motion.div>
        </motion.div>

        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          transitionSpeed={400}
          scale={1.05}
          className="w-fit"
        >
          <motion.img
            src={loyatlyCard}
            alt="loyalty card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </Tilt>
      </div>
    </div>
  );
}
