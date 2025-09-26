
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Jabón de Lavanda Relajante',
    description: 'Perfecto para un baño nocturno. Calma la mente y la piel con aceite esencial de lavanda.',
    price: '$4.500',
    imageUrl: 'https://picsum.photos/seed/soap1/400/400'
  },
  {
    id: 2,
    name: 'Jabón de Cítricos Energizante',
    description: 'Despierta tus sentidos con una mezcla vibrante de limón y naranja. Ideal para empezar el día.',
    price: '$4.500',
    imageUrl: 'https://picsum.photos/seed/soap2/400/400'
  },
  {
    id: 3,
    name: 'Jabón de Avena Exfoliante',
    description: 'Limpia y renueva tu piel suavemente con avena real y un toque de miel.',
    price: '$5.000',
    imageUrl: 'https://picsum.photos/seed/soap3/400/400'
  },
  {
    id: 4,
    name: 'Jabón de Eucalipto y Menta',
    description: 'Una explosión de frescura que descongestiona y revitaliza. Perfecto para después del ejercicio.',
    price: '$5.000',
    imageUrl: 'https://picsum.photos/seed/soap4/400/400'
  },
   {
    id: 5,
    name: 'Jabón de Rosa Mosqueta',
    description: 'Regenera e hidrata profundamente. Ideal para pieles maduras o con cicatrices.',
    price: '$5.500',
    imageUrl: 'https://picsum.photos/seed/soap5/400/400'
  },
  {
    id: 6,
    name: 'Jabón de Carbón Activado',
    description: 'Purifica y detoxifica los poros, eliminando impurezas y dejando la piel radiante.',
    price: '$5.500',
    imageUrl: 'https://picsum.photos/seed/soap6/400/400'
  },
];

const Offers: React.FC = () => {
  return (
    <section id="ofertas" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-green-900">Nuestros Jabones Artesanales</h2>
          <p className="text-lg text-gray-600 mt-2">Cada barra es única, hecha a mano con amor y conciencia ecológica.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;