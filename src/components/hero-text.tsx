'use client';

import { useParallax } from '@/hooks/useParralax';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

export default function HeroText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <div ref={ref} className='pointer-events-none'>
      <motion.div
        className='absolute inset-0 z-50 flex min-w-[200px] flex-col items-center justify-center px-14 sm:flex-row sm:justify-start'
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
      >
        <div className='space-y-4 border-b-2 border-white px-4 pb-8 sm:border-b-0 sm:border-l-4 sm:pb-0'>
          <h1 className='text-center text-3xl text-white sm:text-4xl md:text-5xl'>
            Hey, Im ZACKARY OVEREND
          </h1>
          <p className='sm:text-md text-center font-mono text-sm tracking-wider sm:text-left md:text-lg'>
            Full Stack Developer Mobile Computing Specialist
          </p>
        </div>
      </motion.div>
    </div>
  );
}
