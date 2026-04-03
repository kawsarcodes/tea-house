
export default function NavBar() {
  return (
    <header className="sticky top-0 z-50">
        <nav className="container mx-auto px-5 lg:px-20 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img 
                  src="https://picsum.photos/seed/teacup/100/100" 
                  alt="Logo" 
                  className="h-8 w-8 rounded-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
                <h1 className="text-2xl font-extrabold tracking-tight">
                  Tea<span className="text-brand-orange">House</span>
                </h1>
            </div>

            <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
                <li><a href="#" className="hover:text-brand-orange transition">Home</a></li>
                <li><a href="#" className="hover:text-brand-orange transition">About</a></li>
                <li><a href="#" className="hover:text-brand-orange transition">Shop</a></li>
                <li><a href="#" className="hover:text-brand-orange transition">Contact</a></li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="hidden sm:flex w-10 h-10 rounded-full hover:bg-gray-100 transition items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                
                <button className="hidden lg:block tea-gradient-bg text-white font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition transform hover:-translate-y-0.5 text-sm">
                    Buy Now
                </button>
            </div>
        </nav>
    </header>
  );
}