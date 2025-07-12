import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ParallaxContainer = ({ children, speed = 0.5, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export const RevealOnScroll = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: 100, opacity: 0 };
      case "down": return { y: -100, opacity: 0 };
      case "left": return { x: -100, opacity: 0 };
      case "right": return { x: 100, opacity: 0 };
      default: return { y: 100, opacity: 0 };
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const transform = useTransform(scrollYProgress, [0, 1], [
    getInitialPosition().y || getInitialPosition().x || 0,
    0
  ]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        [direction === "left" || direction === "right" ? "x" : "y"]: transform
      }}
      transition={{ delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children, intensity = 20, duration = 3, className = "" }) => {
  return (
    <motion.div
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};