'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const menus = [
  {
    title: 'Buffet & Breakfast',
    description: 'Complete dining solutions for large groups and morning events. Elegant spreads that cater to every palate.',
    image: 'https://i.ibb.co/jv3hy5Xv/357-97464614.png',
    href: '/menus/buffet',
    tags: ['Full Service', 'All Day'],
  },
  {
    title: 'Kids Parties',
    description: 'Fun, delicious, and healthy options that kids love. Make their special day unforgettable.',
    image: 'https://i.ibb.co/LR5PVtN/1-4.png',
    href: '/menus/kids',
    tags: ['Family', 'Fun'],
  },
  {
    title: 'Cocktail & Finger Food',
    description: 'Elegant bites and canapés perfect for standing receptions. Sophisticated flavors in every bite.',
    image: 'https://i.ibb.co/Nx8VsFP/1-3.png',
    href: '/menus/cocktail',
    tags: ['Premium', 'Elegant'],
  },
];

export default function Menus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="menus"
      className="relative py-32 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 border border-gold-500/30 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full mb-6"
          >
            Discover
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6"
          >
            Culinary
            <span className="text-gradient-gold"> Selections</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-200/70 text-lg max-w-2xl mx-auto"
          >
            Explore our carefully curated menus, each designed to create
            memorable experiences for your guests.
          </motion.p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menus.map((menu, index) => (
            <motion.a
              key={menu.title}
              href={menu.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group relative block"
            >
              <div className="relative rounded-2xl overflow-hidden bg-navy-800/50 border border-white/5 hover:border-gold-500/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {menu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-navy-950/60 backdrop-blur-sm text-cream-200/80 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-navy-950" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-cream-100 mb-2 group-hover:text-gold-400 transition-colors">
                    {menu.title}
                  </h3>
                  <p className="text-cream-200/60 text-sm leading-relaxed">
                    {menu.description}
                  </p>
                </div>
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
            className="inline-flex items-center gap-3 text-gold-400 font-medium hover:text-gold-300 transition-colors group"
          >
            <span className="uppercase tracking-wider text-sm">View All Menus</span>
            <span className="w-8 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
