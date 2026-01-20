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
      className="relative py-28 overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('https://i.ibb.co/JQg3dsX/unsplash-image-q-OAzn-SDk-MME.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-950/90" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 border border-cream-200/10 text-cream-200/50 text-xs tracking-[0.25em] uppercase mb-6"
            >
              Our Promise
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-cream-100 mb-6 leading-tight"
            >
              The Urban
              <span className="block text-cream-200/60">Standard</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream-200/60 leading-relaxed mb-10"
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
                  <div className="w-5 h-5 border border-cream-200/20 flex items-center justify-center group-hover:border-cream-200/40 transition-colors">
                    <Check className="w-3 h-3 text-cream-200/60" />
                  </div>
                  <span className="text-cream-200/60 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer Frame */}
              <div className="absolute inset-0 border border-cream-200/10" />
              <div className="absolute inset-4 border border-cream-200/10" />

              {/* Center Content */}
              <div className="absolute inset-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-6xl font-bold text-cream-100 mb-2">
                    100%
                  </div>
                  <div className="text-cream-200/40 text-xs uppercase tracking-[0.2em]">
                    Commitment to<br />Excellence
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cream-200/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cream-200/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cream-200/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cream-200/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
