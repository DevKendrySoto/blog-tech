import Link from 'next/link';

export default function TutorialCard({ tutorial }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img 
          src={tutorial.image} 
          alt={tutorial.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tutorial.level}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {tutorial.category}
          </span>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
            {tutorial.duration}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          <Link href={`/tutoriales/${tutorial.slug}`}>
            {tutorial.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {tutorial.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tutorial.lessons} lecciones
          </span>
          <div className="flex space-x-2">
            {tutorial.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}