import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Linkedin, Menu, X } from 'lucide-react';
import heroPortrait from './assets/favas-hero.jpg';
import aboutPhoto from './assets/favas-about.jpg';

const EMAIL = 'favasf133@gmail.com';

const skillGroups = [
  { name: 'Programming', number: '01', skills: ['Python', 'JavaScript', 'C'] },
  { name: 'Frontend', number: '02', skills: ['HTML', 'CSS', 'React.js', 'Bootstrap'] },
  { name: 'Backend', number: '03', skills: ['Node.js', 'Express', 'PHP', 'Laravel'] },
  { name: 'Database', number: '04', skills: ['MySQL', 'SQL'] },
  { name: 'CMS & DevOps', number: '05', skills: ['WordPress', 'Elementor', 'WP Engine', 'Git & GitHub'] },
];

const projects = [
  { number: '01', title: 'Airbnb Clone', type: 'Full-stack web application', tone: 'project-green',
    description: 'A booking experience with search, filters, listing pages and reservation flow — React on the front end, Express and MySQL behind it.',
    stack: ['React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/favasr/airbnb-clone', live: '#contact' },
  { number: '02', title: 'Spotify Clone', type: 'Product / experience', tone: 'project-violet',
    description: 'A streaming-style interface with playlists, library and playback UI, powered by a Django REST API and a relational database.',
    stack: ['React', 'Python', 'Django', 'MySQL'],
    github: 'https://github.com/favasr/spotify-clone', live: '#contact' },
  { number: '03', title: 'UAE Ministry of Culture — Web Platform', type: 'Government web platform', tone: 'project-amber',
    description: 'Custom WordPress development for a Dubai-based agency serving a government client: bespoke Elementor widgets, an artifact registry built as a custom post type, and WP Engine production hosting.',
    stack: ['WordPress', 'Elementor', 'PHP', 'WP Engine'],
    github: '#contact', live: '#contact' },
];

function Eyebrow({ children }) { return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>; }

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '#about'], ['Skills', '#skills'], ['Work', '#work'], ['Experience', '#experience']];
  return <header className="header"><a className="brand" href="#top" aria-label="Favas R home">F<span>.</span>R</a><nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={14} /></a></nav><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>;
}

function ProjectCard({ project }) {
  return <article className="project-card"><div className={`project-visual ${project.tone}`}><div className="visual-top"><span>FR / {project.number}</span><span>SELECTED WORK</span></div><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>favasr.vercel.app</span></div><div className="window-content"><div className="window-mark"><Code2 size={20} /></div><span className="window-kicker">{project.type.toUpperCase()}</span><b>{project.title}</b><span className="window-cta">View details <ArrowUpRight size={13} /></span></div></div><span className="visual-caption">CASE STUDY</span></div><div className="project-info"><div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><div className="tag-list">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github size={17} /></a><a href={project.live} aria-label={`${project.title} live demo`}><ArrowUpRight size={18} /></a></div></div></div></article>;
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  function submit(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    setStatus('Your email app is opening with your message.');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }
  return <><Header /><main id="top">
    <section className="hero section-wrap"><div className="hero-copy"><Eyebrow>FULL-STACK DEVELOPER <span className="eyebrow-dot">·</span>INDIA<span className="eyebrow-dot">·</span> CLIENTS IN DUBAI</Eyebrow><h1>Building digital<br />experiences that<br /><span className="serif-accent">matter.</span></h1><p className="hero-intro">I’m Favas — a developer who turns thoughtful ideas into useful, considered digital experiences.</p><div className="hero-actions"><a className="button button-primary" href="#work">View my work <ArrowDownRight size={17} /></a><a className="button button-quiet" href="#contact">Contact me <ArrowUpRight size={16} /></a></div><div className="hero-note"><span className="availability"><i /> OPEN TO OPPORTUNITIES</span><span>SCROLL TO EXPLORE <ArrowDown size={12} /></span></div></div><div className="hero-art" aria-label="Portrait of Favas R"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/><div className="art-frame"><img className="art-photo" src={heroPortrait} alt="Favas R, full-stack developer" /><div className="art-grid"/><div className="art-index">FIG. 01 <span>FAVAS R</span></div></div><div className="art-coord">08° 31' N<br />76° 56' E</div><div className="art-side-label">DESIGN / BUILD / REFINE</div></div><div className="hero-footnote"><span>01 — 05</span><span>INDEPENDENT DEVELOPER<br />BUILDING WITH INTENTION</span></div></section>

    <section id="about" className="about section-wrap section-block"><div className="section-heading"><Eyebrow>A LITTLE ABOUT ME</Eyebrow><span className="section-index">01 / 05</span></div><div className="about-grid"><h2>Curious by nature.<br /><span className="muted">Driven to make.</span></h2><div className="about-copy"><img className="about-photo" src={aboutPhoto} alt="Favas R" /><p className="lead">I’m a Computer Science and Engineering graduate from RIET, Thiruvananthapuram — currently building web platforms for high-profile government clients with Planet Green Solutions, a Dubai-based technology company.</p><p>I enjoy building practical web applications that feel as good to use as they are to work on. From the first sketch to the final detail, I’m drawn to solving problems with technology, shaping thoughtful interfaces, and learning how things work.</p><p>Every project is another chance to get better. I’m continuously growing my skills across full-stack development, AI, and UI/UX design.</p><a className="text-link" href="#contact">A little more about me <ArrowRight size={15} /></a></div></div></section>

    <section id="skills" className="skills section-wrap section-block"><div className="section-heading"><Eyebrow>WHAT I WORK WITH</Eyebrow><span className="section-index">02 / 05</span></div><div className="skills-intro"><h2>A toolkit built<br />for <span className="serif-accent">making.</span></h2><p>Technologies I use to bring ideas from a blank canvas to the browser — always with more to learn.</p></div><div className="skill-list">{skillGroups.map(group => <div className="skill-row" key={group.name}><div className="skill-label"><span>{group.number}</span><h3>{group.name}</h3></div><div className="skill-chips">{group.skills.map((skill, i) => <span className="skill-chip" style={{ '--delay': `${i * 35}ms` }} key={skill}>{skill}</span>)}</div><ArrowUpRight className="skill-arrow" size={16} /></div>)}</div></section>

    <section id="work" className="work section-wrap section-block"><div className="section-heading"><Eyebrow>SELECTED WORK</Eyebrow><span className="section-index">03 / 05</span></div><div className="work-heading"><h2>Made with<br /><span className="serif-accent">intention.</span></h2><p>Good work starts with a good question. Here are a few spaces for the things I’ve made.</p></div><div className="projects-grid">{projects.map(project => <ProjectCard project={project} key={project.number} />)}</div></section>

    <section className="education section-wrap section-block"><div className="section-heading"><Eyebrow>THE FOUNDATION</Eyebrow><span className="section-index">04 / 05</span></div><div className="education-card"><span className="education-number">01</span><div><span className="education-kicker">EDUCATION</span><h2>B.Tech in Computer Science<br className="desktop-break" /> and Engineering</h2><p>RIET <span>·</span> Thiruvananthapuram</p></div><div className="education-mark">CSE<span> / 01</span></div></div></section>

    <section id="experience" className="experience section-wrap section-block"><div className="section-heading"><Eyebrow>EXPERIENCE</Eyebrow><span className="section-index">05 / 05</span></div><div className="experience-grid"><h2>Building for<br /><span className="muted">real clients.</span></h2><div className="experience-card"><span className="experience-badge">PLANET GREEN SOLUTIONS · DUBAI-BASED</span><h3>Full-Stack Developer</h3><p>I develop and maintain production web platforms for high-profile government clients, including the UAE Ministry of Culture (MOC). My work spans custom WordPress and Elementor development, Laravel applications, and hosting environments on WP Engine.</p><div className="experience-lines"><span>UAE MINISTRY OF CULTURE — WORDPRESS / ELEMENTOR / WP ENGINE</span><span>ZOHOFITECH — PHP / LARAVEL / WORDPRESS / MYSQL</span><span>CUSTOM WIDGETS · CPT ARCHITECTURES · GOVERNMENT-GRADE CONTENT WORKFLOWS</span></div><a className="text-link" href="#contact">Let’s build what’s next <ArrowRight size={15} /></a></div></div></section>

    <section id="contact" className="contact section-wrap"><div className="contact-glow"/><div className="section-heading"><Eyebrow>HAVE SOMETHING IN MIND?</Eyebrow><span className="section-index">LET’S CONNECT</span></div><div className="contact-grid"><div className="contact-copy"><h2>Let’s make<br />something <span className="serif-accent">matter.</span></h2><p>Have an opportunity, an interesting idea, or just want to say hello? My inbox is open.</p><a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight size={16} /></a><div className="social-links"><a href="https://www.linkedin.com/in/favas-r/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a><a href="https://github.com/favasr" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a></div></div><form className="contact-form" onSubmit={submit}><label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I call you?" /></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Your message<textarea required rows="3" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about it…" /></label><button className="button button-primary form-submit" type="submit">Send a message <ArrowUpRight size={16} /></button><span className="form-status" aria-live="polite">{status || 'Your details stay in your email app.'}</span></form></div><footer className="footer"><a className="brand" href="#top">F<span>.</span>R</a><span>DESIGNED & BUILT BY FAVAS R</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} FAVAS R</span></footer></section>
  </main></>;
}
export default App;