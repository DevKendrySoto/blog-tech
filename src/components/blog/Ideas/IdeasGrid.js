'use client';

import { useState } from 'react';
import {IdeaCard} from './IdeasCard';
import {IdeasFilters} from './IdeasFilter';
import projectIdeas from '../../../../data/ideas.json';

export function IdeasGrid() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [activeLevel, setActiveLevel] = useState('Todas');
  
  const categories = ['Todas', ...new Set(projectIdeas.map(idea => idea.category))];
  const levels = ['Todas', ...new Set(projectIdeas.map(idea => idea.level))];
  
  const filteredIdeas = projectIdeas.filter(idea => {
    const matchesCategory = activeCategory === 'Todas' || idea.category === activeCategory;
    const matchesLevel = activeLevel === 'Todas' || idea.level === activeLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <IdeasFilters 
        categories={categories.filter(c => c !== 'Todas')} 
        levels={levels.filter(l => l !== 'Todas')}
        activeCategory={activeCategory}
        activeLevel={activeLevel}
        setActiveCategory={setActiveCategory}
        setActiveLevel={setActiveLevel}
      />
      
      {filteredIdeas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">
            No hay ideas que coincidan con los filtros seleccionados
          </p>
        </div>
      )}
    </div>
  );
}