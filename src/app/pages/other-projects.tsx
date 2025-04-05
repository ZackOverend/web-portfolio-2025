'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OtherProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Image-IN',
      description: 'Drag-and-drop image analysis with JSON output.',
      image: '/images/thumbnails/image-in-thumb.png',
      details:
        'Image-IN allows users to upload images and get AI-generated JSON data about the contents. Built with Next.js and computer vision APIs.',
    },
    {
      title: 'SL Installations',
      description:
        'Office furniture installations and commercial moving solutions.',
      image: '/images/thumbnails/sl-installations-thumb.png',
      details:
        'A full-service furniture installation company website built with a clean and functional design using React and Tailwind CSS.',
    },
    {
      title: 'Royal Blue Custom Homes',
      description:
        'Modernized visual identity for a local custom homes building company.',
      image: '/images/thumbnails/rbc-thumb.png',
      details:
        'A creative branding project focused on simplifying and modernizing an existing logo, with color palette exploration and typography updates. ',
    },
    {
      title: 'InDesignn Studio 51',
      description:
        'Overhauled graphics and created visually distinguished designs',
      image: '/images/thumbnails/ids51-thumb.png',
      details:
        'A creative branding project focused on simplifying and modernizing an existing logo, with color palette exploration and typography updates.',
    },
  ];

  return (
    <div className='z-20 flex flex-wrap justify-center gap-12 p-6 text-black'>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className='w-[24rem] cursor-pointer rounded-2xl bg-[#E7E7E7] p-4 shadow-lg transition-shadow hover:shadow-xl'
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveIndex(index)}
        >
          <div className='relative mb-4 h-[14rem] w-full overflow-hidden rounded-xl'>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover'
            />
          </div>
          <h3 className='mb-1 text-xl font-semibold'>{project.title}</h3>
          <p className='text-sm text-gray-600'>{project.description}</p>
        </motion.div>
      ))}

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)} // Close when clicking background
          >
            <motion.div
              className='relative w-11/12 rounded-2xl bg-white p-6 shadow-2xl md:w-[500px]'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={() => setActiveIndex(null)}
                className='absolute right-4 top-4 text-xl text-gray-500 hover:text-black'
              >
                &times;
              </button>
              <div className='relative mb-4 h-48 w-full overflow-hidden rounded-xl'>
                <Image
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  fill
                  className='object-cover'
                />
              </div>
              <h2 className='mb-2 text-2xl font-bold'>
                {projects[activeIndex].title}
              </h2>
              <p className='text-gray-700'>{projects[activeIndex].details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
