import Reveal from '../components/Reveal'
import { ArrowUpRight, Instagram, Linkedin, Github, Mail } from 'lucide-react'

const socials = [
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/altamas-81b01a369/', icon: Linkedin },
  { label: 'GITHUB', href: 'https://github.com/altamasahmad791-dot', icon: Github },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/harry_exe666/', icon: Instagram },
]

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="section-wrap">
        <div className="section-kicker mono"><span>05 / CONNECT</span><span>GOOD THINGS START WITH A HELLO</span></div>
        <Reveal><p className="eyebrow">HAVE AN IDEA, A QUESTION OR JUST WANT TO CONNECT?</p><h2>Let's make<br/><em>something meaningful.</em></h2></Reveal>
        <div className="contact-bottom">
          <p>Always open to learning, collaborating and exchanging ideas with people who enjoy building things.</p>
          <div className="social-list">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><span><Icon size={16}/>{label}</span><ArrowUpRight size={17}/></a>)}</div>
        </div>
        <p className="email-note mono"><Mail size={14}/> DIRECT EMAIL CAN BE ADDED WHEN PROVIDED</p>
      </div>
    </section>
  )
}
