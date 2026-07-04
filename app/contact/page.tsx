'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Lock, Info, BarChart3, Users } from 'lucide-react';
import { EVENT } from '@/lib/data';

const CONTACT_CARDS = [
  {
    title: 'General Enquiries',
    email: EVENT.contact.general.email,
    phone: EVENT.contact.general.phone,
    desc: 'For any general questions about EMWA 2027.',
    color: '#F7941D',
    Icon: Mail,
  },
  {
    title: 'Exhibitor Sales',
    email: EVENT.contact.exhibitor.email,
    phone: EVENT.contact.exhibitor.phone,
    desc: 'Book a stand, request a media kit, or discuss stand options.',
    color: '#1E3A8A',
    Icon: BarChart3,
  },
  {
    title: 'Marketing & Media',
    email: EVENT.contact.marketing.email,
    phone: undefined,
    desc: 'Media partnerships, press accreditation, and advertising enquiries.',
    color: '#E31E24',
    Icon: Users,
  },
  {
    title: 'Business Matching',
    email: EVENT.contact.business.email,
    phone: undefined,
    desc: 'B2B meeting requests and the Hosted Buyer Programme.',
    color: '#10B981',
    Icon: Users,
  },
  {
    title: 'Event Information',
    email: EVENT.contact.event.email,
    phone: undefined,
    desc: 'Visitor registration, event logistics, and general show information.',
    color: '#8B5CF6',
    Icon: Info,
  },
  {
    title: 'Privacy & Data',
    email: EVENT.contact.privacy.email,
    phone: undefined,
    desc: 'Data subject requests, GDPR/NDPR enquiries and privacy concerns.',
    color: '#6B7280',
    Icon: Lock,
  },
];

export default function ContactPage() {
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
      type: 'contact' as const,
      name: String(raw.name || ''),
      email: String(raw.email || ''),
      subject: String(raw.subject || ''),
      message: String(raw.message || ''),
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
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-royal/10 blur-[130px] pointer-events-none animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Get in Touch</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
              <span className="text-white">Let&apos;s Talk</span><br />
              <span className="text-gold-gradient bg-[length:200%_auto]">About EMWA</span><br />
              <span className="text-white">2027.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Our team is here to help you get the most out of EMWA — whether you&apos;re exhibiting, visiting, sponsoring, or partnering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {CONTACT_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass rounded-2xl border border-white/8 hover:border-white/20 p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}>
                  <card.Icon size={16} style={{ color: card.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-white/40 text-xs mb-4 leading-relaxed">{card.desc}</p>
                <a href={`mailto:${card.email}`} className="block text-sm font-medium hover:underline transition-colors duration-200" style={{ color: card.color }}>
                  {card.email}
                </a>
                {card.phone && (
                  <a href={`tel:${card.phone}`} className="flex items-center gap-2 text-white/50 hover:text-white text-sm mt-2 transition-colors duration-200">
                    <Phone size={12} />
                    {card.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Venue Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl border border-white/10 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center shrink-0">
              <MapPin size={24} className="text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-xl mb-2">{EVENT.venue}</h3>
              <p className="text-white/55 text-base mb-1">{EVENT.address}</p>
              <p className="text-white/35 text-sm mb-6">Opening Hours: {EVENT.hours}</p>
              <a
                href="https://maps.google.com/?q=Landmark+Centre+Victoria+Island+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors duration-200"
              >
                Open in Google Maps <ArrowRight size={14} />
              </a>
            </div>
            {/* Map embed placeholder */}
            <div className="w-full sm:w-64 h-40 rounded-2xl overflow-hidden bg-navy border border-white/10 flex items-center justify-center shrink-0">
              <div className="text-center text-white/20">
                <MapPin size={32} className="mx-auto mb-2" />
                <div className="text-xs">Landmark Centre<br />Victoria Island, Lagos</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/25 to-deep-navy" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-royal/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="relative max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Send Us a <span className="text-gold-gradient bg-[length:200%_auto]">Message</span>
            </h2>
            <p className="text-white/55">We aim to respond to all enquiries within 24 hours on business days.</p>
          </motion.div>

          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass rounded-3xl border border-gold/25 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l7 7L23 7" stroke="#F7941D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Message Sent!</h3>
              <p className="text-white/55">Thank you for reaching out. A member of our team will respond within 24 hours.</p>
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
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Name *</label>
                  <input required name="name" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Email *</label>
                  <input required type="email" name="email" className="form-input w-full px-4 py-3 rounded-xl text-sm" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Subject *</label>
                <select required name="subject" className="form-input w-full px-4 py-3 rounded-xl text-sm bg-navy/60">
                  <option value="">Select a topic...</option>
                  <option>Exhibiting Enquiry</option>
                  <option>Visitor Registration</option>
                  <option>Sponsorship</option>
                  <option>Media Partnership</option>
                  <option>Speaker Application</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">Message *</label>
                <textarea required name="message" className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none" rows={6} placeholder="How can we help you?" />
              </div>
              <button type="submit" disabled={loading} className="btn-shimmer w-full py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60">
                Send Message
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* Organiser note */}
      <section className="relative py-16 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/35 text-sm">
              EMWA is organised by <span className="text-white/55 font-medium">Zenith Exhibitions</span> — {EVENT.organizerYears} years of world-class trade show experience in Africa.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
