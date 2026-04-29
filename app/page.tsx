import Image from "next/image";
import Link from "next/link";

export default function LandingMobar() {
  const whatsappLink = "https://wa.me/5493510000000"; // Reemplazar con el número real

  return (
    <main className="min-h-screen bg-[#F9FAFB] text-[#020202] font-sans selection:bg-[#595A5C] selection:text-white">
      
      {/* HEADER CELESTE */}
      <header className="sticky top-0 z-50 w-full bg-[#05AEEA] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image 
              src="/Mobar_Logo.jpg" 
              alt="Mobar Logo" 
              width={160} 
              height={50} 
              className="w-32 md:w-40 h-auto"
              priority
            />
          </Link>
          
          {/* Botón CTA Header */}
          <Link
            href={whatsappLink}
            target="_blank"
            className="hidden md:inline-block bg-white text-[#595A5C] px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-sm"
          >
            Contactanos
          </Link>
        </div>
      </header>

      {/* HERO SECTION (Textos e imagen a la misma altura) */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 md:h-[450px]">
          
          {/* Columna Textos */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 h-full py-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#05AEEA] uppercase tracking-wide">
              Somos MOBAR
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold text-[#020202] leading-tight">
              Creamos soluciones para que cada ambiente sea <span className="text-[#595A5C]">cómodo, práctico y con estilo.</span>
            </h1>
            <p className="text-[#595A5C] text-base font-medium max-w-md mt-2">
              Realizamos muebles a medida de excelente calidad. Nuestros diseños son 100% personalizados y nos ajustamos a tu presupuesto.
            </p>
            <Link
              href={whatsappLink}
              target="_blank"
              className="mt-4 bg-[#05AEEA] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-[#595A5C] transition-all shadow-md hover:shadow-lg"
            >
              Cotizar mi proyecto
            </Link>
          </div>

          {/* Columna Imagen */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-full rounded-2xl overflow-hidden shadow-xl">
            {/* Acordate de reemplazar esto con tu componente <Image> real cuando tengas la foto */}
            <div className="absolute inset-0 bg-[#595A5C]/10 flex items-center justify-center border-2 border-dashed border-[#595A5C]/30">
               <span className="text-[#595A5C] font-semibold px-4 text-center">Acá va la foto del mueble (ocupa el mismo alto que el texto)</span>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICIOS / PILARES */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Diseño de muebles",
              "Asesoramiento personalizado",
              "Muebles a medida",
              "Equipamiento de oficinas",
            ].map((servicio, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[#F9FAFB] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-[#05AEEA]/10 text-[#05AEEA] group-hover:bg-[#05AEEA] group-hover:text-white transition-colors rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#595A5C]">{servicio}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFÍA (BANNER CELESTE - TEXTO DELICADO) */}
      <section className="bg-[#05AEEA] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
            "No vendemos solo muebles, creamos espacios que se viven. Nos metemos en cada detalle para lograr algo que <span className="font-bold text-white">realmente te represente.</span>"
          </h2>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#595A5C] text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[#595A5C] text-lg font-medium">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#05AEEA] font-bold">✓</span>
                Te asesoramos de forma gratuita.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#05AEEA] font-bold">✓</span>
                Contamos con distintas formas de pago.
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#05AEEA] font-bold">✓</span>
                Cumplimos con tus expectativas en tiempo y forma.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#05AEEA] font-bold">✓</span>
                Años de experiencia y equipo de profesionales.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER CELESTE */}
      <footer className="bg-[#05AEEA] text-white py-20 text-center px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Te gustaría transformar tus espacios con Mobar?
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium">
            Tu espacio ideal está a un mensaje. Hablanos y lo hacemos realidad.
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            className="mt-6 bg-white text-[#595A5C] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Escribinos por WhatsApp
          </Link>
        </div>
      </footer>
    </main>
  );
}