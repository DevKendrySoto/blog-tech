// components/Challenges/ChallengesGrid.js
'use client';

import {ChallengeCard} from './ChallengesCard';
import challenges from '../../../data/challeges.json';
import { useState } from 'react';

export function ChallengesGrid() {
  const [difficultyFilter, setDifficultyFilter] = useState('Todas');
  const [languageFilter, setLanguageFilter] = useState('Todas');

  const difficulties = ['Todas', ...new Set(challenges.map(c => c.difficulty))];
  const languages = ['Todas', ...new Set(challenges.map(c => c.language))];

  const filteredChallenges = challenges.filter(challenge => {
    const matchesDifficulty = difficultyFilter === 'Todas' || challenge.difficulty === difficultyFilter;
    const matchesLanguage = languageFilter === 'Todas' || challenge.language === languageFilter;
    return matchesDifficulty && matchesLanguage;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Dificultad
          </label>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          >
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Lenguaje
          </label>
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800"
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>
      
      {filteredChallenges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map(challenge => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">
            No hay retos que coincidan con los filtros seleccionados
          </p>
        </div>
      )}
    </div>
  );
}