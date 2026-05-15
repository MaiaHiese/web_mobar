// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import AnimatedRibbons from '@/components/AnimatedRibbons'; // Acordate de que este archivo ya tiene que estar creado en components/

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
    "/ptn1.webp",
    "/ptn2.webp",
    "/ptn3.webp",
    "/ptn4.webp",
    "/ptn5.webp"
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
    
        {/* --- EL ROMPEOLAS CON DEGRADÉ Y ONDA --- */}
        <section className="relative w-full py-12 shadow-inner overflow-hidden">
          {/* Fondo con degradé diagonal para dar esa "onda" geométrica */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#05AEEA] via-[#009FD6] to-[#0080B5] -skew-y-1 origin-center scale-110"></div>
          
          <div className="relative max-w-[1000px] mx-auto px-6 text-center flex flex-col gap-1 z-10">
            <p className="text-white text-xl md:text-2xl font-medium drop-shadow-md italic opacity-90">
              No vendemos solo muebles, creamos espacios que se viven.
            </p>
            <p className="text-white text-xl md:text-2xl font-medium drop-shadow-md">
              Nos involucramos en cada detalle para lograr algo que <span className="font-extrabold">realmente te represente.</span>
            </p>
          </div>
        </section>

        {/* SECCIÓN 2: POR QUÉ ELEGIRNOS */}
        <section className="relative pt-12 pb-24 w-full">
          <div className="max-w-[1200px] mx-auto px-6">
            
            <h2 className="text-[#595A5C] text-3xl md:text-4xl font-extrabold leading-tight text-center mb-16">
              ¿Por qué elegirnos?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-stretch">
              
              {/* CARRUSEL */}
              <div className="order-1 relative w-full aspect-square md:aspect-[5/4] z-10 shadow-2xl shadow-[#05AEEA]/20 rounded-2xl overflow-hidden bg-white ring-1 ring-black/5">
                <Carousel images={featuresImages} />
              </div>

              {/* COMPONENTE ANIMADO (Reemplaza a todo el código de cintas anterior) */}
              <AnimatedRibbons reasons={reasonsToChoose} />

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}