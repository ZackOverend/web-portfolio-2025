'use client';

import { useParallax } from '@/hooks/useParralax';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import SectionHeaderLine from '@/components/section-header-line';

export default function HeroText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -250);

  return (
    <div className='absolute'>
      <SectionHeaderLine
        heading={"Hey, I'm ZACKARY OVEREND"}
        subheading={'Full Stack Developer Mobile Computing Specialist'}
        y={y}
      />
    </div>
  );
}
