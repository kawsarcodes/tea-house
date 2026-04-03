export default function GreatTea() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center my-24">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-100 dark:bg-red-900/20 rounded-2xl h-32 md:h-40 w-full opacity-50"></div>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl row-span-2 flex items-center justify-center">
          <img 
            src="/images/fresh-1.png" 
            alt="Fresh Tea" 
            className="h-48 md:h-64 w-auto object-contain" 
          />
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl row-span-2 flex items-center justify-center pt-20 pb-20">
          <img 
            src="/images/fresh-2.png" 
            alt="Fresh Tea" 
            className="h-48 md:h-64 w-auto object-contain" 
          />
        </div>
        
        <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-32 md:h-40 w-full opacity-50"></div>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight dark:text-white">
          Great Tea, Freshly <br /> Presented
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions. It represents the highest quality and self expectation.
        </p>
        
        <div className="space-y-4 pt-4">
          <div>
            <h4 className="font-bold text-xl mb-2 dark:text-white">Unique Taste</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              A Unique and different style from other teapots gives a luxurious and minimalist impression
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2 dark:text-white">Premium Quality</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Premium Quality that makes tea more elegant and more durable when you use it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}