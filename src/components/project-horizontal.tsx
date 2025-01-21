'use client';

// import { useParallax } from "@/hooks/useParralax";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTime,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import GradientButton from './gradient-button';
import SlideTabs from './slide-tabs';
// import { useRef } from "react";
import { useParallax } from '@/hooks/useParralax';
import ProjectDetails from './project-details';

export default function ProjectView() {
  const tabs = [
    {
      title: 'WEATHER APPLICATION',
      content: <ProjectDetails name={'iOS Weather Application'} />,
    },
    {
      title: 'C# GROUP ASSIGNMENT',
      content: <ProjectDetails name={'C# Group Assignment'} />,
    },
    { title: 'OTHER', content: <ProjectDetails name={'Others'} /> },
  ];

  return (
    <>
      <div className='pointer-events-none'>
        <motion.div
          className='relative inset-0 z-50 flex min-w-[200px] flex-col items-center justify-center px-14 sm:flex-row sm:justify-start'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          <div className='space-y-4 border-b-2 border-white px-4 pb-8 sm:border-b-0 sm:border-l-4 sm:pb-0'>
            <h1 className='text-3xl text-white sm:text-4xl md:text-4xl'>
              PROJECTS
            </h1>
          </div>
        </motion.div>
      </div>
      <SlideTabs tabs={tabs} />
    </>
  );
}

// Reusable RotatingGradientBox function
function RotatingGradientBox({ children }: { children: React.ReactNode }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #AEFFE1, #AEBCFF, #AEFFE1)`;
  });

  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className='relative flex h-auto w-auto'>
        {/* Motion div that triggers the hover effect */}
        <motion.div
          className='w-80 items-center justify-center rounded-md border-[1px] bg-black p-8 text-center'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.02, y: -1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered((prev) => !prev)}
          onClick={() => (modalOpen ? setModalOpen(false) : setModalOpen(true))}
        >
          Hover over me
        </motion.div>
      </div>
    </>
  );
}
