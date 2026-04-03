export default function FeaturedProducts({ id }) {
  const products = [
    { id: 1, name: 'Milk Tea', desc: 'Creamer could be replaced by fresh milk', img: '/images/tea-1.png' },
    { id: 2, name: 'Black Tea', desc: 'Creamer could be replaced by fresh milk', img: '/images/tea-2.png' },
    { id: 3, name: 'Green Tea', desc: 'Creamer could be replaced by fresh milk', img: '/images/tea-3.png' },
    { id: 4, name: 'Lemon Tea', desc: 'Creamer could be replaced by fresh milk', img: '/images/tea-4.png' },
  ];

  return (
    <section id={id} className="my-24">

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-extrabold text-4xl md:text-5xl dark:text-white">
          Our Featured Products
        </h2>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl text-center shadow-sm hover:shadow-xl dark:shadow-gray-900 transition duration-300 border border-transparent dark:border-gray-800"
          >
            <img 
              src={product.img} 
              alt={product.name} 
              className="mx-auto mb-6 h-32 object-contain" 
            />
            <h3 className="font-bold text-2xl mb-2 dark:text-white">
              {product.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {product.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}