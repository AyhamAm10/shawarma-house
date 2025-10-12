import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { hoverVariant } from "../../../variants/hoverVariant";
import { useMirror } from "../store";

export function Sections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const data = useMirror("data");
  
  console.log(data);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const innerWidth = innerRef.current.scrollWidth;
        setWidth(innerWidth - containerWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const timeout = setTimeout(updateWidth, 300);

    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeout);
    };
  }, [data]);

  return (
    <div className="px-2 sm:px-5 lg:px-7">
      <motion.div
        variants={hoverVariant}
        initial="hidden"
        whileInView="visible"
        className="m-5 sm:m-9 md:m-20 w-full sm:w-1/2"
      >
        <h1 className="text-main-bold font-semibold text-3xl">أقسامنا </h1>
        <p className="text-text text-xl">
          تصفح قائمة بيت الشاورما بكل سهولة — من الشاورما الأصيلة إلى الأطباق
          الجانبية والعروض اليومية. كل ما تحبه في مكان واحد!
        </p>
      </motion.div>
      <div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing px-4 py-8 relative overflow-hidden"
      >
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ left: 0, right: width }}
          className="flex gap-16"
        >
          {data?.map((item, i) => (
            <motion.div
              key={i}
              className="relative min-w-[300px] h-[424px] rounded-2xl  group overflow-visible"
              whileTap={{ scale: 0.97 }}
            >
              <div className="overflow-hidden rounded-2xl w-[300px] h-[418.3px]">
                <img
                  draggable={false}
                  src={item.image}
                  alt={`slide-${item.title_ar}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 brightness-65 group-hover:brightness-100"
                />
              </div>

              <span className="absolute rounded-4xl bg-main px-5 py-3 bottom-3.5 right-[-40px] shadow-lg transition-all duration-500 ease-in-out group-hover:translate-x-[-5px]">
                <div className="flex items-center gap-2">
                  <span className="text-white">{item.title_ar} </span>
                  <img src={item.icon} alt="" />
                </div>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
