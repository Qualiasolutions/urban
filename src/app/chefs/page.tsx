'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChefHat, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const philosophyItems = [
  {
    title: 'Locally Sourced',
    description: 'Supporting our community with the freshest ingredients.',
  },
  {
    title: 'Innovative Techniques',
    description: 'Blending tradition with cutting-edge culinary methods.',
  },
  {
    title: 'Global Fusion',
    description: 'Bringing world flavors to your plate.',
  },
];

const chefs = [
  {
    name: 'Marios Malekkos',
    title: 'Executive Chef at Bao Pau Cyprus',
    badge: 'Japanese Cuisine Expert',
    quote: '"Crafting authentic Japanese Peruvian Cuisine is about respecting tradition while embracing innovation in every dish."',
    image: 'https://i.ibb.co/PrcGPS4/Whats-App-Image-2025-01-22-at-18-50-01.jpg',
    signatureDishes: [
      'Traditional Japanese Omakase',
      'Modern Bao Creations',
      'Premium Chef\'s Table Experience',
    ],
  },
  {
    name: 'Ioannis Pratikakis',
    title: 'Executive Chef',
    badge: 'Private BBQ Events Specialist',
    quote: '"Creating memories through flavors is not just a profession, it\'s an art form that touches people\'s hearts."',
    image: 'https://i.ibb.co/JCP6q9F/Untitled-draft-3.jpg',
    signatureDishes: [
      'Dry-Aged Tomahawk Steak',
      'Cedar Plank Grilled Salmon',
      'Herb-Crusted Rack of Lamb',
    ],
  },
  {
    name: 'Theodoros Eleftheriou',
    title: 'Executive Chef',
    badge: 'Brunch Cuisine Specialist',
    quote: '"Love what you do, do it with passion, and remember to smile in the process."',
    image: 'https://i.ibb.co/56Jyqjc/Love-what-you-do-do-it-with-passion-and-remember-to-smile-in-the-process.jpg',
    signatureDishes: [
      'Eggs Benedict with Cypriot Halloumi',
      'Mediterranean Breakfast Board',
      'Orange Blossom French Toast',
    ],
  },
];

export default function ChefsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
        {/* Hero */}
        <section className="relative h-[300px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077&auto=format&fit=crop')`,
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
              <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mb-4 border-b-2 border-cream-100/80 pb-4 inline-block">
                Our Chefs
              </h1>
              <p className="text-cream-100/90 text-base">
                Masters of Urban Catering In Nicosia, Cyprus
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section ref={ref} className="py-16 md:py-20">
          <div className="px-6 md:px-16">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Left Column - Philosophy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:w-[280px] lg:flex-shrink-0 lg:border-r border-navy-950/10 lg:pr-16"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-navy-950/10 mb-8">
                  <ChefHat className="w-5 h-5 text-navy-700" />
                  <span className="font-display text-xl font-semibold text-navy-950">
                    Our Philosophy
                  </span>
                </div>

                <div className="space-y-6">
                  {philosophyItems.map((item) => (
                    <div key={item.title} className="flex flex-col gap-1">
                      <h4 className="text-base font-semibold text-navy-950">
                        {item.title}
                      </h4>
                      <p className="text-sm text-navy-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Chef Profiles */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-navy-950/10 mb-12">
                  <span className="font-display text-xl font-semibold text-navy-950">
                    Executive Team
                  </span>
                </div>

                <div className="space-y-12">
                  {chefs.map((chef, index) => (
                    <motion.div
                      key={chef.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex flex-col md:flex-row gap-8 pb-12 border-b border-navy-950/10 last:border-0 last:pb-0"
                    >
                      <div className="md:w-[200px] md:flex-shrink-0">
                        <img
                          src={chef.image}
                          alt={chef.name}
                          className="w-full h-[200px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-3">
                        <div>
                          <h2 className="font-display text-2xl font-semibold text-navy-950">
                            {chef.name}
                          </h2>
                          <p className="text-sm text-navy-600 uppercase tracking-[0.5px] -mt-1">
                            {chef.title}
                          </p>
                        </div>
                        <span className="inline-block text-xs font-semibold text-navy-950 bg-gray-200 px-3 py-1 w-fit">
                          {chef.badge}
                        </span>
                        <p className="text-base text-navy-600 italic pl-3 border-l-2 border-gray-300 my-2">
                          {chef.quote}
                        </p>
                        <div>
                          <h5 className="text-sm font-semibold text-navy-950 mb-2">
                            Signature Creations
                          </h5>
                          <ul className="space-y-1">
                            {chef.signatureDishes.map((dish) => (
                              <li key={dish} className="text-sm text-navy-600 flex items-center gap-2">
                                <span className="w-1 h-1 bg-navy-950 rounded-full" />
                                {dish}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 border-t border-navy-950/10">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-950 mb-4">
                Experience Culinary Excellence
              </h2>
              <p className="text-navy-600 mb-8 text-sm">
                Let our talented chefs create an unforgettable experience for your next event.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 border border-navy-950 text-navy-950 font-medium text-sm uppercase tracking-wider hover:bg-[#497173] hover:text-white hover:border-[#497173] transition-all duration-300"
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
