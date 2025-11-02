'use client';

import { useState, FormEvent } from 'react';
import Reveal from '../../components/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          message: 'Thank you! Your message has been sent. We will get back to you soon.',
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
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
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="reveal text-2xl md:text-3xl font-semibold text-blue-900">Contact Us</h1>
            <p className="reveal text-neutral-600 mt-4 max-w-3xl mx-auto">
              Ready to discuss your stainless steel requirements? Get in touch with our expert team today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal-stagger">
            {/* Left: Contact Form */}
            <div className="reveal bg-white border border-neutral-200 rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-6">Send us a Message</h2>

            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-md ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}

              <form onSubmit={handleSubmit} className="space-y-4 reveal-stagger">
                <div className="reveal">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-neutral-50 border border-neutral-100 rounded-md px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="reveal">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-neutral-50 border border-neutral-100 rounded-md px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="reveal">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project requirements..."
                    required
                    className="w-full bg-neutral-50 border border-neutral-100 rounded-md px-4 py-3 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  />
                </div>

                <div className="reveal">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Contact Details */}
            <div className="reveal bg-white border border-neutral-200 rounded-lg shadow-sm p-6 md:p-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-4">Get in Touch</h2>

              <div className="mb-6 reveal">
                <h3 className="text-sm font-medium text-blue-900 mb-2">Office Address</h3>
                <address className="not-italic text-neutral-600 text-sm">
                  1234 Industrial Drive<br />
                  Manufacturing District<br />
                  Steeltown, ST 12345<br />
                  United States
                </address>
              </div>

              <div className="mb-6 reveal">
                <h3 className="text-sm font-medium text-blue-900 mb-2">Phone & Email</h3>
                <div className="text-neutral-600 text-sm">
                  Phone: +1 (555) 123-4567<br />
                  Fax: +1 (555) 123-4568<br />
                  Email: info@sayyedengworks.com
                </div>
              </div>

              <div className="reveal">
                <h3 className="text-sm font-medium text-blue-900 mb-2">Business Hours</h3>
                <div className="text-neutral-600 text-sm">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
