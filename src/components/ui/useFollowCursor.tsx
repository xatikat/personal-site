import { useSpring, useMotionValue, frame } from "motion/react";
import React, { useEffect } from "react";

const spring = { damping: 20, stiffness: 200 };

export function useFollowCursor(ref: React.RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);

  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current;

      frame.read(() => {
        xPoint.set(clientX - element.offsetWidth / 2);
        yPoint.set(clientY - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
