'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Mic, ArrowRight } from 'lucide-react';
import { SPEAKERS, EVENT } from '@/lib/data';

function SpeakerCard({ speaker, index }: { speaker: typeof SPEAKERS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-gold/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/8"
    >
      {/* Photo */}
      <div className="relative h-64 bg-navy overflow-hidden">
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.08]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent" />
        {speaker.type === 'KEYNOTE' && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-gold/90 backdrop-blur-sm rounded-full">
            <Mic size={10} className="text-deep-navy" />
            <span className="text-[10px] font-bold text-deep-navy uppercase tracking-wider">Keynote</span>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 bg-navy/80 backdrop-blur-sm relative">
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="text-white font-semibold text-sm mb-1 group-hover:text-gold transition-colors duration-200">{speaker.name}</div>
        <div className="text-gold/80 text-xs mb-1">{speaker.role}</div>
        <div className="text-white/40 text-xs">{speaker.company}</div>
      </div>
    </motion.div>
  );
}

export default function SpeakersPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const data = {
      type: 'speaker' as const,
      name: String(raw.fullName || ''),
      email: String(raw.email || ''),
      company: String(raw.company || ''),
      jobTitle: String(raw.jobTitle || ''),
      topic: String(raw.topic || ''),
      message: String(raw.abstract || ''),
    };
    try { await fetch('/api/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); } catch {}
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep-navy" />
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-royal/12 blur-[130px] pointer-events-none animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Conference Speakers</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
              <span className="text-white">Voices That</span><br />
              <span className="text-gold-gradient bg-[length:200%_auto]">Define</span><br />
              <span className="text-white">African Industry.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              32 industry leaders took the EMWA stage — government commissioners, technology directors, and Nigeria&apos;s most influential industrialists. Speaker lineup for EMWA 2027 will be announced soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {SPEAKERS.map((speaker, i) => (
              <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8 text-white/40 text-sm"
          >
            Showing 12 past speakers from EMWA 2021. The 2027 lineup will be announced soon.
          </motion.div>
        </div>
      </section>

      {/* Conference Theme */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/30 to-deep-navy" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-3xl border border-gold/20 p-10 sm:p-14">
              <div className="text-gold text-xs uppercase tracking-widest mb-6 font-semibold">Conference Theme</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                &ldquo;REIGNITING MANUFACTURING TO DRIVE ECONOMIC GROWTH AND DEVELOPMENT&rdquo;
              </h2>
              <p className="text-white/55 text-base leading-relaxed max-w-xl mx-auto">
                The EMWA Knowledge Centre features a diverse and high-calibre programme covering challenges and opportunities facing Africa&apos;s industrial sector.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Become a Speaker */}
      <section ref={formRef} id="become-a-speaker" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="relative max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Speak at <span className="text-gold-gradient bg-[length:200%_auto]">EMWA 2027</span>
            </h2>
            <p className="text-white/55">Share your expertise with 3,700+ manufacturing professionals. Applications are open for EMWA 2027.</p>
          </motion.div>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl border border-gold/25 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l7 7L23 7" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Application Submitted!</h3>
              <p className="text-white/55">Thank you for applying to speak at EMWA 2027. Our programme team will be in touch shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass rounded-3xl border border-white/10 p-8 sm:p-12 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Full Name *</label>
                  <input required name="fullName" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Job Title *</label>
                  <input required name="jobTitle" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="CEO / Director" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Company / Organisation *</label>
                  <input required name="company" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="Organisation" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email *</label>
                  <input required type="email" name="email" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Proposed Talk Topic *</label>
                <input required name="topic" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="e.g. Industry 4.0 in West African Manufacturing" />
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Brief Abstract / Overview *</label>
                <textarea required name="abstract" className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none" rows={5} placeholder="Briefly describe your proposed talk and what attendees will learn..." />
              </div>
              <button type="submit" disabled={loading} className="btn-shimmer w-full py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60">
                Submit Speaker Application
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
