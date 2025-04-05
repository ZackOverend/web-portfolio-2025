'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Orbs() {
  const containerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const greenOrb = {
    width: 400,
    height: 400,
    backgroundColor: '#adffe1',
    borderRadius: '9999px',
  };
  const blueOrb = {
    width: 400,
    height: 400,
    backgroundColor: '#aebcff',
    borderRadius: '9999px',
  };

  const orbs = [
    { style: greenOrb, id: 'green1', position: { x: 1200, y: 40 } },
    { style: greenOrb, id: 'green2', position: { x: 0, y: 80 } },
    { style: greenOrb, id: 'green3', position: { x: 300, y: 300 } },
    { style: greenOrb, id: 'green4', position: { x: 500, y: 300 } },
    { style: blueOrb, id: 'blue1', position: { x: 800, y: 280 } },
    { style: blueOrb, id: 'blue2', position: { x: 150, y: 200 } },
  ];

  useEffect(() => {
    const isTouchScreen =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchScreen);
  }, []);

  const { scrollYProgress } = useScroll();
  // Subtle vertical movement based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <>
      <div
        ref={containerRef}
        className='z-10 hidden items-center justify-center border-x-8 border-black/80 sm:block'
      >
        <div className='absolute w-4 bg-black'></div>

        {/* Container for orbs with slight vertical movement on scroll */}
        <motion.div style={{ y }} className='blur-[100px]'>
          {orbs.map((orb) => (
            <motion.div
              key={orb.id}
              drag={!isTouch}
              dragConstraints={containerRef}
              style={{
                ...orb.style,
                position: 'absolute',
                left: `${orb.position.x}px`,
                top: `${orb.position.y}px`,
              }}
              transition={{
                type: 'spring',
                stiffness: 40,
                damping: 20,
                duration: 0.0001,
                ease: 'easeInOut',
              }}
              /**
               * whileHover applies a short animation as long as the mouse
               * is hovering over this element. Feel free to adjust the values
               * (x, y) for a different effect.
               */
              whileHover={{
                x: 0,
                y: 150,
              }}
            />
          ))}
        </motion.div>
      </div>
      {/* Fallback gradient for mobile */}
      <div
        className='h-full w-full bg-gradient-to-r from-[#aebcff] via-[#adffe1] to-[#aebcff] opacity-50 sm:hidden'
        style={{
          backgroundSize: '200% 100%',
          animation: 'gradientSlideRight 6s linear infinite',
        }}
      />

      {/* Add this keyframe animation to your global CSS */}
      <style jsx global>{`
        @keyframes gradientSlideRight {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </>
  );
}
