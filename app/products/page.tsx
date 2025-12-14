import Reveal from '../../components/Reveal';
import Image from 'next/image';

export default function Products() {
  const products = [
    { name: 'Product 1', price: 2499.99, amount: 12,  image: '/images/image1.jpeg' },
    { name: 'Product 2', price: 499.5, amount: 50,  image: '/images/image2.jpeg' },
    { name: 'Product 3', price: 1599.0, amount: 8,  image: '/images/image3.jpeg' },
    { name: 'Product 4', price: 129.99, amount: 120,  image: '/images/image4.jpeg' },
    { name: 'Product 5', price: 3199.0, amount: 5,  image: '/images/image5.jpeg' },
    { name: 'Product 6', price: 899.0, amount: 24,  image: '/images/image6.jpeg' },
    { name: 'Product 7', price: 749.0, amount: 10, image: '/images/image7.jpeg' },
    { name: 'Product 8', price: 39.95, amount: 300,  image: '/images/image8.jpeg' },
    { name: 'Product 9', price: 1899.0, amount: 15,  image: '/images/image9.jpeg' },
    { name: 'Product 10', price: 1899.0, amount: 15,  image: '/images/image10.jpeg' },
    { name: 'Product 11', price: 1899.0, amount: 15,  image: '/images/image11.jpeg' },
    { name: 'Product 12', price: 1899.0, amount: 15,  image: '/images/image12.jpeg' },
    { name: 'Product 13', price: 1899.0, amount: 15, image: '/images/image13.jpeg' },
    { name: 'Product 14', price: 1899.0, amount: 15,  image: '/images/image14.jpeg' },
    { name: 'Product 15', price: 1899.0, amount: 15,  image: '/images/image15.jpeg' },
    { name: 'Product 16 ', price: 1899.0, amount: 15,  image: '/images/image16.jpeg' }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="reveal text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Products
            </h1>
            <p className="reveal text-neutral-600 text-lg max-w-3xl mx-auto">
              Browse available items. Each card shows name, price, amount and category.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 reveal-stagger">
            {products.map((p, index) => (
              <div key={index} className="reveal bg-white border border-neutral-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-[20rem]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-blue-900">{p.name}</h3>

                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Price</span>
                      <span className="font-semibold text-neutral-800">${p.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Amount</span>
                      <span className="font-semibold text-neutral-800">{p.amount}</span>
                    </div>
                    <div className="flex justify-between">

                      <span className="text-neutral-700"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </Reveal>
      </div>
    </main>
  );
}
