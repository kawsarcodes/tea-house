export default function Banner() {
    return (
        <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-20 gap-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    It's good <br />
                    tea time at The <br />
                    Tea House
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg max-w-lg mx-auto md:mx-0">
                    Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.
                </p>
                <button className="tea-gradient-bg text-white font-bold py-4 px-7 rounded-xl shadow-lg hover:opacity-90 transition transform hover:-translate-y-1">
                    Explore More <i className="fa-solid fa-arrow-right -rotate-45 ml-2"></i>
                </button>
            </div>
            <div className="flex-1 relative flex justify-center md:justify-end">
                <img src="/images/banner.png" alt="Tea Banner" className="w-full h-70 md:h-auto z-10 mt-10" referrerPolicy="no-referrer" />
                <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 bg-white dark:bg-gray-800 p-3 md:p-5 rounded-xl md:rounded-2xl shadow-2xl flex items-center gap-2 md:gap-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center">
                        <img src="/images/banner-rating.png" alt="Rating Icon" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg md:text-2xl dark:text-white">5.00</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-sm">Trust Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
