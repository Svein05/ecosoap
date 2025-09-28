
import React from 'react';

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"></path>
    </svg>
);


const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-green-900">Nuestra Ubicación</h2>
          <p className="text-lg text-gray-600 mt-2">Encuéntranos y descubre el corazón de nuestro proyecto.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src="/Ubicacion.jpg" alt="Mapa de la ubicación" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <MapPinIcon className="w-8 h-8 text-brand-green-600 mr-3"/>
              <h3 className="text-2xl font-bold text-brand-green-800">Tienda y Taller Artesanal</h3>
            </div>
            <p className="text-gray-700 text-lg mb-2">
              Avenida Libertad 1847,
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Viña del Mar, Región de Valparaíso, Chile.
            </p>
            <p className="text-gray-500">
              Visítanos para conocer el proceso de creación y llévate un pedacito de naturaleza a casa. ¡Te esperamos con los brazos abiertos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
