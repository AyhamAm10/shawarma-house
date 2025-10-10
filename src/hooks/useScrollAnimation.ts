// hooks/useScrollAnimation.ts
import type { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface AnimationOptions {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  opacity?: boolean;
}

export const useScrollAnimation = ({
  direction = "up",
  distance = 50,
  duration = 0.8,
  delay = 0,
  opacity = true,
}: AnimationOptions = {}): Variants => {
  const dirMap: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const { x, y } = dirMap[direction];

  return {
    hidden: {
      opacity: opacity ? 0 : 1,
      x,
      y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.42, 0, 0.58, 1], 
      },
    },
  };
};
