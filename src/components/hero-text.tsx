"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export default function HeroText() {
  // Get the scroll position from Framer Motion
  const { scrollY } = useScroll()


  // Define a parallax range for the foreground mountains
  const y = useTransform(scrollY, [0, 1000], ["0vh", "-30vh"]); // Moves 5% of the viewport height

  return (
    <motion.div 
    className="absolute inset-0 flex flex-wrap items-center justify-center sm:justify-start z-50 min-w-[75vw] px-4 pointer-events-none"
    style={{y}}
    initial={{ opacity: 0, y: 15 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{
      duration: 1.5, 
      ease: "easeIn", 
    }}
    >
      <h1 className="text-2xl sm:text-5xl text-white text-center">
        Hey, I'm ZACKARY OVEREND
        <p className="text-lg text-left">Full Stack Developer
        Mobile Computing Specialist</p>
      </h1>
      
    </motion.div>
  );
}