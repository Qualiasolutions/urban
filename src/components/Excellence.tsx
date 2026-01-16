'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Professional kitchen equipment',
  'Elegant table settings & décor',
  'Ambient lighting solutions',
  'Expert culinary staff',
  'Dedicated event coordinators',
  'Premium quality ingredients',
];

export default function Excellence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      ref={ref}
      id="excellence"
      className="relative py-32 overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('https://i.ibb.co/JQg3dsX/unsplash-image-q-OAzn-SDk-MME.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/95" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 border border-gold-500/30 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full mb-6"
            >
              Our Promise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6 leading-tight"
            >
              The Urban
              <span className="block text-gradient-gold">Standard</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream-200/80 text-lg leading-relaxed mb-10"
            >
              We provide everything needed for your perfect event — from professional
              equipment to ambient lighting, sophisticated décor to expert staff.
              Every detail is meticulously planned and executed.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
                  </div>
                  <span className="text-cream-200/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-gold-500/20 rounded-full" />

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border border-gold-500/30 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-500 rounded-full" />
              </motion.div>

              {/* Inner Circle */}
              <div className="absolute inset-16 glass rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold text-gradient-gold mb-2">
                    100%
                  </div>
                  <div className="text-cream-200/60 text-sm uppercase tracking-wider">
                    Commitment to<br />Excellence
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-10 w-16 h-16 glass rounded-xl flex items-center justify-center"
              >
                <span className="text-2xl">🍽️</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-10 left-10 w-16 h-16 glass rounded-xl flex items-center justify-center"
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
