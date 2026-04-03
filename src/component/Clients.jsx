export default function Clients({ id }) {
    return (
        <section id={id} className="tea-gradient-bg rounded-3xl px-8 py-16 md:p-20 text-white my-24 grid grid-cols-1 lg:grid-cols-2 gap-12 relative overflow-hidden items-center">

            <div className="flex flex-col justify-center space-y-6 z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">Meet Our Super <br /> Clients</h2>
                <p className="text-gray-100 opacity-90 leading-relaxed font-light">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-lg w-fit shadow-lg hover:bg-gray-100 transition">
                    Show All
                </button>
            </div>

            <div className="relative h-[480px] w-full flex items-center">

                <div className="absolute top-0 right-0 w-[80%] md:w-[60%] bg-white/40 dark:bg-gray-900/40 p-6 rounded-xl z-0 backdrop-blur-sm">
                    <div className="absolute -top-5 -left-5 bg-white/50 dark:bg-gray-800/50 rounded-full p-1">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full opacity-70 object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-white/80 dark:text-gray-300/60 text-xs mb-3 mt-2 line-clamp-3">
                        The atmosphere here is as refreshing as their Oolong blend. It has become my go to spot for weekend brainstorming sessions.
                    </p>
                    <div>
                        <h4 className="font-bold text-base text-white/90 dark:text-gray-200">Sabbir Rahman</h4>
                        <p className="text-white/70 dark:text-gray-400 text-xs">Creative Director</p>
                    </div>
                </div>

                <div className="absolute bottom-6 right-0 w-[80%] md:w-[60%] bg-white/40 dark:bg-gray-900/40 p-6 rounded-xl z-0 backdrop-blur-sm">
                    <div className="absolute -top-5 -left-5 bg-white/50 dark:bg-gray-800/50 rounded-full p-1">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop" alt="Client" className="w-10 h-10 rounded-full opacity-70 object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-white/80 dark:text-gray-300/60 text-xs mb-3 mt-2 line-clamp-3">
                        The quality of the tea is exceptional and the delivery was very fast. I highly recommend their premium collection for any tea lover.
                    </p>
                    <div>
                        <h4 className="font-bold text-base text-white/90 dark:text-gray-200">Afnan Hamim</h4>
                        <p className="text-white/70 dark:text-gray-400 text-xs">Software Engineer</p>
                    </div>
                </div>

                <div className="absolute top-1/2 left-0 md:left-4 -translate-y-1/2 w-[85%] md:w-[60%] bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl z-20">
                    <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-900 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
                        <img src="/images/dev/kawsar.dev.webp" alt="Client" className="w-12 h-12 object-cover" referrerPolicy="no-referrer" />
                    </div>

                    <p className="text-gray-500 dark:text-gray-300 text-sm mb-5 mt-4 leading-relaxed">
                        We are providing the best and suitable tea varieties for people who appreciate authentic taste and premium quality in every cup.
                    </p>
                    <div>
                        <h4 className="font-bold text-lg text-gray-800 dark:text-white">Kawsar Ahmed</h4>
                        <p className="text-gray-400 dark:text-gray-500 text-sm font-semibold">Full Stack Developer</p>
                    </div>

                    <div className="absolute bottom-5 right-5 w-8 opacity-40">
                        <img src="/images/circles.png" alt="Decorative Circles" className="w-full h-auto object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
}
