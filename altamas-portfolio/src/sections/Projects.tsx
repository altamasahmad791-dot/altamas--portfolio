import Reveal from '../components/Reveal'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  { number: '01', name: 'JSS Event Hub', type: 'EVENT-FOCUSED WEB APPLICATION', description: 'An event-focused web application built as part of my hands-on learning journey.', url: 'https://github.com/altamasahmad791-dot/JSS-Event-Hub', art: 'event-art' },
  { number: '02', name: 'Baithak Café', type: 'RESPONSIVE CAFÉ WEBSITE', description: 'A responsive café website exploring layout, visual presentation and practical web design.', url: 'https://github.com/altamasahmad791-dot/Baithak-cafe', art: 'cafe-art' },
]

export default function Projects() {
  return (
    <section className="section-wrap section-pad projects" id="projects">
      <div className="section-kicker mono"><span>03 / SELECTED PROJECTS</span><span>LEARNING THROUGH MAKING</span></div>
      <div className="projects-heading"><Reveal><h2>Small steps.<br/><em>Real things.</em></h2></Reveal><p>Two projects from my journey so far. More experiments and ideas are always in progress.</p></div>
      <div className="project-list">
        {projects.map((project) => <Reveal key={project.number} className="project-row">
          <div className={`project-art ${project.art}`}><span className="art-top mono">ALTAMAS® / PROJECT {project.number}</span><div className="project-art-type">{project.number === '01' ? 'EVENTS<br/>CONNECT.' : 'A PLACE<br/>TO PAUSE.'}</div><span className="art-bottom mono">{project.type}</span></div>
          <div className="project-info"><div className="project-index mono">0{project.number} — PROJECT</div><h3>{project.name}</h3><p>{project.description}</p><p className="project-tech mono">TECH STACK DETAILS TO BE ADDED</p><a className="project-link" href={project.url} target="_blank" rel="noreferrer"><Github size={16}/> VIEW ON GITHUB <ArrowUpRight size={16}/></a></div>
        </Reveal>)}
      </div>
      <p className="project-footnote mono">LIVE DEMOS & DETAILED TECHNOLOGY LISTS CAN BE ADDED WHEN AVAILABLE.</p>
    </section>
  )
}
