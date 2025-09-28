
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-brand-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(FondoPagina.jpg)", opacity: 0.1 }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-green-50 via-brand-green-50/50 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-green-900 mb-4 tracking-tight">
          Jabones que Cuidan de Ti y del Planeta
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-green-800 font-light mb-8">
          Descubre la belleza de lo artesanal con nuestros jabones ecológicos, elaborados con aceite de cocina reciclado y transformado en una caricia para tu piel.
        </p>
      </div>
      
      <a 
        href="#ubicacion"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        aria-label="Desplazarse hacia abajo"
      >
        <svg className="w-10 h-10 text-brand-green-800 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
