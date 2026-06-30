'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { EXHIBITING_BRANDS } from '@/lib/data';

// LogoItem still uses Image for individual brand logos
function LogoItem({ brand }: { brand: typeof EXHIBITING_BRANDS[0] }) {
  return (
    <div className="flex-shrink-0 mx-6 group">
      <div className="relative w-32 h-20 sm:w-40 sm:h-24">
        <Image
          src={brand.logo}
          alt={brand.name}
          fill
          className="object-contain opacity-40 group-hover:opacity-100 transition-all duration-300"
          sizes="160px"
        />
      </div>
    </div>
  );
}

const ROW_A = EXHIBITING_BRANDS.slice(0, 17);
const ROW_B = EXHIBITING_BRANDS.slice(17);

export default function BrandLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/30" />
        <div className="absolute inset-0 grid-dots opacity-20" />
      </div>

      {/* ── Fade edges for the marquee ── */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(90deg, #060D1F, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(270deg, #060D1F, transparent)' }} />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">EMWA 2027 · 47+ Exhibiting Brands</span>
              <span className="w-10 h-[2px] bg-gold" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              World-Class Brands,<br />
              <span className="text-gold-gradient bg-[length:200%_auto]">One African Stage</span>
            </h2>
            <p className="text-white/45 text-sm max-w-lg mx-auto">
              From global multinationals to Africa&apos;s leading manufacturers — they all choose EMWA.
            </p>
          </motion.div>
        </div>

        {/* Marquee row 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8 marquee-container"
        >
          <div className="marquee-track">
            {[...ROW_A, ...ROW_A].map((brand, i) => (
              <LogoItem key={`a-${brand.name}-${i}`} brand={brand} />
            ))}
          </div>
        </motion.div>

        {/* Marquee row 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative marquee-container"
        >
          <div className="marquee-track-reverse">
            {[...ROW_B, ...ROW_B].map((brand, i) => (
              <LogoItem key={`b-${brand.name}-${i}`} brand={brand} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
