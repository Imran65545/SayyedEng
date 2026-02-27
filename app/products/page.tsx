import Reveal from '../../components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    { id: '1', name: 'Product 1', price: 2499.99, amount: 12, image: '/images/image1.jpeg' },
    { id: '2', name: 'Product 2', price: 499.5, amount: 50, image: '/images/image2.jpeg' },
    { id: '3', name: 'Product 4', price: 129.99, amount: 120, image: '/images/image4.jpeg' },
    { id: '4', name: 'Product 5', price: 3199.0, amount: 5, image: '/images/image5.jpeg' },
    { id: '5', name: 'Product 6', price: 899.0, amount: 24, image: '/images/image6.jpeg' },
    { id: '6', name: 'Product 7', price: 749.0, amount: 10, image: '/images/image7.jpeg' },
    { id: '7', name: 'Product 8', price: 39.95, amount: 300, image: '/images/image8.jpeg' },
    { id: '8', name: 'Product 13', price: 1899.0, amount: 15, image: '/images/image13.jpeg' },
    { id: '9', name: 'Product 14', price: 1899.0, amount: 15, image: '/images/image14.jpeg' },
    { id: '10', name: 'Product 15', price: 1899.0, amount: 15, image: '/images/image15.jpeg' },
    { id: '11', name: 'Product 16', price: 1899.0, amount: 15, image: '/images/image16.jpeg' }
  ];

  return (
    <main className="bg-white">

      {/* Hero Section */}
      <Reveal>
        <section className=" reveal-stagger relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-32 px-6 overflow-hidden">

          {/* Background blur accents */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neutral-400 rounded-full blur-3xl"></div>
          </div>

          <div className=" reveal relative z-10 max-w-4xl mx-auto text-center my-10  flex flex-col justify-center items-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              {/* <ShoppingBag className="w-4 h-4 text-white" /> */}
              <p className="text-white/90 text-sm font-semibold tracking-wide">
                OUR COLLECTION
              </p>
            </div>

            <h1 className="reveal text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Engineered Products<br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Built for Performance
              </span>
            </h1>

            <p className=" reveal text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Precision-crafted stainless steel solutions designed for durability and excellence
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className=" reveal-stagger py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 reveal-stagger">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="reveal group bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-900 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative w-full h-[15rem] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                        {p.name}
                      </h3>
                    </div>

                    {/* B2B Info Section */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">MOQ</span>
                        <span className="font-semibold text-neutral-900">
                          100 Units
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-neutral-500">Price</span>
                        <span className="font-semibold text-neutral-900">
                          {p.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </span>
                      </div>
                    </div>
                    {/* CTA */}
                    <Link href={`/products/${p.id}`} target='_blank'>
                      <button className="mt-6 w-full py-3 rounded-xl capitalize bg-neutral-900 text-white font-semibold hover:bg-black transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </Reveal>
    </main>
  );
}