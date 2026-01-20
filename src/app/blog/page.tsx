'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ChefHat } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    slug: 'summer-soirees-limassol',
    title: 'Summer Soirées: The Art of Outdoor Catering in Limassol',
    excerpt: 'Transform your summer celebrations with exquisite outdoor catering experiences along the beautiful Limassol coastline.',
    date: 'December 30, 2025',
    readTime: '5 min read',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'wedding-catering-limassol-2025',
    title: 'Dream Weddings: Crafting Unforgettable Menus for Your Special Day',
    excerpt: 'From intimate beach ceremonies to grand ballroom receptions, discover how we create magical wedding dining experiences in Limassol.',
    date: 'November 12, 2025',
    readTime: '7 min read',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'corporate-events-excellence',
    title: 'Corporate Excellence: Elevating Business Events Through Culinary Innovation',
    excerpt: 'Make your next corporate event memorable with sophisticated catering that impresses clients and inspires teams.',
    date: 'October 11, 2025',
    readTime: '4 min read',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'mediterranean-feast',
    title: 'A Mediterranean Feast: Celebrating Cypriot Culinary Heritage',
    excerpt: 'Journey through the rich flavors of Cyprus with our authentic Mediterranean catering menus that honor local traditions.',
    date: 'August 22, 2025',
    readTime: '6 min read',
    category: 'Cuisine',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop',
  },
  {
    slug: 'private-dining-experience',
    title: 'Private Dining: Introducing Our Exclusive At-Home Catering Service',
    excerpt: 'Experience restaurant-quality dining in the comfort of your own home with our new private catering service across Limassol.',
    date: 'June 17, 2025',
    readTime: '5 min read',
    category: 'Private Events',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
  },
];

const categories = ['All', 'Seasonal', 'Weddings', 'Corporate', 'Cuisine', 'Private Events'];

export default function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px]">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-6"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-6 h-6 text-cream-200/70" />
              <span className="text-cream-200/70 text-sm uppercase tracking-[0.2em]">Journal</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-100 mb-6">
              Our Blog
            </h1>
            <p className="text-cream-200/70 max-w-xl mx-auto text-lg leading-relaxed">
              Discover recipes, event inspiration, and the stories behind Limassol's premier catering experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-navy-950 py-6 border-b border-cream-200/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 overflow-x-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`text-sm uppercase tracking-wider whitespace-nowrap transition-colors ${
                  category === 'All'
                    ? 'text-cream-100'
                    : 'text-cream-200/40 hover:text-cream-200/70'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    />
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-500" />
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-cream-100 text-navy-950 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-navy-600">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-navy-950 group-hover:text-navy-700 transition-colors leading-tight">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-navy-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-2 text-navy-950 text-sm font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-cream-100 mb-4">
              Stay Inspired
            </h2>
            <p className="text-cream-200/60 mb-8 leading-relaxed">
              Subscribe to our newsletter for exclusive recipes, event tips, and special offers
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cream-100 text-navy-950 px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-cream-200 transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
