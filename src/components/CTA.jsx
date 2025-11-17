import React from 'react'

export default function CTA() {
  return (
    <section id="install" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-cyan-500/20 blur-[80px] pointer-events-none"/>
          <h3 className="text-3xl sm:text-4xl font-semibold text-white">Bring In‑Store Checkout to GoHighLevel.</h3>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">Run a modern POS directly on your existing GHL account with beautiful hardware integrations.</p>
          <div className="mt-7 flex justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:scale-[1.01] transition">Install on GoHighLevel</a>
          </div>
        </div>
      </div>
    </section>
  )
}
