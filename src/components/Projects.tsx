import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

import { projects } from '../data/projectsData';


const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Headers */}
        <div className="text-left mb-16">
          <h3 className="text-secondary font-epilogue text-base uppercase font-thin tracking-wider mb-4">
            My Projects
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-epilogue font-bold text-secondary">
            Projects I Worked / Working On
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h4 className="font-epilogue font-bold text-xl mb-2 text-gray-800">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;