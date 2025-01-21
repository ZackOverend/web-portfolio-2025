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
    <>
      <motion.div
        className={`${className} items-center justify-center rounded-md border-[1px] bg-black text-center`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.02, y: -1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        // onTouchStart={() => setIsHovered((prev) => !prev)}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className='pointer-events-none absolute -inset-1 -z-20 rounded-md opacity-80 blur-[1rem]'
            style={{ background: rotatingBg }}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return (
    <div className='relative flex h-auto w-auto'>
      <Link
        href={link}
        className='inline-block'
        target={target} // _self - this page | _blank - new page
        rel='noopener noreferrer'
      >
        {content}
      </Link>
    </div>
  );
}
