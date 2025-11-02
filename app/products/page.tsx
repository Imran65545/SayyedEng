import Reveal from '../../components/Reveal';

export default function Products() {
  const products = [
    {
      title: 'Industrial Tanks',
      description: 'Custom-fabricated stainless steel tanks for chemical processing, food storage, and pharmaceutical applications.',
      image: 'https://images.unsplash.com/photo-1581092918484-8313bde8f087?q=80&w=2070',
      features: [
        '304/316L grade options',
        'Sanitary design',
        'Custom capacities',
        'FDA compliant'
      ]
    },
    {
      title: 'Piping Systems',
      description: 'Complete stainless steel piping solutions including pipes, fittings, valves, and supports.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070',
      features: [
        'Seamless and welded',
        'Multiple diameters',
        'High pressure rated',
        'Corrosion resistant'
      ]
    },
    {
      title: 'Food Processing Equipment',
      description: 'Hygienic stainless steel equipment designed for food and beverage processing facilities.',
      image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=2070',
      features: [
        'Food grade 316L',
        'Easy to clean',
        'Sanitary connections',
        'HACCP compliant'
      ]
    },
    {
      title: 'Precision Machined Parts',
      description: 'CNC machined stainless steel components with tight tolerances for critical applications.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
      features: [
        '±0.001" tolerance',
        'Surface finish Ra 32',
        'Complex geometries',
        'Material certifications'
      ]
    },
    {
      title: 'Heat Exchangers',
      description: 'Custom designed stainless steel heat exchangers for efficient thermal management.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070',
      features: [
        'Shell and tube',
        'Plate type available',
        'High efficiency',
        'Custom design'
      ]
    },
    {
      title: 'Structural Components',
      description: 'Architectural and structural stainless steel elements for building and construction projects.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
      features: [
        'Architectural grade',
        'Weather resistant',
        'Decorative finishes',
        'Structural integrity'
      ]
    },
    {
      title: 'Laboratory Equipment',
      description: 'Specialized stainless steel equipment for research and analytical laboratories.',
      image: 'https://images.unsplash.com/photo-1581092918484-8313bde8f087?q=80&w=2070',
      features: [
        'Chemical resistant',
        'Easy sterilization',
        'Precision construction',
        'Contamination-free'
      ]
    },
    {
      title: 'Marine Hardware',
      description: 'Corrosion-resistant stainless steel hardware designed for marine and offshore applications.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070',
      features: [
        'Marine grade 316',
        'Salt water resistant',
        'Durable construction',
        'IMO approved'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="reveal text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Our Products
            </h1>
            <p className="reveal text-neutral-600 text-lg max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of high-quality stainless steel products designed to meet the
              demanding requirements of various industries.
            </p>
            <button className="reveal bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-200">
              All Products
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 reveal-stagger">
            {products.map((product, index) => (
              <div
                key={index}
                className="reveal bg-white border border-neutral-200 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-neutral-600">
                        <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-neutral-50 rounded-sm p-12 text-center reveal">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
              Our engineering team can design and fabricate custom stainless steel products
              tailored to your specific requirements. Contact us to discuss your project.
            </p>
            <button className="bg-blue-900 text-white px-10 py-4 rounded-sm font-semibold hover:bg-blue-800 transition-colors duration-200">
              Request Custom Quote
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
