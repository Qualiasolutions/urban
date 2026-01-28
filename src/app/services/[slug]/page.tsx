'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { services } from '@/lib/services';
import { PHONE, PHONE_DISPLAY, EMAIL } from '@/lib/constants';

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = services.find((s) => s.slug === slug);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Urban Catering`;
    }
  }, [service]);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream-100">
        {/* Hero */}
        <section className="relative h-[350px] md:h-[450px]">
          <div className="absolute inset-0 bg-navy-950">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 opacity-90" />
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtMS43OTQtMS40NDYtMy4yNS0zLjI1LTMuMjVoLS43NWMwLTEuNzk0LTEuNDQ2LTMuMjUtMy4yNS0zLjI1UzI1LjUgMTIuNzA2IDI1LjUgMTQuNWgtLjc1Yy0xLjgwNCAwLTMuMjUgMS40NTYtMy4yNSAzLjI1UzIyLjk0NiAyMSAyNC43NSAyMWguNzVjMCAxLjc5NCAxLjQ0NiAzLjI1IDMuMjUgMy4yNVMzMi41IDIyLjc5NCAzMi41IDIxaC43NWMxLjgwNCAwIDMuMjUtMS40NTYgMy4yNS0zLjI1UzMzLjk1NCAxOC4yMTYgMzYgMTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-6"
            >
              <p className="text-cream-200/60 text-sm uppercase tracking-[0.3em] mb-4">
                Our Services
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6">
                {service.title}
              </h1>
              <p className="text-cream-200/70 text-lg max-w-2xl mx-auto">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-navy-950/5 border-b border-navy-950/10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center gap-3 text-sm text-navy-600">
              <Link href="/" className="hover:text-navy-950 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-navy-950 transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-navy-950 font-medium">{service.title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section ref={ref} className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Description */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 pb-6 border-b border-navy-950/10 mb-8">
                  <div className="w-10 h-10 bg-navy-950 rounded-full flex items-center justify-center">
                    <span className="text-cream-100 text-lg font-display">U</span>
                  </div>
                  <span className="font-display text-xl font-semibold text-navy-950">
                    About This Service
                  </span>
                </div>

                <div className="space-y-6 text-navy-700 leading-relaxed">
                  <p className="text-lg">{service.longDescription}</p>
                  <p>
                    Our dedicated team brings years of experience and passion to every event,
                    ensuring that every detail is perfect. We work closely with you to understand
                    your vision and bring it to life with exceptional food and impeccable service.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-navy-950/10 space-y-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-4 text-navy-700 hover:text-navy-950 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center group-hover:bg-navy-950 group-hover:text-cream-100 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-500">Call Us</p>
                      <p className="font-medium">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 text-navy-700 hover:text-navy-950 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center group-hover:bg-navy-950 group-hover:text-cream-100 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-500">Email Us</p>
                      <p className="font-medium">{EMAIL}</p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 pb-6 border-b border-navy-950/10 mb-8">
                  <div className="w-10 h-10 bg-cream-200 rounded-full flex items-center justify-center text-navy-950">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="font-display text-xl font-semibold text-navy-950">
                    What We Offer
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-950/5">
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-navy-950 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-cream-100" />
                        </div>
                        <span className="text-navy-700 pt-0.5">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info Box */}
                <div className="mt-8 bg-navy-950 text-cream-100 rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 text-cream-200/80">
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-cream-100" />
                      Professional and reliable service
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-cream-100" />
                      Quality ingredients and presentation
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-cream-100" />
                      Flexible options to suit your budget
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-cream-100" />
                      Experienced staff and setup
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-cream-100" />
                      Attention to detail
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy-950">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream-100 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-cream-200/70 text-lg mb-8 max-w-2xl mx-auto">
                Let us help you create an unforgettable {service.title.toLowerCase()} experience.
                Contact us today for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cream-100 text-navy-950 font-medium text-sm uppercase tracking-wider hover:bg-cream-200 transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-cream-200/30 text-cream-100 font-medium text-sm uppercase tracking-wider hover:bg-cream-100/5 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 md:py-20 border-t border-navy-950/10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-semibold text-navy-950 text-center mb-12"
            >
              Other Services
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 4)
                .map((s, index) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/services/${s.slug}`}
                      className="block h-full bg-white rounded-xl p-6 border border-navy-950/5 hover:border-navy-950/20 hover:shadow-md transition-all duration-300 group"
                    >
                      <h3 className="font-display text-lg font-semibold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-navy-600 line-clamp-2">{s.description}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-navy-950 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

