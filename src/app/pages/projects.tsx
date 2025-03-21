'use client';

// import { useParallax } from "@/hooks/useParralax";
// import { motion } from 'framer-motion';
// import GradientButton from './gradient-button';
import SlideTabs from '../../components/slide-tabs';
import prj from '@/data/projects.json';
import Image from 'next/image';
import { ProjectsData } from '@/data/types'; // Import the TypeScript types

export default function ProjectView() {
  const tabs = [
    {
      title: 'Nova Weather',
      content: <ProjectDetails id={'1'} />,
    },
    {
      title: 'Task Flow',
      content: <p>Sorry, this page is currently in development</p>,
    },
    {
      title: 'Recipe Manager',
      content: <p>Sorry, this page is currently in development</p>,
    },
    {
      title: 'Image Detection API',
      content: <p>Sorry, this page is currently in development</p>,
    },
  ];

  return <SlideTabs tabs={tabs} />;
}

// Ensure TypeScript treats projectsData as an object with the correct structure
const projects: ProjectsData = prj;

export function ProjectDetails({ id }: { id: string }) {
  const projectKey = `p${id}`; // "p1", "p2", or "p3"
  const projectData = projects[projectKey]; // Dynamically select the project

  // Handle invalid `id`
  if (!projectData) {
    return <div>Project Not Found</div>;
  }

  return (
    <div className='p-12'>
      <div className='w-fit space-y-12 text-center'>
        {/* Title Section */}
        <div>
          <h1>{prj.p1.title}</h1>
          <p className='text-[16px] text-[#7D7D7D]'>{prj.p1.subtitle}</p>
          <div className='mt-4 h-[.01em] bg-white'></div>
        </div>

        {/* CONTENT */}
        <section className='flex items-center justify-center space-x-8'>
          <div className='w-4/6 space-y-10 text-left'>
            <p>{prj.p1.desc}</p>
            {/* Map through features f1, f2, f3, f4 */}
            {Object.values(prj.p1.feat).map((f, index) => (
              <div key={index} className='space-y-1'>
                <h2 className='bg-gradient-to-b from-[#AEFFE1] to-[#AEBCFF] bg-clip-text text-transparent'>
                  {f.title}
                </h2>
                <p className='pl-8'>{f.content}</p>
              </div>
            ))}
          </div>
          <div className='-z-10 h-full w-full min-w-48 flex-1 justify-center'>
            <div className='flex'>
              <Image
                src={'images/IPhone-vert.svg'}
                alt='iOS Image'
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// export function ProjectDetails2({ name }: { name: string }) {
//   return (
//     <div>
//       <h1>Test</h1>
//     </div>
//   );
// }

// export function ProjectDetails3({ name }: { name: string }) {
//   return (
//     <div>
//       <h1>Test</h1>
//     </div>
//   );
// }
// export function ProjectDetails4({ name }: { name: string }) {
//   return (
//     <div>
//       <h1>Test</h1>
//     </div>
//   );
// }
