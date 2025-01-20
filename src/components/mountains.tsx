'use client';

import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useParallax } from '@/hooks/useParralax';

export default function Mountains() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);

  return (
    <div className=''>
      {/* Back Mountain */}
      <div className='pointer-events-none absolute bottom-4 left-0 -z-10 w-full sm:pb-4 md:pb-8 lg:pb-16'>
        <Image
          src='/shapes/mountains-back.svg'
          alt='Mountains Back'
          width={1440}
          height={320}
          className='w-full'
          priority
        />
      </div>

      {/* Front Mountain with Parallax */}
      <motion.div
        className='pointer-events-none absolute bottom-0 z-10 my-2 w-full sm:-my-14'
        style={{ y }}
      >
        <Image
          src='/shapes/mountains-front.svg'
          alt='Mountains Front'
          width={1440}
          height={320}
          className='w-full'
          priority
        />
      </motion.div>
      {/* <ParallaxImage 
        path="/mountains-front.svg" 
        width={2000} 
        height={1000} 
        distance={300}
        className="absolute bottom-0 w-full h-4 z-10 pointer-events-none"
      /> */}
    </div>
  );
}
