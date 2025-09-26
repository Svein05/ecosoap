
import React from 'react';

const OilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 11.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>;
const GlycerinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v18"></path><path d="M19 3v18"></path><path d="M5 12h14"></path></svg>;
const ScentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14s.5-1 2-1 1.5 1 2 1 1-1 2-1 1.5 1 2 1 1-1 2-1 1.5 1 2 1 1-1 2-1"></path><path d="M4 9s.5-1 2-1 1.5 1 2 1 1-1 2-1 1.5 1 2 1 1-1 2-1 1.5 1 2 1 1-1 2-1"></path><path d="M4 4s.5-1 2-1 1.5 1 2 1 1-1 2-1 1.5 1 2 1 1-1 2-1 1.5 1 2 1 1-1 2-1"></path></svg>;
const NaturalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.9 10.1a2 2 0 0 0-2.3-2.3l-1.1 1.1-1.1-1.1a2 2 0 0 0-2.8 0L12 9.4l-1.6-1.6a2 2 0 0 0-2.8 0l-1.1 1.1-1.1-1.1a2 2 0 1 0-2.3 2.3l1.1 1.1-1.1 1.1a2 2 0 0 0 0 2.8l1.6 1.6-1.6 1.6a2 2 0 0 0 2.8 2.8l1.1-1.1 1.1 1.1a2 2 0 0 0 2.8 0l1.6-1.6 1.6 1.6a2 2 0 0 0 2.8-2.8l-1.1-1.1 1.1-1.1a2 2 0 0 0 0-2.8z"></path></svg>;


interface IngredientCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-brand-green-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Ingredients: React.FC = () => {
  const ingredients = [
    {
      icon: <OilIcon />,
      title: 'Aceite de Cocina Reciclado',
      description: 'Le damos una segunda vida a lo que normalmente se considera residuo. Cada gota que reutilizamos evita la contaminación de miles de litros de agua y se convierte en un jabón sustentable.',
    },
    {
      icon: <GlycerinIcon />,
      title: 'Glicerina Natural',
      description: 'Producida durante el proceso de saponificación, hidrata y suaviza la piel de forma natural y efectiva.',
    },
    {
      icon: <ScentIcon />,
      title: 'Esencias Aromáticas',
      description: 'Aportan fragancia y frescura a nuestros jabones, ofreciendo una experiencia agradable y duradera en cada uso.',
    },
    {
      icon: <NaturalIcon />,
      title: 'Aditivos Naturales',
      description: 'El extra que hace que nuestros jabones no solo limpien, sino que también nutran y protejan tu piel.',
    },
  ];

  return (
    <section id="ingredientes" className="py-20 bg-brand-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-green-900">Ingredientes Puros y Sostenibles</h2>
          <p className="text-lg text-gray-600 mt-2">Creemos en la transparencia y en el poder de la naturaleza.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <IngredientCard key={index} {...ingredient} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
