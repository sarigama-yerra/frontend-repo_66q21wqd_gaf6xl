import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Database, WifiOff, Monitor, CheckCircle2 } from 'lucide-react'

const benefits = [
  { icon: CheckCircle2, text: 'Ultra-simple checkout' },
  { icon: Monitor, text: 'Built for retailers using GoHighLevel' },
  { icon: Database, text: 'No external databases — all inside GHL' },
  { icon: WifiOff, text: 'Offline mode (coming soon)' },
  { icon: Zap, text: 'Multi-register support' },
  { icon: ShieldCheck, text: 'Secure, fast, and reliable' },
]

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Beautifully simple. Uncompromisingly powerful.</h2>
            <p className="mt-3 text-zinc-400">Premium experience with enterprise-grade reliability and security.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div key={b.text}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-cyan-300">
                  <b.icon size={18} />
                </div>
                <div className="text-zinc-200 text-sm">{b.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
