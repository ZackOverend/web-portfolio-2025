"use client"
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Orbs() {
  const containerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const greenOrb = {
    width: 100,
    height: 100,
    backgroundColor: "#adffe1",
    borderRadius: "9999px",
    filter: "blur(50px)",
  };
  const blueOrb = {
    width: 100,
    height: 100,
    backgroundColor: "#aebcff",
    borderRadius: "9999px",
    filter: "blur(50px)",
  };

  const orbs = [
    { style: greenOrb, id: "green1", position: { x: 400, y: 400 } },
    { style: greenOrb, id: "green2", position: { x: 200, y: 200 } },
    { style: greenOrb, id: "green3", position: { x: 300, y: 300 } },
    { style: greenOrb, id: "green4", position: { x: 500, y: 500 } },
    { style: blueOrb, id: "blue1", position: { x: 600, y: 600 } },
    { style: blueOrb, id: "blue2", position: { x: 700, y: 700 } },
  ];

  useEffect(() => {
    const isTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchScreen);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
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
            stiffness: 85,
            damping: 20,
          }}
        />
      ))}
    </div>
  );
}