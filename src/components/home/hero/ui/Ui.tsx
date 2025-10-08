

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import heroImage from "../../../../assets/Rectangle 1.png";

export default function Ui() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();


  const rawScale = useTransform(scrollY, [0, 600], [1.6, 1]);
  const rawY = useTransform(scrollY, [0, 600], [0, 200]);


  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  return (
    <>
      <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div
          className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center"
          style={{ scale, y }}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* <div className="h-[100vh] bg-white flex items-center justify-center">
       
      </div> */}
    </>
  );
}
