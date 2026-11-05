import Reveal from '../components/Reveal'
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  return (
    <section className="section-wrap about section-pad" id="about">
      <div className="section-kicker mono"><span>01 / ABOUT</span><span>A LITTLE CONTEXT</span></div>
      <div className="about-grid">
        <Reveal className="about-heading"><p className="eyebrow">THE PERSON BEHIND THE SCREEN</p><h2>Curious by<br/>nature. <em>Builder</em><br/>by practice.</h2></Reveal>
        <Reveal className="portrait-frame" delay={0.12}>
        <img
  src="/images/altamas-portrait.png"
  alt="Portrait of Altamas wearing a dark suit and tie"
  width="1536"
  height="1536"
  style={{
    width: "100%",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
    display: "block"
  }}
/>
          <span className="portrait-caption mono">ALTAMAS / STUDENT & DEVELOPER</span>
        </Reveal>
        <Reveal className="about-text" delay={0.18}>
          <p className="lead">Hi, I'm Altamas — a second-year Bachelor's student with a growing passion for technology, programming and building digital experiences.</p>
          <p>My journey is driven by curiosity, consistency and a desire to become a skilled software developer. I'm currently focused on Full Stack Web Development and Data Structures & Algorithms.</p>
          <p>I believe in learning by building, staying open to new ideas and improving a little every day. The goal is simple: create useful things and become better at solving meaningful problems.</p>
          <a className="text-link" href="https://github.com/altamasahmad791-dot" target="_blank" rel="noreferrer">EXPLORE MY GITHUB <ArrowUpRight size={15}/></a>
        </Reveal>
      </div>
    </section>
  )
}
