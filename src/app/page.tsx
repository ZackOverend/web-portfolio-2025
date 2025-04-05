'use client';

import Navbar from '@/components/navbar/navbar';
import Orbs from '@/app/pages/orbs';
import Mountains from '@/components/mountains';
import HeroText from '@/app/pages/hero-text';
import ProjectsView from '@/app/pages/projects';
import AboutView from '@/app/pages/about';
import ProjectsModal from '@/app/pages/projects-modal';

import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion'; // Changed from motion/react

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/loading-screen';

export default function Home() {
  // For animation in view
  const projectsRef = useRef(null);

  // FOR LOADING
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for real content/data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 ms just to trigger temporarily

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main id='hero' className='flex max-w-full flex-col overflow-hidden'>
        <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

        <Navbar />
        <section className='relative z-0 h-[80vh] sm:h-[80vh]'>
          <HeroText />
          <Orbs />
          <Mountains />
        </section>
        <section
          ref={projectsRef} // Added the ref here
          className='relative w-screen bg-black px-12 pt-14 sm:h-screen 2xl:px-40'
          id='projects'
        >
          <ProjectsView />
          <div className='absolute bottom-0 left-[3rem] right-[3rem] top-[6.5rem] z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] xl:mx-[7rem]'></div>
        </section>
        <section className='hidden w-full bg-black pb-32 sm:block'>
          <ProjectsModal />
        </section>
        <section className='relative w-full bg-black px-12 2xl:px-40'>
          <AboutView />
        </section>
      </main>
    </>
  );
}
