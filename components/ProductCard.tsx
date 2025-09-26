
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-brand-green-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-brand-green-600">{product.price}</span>
          <button className="bg-brand-green-100 text-brand-green-800 font-bold py-2 px-4 rounded-full hover:bg-brand-green-600 hover:text-white transition-colors duration-300">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
