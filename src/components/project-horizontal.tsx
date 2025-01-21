'use client';

// import { useParallax } from "@/hooks/useParralax";
import { motion } from 'framer-motion';
// import GradientButton from './gradient-button';
import SlideTabs from './slide-tabs';
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
