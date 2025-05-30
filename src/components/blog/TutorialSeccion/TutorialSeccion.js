// components/Tutorials/TutorialsSection.js
import {TutorialsGrid} from './TutorialGrid';

export function TutorialsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Aprende con <span className="text-blue-600 dark:text-blue-400">Tutoriales</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Guías paso a paso para dominar las tecnologías más demandadas
          </p>
        </div>
        
        <TutorialsGrid />
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Ver todos los tutoriales
          </button>
        </div>
      </div>
    </section>
  );
}