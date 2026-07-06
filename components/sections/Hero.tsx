'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';
import CountdownTimer from '@/components/ui/CountdownTimer';

const HERO_IMAGES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center overflow-hidden bg-[#060D1F]">

      {/* ── Background image slideshow ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6, ease: 'easeInOut' }, scale: { duration: 6 } }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[current]}
              alt="EMWA Exhibition"
              fill
              priority={current === 0}
              className="object-cover object-[50%_15%]"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── 4-layer overlay system ── */}
      <div className="absolute inset-0 z-[1] hero-overlay-base bg-black/25" />
      <div className="absolute inset-0 z-[1] hero-overlay-edge bg-gradient-to-r from-[#060D1F]/90 via-[#060D1F]/20 to-transparent" />
      <div className="absolute inset-0 z-[1] hero-overlay-edge bg-gradient-to-b from-[#060D1F]/50 via-transparent to-transparent" />
      <div className="absolute inset-0 z-[1] hero-overlay-edge bg-gradient-to-t from-[#060D1F]/60 via-[#060D1F]/15 to-transparent" />

      {/* ── Slide dots ── */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[2px] bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            4th Annual · Landmark Centre, Lagos
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2.4rem] sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.0] mb-4 hero-text-shadow"
        >
          <span className="block text-white">Nigeria&apos;s Premier</span>
          <span className="block text-[#FBB040]">Industrial Exhibition.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="text-white/80 text-sm sm:text-base max-w-md mb-4 leading-relaxed hero-text-shadow"
        >
          International Trade Exhibition &amp; Conference for Industrial Products,
          Manufacturing Equipment &amp; Machinery — West Africa.
        </motion.p>

        {/* Date + Venue chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-5"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-black/30 text-white text-xs">
            <Calendar size={10} className="text-gold" />
            25–27 May 2027
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-black/30 text-white text-xs">
            <MapPin size={10} className="text-gold" />
            Landmark Centre, Victoria Island, Lagos
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="mb-6"
        >
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Opens in</p>
          <CountdownTimer targetDate="2027-05-25T10:00:00" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.86 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/exhibitors#book"
            className="btn-shimmer group inline-flex items-center gap-2 px-7 py-3 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-gold/35"
          >
            Book a Stand
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/visitors#register"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 hover:border-white/55 bg-white/8 hover:bg-white/15 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Register Free
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
