'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutView() {
  const text = (
    <div className=''>
      <p>
        Software developer, problem-solver, and explorer of new experiences.
        <br />
        <br />I strive to craft intuitive applications and designs that make
        technology feel effortless, vigilant of every single detail.
      </p>
      <br />
      <p>
        From cross-platform apps, to scalable APIs, or designing seamless user
        experience, I thrive turning complex interactions into elegant
        solutions.
      </p>
      <br />
      <p>
        When I’m not coding, you’ll probably find me on the golf course, cooking
        extravagant meals, or producing music.
      </p>
    </div>
  );

  return (
    <div className='flex flex-col'>
      {/* TITLE BAR */}
      <motion.div
        id='about'
        className='relative border-b-2 pb-2 text-4xl font-thin'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.div>
      {/* Text container */}
      <motion.div
        className='flex flex-col items-center justify-start py-16 text-2xl lg:flex-row'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className='text-2xl'>{text}</div>
        <Image
          src='/images/zack.png'
          alt=''
          width={1000}
          height={1}
          className='w-[100%] max-w-[40rem] p-16'
        ></Image>
      </motion.div>
    </div>
  );
}
