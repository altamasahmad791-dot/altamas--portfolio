import Reveal from '../components/Reveal'

export default function Focus() {
  return (
    <section className="focus section-pad" id="focus">
      <div className="section-wrap">
        <div className="section-kicker mono"><span>02 / CURRENT FOCUS</span><span>LEARNING IN PUBLIC</span></div>
        <div className="focus-intro"><Reveal><h2>Two paths.<br/><em>One direction.</em></h2></Reveal><p className="focus-note">Building a strong foundation in software development — from creating interfaces to thinking through problems.</p></div>
        <div className="focus-grid">
          <Reveal className="focus-item">
            <div className="focus-number mono">A / 01</div><div className="focus-symbol symbol-code">&lt;/&gt;</div>
            <h3>Full Stack<br/><em>Development</em></h3>
            <p>Learning to build modern, responsive and useful web applications. Exploring frontend and backend concepts while turning ideas into working projects.</p>
            <div className="tag-row mono"><span>FRONTEND</span><span>BACKEND</span><span>WEB APPS</span></div>
          </Reveal>
          <Reveal className="focus-item focus-item-dsa" delay={0.12}>
            <div className="focus-number mono">B / 02</div><div className="node-graphic"><i/><i/><i/><i/><i/><i/><i/></div>
            <h3>Data Structures<br/><em>& Algorithms</em></h3>
            <p>Learning DSA through Apna College. Approximately 80% of the course syllabus completed, with continued coding practice to strengthen logic and problem-solving.</p>
            <div className="progress-head mono"><span>COURSE LEARNING PROGRESS</span><strong>~80%</strong></div>
            <div className="progress-track"><span/></div>
            <div className="tag-row mono"><span>LOGIC</span><span>PROBLEM SOLVING</span></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
