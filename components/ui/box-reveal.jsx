"use client";
import { motion, useAnimation } from "framer-motion"; // ✅ Correct import
import { useEffect, useRef, useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";

export const BoxReveal = ({ children, width = "fit-content", boxColor = "#5046e6", duration = 0.5 }) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false); // ✅ Prevent re-animation

  const { ref, inView } = useInView({ triggerOnce: true }); // ✅ More efficient observer

  useEffect(() => {
    if (inView && !hasAnimated) {
      slideControls.start("visible");
      mainControls.start("visible");
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, mainControls, slideControls]);

  // ✅ Use `useMemo` for static animation variants
  const motionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }), []);

  const slideVariants = useMemo(() => ({
    hidden: { left: 0 },
    visible: { left: "100%" },
  }), []);

  return (
    <div ref={ref} style={{ position: "relative", width, clipPath: "inset(0)" }}>
      {/* ✅ Optimized Main Animation */}
      <motion.div
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>

      {/* ✅ Optimized Slide Animation */}
      <motion.div
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  );
};
