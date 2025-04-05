'use client';

import Navbar from '@/components/navbar/navbar';
import Orbs from '@/app/pages/orbs';
import Mountains from '@/components/mountains';
import HeroText from '@/app/pages/hero-text';
import ProjectsView from '@/app/pages/projects';
import AboutView from '@/app/pages/about';
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
          className='relative h-screen w-screen bg-black px-12 pt-14 2xl:px-40'
          id='projects'
        >
          <ProjectsView />
        </section>
        <section className='relative h-[100vh] w-full bg-black px-12 2xl:px-40'>
          <AboutView />
        </section>
      </main>
    </>
  );
}
