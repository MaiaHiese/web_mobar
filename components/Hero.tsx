import Link from 'next/link';
import Carousel from './Carousel';

const Hero = () => {
  const heroImages = [
    "/Hero1.jpg", 
    "/Hero2.jpg", 
    "/Hero3.jpg"
  ];

  // link de WhatsApp con mensaje automático
  const message = encodeURIComponent("Hola Mobar! Me gustaría cotizar un proyecto de mueble a medida.");
  const whatsappLink = `https://wa.me/5493512349501?text=${message}`;

  return (
    <section className="relative pt-15 pb-16 w-full overflow-hidden isolate">
      
      {/* --- FONDO DE PAPEL ARRUGADO --- */}
      {/* 1. La imagen de fondo (Z-index más bajo) */}
      <div 
        className="absolute inset-0 -z-20 bg-[url('/textura-papel.jpg')] bg-cover bg-center opacity-60"
      ></div>
      
      {/* 2. Capa semi-transparente para que el texto sea legible */}
      <div className="absolute inset-0 -z-10 bg-white/10"></div>
      {/* ------------------------------- */}

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6 z-10"> 
          {/* <h2 className="text-sky-500 font-bold text-xl tracking-wide uppercase">
            SOMOS MOBAR
          </h2> */}
          <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold leading-tight">
            Creamos soluciones para que cada ambiente sea{' '}
            <span className="text-gray-900 font-extrabold">cómodo, práctico y con estilo.</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-lg">
            Realizamos muebles a medida de excelente calidad. Nuestros diseños son 100% personalizados y nos ajustamos a tu presupuesto.
          </p>

          <Link 
            href={whatsappLink}
            target="_blank"
            className="inline-block bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Cotizá tu proyecto
          </Link>
        </div>

        <div className="relative w-full aspect-square md:aspect-[4/3] z-10">
          <Carousel images={heroImages} />
        </div>

      </div>
    </section>
  );
};

export default Hero;