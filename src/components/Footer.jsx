import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/10 pt-8">
          <div className="text-zinc-500 text-sm">This is a third-party POS integration for GoHighLevel.</div>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} GHL POS System</div>
      </div>
    </footer>
  )
}
