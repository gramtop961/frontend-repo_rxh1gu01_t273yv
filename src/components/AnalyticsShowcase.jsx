import React from 'react';
import { motion } from 'framer-motion';

// Lightweight faux chart: animated bars with framer-motion
function MiniGrowthChart() {
  const bars = new Array(12).fill(0).map((_, i) => 8 + Math.round(Math.sin(i / 2) * 6 + i * 1.2));
  return (
    <div className="grid grid-cols-12 items-end gap-1 h-24">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="origin-bottom rounded-sm bg-gradient-to-t from-violet-500/70 to-cyan-400/80"
          style={{ height: `${h * 3}px` }}
        />
      ))}
    </div>
  );
}

export default function AnalyticsShowcase() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#030712] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        background: 'radial-gradient(50% 40% at 50% 0%, rgba(99,102,241,0.25) 0%, rgba(0,0,0,0) 60%)'
      }} />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">eCommerce in Motion</h3>
            <p className="mt-2 text-white/70">Products float into view while your catalog stays lightning fast and conversion‑focused.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3"
                >
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-cyan-400/30 to-violet-500/30" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold">Real‑Time Growth</h3>
            <p className="mt-2 text-white/70">Transparent analytics and Google Ads performance that you can actually see.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
              <MiniGrowthChart />
              <div className="mt-4 flex items-center justify-between text-xs text-white/60">
                <span>Impressions</span>
                <span>CTR</span>
                <span>Conversions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
