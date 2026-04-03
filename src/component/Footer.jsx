export default function Footer({ id }) {
    return (
        <footer id={id} className="bg-orange-50 dark:bg-gray-900 pt-20 pb-10 transition-colors duration-300">
            <div className="container mx-auto px-5 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <img src="/images/cup.png" alt="Logo" className="h-16 w-16" referrerPolicy="no-referrer" />
                    <div className="flex items-center gap-6">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Ready to get started?</span>
                        <button className="tea-gradient-bg text-white font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-center md:text-left">
                    <div className="space-y-4">
                        <h5 className="font-bold text-lg dark:text-white">Quick Links</h5>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange transition">Home</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">Insurance</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-bold text-lg dark:text-white">Our Service</h5>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange transition">Life Insurance</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">Car Insurance</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">Health Insurance</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">House Insurance</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-bold text-lg dark:text-white">Help</h5>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            <li><a href="#" className="hover:text-brand-orange transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h5 className="font-bold text-2xl dark:text-white">Subscribe to our newsletter</h5>
                        <div className="flex border-b-2 border-gray-300 dark:border-gray-700 pb-2 focus-within:border-brand-orange transition">
                            <input type="email" placeholder="Email address" className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400" />
                            <button className="bg-brand-orange text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-brand-red transition">
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                        <div className="flex gap-6 justify-center md:justify-start text-gray-500 text-xl">
                            <a href="https://kawsar.dev" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-globe"></i>
                            </a>
                            <a href="https://github.com/kawsarcodes" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/mdkawsarahmed" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-400 dark:text-gray-600 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p>© 2026 Kawsar - All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
