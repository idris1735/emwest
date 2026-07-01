'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { VISITOR_COMMUNITIES, TARGET_INDUSTRIES, EVENT } from '@/lib/data';

const VISIT_REASONS = [
  { icon: '🤝', title: 'Meet 3,700+ Suppliers & Professionals', desc: 'Connect with manufacturers, importers, wholesale companies and installers from across Nigeria and internationally.' },
  { icon: '💡', title: 'Discover Innovations', desc: 'Explore the latest industrial products and technologies from 47+ global brands at the cutting edge of manufacturing.' },
  { icon: '🎓', title: 'Free Knowledge Sessions', desc: 'Access free, content-rich seminars and conference sessions hosted by industry-leading experts and government officials.' },
  { icon: '🌍', title: 'Expand Your Network', desc: 'Network with regional and international industry contacts — from SME owners to Fortune 500 procurement directors.' },
  { icon: '📊', title: 'Market Intelligence', desc: 'Stay ahead with insights on the latest trends, regulatory changes, and opportunities in African manufacturing.' },
  { icon: '🚀', title: 'Grow Your Business', desc: 'Equip yourself with tools, ideas and connections to scale your manufacturing or supply chain operation.' },
];

export default function VisitorsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectRef = useRef<HTMLDivElement>(null);
  const regRef = useRef<HTMLDivElement>(null);
  const sectInView = useInView(sectRef, { once: true, margin: '-80px' });
  const regInView = useInView(regRef, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep-navy" />
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-royal/12 blur-[130px] pointer-events-none animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Free Visitor Registration</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
              <span className="text-white">Visit EMWA</span><br />
              <span className="text-gold-gradient bg-[length:200%_auto]">2027</span><br />
              <span className="text-white">For Free.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-10">
              Three days of world-class industrial exhibitions, free knowledge sessions, and unparalleled networking. Entry is free for qualified professionals.
            </p>
            {/* Event info tags */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { icon: Calendar, text: '25–27 May 2027' },
                { icon: Clock, text: '10:00 AM – 5:00 PM Daily' },
                { icon: MapPin, text: 'Landmark Centre, Lagos' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 glass border border-white/10 px-4 py-2.5 rounded-xl">
                  <Icon size={14} className="text-gold shrink-0" />
                  <span className="text-white/70 text-sm">{text}</span>
                </div>
              ))}
            </div>
            <a
              href="#register"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              Register Free Pass <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Visit */}
      <section ref={sectRef} id="why-attend" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why <span className="text-gold-gradient bg-[length:200%_auto]">Visit EMWA?</span>
            </h2>
            <p className="text-white/55 max-w-lg mx-auto">EMWA makes your life easier by bringing multiple suppliers together under one roof over three days.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VISIT_REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                animate={sectInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="group glass rounded-2xl p-7 border border-white/8 hover:border-gold/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{r.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm leading-tight group-hover:text-gold transition-colors duration-200">{r.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Who Should <span className="text-gold-gradient bg-[length:200%_auto]">Attend?</span>
              </h2>
              <div className="space-y-3">
                {VISITOR_COMMUNITIES.map((v, i) => (
                  <motion.div
                    key={v}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-center gap-3 group"
                  >
                    <CheckCircle2 size={15} className="text-gold shrink-0" />
                    <span className="text-white/65 text-sm group-hover:text-white/90 transition-colors duration-200">{v}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Target <span className="text-gold-gradient bg-[length:200%_auto]">Industries</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {TARGET_INDUSTRIES.map((industry, i) => (
                  <motion.span
                    key={industry}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 glass border border-gold/20 rounded-full text-gold text-xs font-medium hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 cursor-default"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>

              <div className="mt-10 glass rounded-2xl border border-white/10 p-6">
                <h3 className="text-white font-bold mb-4">Hosted Buyer Programme</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  Senior buyers qualify for VIP access — free show floor entry, all conference sessions, daily lunch, and pre-scheduled B2B meetings with exhibitors.
                </p>
                <a
                  href="#register"
                  className="text-gold text-sm font-semibold hover:text-gold-light transition-colors duration-200 flex items-center gap-1.5"
                >
                  Apply for Hosted Buyer Programme <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register */}
      <section ref={regRef} id="register" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/30 to-deep-navy" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-royal/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={regInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Register Your <span className="text-gold-gradient bg-[length:200%_auto]">Free Pass</span>
            </h2>
            <p className="text-white/55">Secure your badge today. Professional visitors only — no under-16s admitted.</p>
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
              <h3 className="text-white font-bold text-2xl mb-3">Registration Complete!</h3>
              <p className="text-white/55">You&apos;ll receive a confirmation email shortly with your badge details for EMWA 2027.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={regInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl border border-white/10 p-8 sm:p-12 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">First Name *</label>
                  <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Last Name *</label>
                  <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email Address *</label>
                <input required type="email" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="you@company.com" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Company *</label>
                  <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="Company Ltd." />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Job Title *</label>
                  <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="Procurement Manager" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Industry</label>
                <select className="form-input w-full px-4 py-3 rounded-xl text-sm bg-navy/60">
                  <option value="">Select your industry...</option>
                  {TARGET_INDUSTRIES.map(i => <option key={i}>{i}</option>)}
                </select>
              </div>
              <button type="submit" className="btn-shimmer w-full py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02]">
                Register Free Pass
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
