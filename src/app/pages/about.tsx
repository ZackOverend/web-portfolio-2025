'use client';

import SectionHeaderLine from '@/components/section-header';

export default function AboutView() {
  const text = (
    <div className=''>
      <p>Hey, I’m Zackary Overend</p>
      <br />
      <p>
        Software developer, problem-solver, and explorer of new experiences. I
        strive to craft intuitive applications and designs that make technology
        feel effortless, vigilant of every single detail.
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
    <div id='about'>
      <SectionHeaderLine heading={'ABOUT ME'} />

      <div className='font absolute z-50 h-52 w-[vw] px-14 py-14 text-white'>
        {text}
      </div>
    </div>
  );
}
