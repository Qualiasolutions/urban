'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface MenuSlideshowProps {
  title: string;
  description: string;
  images: string[];
  pdfUrl: string;
  downloadLabel: string;
}

export default function MenuSlideshow({
  title,
  description,
  images,
  pdfUrl,
  downloadLabel,
}: MenuSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
        {/* Header */}
        <section className="bg-navy-950 py-16 md:py-24">
          <div className="px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cream-200/60 max-w-2xl mx-auto text-lg"
            >
              {description}
            </motion.p>
          </div>
        </section>

        {/* Download Button */}
        <section className="px-6 -mt-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-3 bg-cream-100 text-navy-950 px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-cream-200 transition-colors shadow-lg mx-auto w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              {downloadLabel}
            </motion.a>
          </div>
        </section>

        {/* Slideshow */}
        <section className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              {/* Slides */}
              <div className="relative">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: index === currentIndex ? 1 : 0,
                      scale: index === currentIndex ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 ${index === currentIndex ? 'relative' : 'hidden'}`}
                  >
                    <img
                      src={image}
                      alt={`${title} - Page ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-navy-950/70 hover:bg-navy-950 text-cream-100 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-navy-950/70 hover:bg-navy-950 text-cream-100 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="bg-white py-6 flex items-center justify-center gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-navy-950 w-8'
                        : 'bg-cream-200/50 hover:bg-cream-200/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Page Counter */}
              <div className="absolute top-4 right-4 bg-navy-950/80 text-cream-100 px-3 py-1 rounded-full text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Menus */}
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/#menus"
              className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-950 transition-colors font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to All Menus
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
