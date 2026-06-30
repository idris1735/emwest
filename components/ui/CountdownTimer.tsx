'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Pad(n: number) {
  return String(n).padStart(2, '0');
}

interface UnitProps {
  value: number;
  label: string;
}

function Unit({ value, label }: UnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass border border-white/10 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] text-center relative overflow-hidden">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <span className="font-mono text-3xl sm:text-4xl xl:text-5xl font-bold text-white tabular-nums">
          {Pad(value)}
        </span>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.2em] font-medium">{label}</span>
    </div>
  );
}

const EMPTY: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(EMPTY);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const id = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flex items-start gap-3 sm:gap-4" suppressHydrationWarning>
      <Unit value={timeLeft.days} label="Days" />
      <div className="text-gold text-3xl sm:text-4xl font-bold mt-3 sm:mt-4 leading-none select-none">:</div>
      <Unit value={timeLeft.hours} label="Hours" />
      <div className="text-gold text-3xl sm:text-4xl font-bold mt-3 sm:mt-4 leading-none select-none">:</div>
      <Unit value={timeLeft.minutes} label="Minutes" />
      <div className="text-gold text-3xl sm:text-4xl font-bold mt-3 sm:mt-4 leading-none select-none">:</div>
      <Unit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
