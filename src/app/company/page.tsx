'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, ChefHat, Wine, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const features = [
  {
    icon: ChefHat,
    title: 'Culinary Excellence',
    description: 'Our team of skilled chefs is dedicated to creating a feast for the senses, preparing sumptuous dishes that capture the local flavor with a sophisticated twist.',
  },
  {
    icon: Building2,
    title: 'Complete Event Services',
    description: 'We provide comprehensive event services including custom bar setups, stylish tents, elegant lighting, and bespoke furniture to set the perfect mood.',
  },
  {
    icon: Wine,
    title: 'Beverage Mastery',
    description: 'Our adept bartending team excels in crafting an extensive range of beverages, from bespoke cocktails featuring top-shelf spirits to a thoughtful selection of wines.',
  },
  {
    icon: MapPin,
    title: 'Any Location',
    description: 'Whether it is a private residence, a corporate hall, or an outdoor venue, we adapt our services to fit the unique logistics of your chosen location.',
  },
];

export default function CompanyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
      {/* Hero */}
      <section className="relative h-[300px] md:h-[400px]">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-950/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mb-4">
              Company Profile
            </h1>
            <div className="w-20 h-[2px] bg-cream-100/60 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Intro */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:border-r border-navy-950/10 lg:pr-16"
            >
              <div className="flex items-center gap-4 pb-6 border-b border-navy-950/10 mb-8">
                <img
                  src="https://i.ibb.co/3ytjFrv/Whats-App-Image-2024-10-07-at-18-03-48.jpg"
                  alt="Urban Catering"
                  className="w-12 h-12 object-cover"
                />
                <span className="font-display text-xl font-semibold text-navy-950">
                  About Us
                </span>
              </div>

              <div className="space-y-6 text-navy-700 leading-relaxed">
                <p>
                  Urban Catering brings the essence of exceptional Nicosia catering
                  & dining directly to you, transforming any location into an
                  extraordinary gastronomic venue.
                </p>
                <p>
                  From sun-drenched beach celebrations to elegant garden soirees
                  and high-profile corporate events, we ensure a seamless experience
                  that encapsulates the spirit of your occasion.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 pt-8 border-t border-navy-950/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '15+', label: 'Years' },
                    { value: '2500+', label: 'Events' },
                    { value: '50+', label: 'Staff' },
                    { value: '100%', label: 'Quality' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display text-2xl font-bold text-navy-950">
                        {stat.value}
                      </div>
                      <div className="text-sm text-navy-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-3 pb-4 border-b border-navy-950/10 mb-4">
                      <feature.icon className="w-5 h-5 text-navy-700" />
                      <h3 className="font-display text-lg font-semibold text-navy-950">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-950/5 border-t border-navy-950/10">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-950 mb-4">
              Partner With Us
            </h2>
            <p className="text-navy-600 mb-8">
              Interested in creating extraordinary experiences together?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-navy-950 text-navy-950 font-medium text-sm uppercase tracking-wider hover:bg-navy-950 hover:text-cream-100 transition-all duration-300"
            >
              Contact Us
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
