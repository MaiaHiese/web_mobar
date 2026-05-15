// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Footer from '@/components/Footer';

const reasonsToChoose = [
  "Muebles a medida de excelente calidad",
  "Diseños 100% personalizados",
  "Asesoramiento de materiales, estilo y funcionalidad",
  "Entregas en tiempo y forma",
  "Presupuestos acordes a cada proyecto",
  "Múltiples opciones de pago",
];

export default function Home() {
  const featuresImages = [
    "/pqe1.jpg",
    "/pqe2.jpg",
    "/pqe3.jpg"
  ];

  return (
    // Agregamos el div principal que envuelve todo (Header, Main y Footer)
    <div className="relative min-h-screen isolate">
      
      {/* --- FONDO GLOBAL DE PAPEL ARRUGADO --- */}
      {/* Usamos "fixed" en lugar de "absolute" para que el fondo no se corte al hacer scroll */}
      <div className="fixed inset-0 -z-20 bg-[url('/textura-papel.jpg')] bg-cover bg-center opacity-60"></div>
      <div className="fixed inset-0 -z-10 bg-white/10"></div>
      {/* -------------------------------------- */}

      <Header />
      
      <main>
        {/* SECCIÓN 1: HERO */}
        <Hero />

        {/* --- EL ROMPEOLAS --- */}
        <section className="bg-[#05AEEA] w-full py-10 shadow-inner relative z-10">
          <div className="max-w-[1000px] mx-auto px-6 text-center flex flex-col gap-1">
            <p className="text-white text-xl md:text-2xl font-medium drop-shadow-sm">
              No vendemos solo muebles, creamos espacios que se viven.
            </p>
            <p className="text-white text-xl md:text-2xl font-medium drop-shadow-sm">
              Nos involucramos en cada detalle para lograr algo que <span className="font-extrabold">realmente te represente.</span>
            </p>
          </div>
        </section>

        {/* SECCIÓN 2: POR QUÉ ELEGIRNOS */}
        {/* Como el fondo ya está a nivel global, le sacamos la foto a esta sección y dejamos solo el padding */}
        <section className="relative pt-12 pb-24 w-full">
          <div className="max-w-[1200px] mx-auto px-6">
            
            <h2 className="text-[#595A5C] text-3xl md:text-4xl font-extrabold leading-tight text-center mb-16">
              ¿Por qué elegirnos?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-stretch">
              
              <div className="order-1 relative w-full aspect-[4/3] z-10 shadow-2xl shadow-[#05AEEA]/20 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
                 <Carousel images={featuresImages} />
              </div>

              <div className="order-2 relative flex flex-col justify-between py-2 md:-ml-8 z-0">
                {reasonsToChoose.map((reason, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 bg-white border border-gray-100 text-[#595A5C] py-3.5 pr-6 pl-6 md:pl-14 rounded-r-2xl shadow-sm opacity-0 animate-slide-ribbon hover:shadow-md transition-all"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CheckCircleIcon className="w-7 h-7 text-[#05AEEA] flex-shrink-0 drop-shadow-sm" aria-hidden="true" />
                    <span className="text-base md:text-lg font-medium tracking-tight">{reason}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}