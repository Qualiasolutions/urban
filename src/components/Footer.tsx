'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
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
    <footer className="relative bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-3xl font-bold">
                <span className="text-cream-100">Urban</span>
                <span className="text-gradient-gold"> Catering</span>
              </span>
            </a>
            <p className="text-cream-200/60 text-sm leading-relaxed mb-6 max-w-sm">
              Transforming Nicosia venues into extraordinary gastronomic experiences
              since 2009. Premium catering for unforgettable events.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/urbancateringcy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 text-cream-200/60 hover:text-navy-950 transition-all duration-300"
                >
                  <span className="text-xs font-bold">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-200/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-200/60 text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-semibold mb-4">Menus</h4>
            <ul className="space-y-3">
              {footerLinks.menus.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream-200/60 text-sm hover:text-gold-400 transition-colors"
                  >
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
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream-200/40 text-sm">
            &copy; {new Date().getFullYear()} Urban Catering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream-200/40">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
