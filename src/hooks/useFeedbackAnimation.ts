// hooks/useFeedbackAnimation.ts
import type { Variants } from "framer-motion";

export const useFeedbackAnimation = () => {
  const onViewVariants: Variants = {
    hidden: {
      opacity: 0.3, 
      y: 50, 
      scale: 0.95,
      rotateX: 15, 
      rotateY: 10,
    },
    visible: {
      opacity: 1,
      y: 0, 
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const hoverVariants: Variants = {
    rest: { skewY: 1, scale: 1 },
    hover: {
      scale: 0.95,
      skewY: 0.5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants: Variants = {
    rest: {
      scale: 0,
      opacity: 0,
      x: 0,
      y: 0,
    },
    hover: {
      scale: 50,
      opacity: 0.3,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return { onViewVariants, hoverVariants, overlayVariants };
};
