'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2500+', label: 'Events Catered' },
  { value: '50+', label: 'Expert Staff' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.ibb.co/NnHY79kR/Generated-Image-November-12-2025-2-39-PM.png')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 border border-gold-500/30 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full mb-6"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6 leading-tight"
            >
              The Urban
              <span className="block text-gradient-gold">Experience</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-cream-200/80 text-lg leading-relaxed"
            >
              <p>
                As Nicosia&apos;s leading catering company, we specialize in creating
                unforgettable dining experiences that transcend the ordinary.
              </p>
              <p>
                We don&apos;t just serve food; we <span className="text-gold-400 font-medium">curate atmospheres</span>.
                Every event is a canvas, and our culinary artistry is the brush
                that paints memories lasting a lifetime.
              </p>
              <p>
                From intimate gatherings to grand celebrations, our dedicated
                team brings passion, precision, and creativity to every plate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 text-gold-400 font-medium hover:text-gold-300 transition-colors group"
              >
                <span className="uppercase tracking-wider text-sm">Discover Our Services</span>
                <span className="w-8 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-12" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-8 text-center group hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-cream-200/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
        />
      </div>
    </section>
  );
}
