"use client";

import { Mail, Phone, MapPin, Clock, ArrowRight, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className=" bg-neutral-900 text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-4">Sayyed Engineering Works</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Stainless steel manufacturer specializing in custom industrial components, precision-engineered parts, and durable household products. Serving India since 2006.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              {/* <a href="#" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Products & Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Industrial Equipment
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Power Press Work
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Cutting Dies
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Household Products
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Custom Fabrication
              </a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                About Us
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Our Process
              </a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Quality Standards
              </a></li>
              {/* <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Case Studies
              </a></li> */}
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></span>
                Contact
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-neutral-800 p-2 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="text-neutral-400 text-sm">
                  <p className="font-medium text-white mb-1">Factory Address</p>
                  <p>E-6, Swastik Industrial Estate</p>
                  <p>Phatak Road, Bhayander (East)</p>
                  <p>Maharashtra - 401105, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-neutral-800 p-2 rounded-lg mt-0.5">
                  <Phone className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="text-neutral-400 text-sm">
                  <p className="font-medium text-white mb-1">Phone</p>
                  <a href="tel:+919867538527" className="hover:text-white transition-colors">+91 98675 38527</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-neutral-800 p-2 rounded-lg mt-0.5">
                  <Mail className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="text-neutral-400 text-sm">
                  <p className="font-medium text-white mb-1">Email</p>
                  <a href="mailto:info@sayyedengworks.com" className="hover:text-white transition-colors">info@sayyedengworks.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-neutral-800 p-2 rounded-lg mt-0.5">
                  <Clock className="w-4 h-4 text-neutral-400" />
                </div>
                <div className="text-neutral-400 text-sm">
                  <p className="font-medium text-white mb-1">Business Hours</p>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>© 2006 Sayyed Engineering Works. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              {/* <a href="#" className="hover:text-white transition-colors">Sitemap</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}