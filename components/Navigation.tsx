'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  {
    label: 'Visitors',
    href: '/visitors',
    children: [
      { label: 'Why Attend', href: '/visitors#why-attend' },
      { label: 'Register Free Pass', href: '/visitors#register' },
      { label: 'Hosted Buyer Programme', href: '/visitors#hosted-buyer' },
    ],
  },
  {
    label: 'Exhibitors',
    href: '/exhibitors',
    children: [
      { label: 'Why Exhibit', href: '/exhibitors#why-exhibit' },
      { label: 'Stand Packages', href: '/exhibitors#packages' },
      { label: 'Book Your Stand', href: '/exhibitors#book' },
    ],
  },
  {
    label: 'Sponsors',
    href: '/sponsors',
    children: [
      { label: 'Why Sponsor', href: '/sponsors#why' },
      { label: 'Packages', href: '/sponsors#packages' },
      { label: 'Enquire Now', href: '/sponsors#enquire' },
    ],
  },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Programme', href: '/programme' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-dark shadow-2xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image src="/images/logo.jpg" alt="EMWA Logo" fill className="object-contain" />
          </div>
          <span className="text-[#F5F5F5] font-extrabold text-base sm:text-lg tracking-tight">EMWA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <>
                    <button
                      className={clsx(
                        'flex items-center gap-1 px-4 py-2 text-sm rounded-lg hover:bg-white/5 transition-all duration-200',
                        isActive ? 'text-gold' : 'text-white/80 hover:text-white'
                      )}
                    >
                      {link.label}
                      <ChevronDown size={14} className={clsx('transition-transform duration-200', activeDropdown === link.label && 'rotate-180')} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 w-52"
                        >
                          <div className="glass-dark rounded-xl p-2 shadow-2xl border border-white/10">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={clsx(
                      'relative px-4 py-2 text-sm rounded-lg hover:bg-white/5 transition-all duration-200',
                      isActive ? 'text-gold' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                    {isActive && <span className="absolute bottom-0.5 left-4 right-4 h-px bg-gold/60 rounded-full" />}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/visitors#register"
            className="px-4 py-2 text-sm text-white/80 hover:text-white border border-white/15 hover:border-white/30 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Register Free
          </Link>
          <Link
            href="/exhibitors#book"
            className="btn-shimmer px-5 py-2.5 bg-gold hover:bg-gold-light text-deep-navy font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-gold/30"
          >
            Book a Stand
          </Link>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="flex lg:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden glass-dark border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 space-y-0.5 max-h-[70vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all active:scale-[0.98]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 space-y-0.5 mt-0.5 border-l border-white/8 ml-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/50 hover:text-white/80 hover:bg-white/5 rounded-lg transition-all active:scale-[0.98]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-5 flex flex-col gap-3 border-t border-white/8 mt-4">
                <Link
                  href="/visitors#register"
                  className="text-center px-4 py-3.5 border border-white/20 rounded-xl text-white/80 hover:text-white active:scale-95 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Register Free
                </Link>
                <Link
                  href="/exhibitors#book"
                  className="text-center px-4 py-3.5 bg-gold rounded-xl text-deep-navy font-semibold active:scale-95 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Stand
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
