import Reveal from '../components/Reveal'

export default function Journey() {
  return (
    <section className="journey section-pad" id="journey">
      <div className="section-wrap">
        <div className="section-kicker mono"><span>04 / THE JOURNEY</span><span>IN PROGRESS, BY DESIGN</span></div>
        <div className="journey-grid">
          <Reveal><h2>Not there<br/><em>yet.</em> On my<br/>way.</h2></Reveal>
          <div className="journey-content">
            <Reveal><p className="lead">I don't see learning as a checklist. It's a continuous process of trying, building, getting stuck, understanding and trying again.</p></Reveal>
            <div className="timeline">
              <Reveal className="timeline-item"><span className="timeline-dot"/><span className="mono timeline-label">NOW / YEAR 02</span><h3>Building foundations</h3><p>Studying towards my Bachelor's degree while learning Full Stack Development and DSA.</p></Reveal>
              <Reveal className="timeline-item"><span className="timeline-dot"/><span className="mono timeline-label">ONGOING</span><h3>Practice & projects</h3><p>Applying concepts through personal projects and regular problem-solving practice.</p></Reveal>
              <Reveal className="timeline-item"><span className="timeline-dot"/><span className="mono timeline-label">NEXT / THE GOAL</span><h3>Keep growing</h3><p>Become a skilled software developer, collaborate with others and work on meaningful problems.</p></Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
