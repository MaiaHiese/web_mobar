"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para pasar la foto automáticamente.
  // Al poner 'currentIndex' en el array de dependencias, si el usuario
  // hace clic en una flecha, el temporizador de 3 segundos empieza de cero.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, currentIndex]);

  // Función para ir a la foto anterior
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Función para ir a la foto siguiente
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl bg-gray-100 group">
      
      {/* Contenedor Flex que se desplaza hacia la izquierda */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative min-w-full h-full">
            <Image
              src={src}
              alt={`Imagen de proyecto ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0} 
            />
          </div>
        ))}
      </div>

      {/* --- BOTONES DE NAVEGACIÓN (FLECHAS) --- */}
      
      {/* Flecha Izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-[#595A5C] w-10 h-10 flex items-center justify-center rounded-full shadow-md opacity-0 md:group-hover:opacity-100 transition-all duration-300 focus:opacity-100 z-10"
        aria-label="Imagen anterior"
      >
        <span className="text-xl font-bold">&#10094;</span>
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-[#595A5C] w-10 h-10 flex items-center justify-center rounded-full shadow-md opacity-0 md:group-hover:opacity-100 transition-all duration-300 focus:opacity-100 z-10"
        aria-label="Imagen siguiente"
      >
        <span className="text-xl font-bold">&#10095;</span>
      </button>

      {/* --- INDICADORES (PUNTITOS ABAJO) --- */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // Ahora podés hacer clic directo en el puntito
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  ); 
  
}