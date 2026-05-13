import Image from 'next/image';

const Header = () => {
  return (
    // El fondo ocupa toda la pantalla (w-full)
    <header className="bg-sky-500 py-6 shadow-md w-full"> 
      
      {/* max-w-[1000px] mx-auto px-6 crea la plomada */}
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center bg-transparent"> 
          <Image
            src="/Mobar_Logo_Transp.png" 
            alt="Logo de Mobar"
            width={120} 
            height={50} 
            className="object-contain" 
            priority
          />
        </div>

        <button className="bg-white text-sky-500 px-6 py-2 rounded-full font-semibold hover:bg-sky-100 transition duration-300 shadow-sm">
          Contactanos
        </button>
      </div>
    </header>
  );
};

export default Header;