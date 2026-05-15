"use client"; // Le decimos a Next.js que este componente necesita interactuar con el navegador
import { useEffect, useRef, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface AnimatedRibbonsProps {
  reasons: string[];
}

export default function AnimatedRibbons({ reasons }: AnimatedRibbonsProps) {
  // Estado para saber si el usuario ya scrolleó hasta acá
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Creamos el "vigilante" del scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento entra en la pantalla...
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectamos para que la animación se haga UNA sola vez
        }
      },
      { threshold: 0.2 } // 0.2 significa que se activa cuando el 20% del bloque es visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="order-2 relative flex flex-col justify-between py-2 md:-ml-8 z-0">
      {reasons.map((reason, index) => (
        <div 
          key={index}
          // Si isVisible es true, le inyectamos la clase 'animate-slide-ribbon', si no, lo dejamos oculto (opacity-0)
          className={`flex items-center gap-4 bg-white border border-gray-100 text-[#595A5C] py-3.5 pr-6 pl-6 md:pl-14 rounded-r-2xl shadow-sm hover:shadow-md transition-all ${
            isVisible ? 'animate-slide-ribbon opacity-0' : 'opacity-0'
          }`}
          // Respetamos el retraso escalonado
          style={{ animationDelay: isVisible ? `${index * 300}ms` : '0ms' }}
        >
          <CheckCircleIcon className="w-7 h-7 text-[#05AEEA] flex-shrink-0 drop-shadow-sm" aria-hidden="true" />
          <span className="text-base md:text-lg font-medium tracking-tight">{reason}</span>
        </div>
      ))}
    </div>
  );
}