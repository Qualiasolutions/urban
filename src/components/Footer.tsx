'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, MapPin, Send } from 'lucide-react';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

const socialLinks = [
  {
    name: 'Call',
    href: `tel:${PHONE}`,
    icon: Phone,
  },
  {
    name: 'Viber',
    href: `viber://chat?number=${PHONE.replace('+', '%2B')}`,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.4 0C9.5.1 5.4.5 3.3 2.5 1.5 4.3.8 7 .7 10.4c-.1 3.4-.2 9.7 6 11.5v2.6s0 1.1.7 1.3c.8.3 1.3-.5 2.1-1.4.4-.5.9-1.1 1.4-1.6 3.8.3 6.7-.4 7-.5.8-.2 5.3-.8 6-6.7.8-6.1-.4-9.9-2.4-11.6-1-1-3.4-2.5-8.4-2.8-.5-.1-1-.1-1.7-.1zM12 2c.5 0 1 0 1.5.1 4.2.3 6.1 1.5 6.9 2.2 1.5 1.3 2.5 4.3 1.9 9.4-.6 4.7-3.8 5.2-4.5 5.4-.3.1-2.8.7-6 .5 0 0-2.4 2.9-3.1 3.6-.1.2-.3.2-.3-.1v-4c-5.1-1.4-4.8-6.5-4.7-9.3.1-3 .7-5.2 2.1-6.6 1.7-1.6 5.2-2 6.2-2.1.3-.1.7-.1 1 0zm.3 3.2c-.2 0-.3.2-.3.4s.1.4.3.4c1.3.1 2.4.5 3.2 1.3.8.8 1.3 1.9 1.4 3.3 0 .2.2.4.4.4h.1c.2 0 .4-.2.4-.4-.2-1.6-.8-2.9-1.8-3.9-.9-.9-2.2-1.4-3.7-1.5zm-4.6 1c-.5 0-1 .1-1.4.3-.4.2-.7.5-.8.8-.2.4-.2.8-.1 1.2l.1.4c.4 1.4 1.1 2.8 2 4.1.7.9 1.5 1.8 2.4 2.6l.1.1.1.1.1.1.1.1c.8.8 1.7 1.6 2.6 2.3 1.3.9 2.7 1.6 4.1 2 .4.1.8.2 1.2.1.3-.1.6-.3.8-.6.2-.3.4-.7.4-1.1v-.2c.1-.5-.1-1-.5-1.3l-1.7-1.2c-.4-.3-.8-.3-1.2-.1l-.9.5c-.2.1-.4.1-.6 0-.7-.4-1.4-.9-1.9-1.4-.6-.5-1.1-1.2-1.5-1.9-.1-.2-.1-.4 0-.6l.5-.9c.2-.4.2-.8-.1-1.2l-1.3-1.7c-.2-.3-.6-.5-1-.5h-.5zm4.6.9c-.2 0-.4.2-.4.4s.2.4.4.4c.7 0 1.3.3 1.7.7.5.5.7 1.1.7 1.8 0 .2.2.4.4.4s.4-.2.4-.4c0-.9-.4-1.8-1-2.4-.6-.6-1.4-.9-2.2-.9zm0 1.8c-.2 0-.4.2-.4.4s.2.4.4.4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .2.2.4.4.4s.4-.2.4-.4c0-.5-.2-1-.6-1.4-.4-.3-.8-.4-1.2-.4z"/>
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: `https://t.me/${PHONE}`,
    icon: Send,
  },
  {
    name: 'Location',
    href: 'https://maps.google.com/?q=Urban+Catering+Nicosia+Cyprus',
    icon: MapPin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/urbancateringcy/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Urban-Catering-Cy-61566961025784/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const footerLinks = {
  company: [
    { label: 'About Us', href: '/company' },
    { label: 'Our Chefs', href: '/chefs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Weddings', href: '/services/weddings' },
    { label: 'Corporate', href: '/services/corporate-catering' },
    { label: 'Private Chef', href: '/services/private-chef' },
    { label: 'All Services', href: '/services' },
  ],
  menus: [
    { label: 'Buffet & Breakfast', href: '/menus/buffet' },
    { label: 'Kids Parties', href: '/menus/kids' },
    { label: 'Cocktail Menu', href: '/menus/cocktail' },
    { label: 'All Menus', href: '/menus' },
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
                src="https://i.ibb.co/HD6kYN1d/logod.png"
                alt="Urban Catering"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-cream-200/40 text-sm leading-relaxed mb-6 max-w-sm">
              Transforming Nicosia venues into extraordinary gastronomic experiences
              since 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 border border-cream-200/10 flex items-center justify-center hover:bg-cream-100 hover:text-navy-950 text-cream-200/40 transition-all duration-300"
                  title={link.name}
                >
                  <link.icon className="w-4 h-4" />
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
                  <Link href={link.href} className="text-cream-200/40 text-sm hover:text-cream-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-cream-100 font-medium text-sm mb-4 pb-2 border-b border-cream-200/10">Menus</h4>
            <ul className="space-y-3">
              {footerLinks.menus.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-cream-200/40 text-sm hover:text-cream-100 transition-colors">
                    {link.label}
                  </Link>
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
            <Link href="/contact" className="hover:text-cream-100 transition-colors">Contact</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
