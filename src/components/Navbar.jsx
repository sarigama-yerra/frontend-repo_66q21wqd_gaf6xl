import React, { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Download, Phone, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

function useDarkMode() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setEnabled(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
  }, [enabled])

  return { enabled, setEnabled }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { enabled, setEnabled } = useDarkMode()

  const navLink = 'px-3 py-2 text-sm md:text-[15px] text-zinc-400 hover:text-white transition-colors'

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 md:px-6 py-3">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">GHL POS System</a>
            <nav className="hidden md:flex items-center gap-1">
              <a href="#features" className={navLink}>Features</a>
              <a href="#how" className={navLink}>How it works</a>
              <a href="#preview" className={navLink}>Preview</a>
              <a href="#pricing" className={navLink}>Pricing</a>
              <Link to="/contact" className={navLink}>Contact</Link>
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <button aria-label="Toggle theme" onClick={() => setEnabled(!enabled)} className="h-9 w-9 rounded-xl grid place-items-center border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition">
                {enabled ? <Sun size={16}/> : <Moon size={16}/>}
              </button>
              <a href="#install" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition">
                <Download size={16}/> Install on GoHighLevel
              </a>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden h-9 w-9 rounded-xl grid place-items-center border border-white/10 bg-white/5 text-zinc-300">
              {open ? <X size={18}/> : <Menu size={18}/>}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              <a href="#features" className="block text-zinc-300" onClick={() => setOpen(false)}>Features</a>
              <a href="#how" className="block text-zinc-300" onClick={() => setOpen(false)}>How it works</a>
              <a href="#preview" className="block text-zinc-300" onClick={() => setOpen(false)}>Preview</a>
              <a href="#pricing" className="block text-zinc-300" onClick={() => setOpen(false)}>Pricing</a>
              <Link to="/contact" className="block text-zinc-300" onClick={() => setOpen(false)}>Contact</Link>
              <div className="flex items-center gap-2 pt-2">
                <button onClick={() => setEnabled(!enabled)} className="flex-1 h-10 rounded-xl border border-white/10 bg-white/5 text-zinc-300 flex items-center justify-center gap-2">
                  {enabled ? <Sun size={16}/> : <Moon size={16}/>}
                  Theme
                </button>
                <a href="#install" className="flex-1 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white grid place-items-center">Install</a>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-xs pt-2">
                <div className="inline-flex items-center gap-1"><Phone size={12}/> Support</div>
                <div className="inline-flex items-center gap-1"><Shield size={12}/> Secure</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
