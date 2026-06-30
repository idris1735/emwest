'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative w-9 h-9 flex items-center justify-center rounded-xl border border-white/15 hover:border-white/30 text-white/70 hover:text-white transition-all duration-200 hover:bg-white/5"
    >
      {theme === 'dark' ? (
        <Sun size={16} className="transition-transform duration-300" />
      ) : (
        <Moon size={16} className="transition-transform duration-300" />
      )}
    </button>
  );
}
