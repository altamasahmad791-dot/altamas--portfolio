import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TopBar from './components/TopBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Focus from './sections/Focus'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import { ArrowUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9 })
    lenis.on('scroll', ScrollTrigger.update)
    let rafId = 0
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(rafId); lenis.destroy() }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <TopBar/>
      <main id="main">
        <Hero/>
        <div className="ticker" aria-label="Learning continuously, building consistently"><div className="ticker-track">LEARNING CONTINUOUSLY <span>✳</span> BUILDING CONSISTENTLY <span>✳</span> GROWING EVERY DAY <span>✳</span> LEARNING CONTINUOUSLY <span>✳</span> BUILDING CONSISTENTLY <span>✳</span></div></div>
        <About/>
        <Focus/>
        <Projects/>
        <Journey/>
        <Contact/>
      </main>
      <footer className="footer section-wrap">
        <a href="#top" className="footer-logo">ALTAMAS<span>®</span></a>
        <p className="mono">LEARNING CONTINUOUSLY. BUILDING CONSISTENTLY.</p>
        <a href="#top" className="back-top mono">BACK TO TOP <ArrowUp size={14}/></a>
        <span className="footer-copy mono">© 2026 ALTAMAS</span>
      </footer>
    </>
  )
}
