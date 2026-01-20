'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#welcome', label: 'Home' },
  { href: '/company', label: 'Company Profile' },
  { href: '/chefs', label: 'Chefs' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const menuLinks = [
  { href: '/menus/buffet', label: 'Buffet & Breakfast' },
  { href: '/menus/kids', label: 'Kids Parties' },
  { href: '/menus/cocktail', label: 'Cocktail & Finger Food' },
];

const servicesLinks = [
  { href: '/services/weddings', label: 'Weddings' },
  { href: '/services/corporate-catering', label: 'Corporate Catering' },
  { href: '/services/bbq', label: 'BBQ' },
  { href: '/services/cocktail-bar', label: 'Cocktail Bar' },
  { href: '/services/candy-bar', label: 'Candy Bar' },
  { href: '/services/coffee', label: 'Coffee Service' },
  { href: '/services/equipment-rentals', label: 'Equipment Rentals' },
  { href: '/services/kids-parties', label: 'Kids Parties' },
  { href: '/services/outdoor-catering', label: 'Outdoor Catering' },
  { href: '/services/private-chef', label: 'Private Chef' },
  { href: '/services/private-parties', label: 'Private Parties' },
  { href: '/services/christenings', label: 'Christenings' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
              src="https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/442a21ee-508a-4087-b062-7f5e01a812ee/61ec1cf3d3e7140c7b481047866623f9.png?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1768927747&Signature=qBTG2Cv4DJTGyU4iMMjoahL3yaU="
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

            {/* Menus Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onMouseEnter={() => setIsMenuDropdownOpen(true)}
                onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
                className="flex items-center gap-1 text-cream-200/70 hover:text-cream-100 transition-colors text-xs font-medium tracking-[0.15em] uppercase"
              >
                Menus
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMenuDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMenuDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsMenuDropdownOpen(false)}
                    className="absolute top-full left-0 mt-4 w-56 bg-navy-900 border border-cream-200/10 shadow-xl overflow-hidden"
                  >
                    {menuLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuDropdownOpen(false)}
                        className="block px-6 py-3 text-cream-200/70 hover:text-cream-100 hover:bg-cream-100/5 transition-colors text-xs font-medium tracking-wider uppercase border-b border-cream-200/5 last:border-0"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div ref={servicesDropdownRef} className="relative">
              <button
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center gap-1 text-cream-200/70 hover:text-cream-100 transition-colors text-xs font-medium tracking-[0.15em] uppercase"
              >
                Services
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-4 w-64 bg-navy-900 border border-cream-200/10 shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto"
                  >
                    <div className="grid grid-cols-1">
                      {servicesLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsServicesDropdownOpen(false)}
                          className="block px-6 py-3 text-cream-200/70 hover:text-cream-100 hover:bg-cream-100/5 transition-colors text-xs font-medium tracking-wider uppercase border-b border-cream-200/5 last:border-0"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

                  {/* Mobile Menus Submenu */}
                  <div className="pt-4 border-t border-cream-200/10">
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                      className="font-display text-lg text-cream-200/50 uppercase tracking-wider mb-4 block"
                    >
                      Menus
                    </motion.span>
                    {menuLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navLinks.length * 0.1 + (index + 1) * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block pl-4 py-2 text-cream-200/70 hover:text-cream-100 transition-colors text-sm"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile Services Submenu */}
                  <div className="pt-4 border-t border-cream-200/10">
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + 1) * 0.1 }}
                      className="font-display text-lg text-cream-200/50 uppercase tracking-wider mb-4 block"
                    >
                      Services
                    </motion.span>
                    {servicesLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navLinks.length + 1) * 0.1 + (index + 1) * 0.05 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block pl-4 py-2 text-cream-200/70 hover:text-cream-100 transition-colors text-sm"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
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
