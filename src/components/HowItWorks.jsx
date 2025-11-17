import React from 'react'
import { motion } from 'framer-motion'
import { Download, Box, Play } from 'lucide-react'

const steps = [
  { icon: Download, title: 'Install the GHL App', desc: 'Connect using your GoHighLevel OAuth login.' },
  { icon: Box, title: 'Add Your Products', desc: 'Sync your existing GoHighLevel products instantly.' },
  { icon: Play, title: 'Start Checking Out', desc: 'Run the POS on any tablet, desktop, or mounted kiosk.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">How it works</h2>
          <p className="mt-3 text-zinc-400">Three steps and you’re ready to take payments in-store.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-cyan-300">
                <s.icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-1.5 text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
