'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { STAND_PACKAGES, WHY_EXHIBIT, PRODUCT_CATEGORIES, EVENT } from '@/lib/data';

function SectionHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep-navy" />
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[130px] pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-royal/12 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">EMWA 2027 · Lagos, Nigeria</span>
          </div>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
            <span className="text-white">Exhibit at</span><br />
            <span className="text-gold-gradient bg-[length:200%_auto]">Africa&apos;s</span><br />
            <span className="text-white">Premier Industrial</span><br />
            <span className="text-white">Show.</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-10">
            Showcase your products to 3,700+ qualified manufacturing buyers, decision-makers and investors — all under one roof for three days.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
            >
              Book Your Stand <ArrowRight size={16} />
            </a>
            <a
              href="#packages"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-white/30 hover:bg-white/10 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:scale-105"
            >
              View Packages
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section ref={ref} id="why-exhibit" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy/20" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why <span className="text-gold-gradient bg-[length:200%_auto]">Exhibit?</span>
          </h2>
          <p className="text-white/55 max-w-lg mx-auto">EMWA gives you direct access to dealers, importers, potential agents and buyers who are looking to source quality products.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_EXHIBIT.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass rounded-2xl p-7 border border-white/8 hover:border-gold/25 transition-all duration-300"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-tight group-hover:text-gold transition-colors duration-200">{item.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const accentColors: Record<string, string> = { royal: '#1E3A8A', gold: '#F7941D', crimson: '#E31E24' };

  return (
    <section ref={ref} id="packages" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-20" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Stand Packages</span>
            <span className="w-10 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Find the <span className="text-gold-gradient bg-[length:200%_auto]">Right Package</span>
          </h2>
          <p className="text-white/55 max-w-lg mx-auto">Three options — from fully custom builds to all-inclusive branded stands. All packages include pre-show marketing support.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAND_PACKAGES.map((pkg, i) => {
            const color = accentColors[pkg.badgeColor] || '#F7941D';
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass rounded-3xl border border-white/10 hover:border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ '--accent': color } as React.CSSProperties}
              >
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${color}80, ${color}, ${color}80)` }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: `${color}20`, color }}>
                      {pkg.badge}
                    </span>
                  </div>
                  <p className="text-white/55 text-sm mb-8 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={15} style={{ color }} className="shrink-0 mt-0.5" />
                        <span className="text-white/70 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: color, color: pkg.badgeColor === 'gold' ? '#060D1F' : '#fff' }}
                  >
                    Select This Package <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy/25" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Product <span className="text-gold-gradient bg-[length:200%_auto]">Categories</span>
          </h2>
          <p className="text-white/55 max-w-xl">EMWA covers the full spectrum of industrial manufacturing technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl border border-white/8 hover:border-gold/20 transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === cat.name ? null : cat.name)}
              >
                <span className="text-white font-semibold text-sm">{cat.name}</span>
                <span className={`text-gold text-lg transition-transform duration-200 ${open === cat.name ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === cat.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5"
                >
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs text-white/50 px-2.5 py-1 rounded-full bg-white/5 border border-white/8">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section ref={ref} id="book" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/30 to-deep-navy" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-royal/12 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Reserve Your <span className="text-gold-gradient bg-[length:200%_auto]">Stand</span>
          </h2>
          <p className="text-white/55">Complete the form below and our team will contact you within 24 hours to discuss your options.</p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl border border-gold/25 p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l7 7L23 7" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            <h3 className="text-white font-bold text-2xl mb-3">Enquiry Received!</h3>
            <p className="text-white/55">Thank you for your interest in exhibiting at EMWA 2027. Our sales team will be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl border border-white/10 p-8 sm:p-12 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Full Name *</label>
                <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Job Title *</label>
                <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="CEO / Sales Director" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Company Name *</label>
              <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="Company Ltd." />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email *</label>
                <input required type="email" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Phone</label>
                <input type="tel" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="+234..." />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Preferred Package</label>
              <select className="form-input w-full px-4 py-3 rounded-xl text-sm bg-navy/60">
                <option value="">Select a package...</option>
                <option>Space Only</option>
                <option>Shell Scheme</option>
                <option>Modular Stand</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Products / Services to Exhibit</label>
              <textarea className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none" rows={4} placeholder="Describe the products or services you plan to exhibit..." />
            </div>
            <button
              type="submit"
              className="btn-shimmer w-full py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Submit Enquiry
            </button>
            <p className="text-white/30 text-xs text-center">
              Or contact us directly: <a href={`mailto:${EVENT.contact.exhibitor.email}`} className="text-gold hover:underline">{EVENT.contact.exhibitor.email}</a> · {EVENT.contact.exhibitor.phone}
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}

export default function ExhibitorsPage() {
  return (
    <div className="page-content">
      <SectionHero />
      <BenefitsSection />
      <PackagesSection />
      <CategoriesSection />
      <BookSection />
    </div>
  );
}
