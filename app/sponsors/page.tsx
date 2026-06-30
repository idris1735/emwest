'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SPONSORSHIP_PACKAGES, PAST_SPONSORS, EVENT } from '@/lib/data';

const WHY_SPONSOR = [
  { icon: '🚀', title: 'Launch New Products', desc: 'Unveil innovations to a highly receptive audience of qualified manufacturing buyers and decision-makers.' },
  { icon: '📈', title: 'Maximise Your ROI', desc: 'Customised packages designed to guarantee return on investment through targeted brand exposure.' },
  { icon: '🏆', title: 'Differentiate from Competitors', desc: 'Benefit from exclusive branding opportunities that set you apart across Nigeria and West Africa.' },
  { icon: '🎯', title: 'Drive Stand Traffic', desc: 'Direct visitors to your stand and generate more qualified leads and meetings during the event.' },
  { icon: '🤝', title: 'Access Key Stakeholders', desc: 'Reach targeted government officials, industry buyers, and influential sector players.' },
  { icon: '📣', title: 'Year-Round Visibility', desc: 'The influence of EMWA extends beyond three days — sponsorship provides ongoing brand positioning.' },
];

const TIER_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Diamond: { bg: 'rgba(147,210,255,0.1)', text: '#93D2FF', border: 'rgba(147,210,255,0.3)' },
  Gold: { bg: 'rgba(247,148,29,0.1)', text: '#F7941D', border: 'rgba(247,148,29,0.3)' },
  Bronze: { bg: 'rgba(180,120,80,0.1)', text: '#B47850', border: 'rgba(180,120,80,0.3)' },
};

export default function SponsorsPage() {
  const whyRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' });
  const formInView = useInView(formRef, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep-navy" />
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] rounded-full bg-crimson/8 blur-[130px] pointer-events-none animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Sponsorship Opportunities</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
              <span className="text-white">Lead the</span><br />
              <span className="text-gold-gradient bg-[length:200%_auto]">Conversation</span><br />
              <span className="text-white">in African</span><br />
              <span className="text-white">Manufacturing.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-10">
              Place your brand at the forefront of Nigeria&apos;s most important industrial gathering. Bespoke packages designed to guarantee exceptional ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#enquire" className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-deep-navy font-bold text-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30">
                Enquire Now <ArrowRight size={16} />
              </a>
              <a href="#packages" className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:scale-105">
                View Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section ref={whyRef} id="why" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Top Reasons to <span className="text-gold-gradient bg-[length:200%_auto]">Sponsor</span></h2>
            <p className="text-white/55 max-w-lg mx-auto">Become a sponsor and position your brand in front of a highly receptive audience of buyers and key decision-makers.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_SPONSOR.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="group glass rounded-2xl p-7 border border-white/8 hover:border-gold/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-sm leading-tight group-hover:text-gold transition-colors duration-200">{item.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Sponsorship <span className="text-gold-gradient bg-[length:200%_auto]">Options</span></h2>
            <p className="text-white/55 max-w-lg mx-auto">Choose from tailor-made solutions to suit any budget. All packages can be customised to meet your specific marketing objectives.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {SPONSORSHIP_PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl border border-gold/15 hover:border-gold/35 p-6 transition-all duration-300 hover:-translate-y-1 group"
              >
                <CheckCircle2 size={18} className="text-gold mb-4" />
                <div className="text-white font-semibold text-base group-hover:text-gold transition-colors duration-200">{pkg}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our <span className="text-gold-gradient bg-[length:200%_auto]">Past Sponsors</span></h2>
            <p className="text-white/50 text-sm">World-class companies that chose to lead at EMWA.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PAST_SPONSORS.map((sponsor, i) => {
              const colors = TIER_COLORS[sponsor.tier] || TIER_COLORS.Bronze;
              return (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group glass rounded-2xl border p-6 hover:-translate-y-1 transition-all duration-300 text-center"
                  style={{ borderColor: colors.border }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full inline-block" style={{ background: colors.bg, color: colors.text }}>
                    {sponsor.tier} Sponsor
                  </div>
                  <div className="relative h-14 mb-4">
                    <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" sizes="120px" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{sponsor.name}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{sponsor.description}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquire Form */}
      <section ref={formRef} id="enquire" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/30 to-deep-navy" />
        <div className="relative max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Enquire About <span className="text-gold-gradient bg-[length:200%_auto]">Sponsorship</span></h2>
            <p className="text-white/55">Let us create a bespoke package guaranteed to deliver results for your brand.</p>
          </motion.div>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl border border-gold/25 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l7 7L23 7" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Enquiry Sent!</h3>
              <p className="text-white/55">Our sponsorship team will contact you within 24 hours to discuss your custom package.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass rounded-3xl border border-white/10 p-8 sm:p-12 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Full Name *</label>
                  <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Company *</label>
                  <input required className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="Company Ltd." />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email *</label>
                <input required type="email" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Sponsorship Package Interest</label>
                <select className="form-input w-full px-4 py-3 rounded-xl text-sm bg-navy/60">
                  <option value="">Select a package...</option>
                  {SPONSORSHIP_PACKAGES.map(p => <option key={p}>{p}</option>)}
                  <option>Custom / Multiple Packages</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Message</label>
                <textarea className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none" rows={4} placeholder="Tell us about your sponsorship objectives and budget range..." />
              </div>
              <button type="submit" className="btn-shimmer w-full py-4 bg-gold hover:bg-gold-light text-deep-navy font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02]">
                Send Enquiry
              </button>
              <p className="text-white/30 text-xs text-center">
                Or call us: <a href={`tel:${EVENT.contact.general.phone}`} className="text-gold hover:underline">{EVENT.contact.general.phone}</a>
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
