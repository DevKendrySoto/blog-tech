'use client';

import TutorialCard from './TutorialCard';
import tutorial from '../../../../data/tutorial';
import { useState } from 'react';

export function TutorialsGrid() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  const categories = ['Todos', ...new Set(tutorial.map(t => t.category))];
  
  const filteredTutorials = activeCategory === 'Todos' 
    ? tutorial 
    : tutorial.filter(t => t.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutorials.map(tutorial => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}