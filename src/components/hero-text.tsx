"use client";

import { useParallax } from "@/hooks/useParralax";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HeroText() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <div ref={ref} className="pointer-events-none">
      <motion.div 
        className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:justify-start z-50 min-w-[200px] px-14"
        style={{y}}
        initial={{ opacity: 0}} 
        animate={{ opacity: 1}} 
        transition={{
          duration: 1.5, 
          ease: "easeIn", 
        }}
        >
          <div className="border-white border-b-2 pb-8 sm:pb-0 sm:border-l-4 sm:border-b-0 px-4 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center">Hey, Im ZACKARY OVEREND</h1>
            <p className="text-sm sm:text-md md:text-lg text-center sm:text-left font-mono tracking-wider">Full Stack Developer
            Mobile Computing Specialist</p>
          </div>
      </motion.div>

    </div>

  );
}