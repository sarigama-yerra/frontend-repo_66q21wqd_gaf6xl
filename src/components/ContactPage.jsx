import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-28 mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-2 text-zinc-400">We typically respond within one business day.</p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-zinc-300">Name</label>
              <input required className="mt-1 w-full rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            </div>
            <div>
              <label className="text-sm text-zinc-300">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-zinc-300">Message</label>
            <textarea required rows="5" className="mt-1 w-full rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500/40" />
          </div>
          <button className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-medium">Send message</button>
        </form>

        <AnimatePresence>
          {sent && (
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="fixed bottom-6 right-6 rounded-xl bg-white text-zinc-900 px-4 py-3 shadow-lg">
              Message sent — thanks!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
