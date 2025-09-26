
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Location from './components/Location';
import Ingredients from './components/Ingredients';
import Offers from './components/Offers';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Location />
        <Ingredients />
        <Offers />
      </main>
      <Footer />
    </div>
  );
};

export default App;
