import React from 'react'
import { motion } from 'framer-motion'

function DeviceFrame({ children, label }) {
  return (
    <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-3 shadow-2xl">
      <div className="rounded-[20px] overflow-hidden bg-zinc-900">
        {children}
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-xs">{label}</div>
    </div>
  )
}

export default function DevicePreview() {
  return (
    <section id="preview" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Looks great on every device</h2>
          <p className="mt-3 text-zinc-400">Tablet-first design with desktop and kiosk layouts built in.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <DeviceFrame label="Tablet">
              <div className="aspect-[4/3] w-full">
                <img src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1600&auto=format&fit=crop" alt="POS UI" className="w-full h-full object-cover" />
              </div>
            </DeviceFrame>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <DeviceFrame label="Desktop">
              <div className="aspect-[16/10] w-full">
                <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1600&auto=format&fit=crop" alt="POS UI" className="w-full h-full object-cover" />
              </div>
            </DeviceFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
