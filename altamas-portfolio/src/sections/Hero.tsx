import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-meta mono"><span><b className="live-dot"/> OPEN TO CONNECTIONS</span><span>BA STUDENT / YEAR 02</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow">ASPIRING FULL STACK DEVELOPER <span>·</span> DSA ENTHUSIAST</p>
          <h1 className="hero-title">ALTAMAS<span className="title-dot">.</span></h1>
          <div className="hero-bottomline">
            <p className="hero-statement">Building digital experiences.<br/><em>Learning to solve bigger problems.</em></p>
            <a className="round-link" href="#about" aria-label="Scroll to about"><ArrowDown size={20}/></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract metallic sculpture">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="sculpture"><div className="sculpture-core"/><div className="sculpture-ring"/></div>
          <span className="art-index mono">FIG. 001 / CURIOSITY IN MOTION</span>
          <span className="art-cross">✳</span>
        </div>
      </div>
      <div className="hero-foot mono"><span>SCROLL TO EXPLORE <ArrowDown size={12}/></span><span>BASED IN INDIA</span><span>01 — 06</span></div>
    </section>
  )
}
