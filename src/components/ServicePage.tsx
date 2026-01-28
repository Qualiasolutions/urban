'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, Check, Phone } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PHONE, PHONE_DISPLAY } from '@/lib/constants';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  additionalInfo?: string[];
}

export default function ServicePage({
  title,
  subtitle,
  description,
  heroImage,
  features,
  additionalInfo,
}: ServicePageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-6"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-cream-200/70 hover:text-cream-100 transition-colors text-sm mb-8"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-4">
                {title}
              </h1>
              <p className="text-cream-200/70 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section ref={ref} className="py-16 md:py-24">
          <div className="px-6">
            <div className="max-w-5xl mx-auto">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <p className="text-navy-700 text-lg leading-relaxed">
                  {description}
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 shadow-sm"
                >
                  <h2 className="font-display text-2xl font-semibold text-navy-950 mb-6">
                    What's Included
                  </h2>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 border border-navy-950/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-navy-950" />
                        </div>
                        <span className="text-navy-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Additional Info */}
                {additionalInfo && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-navy-950 p-8 text-cream-100"
                  >
                    <h2 className="font-display text-2xl font-semibold mb-6">
                      Why Choose Us
                    </h2>
                    <ul className="space-y-4">
                      {additionalInfo.map((info, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 border border-cream-200/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-cream-100" />
                          </div>
                          <span className="text-cream-200/80">{info}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center bg-navy-950 py-12 px-8"
              >
                <h2 className="font-display text-2xl md:text-3xl text-cream-100 mb-4">
                  Ready to Book?
                </h2>
                <p className="text-cream-200/60 mb-8 max-w-xl mx-auto">
                  Contact us today to discuss your requirements and get a personalized quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/#contact"
                    className="px-8 py-4 bg-cream-100 text-navy-950 font-medium text-sm uppercase tracking-wider hover:bg-cream-200 transition-colors"
                  >
                    Request Quote
                  </a>
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-2 text-cream-200/70 hover:text-cream-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
