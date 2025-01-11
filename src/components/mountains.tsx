"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Mountains() {
  // Get the scroll position from Framer Motion
  const { scrollY } = useScroll()


  // Define a parallax range for the foreground mountains
  const y = useTransform(scrollY, [0, 1000], ["0vh", "10vh"]); // Moves 5% of the viewport height

  return (
    <div className="relative w-full h-auto">
      {/* Back Mountain */}
      <div className="absolute w-full bottom-4 left-0 -z-10 pb-12 pointer-events-none">
        <Image
          src="/shapes/mountains-back.svg"
          alt="Mountains Back"
          width={1440}
          height={320}
          className="w-full"
          priority
        />
      </div>

      {/* Front Mountain with Parallax */}
      <motion.div
        className="absolute bottom-0 w-full z-10 pointer-events-none" style={{y}}
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