import Reveal from '../../components/Reveal';
import Image from 'next/image';
import { ShoppingBag, Package } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  const products = [
    { name: 'Product 1', price: 2499.99, amount: 12, image: '/images/image1.jpeg' },
    { name: 'Product 2', price: 499.5, amount: 50, image: '/images/image2.jpeg' },
    { name: 'Product 3', price: 1599.0, amount: 8, image: '/images/image3.jpeg' },
    { name: 'Product 4', price: 129.99, amount: 120, image: '/images/image4.jpeg' },
    { name: 'Product 5', price: 3199.0, amount: 5, image: '/images/image5.jpeg' },
    { name: 'Product 6', price: 899.0, amount: 24, image: '/images/image6.jpeg' },
    { name: 'Product 7', price: 749.0, amount: 10, image: '/images/image7.jpeg' },
    { name: 'Product 8', price: 39.95, amount: 300, image: '/images/image8.jpeg' },
    { name: 'Product 9', price: 1899.0, amount: 15, image: '/images/image9.jpeg' },
    { name: 'Product 10', price: 1899.0, amount: 15, image: '/images/image10.jpeg' },
    { name: 'Product 11', price: 1899.0, amount: 15, image: '/images/image11.jpeg' },
    { name: 'Product 12', price: 1899.0, amount: 15, image: '/images/image12.jpeg' },
    { name: 'Product 13', price: 1899.0, amount: 15, image: '/images/image13.jpeg' },
    { name: 'Product 14', price: 1899.0, amount: 15, image: '/images/image14.jpeg' },
    { name: 'Product 15', price: 1899.0, amount: 15, image: '/images/image15.jpeg' },
    { name: 'Product 16', price: 1899.0, amount: 15, image: '/images/image16.jpeg' }
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
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                        {p.name}
                      </h3>
                      {/* <div className="bg-neutral-100 p-2 rounded-lg">
                        <Package className="w-5 h-5 text-neutral-700" />
                      </div> */}
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Price</span>
                        <span className="font-semibold text-neutral-900 text-base">
                          ₹{p.price.toFixed(2)}
                        </span>
                      </div>
                      {/* <div className="flex justify-between">
                        <span className="text-neutral-500">Available</span>
                        <span className="font-semibold text-neutral-900">
                          {p.amount} units
                        </span>
                      </div> */}
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                      <button className="mt-8 w-full py-3 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-black transition-all duration-300">
                        Get a Quote
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