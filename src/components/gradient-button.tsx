import { useTime, useTransform, motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';

export default function GradientButton({
  children,
  className = 'p-8',
  link = '',
  target = '_self',
}: {
  children: React.ReactNode;
  className?: string;
  link?: string;
  target?: string;
}) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #AEFFE1, #AEBCFF, #AEFFE1)`;
  });

  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div className='relative flex h-auto w-auto items-center justify-center'>
      {/* Main Button */}
      <motion.div
        className={`${className} relative z-10 rounded-md border-[1px] border-white`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {children}
      </motion.div>

      {/* Animated Gradient Background */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`${className} pointer-events-none absolute inset-0 z-0 rounded-md`}
            style={{ background: rotatingBg }}
            initial={{ opacity: 0, scale: 0.7, filter: 'blur(0px)' }}
            animate={{ opacity: 1, filter: 'blur(20px)', scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <Link
      href={link}
      className='inline-block'
      target={target} // _self - this page | _blank - new page
      rel='noopener noreferrer'
    >
      {content}
    </Link>
  );
}
