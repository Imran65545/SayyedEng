import Link from 'next/link';
import { Wrench, Box, ShoppingCart, Gauge } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <Reveal>
            <h1 className="reveal text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Sayyed Engineering Works
            </h1>
            <p className="reveal text-xl md:text-3xl text-white mb-4 font-light">
              Standard & Custom Fabrication
            </p>
            <p className="reveal text-lg md:text-xl text-neutral-300 mb-12">
              From household essentials to industrial-grade parts.
            </p>

            <Link
              href="/products"
              className="reveal inline-block bg-white text-neutral-900 px-10 py-4 text-lg font-semibold rounded-sm hover:bg-neutral-200 transition-colors duration-200"
            >
              Explore Our Expertise
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-12 reveal-stagger">
              <div className="reveal bg-neutral-50 border border-neutral-200 p-12 rounded-sm hover:border-neutral-300 transition-colors duration-200">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  Standard Products
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-900 p-3 rounded-sm">
                      <Box className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">Trays</h3>
                      <p className="text-neutral-600">
                        High-quality stainless steel trays for commercial and industrial use
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-900 p-3 rounded-sm">
                      <Gauge className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">Tanks</h3>
                      <p className="text-neutral-600">
                        Durable storage tanks engineered for longevity and performance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-neutral-900 p-3 rounded-sm">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">Carts</h3>
                      <p className="text-neutral-600">
                        Heavy-duty stainless steel carts for efficient material handling
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal bg-neutral-900 text-white p-12 rounded-sm hover:bg-neutral-800 transition-colors duration-200">
                <h2 className="text-3xl font-bold mb-8">
                  Custom Fabrication
                </h2>

                <div className="flex items-start gap-6 mb-8">
                  <div className="bg-white p-4 rounded-sm">
                    <Wrench className="w-12 h-12 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Engineered to Your Specifications
                    </h3>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      Our expert team works closely with you to design and manufacture custom stainless steel solutions tailored to your exact requirements. From prototypes to full-scale production, we deliver precision craftsmanship.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Architectural metalwork
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Industrial machinery components
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Custom fixtures and fittings
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Specialized equipment fabrication
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
