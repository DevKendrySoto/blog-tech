// components/Blog/NewsCarousel.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import featuredPosts from "../../../data/featuredPosts";

export function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === featuredPosts.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? featuredPosts.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 rounded-xl overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Novedades <span className="text-blue-600 dark:text-blue-400">Tecnológicas</span>
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Anterior"
            >
              <FiChevronLeft className="text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Siguiente"
            >
              <FiChevronRight className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div 
          className="relative h-96 md:h-80 lg:h-96 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`absolute inset-0 transition-opacity duration-500 flex items-center ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} de lectura</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Leer más
                    <FiChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {featuredPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-blue-600 w-6 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}