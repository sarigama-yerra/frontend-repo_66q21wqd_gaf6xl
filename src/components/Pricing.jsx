import React from 'react'
import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', blurb: 'For small stores' },
  { name: 'Standard', blurb: 'Most popular' },
  { name: 'Pro', blurb: 'Multi-terminal, advanced features' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent plans</h2>
          <p className="mt-3 text-zinc-400">Choose the plan that fits your retail setup. Pricing coming soon.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:-translate-y-1 transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition"/>
              <div className="relative">
                <div className="text-white font-medium text-lg">{p.name}</div>
                <div className="text-zinc-400 text-sm">{p.blurb}</div>
                <div className="mt-6">
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>Unlimited checkouts</li>
                    <li>GHL sync</li>
                    <li>Stripe payments</li>
                  </ul>
                </div>
                <button className="mt-6 w-full rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm py-2.5 border border-white/10 transition">Select</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
