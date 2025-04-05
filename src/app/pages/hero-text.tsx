'use client';

import { useParallax } from '@/hooks/useParralax';
import { AnimatePresence, useInView, useScroll, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SectionHeaderLine from '@/components/section-header';

export default function HeroText() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -250);

  const text = "Hey, I'm ZACKARY OVEREND";
  const totalDelay = text.length * 0.05;

  return (
    <div className='absolute z-30 2xl:px-20'>
      <motion.div
        className='z-30 mx-16 px-4 text-center sm:border-l-[3px] sm:text-start'
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
      >
        <div className='z-30 border-b-2 pb-2 sm:border-0 sm:pb-0'>
          {isMobile ? (
            // Mobile version with line break
            <div className='flex flex-col items-center sm:items-start'>
              <div className='flex'>
                {text
                  .slice(0, 8)
                  .split('')
                  .map((char, i) => (
                    <motion.p
                      key={`first-${i}`}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit='hidden'
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className='text-center text-3xl tracking-wider text-white sm:text-start sm:text-4xl md:text-5xl'
                    >
                      {char === ' ' ? <span>&nbsp;</span> : char}
                    </motion.p>
                  ))}
              </div>
              <div className='flex'>
                {text
                  .slice(8)
                  .split('')
                  .map((char, i) => (
                    <motion.p
                      key={`second-${i}`}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit='hidden'
                      transition={{ duration: 0.5, delay: (i + 8) * 0.05 }}
                      className='text-center text-3xl text-white sm:text-start sm:text-4xl md:text-5xl'
                    >
                      {char === ' ' ? <span>&nbsp;</span> : char}
                    </motion.p>
                  ))}
              </div>
            </div>
          ) : (
            // Desktop version without line break
            <div className='flex'>
              {text.split('').map((char, i) => (
                <motion.p
                  ref={i === 0 ? ref : null}
                  key={`desktop-${i}`}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit='hidden'
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className='text-center text-3xl tracking-wide text-white sm:text-start sm:text-4xl md:text-5xl'
                >
                  {char === ' ' ? <span>&nbsp;</span> : char}
                </motion.p>
              ))}
            </div>
          )}
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: totalDelay + 0.2, duration: 1 }}
          className='pt-2 font-mono text-lg text-white'
        >
          Full Stack Developer & Mobile Computing Specialist
        </motion.h2>
      </motion.div>
    </div>
  );
}
