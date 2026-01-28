'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { services } from '@/lib/services';

const serviceImages: Record<string, string> = {
  'weddings': 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
  'corporate-catering': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
  'bbq': 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2070&auto=format&fit=crop',
  'cocktail-bar': 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop',
  'candy-bar': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2070&auto=format&fit=crop',
  'coffee': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
  'equipment-rentals': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop',
  'kids-parties': 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
  'outdoor-catering': 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
  'private-chef': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
  'private-parties': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
  'christenings': 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop',
};

export default function ServicesPage() {
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
              backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop')`,
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
                <Sparkles className="w-6 h-6 text-cream-200/70" />
                <span className="text-cream-200/70 text-sm uppercase tracking-[0.2em]">What We Offer</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-100 mb-6">
                Our Services
              </h1>
              <p className="text-cream-200/70 max-w-xl mx-auto text-lg leading-relaxed">
                From intimate gatherings to grand celebrations, we provide comprehensive catering solutions for every occasion
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={ref} className="py-16 md:py-24">
          <div className="px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={`/services/${service.slug}`} className="block group">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${serviceImages[service.slug] || serviceImages['weddings']}')` }}
                      />
                      <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-navy-950 group-hover:text-navy-700 transition-colors leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-navy-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-navy-950 text-sm font-medium group-hover:gap-3 transition-all">
                        Learn More
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
                Need Something Different?
              </h2>
              <p className="text-cream-200/60 mb-8 leading-relaxed">
                Every event is unique. Contact us to discuss your specific requirements and let us create a tailored catering solution just for you.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-cream-100 text-navy-950 px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-cream-200 transition-colors"
              >
                Get in Touch
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
