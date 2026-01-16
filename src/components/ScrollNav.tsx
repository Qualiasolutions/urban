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
      setIsVisible(window.scrollY > 300);

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
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-end"
          aria-label={`Go to ${section.label}`}
        >
          {/* Label */}
          <span className="absolute right-full mr-4 px-3 py-1 bg-navy-950/90 text-cream-200/70 text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section.label}
          </span>

          {/* Dot */}
          <div
            className={`w-1.5 h-1.5 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-cream-100 scale-150'
                : 'bg-cream-200/30 group-hover:bg-cream-200/60'
            }`}
          />
        </button>
      ))}
    </motion.nav>
  );
}
