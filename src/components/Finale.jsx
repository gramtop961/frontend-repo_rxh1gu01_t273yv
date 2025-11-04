import React from 'react';
import { motion } from 'framer-motion';

export default function Finale() {
  return (
    <section id="cta" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 40% at 50% 50%, rgba(34,211,238,0.2) 0%, rgba(139,92,246,0.18) 40%, rgba(0,0,0,0) 70%)'
      }} />
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16 xl:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">XNWeb.gr</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-white/75"
        >
          Your Digital Growth Starts Here.
        </motion.p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base text-white/80"
          >
            <span className="block">XNWeb — Creative Websites, Powerful Results.</span>
          </motion.div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
