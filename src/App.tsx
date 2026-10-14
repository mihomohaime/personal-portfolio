import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Utensils,
  ChartNoAxesCombined,
  FileText,
  MapPin,
} from 'lucide-react'

const profile = {
  name: 'Mihailo Radovic',
  initials: 'MR',
  headline: 'Computer Science student at UC Santa Barbara',
  intro:
    'I build practical software projects that turn data and ideas into useful tools. I’m especially interested in software engineering, data, and product-minded development.',
  email: 'mihailoradovic@ucsb.edu',
  github: 'https://github.com/mihomohaime',
  linkedin: 'https://www.linkedin.com/in/mihailo-radovic/',
  resume: '/resume.pdf',
}

const projects = [
  {
    name: 'GauchoGrub',
    category: 'Food · Data · Web',
    status: 'In progress',
    statusType: 'progress',
    description:
      'A dining-hall meal discovery concept that uses UCSB menu nutrition data to help students explore meals and get personalized recommendations.',
    details: [
      'Collected and organized dining-hall menu and nutrition information.',
      'Built a Flask-backed web experience with a Figma-designed frontend.',
      'Explored Gemini API integration for personalized meal recommendations.',
    ],
    technologies: ['Python', 'Flask', 'Gemini API', 'Web scraping'],
    icon: Utensils,
    github: 'https://github.com/mihomohaime/GauchoGrub',
    demo: '',
    visual: 'gaucho',
  },
  {
    name: 'FantasyCalc',
    category: 'Python · Sports analytics',
    status: 'Prototype',
    statusType: 'prototype',
    description:
      'A fantasy football trade analyzer that compares player values to help evaluate potential trades.',
    details: [
      'Integrated player valuation data from the FantasyCalc API.',
      'Built a multi-screen desktop interface with Tkinter.',
      'Used RapidFuzz to make player-name matching more forgiving.',
    ],
    technologies: ['Python', 'Tkinter', 'REST API', 'RapidFuzz'],
    icon: ChartNoAxesCombined,
    github: 'https://github.com/me50/mihomohaime/blob/cs50/problems/2022/python/project/test_project.py',
    demo: '',
    visual: 'fantasy',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Back to top">
          {profile.name}<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building things<br />with <span>code.</span></h1>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore projects <ArrowDownRight size={17} /></a>
              <a className="button button-light" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Santa Barbara, CA</span>
              <span><Code2 size={15} /> {profile.headline}</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative abstract code illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card">
              <div className="art-card-top"><span /><span /><span /><small>ideas.ts</small></div>
              <div className="code-lines">
                <div><i>01</i><span className="code-purple">const</span> <span className="code-green">ideas</span> = [</div>
                <div><i>02</i><span className="indent code-orange">'build useful things'</span>,</div>
                <div><i>03</i><span className="indent code-orange">'learn by shipping'</span>,</div>
                <div><i>04</i><span className="indent code-orange">'stay curious'</span></div>
                <div><i>05</i>]</div>
                <div className="code-spacer" />
                <div><i>06</i><span className="code-purple">export default</span> ideas</div>
              </div>
              <div className="art-footer"><span className="tiny-pulse" /> currently building</div>
            </div>
            <div className="floating-chip chip-top">{"{ }"} <span>creative problem solving</span></div>
            <div className="floating-chip chip-bottom"><Code2 size={16} /> <span>learn · build · iterate</span></div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <div className="eyebrow">SELECTED WORK</div>
              <h2>Projects<span>.</span></h2>
            </div>
            <p>A few things I’ve built, explored, and am continuing to improve.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon
              return (
                <article className={`project-card ${project.visual}`} key={project.name}>
                  <div className="project-visual">
                    <div className="project-visual-top">
                      <span className="project-index">0{index + 1} / PROJECT</span>
                      <span className={`project-status ${project.statusType}`}>{project.status}</span>
                    </div>
                    <div className="visual-center">
                      <div className="visual-icon"><ProjectIcon size={31} strokeWidth={1.5} /></div>
                      {project.visual === 'gaucho' ? (
                        <div className="mini-menu">
                          <div className="mini-menu-line wide" />
                          <div className="mini-menu-line" />
                          <div className="mini-menu-pill">meal ideas</div>
                        </div>
                      ) : (
                        <div className="mini-chart">
                          <span style={{ height: '36%' }} /><span style={{ height: '58%' }} /><span style={{ height: '44%' }} /><span style={{ height: '82%' }} /><span style={{ height: '68%' }} />
                        </div>
                      )}
                    </div>
                    <div className="visual-caption">{project.category}</div>
                  </div>
                  <div className="project-content">
                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <span className="project-arrow"><ArrowUpRight size={18} /></span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-details">
                      {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                    <div className="tag-list">
                      {project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>
                      ) : (
                        <span className="no-demo">Demo not available yet</span>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="project-note">Project statuses reflect the current state of each project. Links marked with placeholders need to be updated before publishing.</p>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-mark"><span>{profile.initials}</span><div className="about-mark-ring" /></div>
          <div className="about-copy">
            <div className="eyebrow">A LITTLE ABOUT ME</div>
            <h2>Curious by nature.<br /><span>Builder by practice.</span></h2>
            <p>I’m a Computer Science student at UC Santa Barbara who enjoys solving problems, learning new tools, and working with people to turn an idea into something tangible.</p>
            <p>Outside of coursework, I’ve explored web development, API integrations, data-driven tools, and user-facing interfaces. I’m looking for opportunities to keep growing as an engineer and contribute to useful products.</p>
            <div className="skill-row">
              <span>Python</span><span>C++</span><span>TypeScript</span><span>React</span><span>Flask</span><span>Git</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div>
              <div className="eyebrow">WHAT'S NEXT?</div>
              <h2>Have something<br />in mind<span>?</span></h2>
              <p>I’m always happy to connect about software, data, collaboration, or new opportunities.</p>
              <a className="button button-dark" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={19} /></span><span><strong>GitHub</strong><small>Code & projects</small></span><ArrowUpRight size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={19} /></span><span><strong>LinkedIn</strong><small>Professional profile</small></span><ArrowUpRight size={16} /></a>
              <a href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={19} /></span><span><strong>Email</strong><small>{profile.email}</small></span><ArrowUpRight size={16} /></a>
              <a href={profile.resume}><span className="contact-icon"><FileText size={19} /></span><span><strong>Resume</strong><small>PDF download</small></span><ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">{profile.name}<span>.</span></a>
        <span>Designed & built with care.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
