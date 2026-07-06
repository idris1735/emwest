'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GALLERY_PHOTOS = [
  { src: '/images/gallery/EMWA 2023-1.JPG', alt: 'EMWA 2023 Exhibition Floor', span: 'lg' },
  { src: '/images/gallery/EMWA-7701.JPG', alt: 'Exhibition hall overview', span: 'lg' },
  { src: '/images/gallery/EMWA-7155.JPG', alt: 'Visitors at EMWA booths', span: 'sm' },
  { src: '/images/gallery/EMWA 2023-3716.JPG', alt: 'Product demonstrations', span: 'sm' },
  { src: '/images/gallery/EMWA-7192.JPG', alt: 'Exhibition crowd', span: 'sm' },
  { src: '/images/gallery/EMWA 2023-3804.JPG', alt: 'Industry networking', span: 'sm' },
  { src: '/images/gallery/EMWA-7762.JPG', alt: 'Booth interactions', span: 'lg' },
  { src: '/images/gallery/EMWA-7738.JPG', alt: 'Manufacturing displays', span: 'sm' },
  { src: '/images/gallery/EMWA-7156.JPG', alt: 'Conference attendees', span: 'sm' },
  { src: '/images/gallery/EMWA-7621.JPG', alt: 'Exhibition stands', span: 'sm' },
  { src: '/images/gallery/EMWA-7518.JPG', alt: 'Trade show floor', span: 'lg' },
  { src: '/images/gallery/EMWA-7236.JPG', alt: 'Industry professionals', span: 'sm' },
  { src: '/images/gallery/EMWA-7538.JPG', alt: 'Manufacturing technology', span: 'sm' },
  { src: '/images/gallery/EMWA-7764.JPG', alt: 'Exhibition networking', span: 'sm' },
  { src: '/images/gallery/EMWA 2023-2.JPG', alt: 'EMWA event highlights', span: 'lg' },
  { src: '/images/gallery/PHOTO-2023-06-05-03-22-49.jpg', alt: 'EMWA moments', span: 'sm' },
];

export default function GalleryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = () => setLightbox((p) => (p! + 1) % GALLERY_PHOTOS.length);
  const goPrev = () => setLightbox((p) => (p! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep-navy" />
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[130px] pointer-events-none animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">EMWA 2023 Highlights</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
              <span className="text-white">Photo</span>{' '}
              <span className="text-[#FBB040]">Gallery</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed">
              Relive the energy of EMWA 2023 — Africa&apos;s premier industrial manufacturing exhibition. 
              Over 3,700 buyers, 47+ global brands, and three days of innovation at Landmark Centre, Lagos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/8 hover:border-gold/30 transition-all duration-300">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium">{photo.alt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>

            {/* Prev / Next */}
            <button
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-colors"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-colors"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightbox + 1} / {GALLERY_PHOTOS.length}
            </div>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_PHOTOS[lightbox].src}
                alt={GALLERY_PHOTOS[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
