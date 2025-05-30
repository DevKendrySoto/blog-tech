'use client';

import {ProjectCard} from './ProjectCard';
import {ProjectsFilters} from './ProjectFilter';
import projects from '../../../../data/project';
import { useState } from 'react';

export  function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = ['Todos', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProjectsFilters 
        categories={categories.filter(c => c !== 'Todos')} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">
            No hay proyectos en esta categoría
          </p>
        </div>
      )}
    </div>
  );
}