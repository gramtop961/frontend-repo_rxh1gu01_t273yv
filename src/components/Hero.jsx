import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 160px rgba(0,0,0,0.6)' }} />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 flex min-h-[90vh] items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs tracking-widest uppercase text-cyan-200/90">Cinematic 3D • Futuristic • Pixel Grid</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            XNWeb.gr
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Creative Digital Agency</span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
            We design modern websites, eShops, blogs, and high‑performance Google Ads campaigns with compelling copywriting — blending creativity and technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#features" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02] active:scale-[0.99]">
              <Rocket className="h-4 w-4" /> Explore Capabilities
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
