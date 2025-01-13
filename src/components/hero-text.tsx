"use client";

import { useParallax } from "@/hooks/useParralax";
// import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HeroText() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <motion.div 
    className="absolute inset-0 flex flex-wrap items-center justify-center sm:justify-start z-50 min-w-[75vw] px-4 pointer-events-none space-y-4 "
    style={{y}}
    initial={{ opacity: 0}} 
    animate={{ opacity: 1}} 
    transition={{
      duration: 1.5, 
      ease: "easeIn", 
    }}
    >
      <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl text-white text-center border-white border-l-4 p-2 will-change-scroll">
        Hey, Im ZACKARY OVEREND
        <p className="text-sm sm:text-md md:text-lg text-left">Full Stack Developer
        Mobile Computing Specialist</p>
      </div>
      
    </motion.div>
  );
}