import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel'; // Importamos el carrusel
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

        <section className="bg-white py-16 w-full">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            
            {/* ACÁ REEMPLAZAMOS EL CUADRO GRIS POR EL CAROUSEL */}
            <div className="order-2 md:order-1 relative w-full aspect-[4/3]">
               <Carousel images={featuresImages} />
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight">
                ¿Por qué elegirnos?
              </h2>
              
              <div className="space-y-4">
                {reasonsToChoose.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-teal-400 to-teal-600 text-white p-4 rounded-xl shadow-md"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" aria-hidden="true" />
                    <span className="text-lg font-medium">{reason}</span>
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