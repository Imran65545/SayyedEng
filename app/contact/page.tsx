'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent. We will get back to you within 24 hours.',
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <Reveal>
        {/* Hero Section */}
        <section className="reveal-stagger relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="reveal relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <p className="text-white/90 text-sm font-semibold tracking-wide">LET&apos;S CONNECT</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>

            <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
              Ready to start your project? Our team is here to help bring your vision to life
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Contact Form - Left Column */}
              <div className="lg:col-span-2">
                <div className="bg-white border-2 border-neutral-200 rounded-2xl p-10 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-3">Send Us a Message</h2>
                    <p className="text-neutral-600">
                      Fill out the form below and we&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    {submitStatus.type && (
                      <div
                        className={`mb-6 p-5 rounded-xl flex items-start gap-3 ${submitStatus.type === 'success'
                          ? 'bg-green-50 border-2 border-green-200'
                          : 'bg-red-50 border-2 border-red-200'
                          }`}
                      >
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                          }`}>
                          {submitStatus.message}
                        </p>
                      </div>
                    )}
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                            className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-neutral-900 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-2">
                          Project Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Tell us about your project requirements, specifications, timeline, or any questions you have..."
                          required
                          className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              </div>
              {/* Contact Info Cards -Right  Column */}
              <div className="lg:col-span-2 space-y-6 flex flex-col justify-between ">
                <div className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 hover:shadow-xl transition-all duration-300">
                  {/* Address  */}
                  <div className='mb-4'>
                    <div className='flex gap-2 mb-2 align-center items-center '>
                      <MapPin className=" text-neutral-900" />
                      <h3 className="text-xl font-bold text-neutral-900 ">Address</h3>

                    </div>
                    <address className="pl-8 not-italic text-sm text-neutral-600 leading-relaxed">
                      E-6, Swastik Industrial Estate<br />
                      Phatak Road, Bhayander (East)<br />
                      Maharashtra - 401105<br />
                      India
                    </address>
                    {/* Phone Card */}
                  </div>
                  {/* Phone */}
                  <div className='flex gap-2 mb-4 align-center items-center '>
                    <Phone className=" text-neutral-900" />

                    <div className="text-neutral-600 space-y-2">
                      <a href="tel:+919867538527" className="block hover:text-neutral-900 transition-colors text-sm">
                        +91 98675 38527
                      </a>
                    </div>
                  </div>
                  {/* Email  */}
                  <div className='flex gap-2 mb-4 align-center items-center '>
                    <Mail className=" text-neutral-900" />
                    <div className="text-neutral-600">
                      <a href="mailto:info@sayyedengworks.com" className="hover:text-neutral-900 transition-colors break-all text-sm">
                        info@sayyedengworks.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-200 rounded-2xl sm:h-full h-96  flex sm:flex-1 items-center justify-center">
                  <div className="text-center text-neutral-500">
                    <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="font-medium">Map Integration Coming Soon</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>



        {/* Quick Response Banner */}
        <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-xl text-neutral-300 mb-8">
              Call us directly for urgent inquiries or time-sensitive projects
            </p>
            <a
              href="tel:+919867538527"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" />
              +91 98675 38527
            </a>
          </div>
        </section>

      </Reveal>
    </main>
  );
}