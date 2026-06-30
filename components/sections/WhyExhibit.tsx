'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WHY_EXHIBIT } from '@/lib/data';

export default function WhyExhibit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/40 to-deep-navy" />
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-royal/12 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Why Exhibit</span>
            <span className="w-10 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Position Your Brand at the<br />
            <span className="text-gold-gradient bg-[length:200%_auto]">Heart of African Industry</span>
          </h2>
          <p className="text-white/55 text-base max-w-2xl mx-auto leading-relaxed">
            EMWA has become the foremost platform to meet top decision-makers and quality trade buyers across Nigeria and West Africa.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {WHY_EXHIBIT.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass rounded-2xl p-7 border border-white/8 hover:border-gold/25 transition-all duration-300 hover:bg-white/[0.03] overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-block">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-base mb-3 leading-tight group-hover:text-gold transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              {/* Corner accent */}
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold/70 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
