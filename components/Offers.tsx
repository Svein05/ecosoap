
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Jabón en Barra',
    description: 'De manteca con aceite esencial de frutilla.',
  price: "$1.200",
  imageUrl: 'JabonBarra.jpg'
  },
  {
    id: 2,
    name: 'Lavaloza Industrial (1L)',
    description: 'Limpieza profunda para uso industrial.',
  price: "$1.200",
  imageUrl: 'LavalozaIndustrial.jpg'
  },
  {
    id: 3,
    name: 'Recarga para Lavaloza Industrial',
    description: 'Recarga x Litro para Lavaloza Industrial.',
  price: "$630",
  imageUrl: 'RecargaLavaloza.jpg'
  }
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