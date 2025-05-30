// components/Projects/ProjectCard.js
import Link from 'next/link';

export function ProjectCard({ project }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          <Link href={`/proyectos/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Cliente: <span className="font-normal">{project.client}</span>
        </h4>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={`/proyectos/${project.slug}`}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver caso de estudio →
          </Link>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline"
            >
              Ver en vivo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}