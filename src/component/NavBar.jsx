import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-5 lg:px-20 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <img src="/images/cup.png" alt="Logo" className="h-8" />
          <h1 className="text-2xl font-extrabold tracking-tight">
            Tea<span className="text-brand-orange">House</span>
          </h1>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-600 dark:text-gray-300">
          <li><a href="#" className="hover:text-brand-orange transition">Home</a></li>
          <li><a href="#shop" className="hover:text-brand-orange transition">Shop</a></li>
          <li><a href="#client" className="hover:text-brand-orange transition">Client</a></li>
          <li><a href="#contact" className="hover:text-brand-orange transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden lg:block tea-gradient-bg text-white font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition transform hover:-translate-y-0.5 text-sm">
            Buy Now
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-600 dark:text-gray-300 p-2"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        <div className={`absolute top-20 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <ul className="flex flex-col p-5 space-y-4 font-semibold text-gray-600 dark:text-gray-300">
            <li><a onClick={() => setIsOpen(false)} href="#" className="block hover:text-brand-orange">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#shop" className="block hover:text-brand-orange">Shop</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#client" className="block hover:text-brand-orange">Client</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact" className="block hover:text-brand-orange">Contact</a></li>
            <li>
               <button className="w-full tea-gradient-bg text-white font-bold py-3 px-6 rounded-lg text-sm">
                Buy Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}