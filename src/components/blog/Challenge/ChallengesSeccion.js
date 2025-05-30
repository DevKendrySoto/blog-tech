// components/Challenges/ChallengesSection.js
import {ChallengesGrid} from './ChallengesGrid';

export function ChallengesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Retos de <span className="text-blue-600 dark:text-blue-400">Lógica</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mejora tus habilidades de programación resolviendo estos desafíos
          </p>
        </div>
        
        <ChallengesGrid />
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Ver más retos
          </button>
        </div>
      </div>
    </section>
  );
}