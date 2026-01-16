'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'welcome', label: 'Home' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'excellence', label: 'Excellence' },
  { id: 'menus', label: 'Menus' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollNav() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide based on scroll position
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section.label}`}
        >
          {/* Label */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-navy-900/90 backdrop-blur-sm text-cream-200 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section.label}
          </span>

          {/* Dot */}
          <motion.div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-gold-500 scale-125 shadow-lg shadow-gold-500/50'
                : 'bg-cream-200/30 group-hover:bg-gold-400'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        </button>
      ))}
    </motion.nav>
  );
}
