import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none"/>
        <div className="absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[140px] pointer-events-none"/>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">GHL Marketplace App</span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                A Modern POS System Built for GoHighLevel
              </h1>
              <p className="mt-5 text-zinc-300 text-lg leading-relaxed max-w-2xl">
                A simple, tablet-ready in-store checkout solution that syncs with your GoHighLevel products, invoices, and payments.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#install" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:scale-[1.01] transition">
                  Install on GoHighLevel
                </a>
                <a href="#preview" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white/90 px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
                  See How It Works
                </a>
              </div>
            </motion.div>
          </div>
          <div className="relative h-[520px] lg:h-[640px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="absolute inset-0">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20"/>
          </div>
        </div>
      </div>
    </section>
  )
}
