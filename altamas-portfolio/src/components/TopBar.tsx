import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

const links = [
  ['About', '#about'], ['Focus', '#focus'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact'],
]

export default function TopBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Altamas home">ALTAMAS<span>®</span></a>
      <span className="topbar-note">PERSONAL PORTFOLIO <i>—</i> 2026</span>
      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <motion.a className="nav-connect" href="#contact" onClick={() => setOpen(false)}
          whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>LET'S TALK <ArrowUpRight size={14}/></motion.a>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X/> : <Menu/>}
      </button>
    </header>
  )
}
