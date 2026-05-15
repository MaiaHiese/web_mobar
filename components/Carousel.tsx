// components/Carousel.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Funciones separadas para poder usarlas tanto en el carrusel chico como en el grande
  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Evita que al hacer click en la flecha se cierre el modal
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full h-full group">
    {/* IMAGEN PRINCIPAL */}
      <div 
        // 1. Le sacamos el bg-gray-100/50 porque ya no hay huecos que tapar
        className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={images[current]}
          alt={`Trabajo Mobar ${current}`}
          fill
          // 2. Volvemos a 'object-cover' y le sacamos el 'p-2' (padding) que la achicaba
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* FLECHAS DEL CARRUSEL NORMAL */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:scale-125 transition-transform"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:scale-125 transition-transform"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* --- MODAL (LIGHTBOX) CON NAVEGACIÓN --- */}
      {mounted && isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-5 right-5 text-white text-5xl hover:text-gray-400 transition-colors z-50 drop-shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            ×
          </button>

          {/* Flecha Anterior Modal */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:scale-125 transition-transform z-50 drop-shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Imagen Gigante */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
            <Image
              src={images[current]}
              alt="Zoom Mobar"
              fill
              className="object-contain"
            />
          </div>

          {/* Flecha Siguiente Modal */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:scale-125 transition-transform z-50 drop-shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>,
        document.body
      )}
    </div>
  );
}