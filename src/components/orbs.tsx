"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Orbs() {
  const containerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const greenOrb = {
    width: 400,
    height: 400,
    backgroundColor: "#adffe1",
    borderRadius: "9999px",
    // filter: "blur(150px)",
  };
  const blueOrb = {
    width: 400,
    height: 400,
    backgroundColor: "#aebcff",
    borderRadius: "9999px",
    // filter: "blur(150px)",
    // z: 50
  };

  const orbs = [
    { style: greenOrb, id: "green1", position: { x: 1200, y: 40 }},
    { style: greenOrb, id: "green2", position: { x: 0, y: 80 } },
    { style: greenOrb, id: "green3", position: { x: 300, y: 300 } },
    { style: greenOrb, id: "green4", position: { x: 500, y: 300 } },
    { style: blueOrb, id: "blue1", position: { x: 800, y: 280 } },
    { style: blueOrb, id: "blue2", position: { x: 150, y: 200 } },
  ];
  
  // const optimizedOrbs = [
  //   // { style: greenOrb, id: "gree1", position: { x: 1200, y: 40 }},
  //   { style: blueOrb, id: "blue2", position: { x: 150, y: 200 } },
  // ]

  useEffect(() => {
    const isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchScreen);
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-0, 50]);


  return (
    <>
      <div ref={containerRef} className="z-10 border-black/80 border-x-8 hidden sm:min-h-full sm:block items-center justify-center">
        <motion.div
          style={{y}}
          className="blur-[10rem]"
          >
          {orbs.map((orb) => (
            <motion.div
              key={orb.id}
              drag={!isTouch}
              dragConstraints={containerRef}
              style={{
                ...orb.style,
                position: "absolute",
                left: `${orb.position.x}px`,
                top: `${orb.position.y}px`,
              }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 20,
                duration: 0.001,
                ease: "easeInOut"
              }}
            />
          ))}          
        </motion.div>

        {/* <motion.div>
          <Image
            src={'/shapes/green-orb-large.svg'}
            width={1800}
            height={400}
            alt="Green Orb Large"
            className=""
          />
        </motion.div> */}
      </div>
      
      <Image
          src="/shapes/mobile-gradient.svg"
          alt="Gradient"
          width={1440}
          height={320}
          priority
          className="sm:hidden "
        />
    </>
    
  );
}