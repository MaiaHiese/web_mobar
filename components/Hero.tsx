import Carousel from './Carousel';

const Hero = () => {
  // Las fotos que se van a mostrar en el Hero
  const heroImages = [
    "/Hero1.jpg", 
    "/Hero2.jpg", 
    "/Hero3.jpg"
  ];

  return (
    <section className="bg-white pt-10 pb-16 w-full">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6"> 
          <h2 className="text-sky-500 font-bold text-xl tracking-wide uppercase">
            SOMOS MOBAR
          </h2>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-extrabold leading-tight">
            Creamos soluciones para que cada ambiente sea{' '}
            <span className="text-gray-900 font-extrabold">cómodo, práctico y con estilo.</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-lg">
            Realizamos muebles a medida de excelente calidad. Nuestros diseños son 100% personalizados y nos ajustamos a tu presupuesto.
          </p>
          <button className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition duration-300 shadow-md">
            Cotizar mi proyecto
          </button>
        </div>

        {/* ACÁ REEMPLAZAMOS EL CUADRO GRIS POR EL CAROUSEL */}
        <div className="relative w-full aspect-square md:aspect-[4/3]">
          <Carousel images={heroImages} />
        </div>

      </div>
    </section>
  );
};

export default Hero;