"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useParallax } from "@/hooks/useParralax";
import { useRef } from "react";

export default function Mountains() {
  // Get the scroll position from Framer Motion  

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -25);

  return (
    <div className="relative w-full h-auto">
      {/* Back Mountain */}
      <div className="absolute w-full bottom-4 left-0 -z-10 -my-4 sm:pb-4 md:pb-8 lg:pb-14 pointer-events-none ">
        <Image
          src="/shapes/mountains-back.svg"
          alt="Mountains Back"
          width={1440}
          height={320}
          className="w-full"
          priority
          ref={ref}
        />
      </div>

      {/* Front Mountain with Parallax */}
      <motion.div
        className="absolute bottom-0 w-full z-10 pointer-events-none -my-8" style={{y}}
      >
        <Image
          src="/shapes/mountains-front.svg"
          alt="Mountains Front"
          width={1440}
          height={320}
          className="w-full"
          priority
        />
      </motion.div>
    </div>
  );
}