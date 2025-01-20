'use client';

import Navbar from '@/components/navbar';
import Orbs from '@/components/orbs';
import Mountains from '@/components/mountains';
import HeroText from '@/components/hero-text';
import ProjectHorizontalList from '@/components/project-horizontal';
// import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className='flex h-[200vh] max-w-full flex-col'>
      <Navbar />
      <section className='relative z-0 flex h-[95vh] flex-col pt-16'>
        <HeroText />
        <Orbs />
        <Mountains />
      </section>
      <section className='relative z-10 h-[100vh] w-full bg-black'>
        <ProjectHorizontalList />
      </section>
    </main>
  );
}
