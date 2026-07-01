'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Clock, Calendar } from 'lucide-react';
import { SIDE_EVENTS, EVENT } from '@/lib/data';

const CONFERENCE_TRACKS = [
  {
    day: 'Day 1',
    date: '25 May 2027',
    time: '10:00 AM – 5:00 PM',
    sessions: [
      { time: '10:00', title: 'Opening Ceremony & Goodwill Messages', type: 'plenary' },
      { time: '11:00', title: 'Keynote Address: Industrialisation & Innovation in Nigeria', type: 'keynote' },
      { time: '12:00', title: 'Panel: Manufacturing as the Engine of Economic Growth', type: 'panel' },
      { time: '13:00', title: 'Lunch Break & Exhibition Floor Networking', type: 'break' },
      { time: '14:00', title: 'Workshop: Industry 4.0 Applications for African Manufacturers', type: 'workshop' },
      { time: '15:00', title: 'Startup Zone Pitches & Presentations', type: 'startup' },
      { time: '16:00', title: 'B2B Networking & Business Matching Sessions', type: 'networking' },
    ],
  },
  {
    day: 'Day 2',
    date: '26 May 2027',
    time: '10:00 AM – 5:00 PM',
    sessions: [
      { time: '10:00', title: 'Women in Manufacturing Forum', type: 'plenary' },
      { time: '11:00', title: 'Session: Energy Solutions & Power Reliability', type: 'session' },
      { time: '12:00', title: 'Panel: Supply Chain Resilience in West Africa', type: 'panel' },
      { time: '13:00', title: 'Lunch Break & Exhibition Floor Networking', type: 'break' },
      { time: '14:00', title: 'Workshop: Automation — Practical Steps for Nigerian SMEs', type: 'workshop' },
      { time: '15:00', title: 'Speaker: Digital Transformation in Manufacturing', type: 'session' },
      { time: '16:00', title: 'B2B Meetings & Hosted Buyer Programme Sessions', type: 'networking' },
    ],
  },
  {
    day: 'Day 3',
    date: '27 May 2027',
    time: '10:00 AM – 3:30 PM',
    sessions: [
      { time: '10:00', title: 'Roundtable: Government Policy & Industrial Development', type: 'plenary' },
      { time: '11:00', title: 'Panel: Financing Manufacturing Growth — BOI & Partners', type: 'panel' },
      { time: '12:00', title: 'Case Studies: Success Stories from Nigerian Manufacturers', type: 'session' },
      { time: '13:00', title: 'Lunch Break', type: 'break' },
      { time: '14:00', title: 'EMWA Awards & Presentations Ceremony', type: 'awards' },
      { time: '15:00', title: 'Closing Remarks & Networking', type: 'networking' },
    ],
  },
];

const SESSION_STYLES: Record<string, string> = {
  plenary: 'bg-royal/20 border-royal/30 text-royal',
  keynote: 'bg-gold/15 border-gold/30 text-gold',
  panel: 'bg-crimson/10 border-crimson/25 text-crimson',
  break: 'bg-white/5 border-white/10 text-white/40',
  workshop: 'bg-green-500/10 border-green-500/25 text-green-400',
  startup: 'bg-purple-500/10 border-purple-500/25 text-purple-400',
  networking: 'bg-teal-500/10 border-teal-500/25 text-teal-400',
  session: 'bg-white/8 border-white/12 text-white/70',
  awards: 'bg-gold/20 border-gold/35 text-gold',
};

export default function ProgrammePage() {
  const eventsRef = useRef<HTMLDivElement>(null);
  const agendaRef = useRef<HTMLDivElement>(null);
  const eventsInView = useInView(eventsRef, { once: true, margin: '-80px' });
  const agendaInView = useInView(agendaRef, { once: true, margin: '-80px' });

  return (
    <div className="page-content">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-deep-navy" />
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute top-20 right-1/3 w-[500px] h-[500px] rounded-full bg-gold/7 blur-[130px] pointer-events-none animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">25–27 May 2027 · Lagos</span>
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 max-w-3xl">
              <span className="text-white">Event</span><br />
              <span className="text-gold-gradient bg-[length:200%_auto]">Programme</span><br />
              <span className="text-white">&amp; Agenda.</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl leading-relaxed mb-10">
              Three days of world-class conference content, side events, networking sessions and awards across Landmark Centre, Lagos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#agenda"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-white font-bold text-sm rounded-2xl transition-all duration-300 hover:scale-105"
              >
                View Full Agenda <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 glass border border-white/15 text-white font-semibold text-sm rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <Download size={15} />
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Side Events */}
      <section ref={eventsRef} id="events" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={eventsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Side Events</span>
              <span className="w-10 h-[2px] bg-gold" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Beyond the <span className="text-gold-gradient bg-[length:200%_auto]">Exhibition Floor</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIDE_EVENTS.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group glass rounded-3xl border border-white/8 hover:border-gold/20 p-8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{event.icon}</div>
                <div className="text-gold text-xs font-mono uppercase tracking-widest mb-3">{event.time}</div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-gold transition-colors duration-200">{event.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section ref={agendaRef} id="agenda" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-navy/20 to-deep-navy" />
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={agendaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Conference <span className="text-gold-gradient bg-[length:200%_auto]">Agenda</span>
            </h2>
            <p className="text-white/50 text-sm">Subject to change. Full agenda will be announced closer to the event.</p>
          </motion.div>

          <div className="space-y-10">
            {CONFERENCE_TRACKS.map((track, ti) => (
              <motion.div
                key={track.day}
                initial={{ opacity: 0, y: 40 }}
                animate={agendaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: ti * 0.15 }}
                className="glass rounded-3xl border border-white/8 overflow-hidden"
              >
                {/* Day header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-white/8 bg-white/[0.02]">
                  <div>
                    <div className="text-gold font-bold text-xl">{track.day}</div>
                    <div className="text-white/50 text-sm flex items-center gap-2 mt-1">
                      <Calendar size={12} />
                      {track.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-sm">
                    <Clock size={14} />
                    {track.time}
                  </div>
                </div>

                {/* Sessions */}
                <div className="divide-y divide-white/5">
                  {track.sessions.map((session) => (
                    <div key={session.time} className="flex items-start gap-6 px-8 py-5 hover:bg-white/[0.02] transition-colors duration-200">
                      <div className="text-white/40 text-sm font-mono shrink-0 w-12 pt-0.5">{session.time}</div>
                      <div className="flex-1">
                        <span className="text-white/80 text-sm leading-relaxed">{session.title}</span>
                      </div>
                      <span className={`shrink-0 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full border ${SESSION_STYLES[session.type] || SESSION_STYLES.session}`}>
                        {session.type}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={agendaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/30 text-xs text-center mt-10"
          >
            * Programme subject to change. Conference sessions are free for all registered visitors and exhibitors.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
