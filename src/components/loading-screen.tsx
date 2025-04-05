'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div
        className='text-4xl font-bold text-black dark:text-white'
        initial={{ y: 0 }}
        animate={{ y: -100 }}
        transition={{ delay: 0.5, duration: 1 }}
      ></motion.div>
    </motion.div>
  );
}
