'use client';
import { useState } from 'react';
import { ProjectCard } from '@/components/mobile/project-card';
import { ProjectModal } from '@/components/mobile/project-modal';
import OtherProjects from '../other-projects';

export default function ProjectsMobile() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleOpen = (project: string) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <div className='flex flex-col space-y-4 p-8'>
      <OtherProjects />
      {/* <ProjectCard
        title='NOVA WEATHER'
        subtitle='AI Driven Smart Weather App'
        onClick={() => handleOpen('nova')}
      />

      {selectedProject === 'nova' && (
        <ProjectModal
          isOpen={true}
          onClose={handleClose}
          title='NOVA WEATHER'
          description='Nova Weather is an AI-powered app that predicts weather conditions using natural language input and real-time APIs.'
        />
      )} */}

      {/* Add more ProjectCard + Modal pairs as needed */}
    </div>
  );
}
