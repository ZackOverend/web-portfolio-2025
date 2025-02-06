import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function SectionHeaderLine({
  heading,
  subheading,
  y,
}: {
  heading: any;
  subheading?: any;
  y?: any;
}) {
  const ref = useRef(null);

  return (
    <div ref={ref} className='relative z-30'>
      <motion.div
        className='z-50 px-14'
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
      >
        <div className='space-y-4 border-b-2 border-white px-4 pb-8 sm:border-b-0 sm:border-l-4 sm:pb-0'>
          <h1 className='pb-1 text-3xl text-white sm:text-4xl md:text-5xl'>
            {heading}
          </h1>
          <p className='sm:text-md text-center font-mono text-sm tracking-wider sm:text-left md:text-lg'>
            {subheading}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
