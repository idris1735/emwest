'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { EVENT } from '@/lib/data';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} className="relative py-36 overflow-hidden">
      {/* ── Background image with parallax ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-8%] z-0">
        <Image
          src="/images/home_hero_2.jpg"
          alt="EMWA Exhibition"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer overlay for text legibility */}
        <div className="absolute inset-0 bg-[#060D1F]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060D1F]/60 via-transparent to-[#060D1F]/60" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(30,58,138,0.35) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 60%, rgba(247,148,29,0.10) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 grid-lines opacity-35" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.35em] uppercase">Don&apos;t Miss EMWA 2027</span>
              <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>

            <h2 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-8 max-w-4xl mx-auto hero-text-shadow">
              <span className="text-[#FFFFFF]">Secure Your Place</span>
              <br />
              <span className="text-[#FFFFFF]">at Africa&apos;s</span>
              <br />
              <span className="text-[#FFFFFF]">Industrial Summit.</span>
            </h2>

            <p className="text-[#FFFFFF]/80 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-medium">
              25–27 May 2027 · Landmark Centre, Lagos. Three days, 47+ global brands, 3,700+ buyers.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/exhibitors#book"
                className="btn-shimmer group inline-flex items-center gap-2 px-10 py-5 bg-gold hover:bg-gold-light text-white font-bold text-base rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-gold/25"
              >
                Book a Stand
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/visitors#register"
                className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 border border-white/30 hover:border-white/55 bg-white/8 hover:bg-white/16 text-white font-bold text-base rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Register as Visitor
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl border border-white/10 p-6 hover:border-gold/30 hover-lift transition-all duration-300 group text-center">
            <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/25 transition-colors duration-200">
              <Mail size={18} className="text-gold group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-2 group-hover:text-white/65 transition-colors duration-200">Email Us</div>
            <a href={`mailto:${EVENT.contact.general.email}`} className="text-white text-sm font-medium hover:text-gold transition-colors duration-200 break-all">
              {EVENT.contact.general.email}
            </a>
          </div>

          <div className="glass rounded-2xl border border-white/10 p-6 hover:border-gold/30 hover-lift transition-all duration-300 group text-center">
            <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/25 transition-colors duration-200">
              <Phone size={18} className="text-gold group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-2 group-hover:text-white/65 transition-colors duration-200">Call Us</div>
            <a href={`tel:${EVENT.contact.general.phone}`} className="text-white text-sm font-medium hover:text-gold transition-colors duration-200">
              {EVENT.contact.general.phone}
            </a>
          </div>

          <div className="glass rounded-2xl border border-white/10 p-6 hover:border-gold/30 hover-lift transition-all duration-300 group text-center">
            <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/25 transition-colors duration-200">
              <MapPin size={18} className="text-gold group-hover:scale-110 transition-transform duration-200" />
            </div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-2 group-hover:text-white/65 transition-colors duration-200">Venue</div>
            <div className="text-white text-sm font-medium leading-snug">{EVENT.venue}</div>
            <div className="text-white/40 text-xs mt-1">Victoria Island, Lagos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
