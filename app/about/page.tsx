import { Target, Eye, CheckCircle, Award, Users, TrendingUp, Globe, Factory } from 'lucide-react';
import Reveal from '@/components/Reveal';
export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Reveal>
        <section className="reveal-stagger relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="reveal relative z-10 max-w-4xl mx-auto text-center my-10  flex flex-col justify-center items-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <p className="text-white/90 text-sm font-semibold tracking-wide">EST. 2006</p>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Excellence<br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Since 2006
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              From a small workshop to an industry leader — driven by passion, built on precision
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 reveal-stagger">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 reveal">
                <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full mb-6">
                  <p className="text-neutral-900 text-sm font-semibold tracking-wide">OUR STORY</p>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  Built on Vision,<br />Driven by Passion
                </h2>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  Founded by <span className="font-bold text-neutral-900">Mr. Faisal Sayyed</span>, who was born in a small village in Uttar Pradesh, India, Sayyed Engineering Works began with a clear mission: to transform raw stainless steel into solutions that power industries and improve lives.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  What started as a modest workshop fueled by determination and engineering expertise has evolved into a recognized manufacturer serving diverse sectors.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  Today, our main manufacturing facility in Thane, Maharashtra employs over 10 skilled craftsmen and engineers who share our commitment to excellence. We&apos;ve completed thousands of projects, from intricate custom components to large-scale industrial installations, each one reflecting our unwavering dedication to quality.
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Factory className="w-5 h-5 text-neutral-900" />
                    <span className="font-medium">Thane, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Users className="w-5 h-5 text-neutral-900" />
                    <span className="font-medium">10+ Team Members</span>
                  </div>
                </div>
              </div>

              <div className="relative reveal">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-[600px]"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating stat card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-4xl font-bold text-neutral-900">18+</p>
                        <p className="text-neutral-600 font-medium">Years of Excellence</p>
                      </div>
                      <div className="bg-neutral-900 p-3 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-neutral-900 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="reveal-stagger py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto reveal">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full mb-6">
                <p className="text-neutral-900 text-sm font-semibold tracking-wide">WHAT DRIVES US</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                The principles that guide every decision, every project, and every relationship
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white border-2 border-neutral-200 rounded-2xl p-10 hover:border-neutral-900 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">Our Mission</h3>
                <p className="text-neutral-600 leading-relaxed text-center">
                  To deliver superior stainless steel products that exceed industry standards while maintaining exceptional service, reliability, and fostering lasting partnerships with our clients.
                </p>
              </div>

              <div className="group bg-white border-2 border-neutral-200 rounded-2xl p-10 hover:border-neutral-900 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed text-center">
                  To be recognized globally as the leading provider of innovative stainless steel solutions, setting new benchmarks for quality, sustainability, and customer satisfaction.
                </p>
              </div>

              <div className="group bg-white border-2 border-neutral-200 rounded-2xl p-10 hover:border-neutral-900 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">Quality First</h3>
                <p className="text-neutral-600 leading-relaxed text-center">
                  We maintain unwavering commitment to quality through rigorous testing, adherence to international standards, and continuous improvement in every aspect of our operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="reveal-stagger py-24 px-6 bg-neutral-900">
          <div className="reveal max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Impact by Numbers
              </h2>
              <p className="text-xl text-neutral-400">
                Milestones that reflect our growth and commitment
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">18+</div>
                <div className="text-neutral-400 font-medium text-lg capitalize">Years of Experience</div>
              </div>

              <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">20+</div>
                <div className="text-neutral-400 font-medium text-lg capitalize">Long served client base</div>
              </div>

              <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">10+</div>
                <div className="text-neutral-400 font-medium text-lg">Skilled Team Members</div>
              </div>

              <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">100%</div>
                <div className="text-neutral-400 font-medium text-lg">Quality Commitment</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className=" reveal-stagger py-24 px-6 bg-white">
          <div className="reveal max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full mb-6">
                <p className="text-neutral-900 text-sm font-semibold tracking-wide">CERTIFIED EXCELLENCE</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Industry Certifications
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Maintaining the highest standards through internationally recognized certifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 text-center hover:border-neutral-900 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-neutral-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">ISO 9001:2015</h3>
                <p className="text-neutral-600">Quality Management System</p>
              </div>

              <div className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 text-center hover:border-neutral-900 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-neutral-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">ISO 14001</h3>
                <p className="text-neutral-600">Environmental Management</p>
              </div>

              <div className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 text-center hover:border-neutral-900 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-neutral-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">ASME Certified</h3>
                <p className="text-neutral-600">Pressure Vessel Standards</p>
              </div>

              <div className="group bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 text-center hover:border-neutral-900 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="bg-neutral-900 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">FDA Approved</h3>
                <p className="text-neutral-600">Food-Grade Materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="reveal-stagger py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
          <div className="reveal max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Trusted partners across diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                'Food Processing',
                'Chemical Processing',
                'Oil & Gas',
                'Construction',
                'Manufacturing'
              ].map((industry) => (
                <div key={industry} className="flex justify-center items-center bg-white border border-neutral-200 rounded-xl p-6 text-center hover:border-neutral-900 hover:shadow-lg transition-all duration-300">
                  <p className="font-semibold text-neutral-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}