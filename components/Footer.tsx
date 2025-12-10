"use client";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl mb-4 font-semibold">SayyedEngWorks</h3>
            <p className="text-gray-300 text-xs sm:text-sm">
             Your trusted partner for premium stainless steel solutions. We engineer custom industrial components and manufacture superior SS household products, serving clients across India with unmatched durability and grade
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base sm:text-lg mb-4 font-semibold">Products</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Industrial Equipment</li>
              <li>Piping Systems</li>
              <li>Food Processing</li>
              <li>Precision Parts</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>Custom Fabrication</li>
              <li>Design Engineering</li>
              <li>Quality Testing</li>
              <li>Technical Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg mb-4 font-semibold">Contact</h4>
            <div className="text-xs sm:text-sm text-gray-300 space-y-1">
              <p>1234 Industrial Drive</p>
              <p>Steeltown, ST 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@sayyedengworks.com</p>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Text */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-xs sm:text-sm text-gray-300">
          <p>
            © 2024 SayyedEngWorks. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
