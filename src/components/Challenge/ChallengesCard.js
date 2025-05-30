// components/Challenges/ChallengeCard.js
'use client';

import { useState } from 'react';
import {ChallengeModal} from './ChallengesModal';

export function ChallengeCard({ challenge }) {
  const [isOpen, setIsOpen] = useState(false);

  const difficultyColors = {
    'Fácil': 'bg-green-100 text-green-800',
    'Intermedio': 'bg-yellow-100 text-yellow-800',
    'Difícil': 'bg-red-100 text-red-800'
  };

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[challenge.difficulty]}`}>
              {challenge.difficulty}
            </span>
            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
              {challenge.language}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {challenge.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {challenge.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {challenge.tags.map(tag => (
              <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <ChallengeModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        challenge={challenge}
      />
    </>
  );
}