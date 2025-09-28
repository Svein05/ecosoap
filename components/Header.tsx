import React, { useState, useEffect } from 'react';

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.06 9 13 17 11V8m-2-4a1 1 0 0 1 1 1v5.5a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5V5a1 1 0 0 1 1-1h6m-3-2h-1A5.5 5.5 0 0 0 6.5 7.5V13A5.5 5.5 0 0 0 12 18.5h1A5.5 5.5 0 0 0 18.5 13V5.5A5.5 5.5 0 0 0 13 0h-1z" />
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <a href="#inicio" className="flex items-center space-x-2">
            <LeafIcon className="w-8 h-8 text-brand-green-600" />
            <span className="text-2xl font-serif font-bold text-brand-green-800">EcoEspuma</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;