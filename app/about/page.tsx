import { Target, Eye, CheckCircle, Award } from 'lucide-react';
import Reveal from '../../components/Reveal';

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <h1 className="reveal text-4xl md:text-5xl font-bold text-blue-900 mb-16">
            About SayyedEngWorks
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-24 reveal-stagger">
            <div className="space-y-6">
              <p className="reveal text-neutral-700 leading-relaxed">
                Founded in 2003, SayyedEngWorks has grown from a small family-owned
                business to become one of the most trusted names in stainless steel
                manufacturing. Our journey began with a simple vision: to provide the
                highest quality stainless steel products with unmatched customer service.
              </p>

              <p className="reveal text-neutral-700 leading-relaxed">
                Today, we serve a diverse range of industries including food processing,
                pharmaceuticals, chemical processing, oil and gas, and construction. Our
                state-of-the-art facility spans over 100,000 square feet and employs more
                than 200 skilled professionals.
              </p>

              <p className="reveal text-neutral-700 leading-relaxed">
                We pride ourselves on our ability to handle projects of any scale, from small
                custom components to large industrial installations. Our team of engineers
                and craftsmen work tirelessly to ensure every product meets our exacting
                standards.
              </p>
            </div>

            <div className="relative reveal">
              <div
                className="w-full h-full min-h-[400px] rounded-sm"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-sm"></div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="reveal text-3xl font-bold text-blue-900 text-center mb-4">
              Our Values
            </h2>
            <p className="reveal text-neutral-600 text-center mb-12">
              The principles that guide everything we do
            </p>

            <div className="grid md:grid-cols-3 gap-8 reveal-stagger">
              <div className="reveal bg-white border border-neutral-200 rounded-sm p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Target className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To deliver superior stainless steel products that exceed industry standards while
                  maintaining exceptional service and reliability.
                </p>
              </div>

              <div className="reveal bg-white border border-neutral-200 rounded-sm p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="bg-purple-100 p-4 rounded-full">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To be the leading provider of innovative stainless steel solutions globally, setting
                  new benchmarks for quality and customer satisfaction in the industry.
                </p>
              </div>

              <div className="reveal bg-white border border-neutral-200 rounded-sm p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Quality Commitment</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We are committed to maintaining the highest quality standards through rigorous
                  testing, adherence to international certifications and regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-sm py-16 px-6 mb-24">
            <h2 className="reveal text-3xl font-bold text-blue-900 text-center mb-12">
              By the Numbers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal-stagger">
              <div className="reveal text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">20+</div>
                <div className="text-neutral-600 font-medium">Years of Experience</div>
              </div>

              <div className="reveal text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">1000+</div>
                <div className="text-neutral-600 font-medium">Projects Completed</div>
              </div>

              <div className="reveal text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">200+</div>
                <div className="text-neutral-600 font-medium">Team Members</div>
              </div>

              <div className="reveal text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-neutral-600 font-medium">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="reveal text-3xl font-bold text-blue-900 text-center mb-4">
              Certifications & Standards
            </h2>
            <p className="reveal text-neutral-600 text-center mb-12">
              We maintain the highest industry certifications to ensure quality and compliance
            </p>

            <div className="grid md:grid-cols-4 gap-6 reveal-stagger">
              <div className="reveal bg-white border border-neutral-200 rounded-sm p-6 text-center hover:border-blue-900 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">ISO 9001:2015</h3>
                <p className="text-neutral-600 text-sm">Quality Management</p>
              </div>

              <div className="reveal bg-white border border-neutral-200 rounded-sm p-6 text-center hover:border-blue-900 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">ISO 14001</h3>
                <p className="text-neutral-600 text-sm">Environmental Management</p>
              </div>

              <div className="reveal bg-white border border-neutral-200 rounded-sm p-6 text-center hover:border-blue-900 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">ASME</h3>
                <p className="text-neutral-600 text-sm">Pressure Vessel Code</p>
              </div>

              <div className="reveal bg-white border border-neutral-200 rounded-sm p-6 text-center hover:border-blue-900 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">FDA Approved</h3>
                <p className="text-neutral-600 text-sm">Food Grade Materials</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
