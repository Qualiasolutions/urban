'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Trees, Wine, UtensilsCrossed, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Dream weddings crafted with love. From intimate ceremonies to grand celebrations, we create magical moments.',
  },
  {
    icon: Trees,
    title: 'Outdoor Events',
    description: 'Professional logistics for any venue. Garden parties, beach events, or countryside celebrations.',
  },
  {
    icon: Wine,
    title: 'Cocktail Bar',
    description: 'High-end mobile mixology with expert bartenders. Signature cocktails tailored to your event.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Private Dining',
    description: 'Exclusive chefs in your home. Intimate fine dining experiences with personalized menus.',
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
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
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
              <div className="w-12 h-12 border border-cream-200/10 flex items-center justify-center mb-8 group-hover:border-cream-200/20 transition-colors">
                <service.icon className="w-5 h-5 text-cream-200/60" />
              </div>

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
