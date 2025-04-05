'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectsMobile from './mobile/projects-mobile';

export default function ProjectView() {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start'], // start when enters, end when exits
  });

  // Orb movement (moves slower = subtle parallax)
  const leftOrbY = useTransform(scrollYProgress, [0, 1], [-10, 40]);
  const rightOrbY = useTransform(scrollYProgress, [0, 1], [-50, 70]);

  // Text (moves a bit faster for foreground feel)
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <>
      <motion.div
        id='projects'
        className='border-b-2 pb-2 text-4xl font-thin'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.div>

      <div className='z-20 hidden items-end text-end md:block'>
        <div className='pt-8 text-3xl font-black italic'>NOVA WEATHER</div>
        <div className='-space-y-1 text-lg text-[#8E8E8E]'>
          <p>AI Driven Smart</p>
          <p>Weather App</p>
        </div>
      </div>

      <div className='sm:hidden'>
        <ProjectsMobile />
      </div>

      {/* Container Wrapper */}
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='lg:-mx-50 z-20 -mt-[20rem] mr-4 hidden scale-75 sm:block md:-mt-[20rem] md:scale-[0.9] lg:-mt-[16rem] lg:scale-[1] xl:mr-32 xl:scale-[1.2] 2xl:scale-[1.7]'>
          {/* RIGHT CIRCLE */}
          <motion.div
            style={{ y: rightOrbY }}
            className='absolute left-[8rem] top-[-6rem] flex h-[20rem] w-[20rem] flex-col rounded-full bg-[#E7E7E7] shadow-[0_0_500px_5px_rgba(150,150,150,0.4)]'
          >
            <div className='mx-auto my-auto h-[6rem] w-[16rem] flex-col'>
              <h1 className='ml-12 w-96 pb-6 text-[1.1rem] text-black'>
                Personalized Experience
              </h1>
              {/* LINE */}
              <Image
                src='/images/nova-weather/nova-line-2.svg'
                alt='iPhone frame back'
                className='relative left-[-1rem] top-[-5rem] w-[40rem]'
                width={0}
                height={0}
              />
              <p className='w-46 -mt-[4.3rem] ml-12 text-[.8rem] font-thin text-black'>
                Track current weather, favourite multiple locations, and access
                detailed forecasts, including "feels like" temperatures.
              </p>
            </div>
          </motion.div>

          {/* LEFT CIRCLE */}
          <motion.div
            style={{ y: leftOrbY }}
            className='absolute bottom-[-4rem] right-[1rem] flex h-[20rem] w-[20em] flex-col rounded-full bg-[#E7E7E7] shadow-[0_0_500px_5px_rgba(150,150,150,0.4)]'
          >
            {/* TEXT Container */}
            <div className='mx-auto my-auto flex h-[10rem] w-[16rem] flex-col text-black'>
              {/* Text Content */}
              <h1 className='text-[1.1rem] text-black'>
                AI-Driven Description
              </h1>
              {/* LINE */}
              <Image
                src='/images/nova-weather/nova-line-1.svg'
                alt='iPhone frame back'
                className='relative left-0 top-[-.2rem] w-[40rem]'
                width={0}
                height={0}
              />
              <p className='-mt-[3.5rem] w-48 text-[.8rem] font-thin'>
                Driven by Gemini AI Nova Weather features customized insight
                about your current location
              </p>
            </div>
          </motion.div>

          {/* IPHONE */}
          <Image
            src='/images/nova-weather/iPhoneFrame.svg'
            alt='iPhone frame back'
            className='absolute left-1/2 top-1/2 z-10 min-w-[40em] -translate-x-1/2 -translate-y-1/2'
            sizes='80rem'
            width={0}
            height={0}
          />

          {/* IPHONE LOCATION INFO */}
          <Image
            src='/images/nova-weather/location.svg'
            alt='iPhone location information'
            className='absolute left-[4rem] top-[-9.5rem] z-10 min-w-[12em]'
            width={0}
            height={0}
            quality={50}
          />
          <Image
            src='/images/nova-weather/description.svg'
            alt='ai generated description'
            className='absolute left-[-13rem] top-[-5rem] z-20 min-w-[17em] drop-shadow-xl'
            width={0}
            height={0}
          />

          <motion.div
            className='absolute right-[-14rem] top-[-16.5rem] z-10'
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            {/* IPHONE BLURRED SQUARE ANIMATED */}
            <div className='blurred-shape'></div>

            <Image
              src='/images/nova-weather/nova-content.svg'
              alt='content'
              className='absolute left-2 top-[7rem]'
              width={500}
              height={40}
            />
          </motion.div>
        </div>
      </div>

      {/* BACKGDROUND GRID */}
      <div className='absolute bottom-0 left-[3rem] right-[3rem] top-[6.5rem] z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:18px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] xl:mx-[7rem]'></div>

      <section className='h-[100vh] w-[100vw] bg-white'></section>
    </>
  );
}
