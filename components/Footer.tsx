import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { EVENT } from '@/lib/data';

const LINKS = {
  Visitors: [
    { label: 'Why Attend', href: '/visitors#why-attend' },
    { label: 'Register Free Pass', href: '/visitors#register' },
    { label: 'Hosted Buyer Programme', href: '/visitors#hosted-buyer' },
    { label: 'Visiting Rules', href: '/visitors#rules' },
  ],
  Exhibitors: [
    { label: 'Why Exhibit', href: '/exhibitors#why-exhibit' },
    { label: 'Stand Packages', href: '/exhibitors#packages' },
    { label: 'Book Your Stand', href: '/exhibitors#book' },
    { label: 'Exhibitor FAQs', href: '/exhibitors#faqs' },
  ],
  Sponsors: [
    { label: 'Why Sponsor', href: '/sponsors#why' },
    { label: 'Sponsorship Packages', href: '/sponsors#packages' },
    { label: 'Enquire Now', href: '/sponsors#enquire' },
  ],
  'Event Info': [
    { label: 'Programme', href: '/programme' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Side Events', href: '/programme#events' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-deep-navy border-t border-white/8 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-royal/8 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 py-20">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14">
                <Image src="/images/logo.jpg" alt="EMWA" fill className="object-contain" />
              </div>
              <div>
                <div className="text-white/50 text-[10px] uppercase tracking-wider leading-tight">
                  Equipment &amp; Manufacturing<br />West Africa
                </div>
              </div>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-xs">
              Nigeria&apos;s premier international trade exhibition for industrial products, manufacturing equipment &amp; machinery.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`mailto:${EVENT.contact.general.email}`}
                className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors duration-200 group"
              >
                <Mail size={14} className="text-gold shrink-0" />
                {EVENT.contact.general.email}
              </a>
              <a
                href={`tel:${EVENT.contact.general.phone}`}
                className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={14} className="text-gold shrink-0" />
                {EVENT.contact.general.phone}
              </a>
              <div className="flex items-start gap-3 text-white/45 text-sm">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>{EVENT.address}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all duration-200" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all duration-200" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all duration-200" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-gold/40 hover:bg-gold/10 transition-all duration-200" aria-label="YouTube">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
          <div className="text-white/30 text-xs">
            © 2027 EMWA — Equipment &amp; Manufacturing West Africa. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-white/30 text-xs">
            <span>Organised by</span>
            <span className="text-white/50 font-medium">{EVENT.organizer}</span>
            <span>·</span>
            <a href={`mailto:${EVENT.contact.privacy.email}`} className="hover:text-white/60 transition-colors duration-200">Privacy Policy</a>
            <span>·</span>
            <Link href="/contact" className="hover:text-white/60 transition-colors duration-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
