export function IdeaCard({ idea }) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
              {idea.category}
            </span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">
              {idea.level}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {idea.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {idea.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Tecnologías recomendadas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {idea.technologies.map(tech => (
                <span key={tech} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Características básicas:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {idea.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Extensiones posibles:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-500 space-y-1">
              {idea.extensions.map((extension, i) => (
                <li key={i}>{extension}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }