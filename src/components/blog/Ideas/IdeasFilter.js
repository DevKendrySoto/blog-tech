'use client';

export function IdeasFilters({ 
  categories, 
  levels,
  activeCategory,
  activeLevel,
  setActiveCategory,
  setActiveLevel
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Categoría
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('Todas')}
            className={`px-3 py-1 text-sm rounded-full ${
              activeCategory === 'Todas'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Todas
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-sm rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Dificultad
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveLevel('Todas')}
            className={`px-3 py-1 text-sm rounded-full ${
              activeLevel === 'Todas'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Todas
          </button>
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-3 py-1 text-sm rounded-full ${
                activeLevel === level
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}