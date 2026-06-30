'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SIDE_EVENTS } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SideEvents() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy/20" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-royal/8 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Conference &amp; Events</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              More Than an<br />
              <span className="text-gold-gradient bg-[length:200%_auto]">Exhibition</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/55 text-base leading-relaxed"
          >
            EMWA 2027 features a rich programme of side events designed to educate, inspire and connect Africa&apos;s manufacturing community.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIDE_EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(event.id)}
              onMouseLeave={() => setActive(null)}
              className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-gold/25 transition-colors duration-300 cursor-pointer"
              style={{
                background: active === event.id
                  ? 'linear-gradient(135deg, rgba(30,58,138,0.2) 0%, rgba(15,35,71,0.8) 100%)'
                  : 'rgba(15,35,71,0.4)',
                boxShadow: active === event.id
                  ? '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(247,148,29,0.08)'
                  : 'none',
              }}
            >
              {/* Gradient top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-gold/40 via-royal to-gold/20 group-hover:opacity-100 opacity-50 transition-opacity duration-300" />

              <div className="p-8">
                {/* Icon + time */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    animate={active === event.id ? { scale: 1.15, rotate: -5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="text-4xl"
                  >
                    {event.icon}
                  </motion.div>
                  <span className="text-xs text-gold/70 font-mono uppercase tracking-wider px-3 py-1.5 rounded-full glass border border-gold/15">
                    {event.time}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-200">
                  {event.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
              </div>

              {/* Bottom hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <Link
            href="/programme"
            className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 glass border border-gold/25 hover:border-gold/50 text-gold font-semibold text-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-gold/5"
          >
            View Full Programme
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
