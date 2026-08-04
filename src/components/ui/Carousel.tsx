import { useState, type JSX } from 'react';
import { type CarouselImage } from '@/types/ui.types';

interface CarouselProps {
  images: CarouselImage[];
  className?: string;
}

export function ImageCarousel({ images, className = '' }: CarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!images || images.length === 0) return <></>;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-md border border-border group ${className}`}>
      {/* Pista deslizante (Track) con translateX */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-[350px] sm:h-[480px] w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="relative min-w-full h-full bg-surface flex-shrink-0">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <p className="text-sm sm:text-base font-medium tracking-wide">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      <button
        onClick={handlePrev}
        aria-label="Imagen anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Botón Siguiente */}
      <button
        onClick={handleNext}
        aria-label="Imagen siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores de paginación (Dots) */}
      <div className="absolute bottom-4 right-6 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir a imagen ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}