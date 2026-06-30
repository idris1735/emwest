'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/data';

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-0 z-10 -mt-1">
      {/* Background divider */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/80 to-deep-navy" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="glass border-y border-white/8 rounded-none sm:rounded-3xl sm:border overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-transparent to-gold/5 pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8 divide-y lg:divide-y-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center justify-center py-10 px-6 text-center group hover:bg-white/[0.02] transition-colors duration-300"
              >
                {/* Number */}
                <div className="stat-number text-4xl sm:text-5xl xl:text-6xl font-bold text-gold font-mono mb-2">
                  {inView ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2200} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <div className="text-white font-semibold text-sm sm:text-base mb-1">{stat.label}</div>
                <div className="text-white/35 text-xs uppercase tracking-wider">{stat.sublabel}</div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
