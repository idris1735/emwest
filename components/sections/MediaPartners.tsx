'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { MEDIA_PARTNERS } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export default function MediaPartners() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12"
        >
          <span className="text-white/35 text-xs uppercase tracking-[0.35em] font-medium">
            Media Partners
          </span>
          <Link
            href="/contact"
            className="text-gold text-xs uppercase tracking-wider hover:text-gold-light transition-colors duration-200 flex items-center gap-1.5"
          >
            Become a Media Partner <ExternalLink size={10} />
          </Link>
        </motion.div>

        <div className="flex flex-wrap gap-5 items-center justify-center">
          {MEDIA_PARTNERS.map((partner, i) => (
            <motion.a
              key={partner.name}
              {...(partner.url !== '#' ? { href: partner.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative w-28 h-16 rounded-xl glass border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-110 overflow-hidden p-2"
              title={partner.name}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-1.5 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="112px"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
