'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, ChefHat, Star } from 'lucide-react';
import Link from 'next/link';

interface BlogPostData {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
  quote?: string;
  tips?: string[];
}

interface BlogContentProps {
  post: BlogPostData;
}

export default function BlogContent({ post }: BlogContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <div className="absolute inset-0 bg-navy-950/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-cream-200/70 hover:text-cream-100 transition-colors text-sm mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <span className="inline-block bg-cream-100 text-navy-950 px-3 py-1 text-xs font-medium uppercase tracking-wider mb-4">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-cream-200/70 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article ref={ref} className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Quote */}
          {post.quote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16 relative"
            >
              <div className="absolute -left-4 top-0 text-6xl text-gold-500 font-serif">"</div>
              <blockquote className="text-xl md:text-2xl font-display text-navy-700 italic leading-relaxed pl-8">
                {post.quote}
              </blockquote>
            </motion.div>
          )}

          {/* Body */}
          <div className="space-y-8">
            {post.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-navy-700 text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Tips */}
          {post.tips && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 p-8 bg-navy-950 border-l-2 border-gold-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-gold-500" />
                <h3 className="font-display text-xl text-cream-100">Expert Tips</h3>
              </div>
              <ul className="space-y-3">
                {post.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-cream-200/80">
                    <span className="text-gold-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-navy-950/10"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-sm text-navy-600">Share this article</span>
              <div className="flex items-center gap-4">
                <button className="p-2 text-navy-600 hover:text-navy-950 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ChefHat className="w-12 h-12 text-gold-500 mx-auto mb-6" />
            <h2 className="font-display text-3xl text-cream-100 mb-4">
              Ready to Create Your Event?
            </h2>
            <p className="text-cream-200/60 mb-8">
              Let us bring exceptional catering to your next celebration in Limassol
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
    </>
  );
}
