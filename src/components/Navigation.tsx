'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#welcome', label: 'Home' },
  { href: '#corporate', label: 'Corporate' },
  { href: '/company', label: 'Company Profile' },
  { href: '/chefs', label: 'Chefs' },
  { href: '/blog', label: 'Blog' },
  { href: '#services', label: 'Services' },
  { href: '#menus', label: 'Menus' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-xl border-b border-cream-200/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#welcome"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
              alt="Urban Catering"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="underline-animated text-cream-200/70 hover:text-cream-100 transition-colors text-xs font-medium tracking-[0.15em] uppercase"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="underline-animated text-cream-200/70 hover:text-cream-100 transition-colors text-xs font-medium tracking-[0.15em] uppercase"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+35799123456"
              className="flex items-center gap-2 text-cream-200/60 hover:text-cream-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">+357 99 123 456</span>
            </a>
            <motion.a
              href="#contact"
              className="bg-cream-100 text-navy-950 px-6 py-2.5 font-medium text-xs uppercase tracking-wider hover:bg-cream-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-cream-100 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-950/98 backdrop-blur-xl" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-navy-900"
            >
              <div className="flex flex-col h-full pt-24 px-8 overflow-y-auto">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-display text-2xl text-cream-100 hover:text-cream-200/70 transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                <div className="mt-auto pb-12">
                  <a
                    href="tel:+35799123456"
                    className="flex items-center gap-3 text-cream-200/60 mb-6"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+357 99 123 456</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full bg-cream-100 text-navy-950 py-4 font-medium text-center uppercase tracking-wider text-sm"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
