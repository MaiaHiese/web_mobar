// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const reasonsToChoose = [
  "Muebles a medida de excelente calidad",
  "Diseños 100% personalizados",
  "Asesoramiento de materiales, estilo y funcionalidad",
  "Entregas en tiempo y forma",
  "Presupuestos acordes a cada proyecto",
  "Múltiples opciones de pago",
];

export default function Home() {
  // Las fotos que se van a mostrar en la sección de Beneficios
  const featuresImages = [
    "/pqe1.jpg",
    "/pqe2.jpg",
    "/pqe3.jpg"
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* -- RESPUESTA AL PUNTO 6 Y 7 (Eliminar bloques antiguos) --
            He eliminado los componentes antiguos para centrar la atención en la nueva estructura. */}

        {/* -- RESPUESTA AL PUNTO 5 (Nuevo bloque Zigzag "Por qué elegirnos?") -- 
            Actualizado con efecto de "Cintas" animadas que salen desde atrás de la foto. */}
        <section className="bg-white py-20 w-full overflow-hidden">
          
          {/* -- RESPUESTA AL PUNTO 4 (Efecto Plomada: max-w-[1200px] mx-auto px-6) -- */}
          <div className="max-w-[1200px] mx-auto px-6">
            
            <h2 className="text-[#595A5C] text-3xl md:text-4xl font-extrabold leading-tight text-center mb-12">
              ¿Por qué elegirnos?
            </h2>

            {/* Contenedor Grid: items-stretch hace que ambas columnas midan lo mismo de alto */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-stretch">
              
              {/* Columna Izquierda: El Carousel (Z-10 para tapar el inicio de las cintas) */}
              <div className="order-1 relative w-full aspect-[4/3] z-10 shadow-2xl rounded-2xl overflow-hidden bg-gray-100">
                 <Carousel images={featuresImages} />
              </div>

              {/* Columna Derecha: El listado de Cintas
                  md:-ml-8 hace que se solapen un poquito por detrás del Carousel en PC.
                  justify-between reparte las 6 cintas para que ocupen todo el alto disponible. */}
              <div className="order-2 relative flex flex-col justify-between py-2 md:-ml-8 z-0">
                {reasonsToChoose.map((reason, index) => (
                  <div 
                    key={index}
                    // Clase 'animate-slide-ribbon' definida en globals.css
                    // El bg-[#F9FAFB] es el gris clarito que combina con el logo
                    className="flex items-center gap-4 bg-[#F9FAFB] border border-gray-100 text-[#595A5C] py-3.5 pr-6 pl-6 md:pl-14 rounded-r-2xl shadow-sm opacity-0 animate-slide-ribbon hover:bg-gray-50 transition-colors"
                    // Retraso de animación para que salgan escalonadas
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Icono Check con el color Celeste Mobar */}
                    <CheckCircleIcon className="w-7 h-7 text-[#05AEEA] flex-shrink-0 drop-shadow-sm" aria-hidden="true" />
                    <span className="text-base md:text-lg font-medium tracking-tight">{reason}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}