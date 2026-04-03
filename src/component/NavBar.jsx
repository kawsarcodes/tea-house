export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-5 lg:px-20 h-20 flex items-center justify-between relative">
        
        <div className="flex items-center gap-2">
          <img src="/images/cup.png" alt="Logo" className="h-8" />
          <h1 className="text-2xl font-extrabold tracking-tight">
            Tea<span className="text-brand-orange">House</span>
          </h1>
        </div>
        
        <ul className="flex items-center gap-8 font-semibold text-gray-600 dark:text-gray-300">
          <li><a href="#" className="hover:text-brand-orange transition">Home</a></li>
          <li><a href="#shop" className="hover:text-brand-orange transition">Shop</a></li>
          <li><a href="#client" className="hover:text-brand-orange transition">Client</a></li>
          <li><a href="#contact" className="hover:text-brand-orange transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="hidden lg:block tea-gradient-bg text-white font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition transform hover:-translate-y-0.5 text-sm">
            Buy Now
          </button>
        </div>
      </nav>
    </header>
  );
}