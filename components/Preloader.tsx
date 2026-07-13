'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Wait for LCP to settle, then fade out
    const timer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#060D1F]"
        >
          {/* Background pulse */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute w-48 h-48 rounded-full bg-gold/10 blur-3xl"
          />

          {/* Logo + text */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-24 h-24 sm:w-28 sm:h-28"
            >
              <Image
                src="/images/logo.jpg"
                alt="EMWA"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-center"
            >
              <div className="text-white/30 text-[10px] uppercase tracking-[0.35em] mt-1">
                Equipment &amp; Manufacturing West Africa
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-40 h-[2px] bg-gold/40 rounded-full overflow-hidden origin-left"
            >
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
                className="w-1/2 h-full bg-gold rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
