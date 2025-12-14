"use client";
import Reveal from '../components/Reveal';
import Link from 'next/link';
import { Wrench, Box, ShoppingCart, Gauge, ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Reveal>
        <section className=" relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
          </div>

          <div className=" reveal-stagger relative z-10 text-center px-6 max-w-6xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <p className="text-white/90 text-sm font-medium tracking-wide">PRECISION METAL FABRICATION</p>
            </div>

            <h1 className="reveal text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
              Sayyed Engineering Works
            </h1>

            <p className="reveal text-2xl md:text-3xl text-neutral-200 mb-4 font-light max-w-3xl mx-auto">
              Where Standard Meets Custom
            </p>

            <p className="reveal text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Transforming stainless steel into solutions — from everyday essentials to complex industrial components
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl ">
                View Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Custom Solutions
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce ">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </section>
        {/* Value Proposition Strip */}
        {/* <section className="bg-neutral-900 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <p className="text-white font-medium">ISO-Certified Quality</p>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Zap className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <p className="text-white font-medium">Rapid Turnaround Times</p>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Wrench className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <p className="text-white font-medium">Expert Craftsmanship</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="reveal-stagger py-32 px-6 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="reveal text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
                Our Capabilities
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Comprehensive metal fabrication services designed for reliability and precision
              </p>
            </div>

            {/* Standard Products Card */}
            <div className="reveal grid md:grid-cols-2 gap-8">
              <div className=" group bg-white border-2 border-neutral-200 rounded-2xl p-10 hover:border-neutral-900 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-neutral-100 group-hover:bg-neutral-900 p-4 rounded-xl transition-colors duration-300">
                    <Box className="w-8 h-8 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900">
                    Standard Products
                  </h3>
                </div>

                <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                  Engineered stainless steel products for high-performance industrial applications.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="bg-neutral-900 p-2 rounded-lg mt-1">
                      <Box className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-1">Stainless Steel Trays</h4>
                      <p className="text-neutral-600">
                        Food-grade and industrial trays in multiple sizes — corrosion-resistant and easy to sanitize
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="bg-neutral-900 p-2 rounded-lg mt-1">
                      <Gauge className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-1">Storage Tanks</h4>
                      <p className="text-neutral-600">
                        Pressure-tested tanks for water, chemicals, and industrial fluids with custom capacity options
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="bg-neutral-900 p-2 rounded-lg mt-1">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-900 mb-1">Heavy-Duty Carts</h4>
                      <p className="text-neutral-600">
                        Welded stainless steel carts with reinforced frames, designed for high-load material handling
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-8 w-full bg-neutral-900 text-white py-4 rounded-xl font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                  Browse  Products
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Custom Fabrication Card */}
              <div className="reveal group bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className=" absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 group-hover:to-blue-600/20 transition-all duration-300"></div>

                <div className="  relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">
                      Custom Fabrication
                    </h3>
                  </div>

                  <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                    Precision-engineered solutions tailored to your exact specifications.
                  </p>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                    <h4 className="text-xl font-semibold mb-4">Our Process</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-sm font-bold">1</span>
                        <span className="text-neutral-300">Consultation & Design Review</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-sm font-bold">2</span>
                        <span className="text-neutral-300">Prototyping</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-sm font-bold">3</span>
                        <span className="text-neutral-300">Precision Fabrication</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-sm font-bold">4</span>
                        <span className="text-neutral-300">Quality Testing & Delivery</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Specializations</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Architectural metalwork
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Machinery components
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Custom fixtures
                      </div>
                      <div className="flex items-center gap-2 text-neutral-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Specialized equipment
                      </div>
                    </div>
                  </div>
                  <Link  href="/contact">
                    <button className="mt-8 w-full bg-white text-neutral-900 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products & Services */}

        {/* CTA Section */}

        {/* <section className="reveal relative bg-gradient-to-br from-neutral-800 via-neutral-900 to-black py-32 px-6 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="reveal-stagger relative z-10 max-w-5xl mx-auto">
            <div className="reveal text-center mb-16">
              <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <p className="text-white/90 text-sm font-semibold tracking-wide">GET STARTED TODAY</p>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Build Something<br />
                <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                  Exceptional?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-3xl mx-auto">
                Let&apos;s discuss your project requirements and create a solution that exceeds expectations.
              </p>

              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                From initial concept to final delivery, our expert team is ready to bring your vision to life with precision engineering.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-white text-neutral-900 px-12 py-5 text-lg font-bold rounded-xl hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 text-lg font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Fast Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Expert Guidance</span>
              </div>
            </div>
          </div>

        </section> */}

      {/* Visual Separator */}
      {/* <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
      </div> */}
      </Reveal>

    </main>
  );
}