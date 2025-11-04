import React from 'react';
import { Monitor, ShoppingCart, FileText, BarChart3, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Monitor,
    title: 'Modern Websites',
    desc: 'Lightning‑fast, responsive experiences crafted to convert and delight.',
    accent: 'from-cyan-400/30 to-cyan-600/20',
  },
  {
    icon: ShoppingCart,
    title: 'eShops & eCommerce',
    desc: 'Scalable storefronts with seamless checkout and optimized product pages.',
    accent: 'from-violet-400/30 to-violet-600/20',
  },
  {
    icon: FileText,
    title: 'Blogs & Content',
    desc: 'Readable layouts that unfold like digital paper with elegant typography.',
    accent: 'from-blue-400/30 to-blue-600/20',
  },
  {
    icon: BarChart3,
    title: 'Google Ads',
    desc: 'Real‑time insights, growth dashboards, and measurable ROI.',
    accent: 'from-cyan-400/30 to-violet-600/20',
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    desc: 'On‑brand messaging and sharp microcopy that sells your story.',
    accent: 'from-fuchsia-400/30 to-violet-600/20',
  },
];

export default function FeatureCinematics() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Creativity × Technology
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Built for Growth</span>
          </h2>
          <p className="mt-4 text-white/70">A cinematic showcase of what we deliver for ambitious brands.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} blur-3xl`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <f.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>

                {/* Stylized floating screen */}
                <div className="mt-6">
                  <motion.div
                    className="relative h-28 w-full rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 shadow-2xl"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  >
                    <div className="absolute inset-0 rounded-xl opacity-30" style={{
                      background: 'radial-gradient(80% 120% at 20% 0%, rgba(34,211,238,0.6) 0%, rgba(99,102,241,0.3) 50%, rgba(0,0,0,0) 80%)'
                    }} />
                    <div className="absolute inset-0 p-3 flex items-end gap-2">
                      <span className="h-1.5 w-16 rounded bg-cyan-300/80" />
                      <span className="h-1.5 w-10 rounded bg-violet-300/70" />
                      <span className="h-1.5 w-8 rounded bg-blue-300/60" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
