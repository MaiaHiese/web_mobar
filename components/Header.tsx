import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const message = encodeURIComponent("Hola Mobar! Me gustaría cotizar un proyecto de mueble a medida.");
  const whatsappLink = `https://wa.me/5493512349501?text=${message}`;

  return (
    // pt-12 para dar buen aire arriba y que luzca el logo sobresaliendo
    <header className="relative w-full pt-12 z-50 isolate">
      
      {/* 1. FRANJA TURQUESA TOTAL CON DEGRADÉ */}
      {/* Corregimos 'bg-linear' por 'bg-gradient'*/}
      <div className="w-full bg-gradient-to-r from-[#05AEEA] via-[#05AEEA] to-[#0080B5] h-20 shadow-lg relative z-0">
        
        {/* 2. CONTENEDOR INTERNO (Mantiene la 'plomada' de 1200px) */}
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* Espacio reservado a la izquierda para el logo */}
          <div className="w-32 md:w-40 flex-shrink-0"></div>

          {/* BOTÓN CONTACTANOS */}
          <Link
            href={whatsappLink}
            target="_blank"
            className="bg-white text-[#595A5C] px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Contactanos
          </Link>

          {/* 3. LOGO 3D SOBRESALIENDO */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
            <div className="bg-white w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center border-4 border-white shadow-2xl shadow-gray-600/50 overflow-hidden transition-transform hover:scale-105 duration-300">
              <Image 
                src="/Mobar_Logo_Circulo.png" 
                alt="Mobar Logo Circular" 
                width={150}
                height={150} 
                className="object-contain p-2"
                priority
              />
            </div>
          </div>

        </div>
      {/* Cerramos el div del banner turquesa ACÁ, envolviendo al contenido */}
      </div>
    </header> 
  );
};

export default Header;