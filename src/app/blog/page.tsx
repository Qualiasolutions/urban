'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ChefHat } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/blog-posts';

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

      {/* Blog Grid */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts).map(([slug, post], index) => (
              <motion.article
                key={slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/blog/${slug}`} className="block group">
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
                      {post.content[0].slice(0, 150)}...
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
              href="/#contact"
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
