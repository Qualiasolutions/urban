'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Trees, Wine, UtensilsCrossed, Sparkles, Users } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Dream weddings crafted with love. From intimate ceremonies to grand celebrations, we create magical moments.',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
  {
    icon: Trees,
    title: 'Outdoor Events',
    description: 'Professional logistics for any venue. Garden parties, beach events, or countryside celebrations.',
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    icon: Wine,
    title: 'Cocktail Bar',
    description: 'High-end mobile mixology with expert bartenders. Signature cocktails tailored to your event.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: UtensilsCrossed,
    title: 'Private Dining',
    description: 'Exclusive chefs in your home. Intimate fine dining experiences with personalized menus.',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: Sparkles,
    title: 'Gala Events',
    description: 'Spectacular galas and award ceremonies. Premium service for prestigious occasions.',
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    icon: Users,
    title: 'Corporate Functions',
    description: 'Professional catering for business meetings, conferences, and corporate celebrations.',
    gradient: 'from-slate-500/20 to-gray-500/20',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-32 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 border border-gold-500/30 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full mb-6"
          >
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6"
          >
            Our
            <span className="text-gradient-gold"> Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-200/70 text-lg max-w-2xl mx-auto"
          >
            From weddings to corporate events, we bring culinary excellence
            and impeccable service to every occasion.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

              <div className="relative glass-light rounded-2xl p-8 h-full hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-gold-400" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-cream-100 mb-3 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-cream-200/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-xs uppercase tracking-wider">Learn More</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
