'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+357 99 123 456', href: 'tel:+35799123456' },
  { icon: Mail, label: 'Email', value: 'info@urbancatering.com.cy', href: 'mailto:info@urbancatering.com.cy' },
  { icon: MapPin, label: 'Location', value: 'Nicosia, Cyprus', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-7PM', href: '#' },
];

export default function Contact() {
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
    <section
      ref={ref}
      id="contact"
      className="relative py-28 bg-navy-950 overflow-hidden"
    >
      <div className="relative z-10 px-6">
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
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6"
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

        <div className="grid lg:grid-cols-5 gap-12">
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
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
