'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+357 99 123 456',
    href: 'tel:+35799123456',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@urbancatering.com.cy',
    href: 'mailto:info@urbancatering.com.cy',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nicosia, Cyprus',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Sat: 9AM-7PM',
    href: '#',
  },
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormState({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 bg-navy-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold-500/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 border border-gold-500/30 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full mb-6"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream-100 mb-6"
          >
            Let&apos;s Create
            <span className="text-gradient-gold"> Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream-200/70 text-lg max-w-2xl mx-auto"
          >
            Ready to plan your perfect event? Contact us for a personalized quote
            and let us bring your vision to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-cream-100 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 text-cream-200/80 hover:text-gold-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <item.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-cream-200/50 uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-cream-100 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/urbancateringcy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center hover:bg-gold-500 text-gold-400 hover:text-navy-950 transition-all duration-300"
                  >
                    <span className="capitalize text-xs font-bold">{social[0].toUpperCase()}</span>
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
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-cream-200/60 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-cream-100 placeholder:text-cream-200/30 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cream-200/60 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-cream-100 placeholder:text-cream-200/30 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cream-200/60 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-cream-100 placeholder:text-cream-200/30 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="+357 99 123 456"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cream-200/60 mb-2">Event Type</label>
                  <select
                    value={formState.eventType}
                    onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-cream-100 focus:border-gold-500 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-navy-900">Select event type</option>
                    <option value="wedding" className="bg-navy-900">Wedding</option>
                    <option value="corporate" className="bg-navy-900">Corporate Event</option>
                    <option value="private" className="bg-navy-900">Private Dining</option>
                    <option value="cocktail" className="bg-navy-900">Cocktail Reception</option>
                    <option value="other" className="bg-navy-900">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-cream-200/60 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-cream-100 placeholder:text-cream-200/30 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 py-4 rounded-lg font-semibold uppercase tracking-wider hover:from-gold-400 hover:to-gold-500 transition-all duration-300 disabled:opacity-50"
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
