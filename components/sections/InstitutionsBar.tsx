'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { INSTITUTIONS } from '@/lib/data';

export default function InstitutionsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(247,148,29,0.25), transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(247,148,29,0.25), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white/35 text-xs uppercase tracking-[0.4em] font-medium mb-12"
        >
          Supporting Institutions
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
          {INSTITUTIONS.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col items-center gap-3"
              title={inst.fullName}
            >
              <div className="relative w-28 h-20 sm:w-36 sm:h-24">
                <Image
                  src={inst.logo}
                  alt={inst.fullName}
                  fill
                  className="object-contain filter grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                  sizes="144px"
                />
              </div>
              <span className="text-white/40 text-[10px] uppercase tracking-wider font-semibold group-hover:text-white/65 transition-colors duration-200">
                {inst.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
