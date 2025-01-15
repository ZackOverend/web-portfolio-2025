"use client";

// import { useParallax } from "@/hooks/useParralax";
import { motion, useTime, useTransform} from "framer-motion";
// import { useRef } from "react";

export default function ProjectView() {
  return (
    <div className="flex mx-32 space-x-8 justify-center relative"> 
      <RotatingGradientBox>
        <h2>Weather iOS Application</h2>
        <button>EXPAND</button>
      </RotatingGradientBox>
    </div>
  );
}

// Reusable RotatingGradientBox function
function RotatingGradientBox({ children }: { children: React.ReactNode }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #AEFFE1, #AEBCFF, #AEFFE1)`;
  });

  return (
    <div className="relative w-auto h-auto">
      <motion.div className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
        <div className="bg-black p-8 w-80 text-center items-center justify-center">{children}</div>

        {/* Gradient Background */}
        <motion.div
          className="absolute -inset-1 rounded-md -z-10"
          style={{
            background: rotatingBg,
          }}
        ></motion.div>
      </motion.div>

      {/* Blurred Background */}
      <motion.div
        className="absolute -inset-1 rounded-md -z-20 blur-[1rem] opacity-80 pointer-events-none"
        style={{
          background: rotatingBg,
        }}
      ></motion.div>
    </div>
  );
}