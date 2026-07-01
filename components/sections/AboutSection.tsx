'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const BENEFITS = [
  'Build brand recognition across West Africa',
  'Generate high-quality sales leads',
  'Launch new products to a captive market',
  'Network with industry leaders and buyers',
  'Access the largest market in Africa',
  'Educate customers and cement relationships',
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-royal/10 blur-[150px]" />
      </div>
      <div className="absolute inset-0 grid-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Subtle gradient border glow */}
            <div className="absolute -inset-px rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(247,148,29,0.2) 0%, transparent 50%, rgba(30,58,138,0.12) 100%)', borderRadius: 'inherit' }} />

            <div className="relative rounded-3xl overflow-hidden" style={{ height: '500px' }}>
              {/* Parallax image */}
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <Image
                  src="https://emwestafrica.com/wp-content/uploads/2023/07/WEBSITE-PICTURE-SIZE1-800x567.png"
                  alt="EMWA Exhibition floor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy/30" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Previous Edition</div>
                    <div className="text-white font-semibold">30 May – 01 June 2023</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-bold text-2xl font-mono">3,700+</div>
                    <div className="text-white/50 text-xs">Professional Buyers</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">About EMWA</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Nigeria&apos;s Largest</span>
                <br />
                <span className="text-gold-gradient bg-[length:200%_auto]">Manufacturing &amp;</span>
                <br />
                <span className="text-white">Industrial Event</span>
              </h2>

              <p className="text-white/60 text-base leading-relaxed mb-6">
                Equipment &amp; Manufacturing West Africa is a one-stop destination addressing the requirements of various industry sectors. With West Africa experiencing huge levels of industrial growth, EMWA provides a professional and comprehensive marketing platform.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                EMWA brings together industry buyers, suppliers and educators under one roof — sharing ideas, developing business relationships, and showcasing innovations across every vertical of the manufacturing sector.
              </p>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{b}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/exhibitors#book"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Book Your Stand Today
              </Link>
              <Link
                href="/visitors#register"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-white/30 hover:bg-white/10 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Register to Attend
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
