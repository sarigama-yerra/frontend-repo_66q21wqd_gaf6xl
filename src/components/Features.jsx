import React from 'react'
import { motion } from 'framer-motion'
import { ScanBarcode, CreditCard, Banknote, FileText, Gift, ReceiptText } from 'lucide-react'

const items = [
  { icon: ScanBarcode, title: 'Barcode Scanning', desc: 'Scan products instantly using USB or Bluetooth barcode scanners.' },
  { icon: CreditCard, title: 'Stripe Integration', desc: 'Charge cards through Stripe or connect a physical Stripe reader.' },
  { icon: Banknote, title: 'Cash / Check Support', desc: 'Track all payment types seamlessly inside GoHighLevel.' },
  { icon: FileText, title: 'Instant Invoice Sync', desc: 'Creates invoices automatically in your sub-account as you check out.' },
  { icon: Gift, title: 'Rewards Lookup', desc: 'Pull up customer profiles, rewards, and eligibility effortlessly.' },
  { icon: ReceiptText, title: 'Receipts & Drawer Control', desc: 'Print receipts and trigger drawer open with supported hardware.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need for in‑store checkout</h2>
          <p className="mt-3 text-zinc-400">Designed for speed, reliability, and total alignment with your GoHighLevel account.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 to-blue-600/10"/>
              <div className="relative p-6">
                <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-cyan-300 shadow-inner">
                  <it.icon size={18} />
                </div>
                <h3 className="mt-4 text-white font-medium text-lg">{it.title}</h3>
                <p className="mt-1.5 text-zinc-400 text-sm leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
