import React from 'react';
import { motion } from 'framer-motion';

const words = [
  'Websites',
  'eShops',
  'Blogs',
  'Google Ads',
  'Copywriting',
  'Brand Story',
  'UX/UI',
  'Performance',
];

export default function ShowreelStrip() {
  return (
    <section className="relative bg-[#05070b] py-6 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        background: 'linear-gradient(90deg, rgba(34,211,238,0.08), rgba(139,92,246,0.08))'
      }} />
      <div className="relative z-10">
        <div className="flex whitespace-nowrap">
          {[0,1].map((r) => (
            <motion.div
              key={r}
              className="flex gap-8 pr-8"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
            >
              {words.map((w, i) => (
                <span
                  key={`${r}-${i}`}
                  className="text-sm md:text-base tracking-widest uppercase text-white/70 hover:text-white transition"
                >
                  {w}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
