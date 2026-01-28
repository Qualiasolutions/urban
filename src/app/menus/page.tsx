'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const menus = [
  {
    href: '/menus/buffet',
    title: 'Buffet & Breakfast',
    description: 'Start your day right with our extensive breakfast buffet or create an elegant spread for any occasion. Fresh pastries, hot dishes, and local specialties.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
  },
  {
    href: '/menus/cocktail',
    title: 'Cocktail & Finger Food',
    description: 'Elegant bite-sized creations perfect for networking events, receptions, and sophisticated gatherings. Each piece is a miniature masterpiece.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop',
  },
  {
    href: '/menus/kids',
    title: 'Kids Parties',
    description: 'Fun, colorful, and delicious menus designed specifically for young guests. Healthy options that children actually want to eat.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function MenusPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
        {/* Hero */}
        <section className="relative h-[400px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-6"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <UtensilsCrossed className="w-6 h-6 text-cream-200/70" />
                <span className="text-cream-200/70 text-sm uppercase tracking-[0.2em]">Culinary Excellence</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-100 mb-6">
                Our Menus
              </h1>
              <p className="text-cream-200/70 max-w-xl mx-auto text-lg leading-relaxed">
                Discover our carefully crafted menus, designed to delight guests of all ages and occasions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Menu Cards */}
        <section ref={ref} className="py-16 md:py-24">
          <div className="px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menus.map((menu, index) => (
                <motion.article
                  key={menu.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={menu.href} className="block group">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${menu.image}')` }}
                      />
                      <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-950 group-hover:text-navy-700 transition-colors leading-tight">
                        {menu.title}
                      </h2>
                      <p className="text-navy-600 leading-relaxed">
                        {menu.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-navy-950 font-medium group-hover:gap-3 transition-all">
                        View Menu
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-950 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-cream-100 mb-4">
                Custom Menus Available
              </h2>
              <p className="text-cream-200/60 mb-8 leading-relaxed">
                Don&apos;t see exactly what you need? We create bespoke menus tailored to your event, dietary requirements, and preferences.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-cream-100 text-navy-950 px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-cream-200 transition-colors"
              >
                Request Custom Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
