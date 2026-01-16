'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const menus = [
  {
    title: 'Buffet & Breakfast',
    description: 'Complete dining solutions for large groups and morning events.',
    image: 'https://i.ibb.co/jv3hy5Xv/357-97464614.png',
    href: '/menus/buffet',
  },
  {
    title: 'Kids Parties',
    description: 'Fun, delicious, and healthy options that kids love.',
    image: 'https://i.ibb.co/LR5PVtN/1-4.png',
    href: '/menus/kids',
  },
  {
    title: 'Cocktail & Finger Food',
    description: 'Elegant bites perfect for standing receptions.',
    image: 'https://i.ibb.co/Nx8VsFP/1-3.png',
    href: '/menus/cocktail',
  },
];

export default function Menus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="menus"
      className="relative py-28 bg-navy-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 border border-cream-200/10 text-cream-200/50 text-xs tracking-[0.25em] uppercase mb-6"
          >
            Discover
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6"
          >
            Culinary Selections
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-200/50 text-lg max-w-2xl mx-auto"
          >
            Explore our carefully curated menus designed to create memorable experiences.
          </motion.p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-cream-200/10">
          {menus.map((menu, index) => (
            <motion.a
              key={menu.title}
              href={menu.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative block bg-navy-900 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={menu.image}
                  alt={menu.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 border border-cream-100/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-cream-100" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-cream-200/5">
                <h3 className="font-display text-xl font-semibold text-cream-100 mb-2 group-hover:text-cream-200/80 transition-colors">
                  {menu.title}
                </h3>
                <p className="text-cream-200/40 text-sm">
                  {menu.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="/menus"
            className="inline-flex items-center gap-4 text-cream-200/60 font-medium hover:text-cream-100 transition-colors group"
          >
            <span className="uppercase tracking-wider text-xs">View All Menus</span>
            <span className="w-8 h-px bg-cream-200/30 transition-all duration-300 group-hover:w-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
