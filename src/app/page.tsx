'use client';

import Navbar from '@/components/navbar';
import Orbs from '@/app/pages/orbs';
import Mountains from '@/components/mountains';
import HeroText from '@/app/pages/hero-text';
import Projects from '@/app/pages/projects';
import AboutView from '@/app/pages/about';
// import { motion } from "framer-motion";

export default function Home() {
  return (
    <main id='hero' className='flex max-w-full flex-col overflow-hidden'>
      <Navbar />
      <section className='relative z-0 h-[95vh]'>
        <HeroText />
        <Orbs />
        <Mountains />
      </section>
      <section className='relative z-10 w-full bg-black px-36' id='projects'>
        <Projects />
        <AboutView />
      </section>
      <section className='relative h-[100vh] w-full bg-black px-36'></section>
    </main>
  );
}
