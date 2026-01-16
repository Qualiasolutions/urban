'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const badges = [
  'Professional Setup',
  'Customized Menus',
  'Seamless Service',
  'Dedicated Staff',
  'Premium Quality',
];

const sliderImages = [
  {
    src: 'https://i.ibb.co/Jj5gx2f1/Whats-App-Image-2025-11-10-at-10-22-56-AM.jpg',
    alt: 'Corporate Setup',
  },
  {
    src: 'https://i.ibb.co/WpkR7FBK/Whats-App-Image-2025-11-10-at-10-21-53-AM.jpg',
    alt: 'Event Presentation',
  },
  {
    src: 'https://i.ibb.co/1GtSsmHg/Whats-App-Image-2025-11-10-at-10-21-52-AM-3.jpg',
    alt: 'Networking Event',
  },
  {
    src: 'https://i.ibb.co/SXNbgjdD/Whats-App-Image-2025-11-10-at-10-21-51-AM-1.jpg',
    alt: 'Buffet Display',
  },
  {
    src: 'https://i.ibb.co/1tvkrcxz/Whats-App-Image-2025-11-10-at-10-21-52-AM-2.jpg',
    alt: 'Food Station',
  },
];

export default function Corporate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      ref={ref}
      id="corporate"
      className="relative py-32 bg-cream-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0a192f 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-navy-950 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full mb-6"
          >
            For Business
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy-950 mb-6"
          >
            Corporate
            <span className="block text-gold-600">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-navy-700 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Elevating business functions with premium catering solutions
            tailored to your brand identity and corporate culture.
          </motion.p>
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="px-5 py-2.5 border-2 border-navy-950 text-navy-950 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-navy-950 hover:text-cream-100 transition-all duration-300 cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                >
                  <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-cream-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <p className="font-display text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-navy-950 shadow-lg hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-navy-950 shadow-lg hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-950 text-cream-100 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Corporate Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
