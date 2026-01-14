import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Groas Marketing
              </h3>
              <p className="text-gray-400">
                Performance Marketing for Founders
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-[#0099FF] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#0099FF] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-[#0099FF] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-white font-semibold mb-4">Ready to Scale?</h4>
              <a
                href="#audit"
                className="inline-flex items-center text-[#0099FF] hover:text-[#0088ee] font-semibold transition-colors group"
              >
                Book Your Free Growth Audit
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Groas Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;