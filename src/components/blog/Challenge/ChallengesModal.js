'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function ChallengeModal({ isOpen, onClose, challenge }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {challenge.title}
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {challenge.description}
          </p>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Casos de prueba:
            </h4>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              {challenge.testCases.map((testCase, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <span className="font-medium">Input:</span> {testCase.input}
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <span className="font-medium">Output:</span> {testCase.output}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Solución:
            </h4>
            <SyntaxHighlighter 
              language={challenge.language.toLowerCase()} 
              style={atomDark}
              showLineNumbers
              customStyle={{ borderRadius: '0.5rem', margin: 0 }}
            >
              {challenge.solution}
            </SyntaxHighlighter>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}