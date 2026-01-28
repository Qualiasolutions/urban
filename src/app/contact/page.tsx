'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send as SendIcon, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PHONE, PHONE_DISPLAY, EMAIL, LOCATION } from '@/lib/constants';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: PHONE_DISPLAY, href: `tel:${PHONE}` },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: 'Location', value: LOCATION, href: 'https://maps.google.com/?q=Urban+Catering+Nicosia+Cyprus' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-7PM', href: '#' },
];

const socialLinks = [
  {
    name: 'Viber',
    href: `viber://chat?number=${PHONE.replace('+', '%2B')}`,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.4 0C9.5.1 5.4.5 3.3 2.5 1.5 4.3.8 7 .7 10.4c-.1 3.4-.2 9.7 6 11.5v2.6s0 1.1.7 1.3c.8.3 1.3-.5 2.1-1.4.4-.5.9-1.1 1.4-1.6 3.8.3 6.7-.4 7-.5.8-.2 5.3-.8 6-6.7.8-6.1-.4-9.9-2.4-11.6-1-1-3.4-2.5-8.4-2.8-.5-.1-1-.1-1.7-.1zM12 2c.5 0 1 0 1.5.1 4.2.3 6.1 1.5 6.9 2.2 1.5 1.3 2.5 4.3 1.9 9.4-.6 4.7-3.8 5.2-4.5 5.4-.3.1-2.8.7-6 .5 0 0-2.4 2.9-3.1 3.6-.1.2-.3.2-.3-.1v-4c-5.1-1.4-4.8-6.5-4.7-9.3.1-3 .7-5.2 2.1-6.6 1.7-1.6 5.2-2 6.2-2.1.3-.1.7-.1 1 0zm.3 3.2c-.2 0-.3.2-.3.4s.1.4.3.4c1.3.1 2.4.5 3.2 1.3.8.8 1.3 1.9 1.4 3.3 0 .2.2.4.4.4h.1c.2 0 .4-.2.4-.4-.2-1.6-.8-2.9-1.8-3.9-.9-.9-2.2-1.4-3.7-1.5zm-4.6 1c-.5 0-1 .1-1.4.3-.4.2-.7.5-.8.8-.2.4-.2.8-.1 1.2l.1.4c.4 1.4 1.1 2.8 2 4.1.7.9 1.5 1.8 2.4 2.6l.1.1.1.1.1.1.1.1c.8.8 1.7 1.6 2.6 2.3 1.3.9 2.7 1.6 4.1 2 .4.1.8.2 1.2.1.3-.1.6-.3.8-.6.2-.3.4-.7.4-1.1v-.2c.1-.5-.1-1-.5-1.3l-1.7-1.2c-.4-.3-.8-.3-1.2-.1l-.9.5c-.2.1-.4.1-.6 0-.7-.4-1.4-.9-1.9-1.4-.6-.5-1.1-1.2-1.5-1.9-.1-.2-.1-.4 0-.6l.5-.9c.2-.4.2-.8-.1-1.2l-1.3-1.7c-.2-.3-.6-.5-1-.5h-.5zm4.6.9c-.2 0-.4.2-.4.4s.2.4.4.4c.7 0 1.3.3 1.7.7.5.5.7 1.1.7 1.8 0 .2.2.4.4.4s.4-.2.4-.4c0-.9-.4-1.8-1-2.4-.6-.6-1.4-.9-2.2-.9zm0 1.8c-.2 0-.4.2-.4.4s.2.4.4.4c.3 0 .5.1.7.3.2.2.3.4.3.7 0 .2.2.4.4.4s.4-.2.4-.4c0-.5-.2-1-.6-1.4-.4-.3-.8-.4-1.2-.4z"/>
      </svg>
    ),
    color: 'hover:text-[#7360f2] hover:border-[#7360f2]/30',
  },
  {
    name: 'Telegram',
    href: `https://t.me/${PHONE}`,
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    color: 'hover:text-[#0088cc] hover:border-[#0088cc]/30',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/urbancateringcy/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    color: 'hover:text-[#E1306C] hover:border-[#E1306C]/30',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/Urban-Catering-Cy-61566961025784/',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    color: 'hover:text-[#1877F2] hover:border-[#1877F2]/30',
  },
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormState({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-navy-950">
        {/* Hero */}
        <section className="relative h-[300px]">
          <div className="absolute inset-0 bg-navy-900" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-950" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-cream-100 mb-4">
                Contact Us
              </h1>
              <p className="text-cream-200/60">Let&apos;s create something extraordinary together</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={ref} className="relative py-20">
          <div className="px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 border border-cream-200/10 text-cream-200/50 text-xs tracking-[0.25em] uppercase mb-6"
              >
                Get in Touch
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-3xl md:text-4xl font-bold text-cream-100 mb-6"
              >
                Let&apos;s Create Together
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-cream-200/50 text-lg max-w-2xl mx-auto"
              >
                Ready to plan your perfect event? Contact us for a personalized quote.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <div className="border border-cream-200/10 p-8">
                  <h3 className="font-display text-xl font-semibold text-cream-100 mb-8 pb-4 border-b border-cream-200/10">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 text-cream-200/60 hover:text-cream-100 transition-colors group"
                      >
                        <div className="w-10 h-10 border border-cream-200/10 flex items-center justify-center group-hover:border-cream-200/20 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] text-cream-200/40 uppercase tracking-wider mb-1">
                            {item.label}
                          </div>
                          <div className="text-sm">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-cream-200/10">
                    <h4 className="text-[10px] text-cream-200/40 uppercase tracking-wider mb-4">Connect With Us</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`w-11 h-11 border border-cream-200/10 flex items-center justify-center text-cream-200/60 transition-all duration-300 ${link.color}`}
                          title={link.name}
                        >
                          <link.icon />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="border border-cream-200/10 p-8">
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs text-cream-200/40 uppercase tracking-wider mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-cream-200/10 text-cream-100 placeholder:text-cream-200/20 focus:border-cream-200/30 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cream-200/40 uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-cream-200/10 text-cream-100 placeholder:text-cream-200/20 focus:border-cream-200/30 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cream-200/40 uppercase tracking-wider mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-cream-200/10 text-cream-100 placeholder:text-cream-200/20 focus:border-cream-200/30 focus:outline-none transition-colors"
                        placeholder="+357 99 123 456"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-cream-200/40 uppercase tracking-wider mb-2">Event Type</label>
                      <select
                        value={formState.eventType}
                        onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-cream-200/10 text-cream-100 focus:border-cream-200/30 focus:outline-none transition-colors"
                      >
                        <option value="" className="bg-navy-950">Select type</option>
                        <option value="wedding" className="bg-navy-950">Wedding</option>
                        <option value="corporate" className="bg-navy-950">Corporate</option>
                        <option value="private" className="bg-navy-950">Private Dining</option>
                        <option value="cocktail" className="bg-navy-950">Cocktail</option>
                        <option value="other" className="bg-navy-950">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs text-cream-200/40 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-cream-200/10 text-cream-100 placeholder:text-cream-200/20 focus:border-cream-200/30 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-cream-100 text-navy-950 py-4 font-medium text-xs uppercase tracking-wider hover:bg-cream-200 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <SendIcon className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
