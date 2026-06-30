'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CARDS = [
  {
    title: 'Become an Exhibitor',
    subtitle: 'Showcase to 3,700+ qualified buyers',
    description:
      'Find out more about the benefits of exhibiting and how your company can be part of EMWA 2027 — Nigeria\'s foremost industrial trade platform.',
    cta: 'Book Your Stand',
    href: '/exhibitors',
    image: 'https://emwestafrica.com/wp-content/uploads/2023/07/2WEBSITE-PICTURE-SIZE-800x567.jpg',
    accent: '#F7941D',
    accentClass: 'from-gold/30 to-gold/5',
    borderClass: 'hover:border-gold/40',
    ctaClass: 'bg-gold hover:bg-gold-light text-deep-navy',
  },
  {
    title: 'Become a Visitor',
    subtitle: 'Free professional registration',
    description:
      'Discover innovative manufacturing solutions, network with 3,700+ industry professionals, and attend free knowledge sessions with Africa\'s top industry leaders.',
    cta: 'Register Free Pass',
    href: '/visitors',
    image: 'https://emwestafrica.com/wp-content/uploads/2023/07/4WEBSITE-PICTURE-SIZE-800x567.jpg',
    accent: '#1E3A8A',
    accentClass: 'from-royal/30 to-royal/5',
    borderClass: 'hover:border-royal/40',
    ctaClass: 'bg-royal hover:bg-royal/80 text-white',
  },
  {
    title: 'Become a Sponsor',
    subtitle: 'Exclusive sponsorship packages',
    description:
      'Place your brand at the forefront of Africa\'s industrial sector. Customised packages designed to maximise your ROI and brand visibility with key decision makers.',
    cta: 'Enquire About Sponsorship',
    href: '/sponsors',
    image: 'https://emwestafrica.com/wp-content/uploads/2023/07/3WEBSITE-PICTURE-SIZE-800x567.jpg',
    accent: '#E31E24',
    accentClass: 'from-crimson/30 to-crimson/5',
    borderClass: 'hover:border-crimson/40',
    ctaClass: 'bg-crimson hover:bg-crimson-dark text-white',
  },
];

function Card3D({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 10);
    setRotateY(x * 10);
  };

  const onMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={onMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`relative rounded-3xl border border-white/10 ${card.borderClass} overflow-hidden cursor-pointer transition-[border-color,box-shadow] duration-300 h-full`}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? `0 30px 80px rgba(0,0,0,0.4), 0 0 60px ${card.accent}22` : '0 8px 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Card image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${card.accentClass}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent" />
        </div>

        {/* Card body */}
        <div className="relative bg-navy/60 backdrop-blur-sm p-8">
          {/* Glow line at top */}
          <div className="absolute top-0 left-8 right-8 h-px" style={{ background: `linear-gradient(90deg, transparent, ${card.accent}60, transparent)` }} />

          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: card.accent }}>
            {card.subtitle}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed mb-8">{card.description}</p>

          <Link
            href={card.href}
            className={`btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 ${card.ctaClass}`}
          >
            {card.cta}
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Specular highlight */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at ${50 + rotateY * 2}% ${50 - rotateX * 2}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function FeatureCards() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Your Path to EMWA 2027</span>
            <span className="w-10 h-[2px] bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Choose How You <span className="text-gold-gradient bg-[length:200%_auto]">Participate</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <Card3D key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
