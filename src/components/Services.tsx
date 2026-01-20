'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services: Array<{
  icon: string;
  title: string;
  description: string;
}> = [
  {
    icon: '💍',
    title: 'Weddings',
    description: 'Dream weddings with premium service.',
  },
  {
    icon: '🌲',
    title: 'Outdoor',
    description: 'Professional logistics for any venue.',
  },
  {
    icon: '🍸',
    title: 'Cocktail Bar',
    description: 'High-end mobile mixology.',
  },
  {
    icon: '🍽️',
    title: 'Private Dining',
    description: 'Exclusive chefs in your home.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.ibb.co/99xygtjX/Generated-Image-November-12-2025-2-41-PM.png')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-950/95" />
      </div>

      <div className="relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 border border-cream-200/10 text-cream-200/50 text-xs tracking-[0.25em] uppercase mb-6"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6"
          >
            Our Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-200/50 text-lg max-w-2xl mx-auto"
          >
            From weddings to corporate events, we bring culinary excellence
            and impeccable service to every occasion.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-cream-200/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-navy-950 p-10 hover:bg-navy-900 transition-colors duration-500"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-cream-100 mb-4">
                {service.title}
              </h3>
              <p className="text-cream-200/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-cream-200/40 text-xs uppercase tracking-wider hover:text-cream-100 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
