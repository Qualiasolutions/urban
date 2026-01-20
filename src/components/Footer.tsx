'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/company' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Weddings', href: '#services' },
    { label: 'Corporate', href: '#corporate' },
    { label: 'Private Dining', href: '#services' },
    { label: 'Cocktail Events', href: '#services' },
  ],
  menus: [
    { label: 'Buffet & Breakfast', href: '#menus' },
    { label: 'Kids Parties', href: '#menus' },
    { label: 'Cocktail Menu', href: '#menus' },
    { label: 'Custom Menus', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 border-t border-cream-200/5">
      <div className="px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img
                src="https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/442a21ee-508a-4087-b062-7f5e01a812ee/61ec1cf3d3e7140c7b481047866623f9.png?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1768927747&Signature=qBTG2Cv4DJTGyU4iMMjoahL3yaU="
                alt="Urban Catering"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-cream-200/40 text-sm leading-relaxed mb-6 max-w-sm">
              Transforming Nicosia venues into extraordinary gastronomic experiences
              since 2009.
            </p>
            <div className="flex gap-3">
              {['F', 'I', 'L'].map((letter, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-cream-200/10 flex items-center justify-center hover:bg-cream-100 hover:text-navy-950 text-cream-200/40 transition-all duration-300 text-xs font-medium"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-cream-100 font-medium text-sm mb-4 pb-2 border-b border-cream-200/10">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link href={link.href} className="text-cream-200/40 text-sm hover:text-cream-100 transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-cream-200/40 text-sm hover:text-cream-100 transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-medium text-sm mb-4 pb-2 border-b border-cream-200/10">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream-200/40 text-sm hover:text-cream-100 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-medium text-sm mb-4 pb-2 border-b border-cream-200/10">Menus</h4>
            <ul className="space-y-3">
              {footerLinks.menus.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-cream-200/40 text-sm hover:text-cream-100 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cream-200/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream-200/30 text-xs">
            &copy; {new Date().getFullYear()} Urban Catering. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream-200/30">
            <a href="#" className="hover:text-cream-100 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream-100 transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
