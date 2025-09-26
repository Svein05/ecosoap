
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-900 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} EcoSoap. Todos los derechos reservados.</p>
        <p className="text-brand-green-200 mt-2">Hecho con amor por el planeta.</p>
      </div>
    </footer>
  );
};

export default Footer;
