'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mic } from 'lucide-react';
import { SPEAKERS } from '@/lib/data';

function SpeakerCard({ speaker, index }: { speaker: typeof SPEAKERS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-52 sm:w-60"
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2">
        {/* Photo */}
        <div className="relative h-64 bg-navy overflow-hidden">
          <Image
            src={speaker.photo}
            alt={speaker.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="240px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/20 to-transparent" />

          {/* Type badge */}
          {speaker.type === 'KEYNOTE' && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-gold/90 backdrop-blur-sm rounded-full">
              <Mic size={10} className="text-deep-navy" />
              <span className="text-[10px] font-bold text-deep-navy uppercase tracking-wider">Keynote</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 bg-navy/80 backdrop-blur-sm">
          <div className="text-white font-semibold text-sm leading-tight mb-1">{speaker.name}</div>
          <div className="text-gold text-xs leading-tight mb-1">{speaker.role}</div>
          <div className="text-white/40 text-xs leading-tight">{speaker.company}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SpeakersTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/30 to-deep-navy" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-gold/6 blur-[120px] pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Conference Speakers</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Voices That<br />
                <span className="text-gold-gradient bg-[length:200%_auto]">Shape Industry</span>
              </h2>
              <p className="text-white/50 text-sm mt-4 max-w-md">
                32 industry leaders took the stage at EMWA — from government commissioners to Fortune 500 technology directors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/speakers"
                className="btn-shimmer inline-flex items-center gap-2 px-6 py-3.5 glass border border-gold/25 hover:border-gold/50 text-gold font-semibold text-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-gold/5"
              >
                View All 32 Speakers
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-deep-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-deep-navy to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 overflow-x-auto pb-4 px-6 max-w-full scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SPEAKERS.map((speaker, i) => (
              <div key={speaker.name} className="snap-start">
                <SpeakerCard speaker={speaker} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Become a speaker CTA */}
        <div className="max-w-7xl mx-auto px-6 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl border border-white/8 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Want to speak at EMWA 2027?</h3>
              <p className="text-white/50 text-sm">Share your expertise with 3,700+ manufacturing professionals. Applications now open.</p>
            </div>
            <Link
              href="/speakers#become-a-speaker"
              className="btn-shimmer shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-light text-deep-navy font-bold text-sm rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Apply to Speak
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
