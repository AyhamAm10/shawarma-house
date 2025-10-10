import { cubicBezier } from "framer-motion";

export const hoverVariant = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

export const textTitleHover = {
  hidden: {
    opacity: 0,
    y: 200,
    x: -300,
    transition: {
      duration: 1,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};
