import { useState, useEffect } from 'react'
import './App.css'

type Language = 'en' | 'ru'

const translations = {
  en: {
    name: 'Dzmitry Kulik',
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: { subtitle: 'Frontend Developer | React & TypeScript Enthusiast', viewProjects: 'View Projects', contactMe: 'Contact Me' },
    about: { title: 'About Me', p1: "Hi! I'm a junior frontend developer who consciously chose this path for its perfect blend of logic and creativity. I'm passionate about building fast, intuitive, and aesthetically pleasing interfaces that directly impact user experience.", p2: "I specialize in React, TypeScript, and modern web technologies. My stack choice is driven by industry demand, strong community support, and TypeScript's strict typing that helps write more reliable and maintainable code from the start of my career.", p3: "I'm seeking a junior frontend developer position where I can apply my knowledge on real projects, actively learn from experienced colleagues, and take responsibility as part of a team.", stat1: '1+ Year', stat1Label: 'Development', stat2: 'Agile/Scrum', stat2Label: 'Experience', stat3: 'B2', stat3Label: 'English' },
    skills: { title: 'Skills' },
    projects: { title: 'Projects', demo: 'Demo', github: 'GitHub' },
    contact: { title: 'Get In Touch', subtitle: "Let's create something amazing together!", description: 'Open to new projects and collaboration opportunities', resume: 'Resume' },
    footer: 'Built with ❤️ and React'
  },
  ru: {
    name: 'Дмитрий Кулик',
    nav: { home: 'Главная', about: 'О себе', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты' },
    hero: { subtitle: 'Frontend разработчик | React & TypeScript энтузиаст', viewProjects: 'Мои проекты', contactMe: 'Связаться' },
    about: { title: 'О себе', p1: 'Привет! Я начинающий фронтенд-разработчик, осознанно выбравший этот путь благодаря его идеальному сочетанию логики и творчества. Меня привлекает возможность создавать быстрые, интуитивные и эстетичные интерфейсы, которые напрямую влияют на пользовательский опыт.', p2: 'Я специализируюсь на React, TypeScript и современных веб-технологиях. Мой выбор стека обусловлен востребованностью в индустрии, сильным сообществом и строгой типизацией TypeScript, которая помогает писать более надёжный и поддерживаемый код с самого начала карьеры.', p3: 'Я ищу позицию младшего фронтенд-разработчика, где смогу применять свои знания на реальных проектах, активно учиться у опытных коллег и брать на себя ответственность за часть командной работы.', stat1: '1+ год', stat1Label: 'Разработка', stat2: 'Agile/Scrum', stat2Label: 'Опыт', stat3: 'B2', stat3Label: 'Английский' },
    skills: { title: 'Навыки' },
    projects: { title: 'Проекты', demo: 'Демо', github: 'GitHub' },
    contact: { title: 'Свяжитесь со мной', subtitle: 'Давайте создадим что-то удивительное вместе!', description: 'Открыт для новых проектов и сотрудничества', resume: 'Резюме' },
    footer: 'Создано с ❤️ и React'
  }
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<Language>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    { title: 'Dragon-Repeller RPG Game', tech: 'HTML5, CSS3, JavaScript', desc: 'Responsive RPG game with Grid Layout, Flexbox, and CSS variables', link: 'https://clck.ru/3RdpJg', github: 'https://clck.ru/3RdpHd' },
    { title: 'Multiplication Table Learning App', tech: 'React 19, TypeScript, Vite', desc: 'Interactive educational app with CSS-in-JS styling', link: 'https://clck.ru/3RdpQP', github: 'https://clck.ru/3RdpPF' },
    { title: 'E-Commerce Store', tech: 'HTML5, TypeScript, SCSS, Webpack', desc: 'Educational project with modern build tools', link: 'https://clck.ru/3RdpTK', github: 'https://clck.ru/3RdpSG' },
    { title: 'Calculator', tech: 'TypeScript, HTML5, CSS3, Vite', desc: 'Modern calculator with npm dependency management', link: 'https://clck.ru/3RdpXJ', github: 'https://clck.ru/3RdpVM' },
  ]

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Webpack/Vite', level: 80 },
  ]

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-content">
          <a href="#home" className="logo">{'<Dev />'}</a>
          <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={menuOpen ? 'open' : ''}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>{t.nav.home}</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a></li>
          </ul>
          <div className="lang-switcher">
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
            <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>RU</button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="glitch" data-text={t.name}>{t.name}</h1>
            <p className="subtitle">{t.hero.subtitle}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">{t.hero.viewProjects}</a>
              <a href="#contact" className="btn btn-secondary">{t.hero.contactMe}</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="code-snippet">
                <span className="code-line"><span className="keyword">const</span> developer = {'{'}</span>
                <span className="code-line">  name: <span className="string">"{t.name}"</span>,</span>
                <span className="code-line">  role: <span className="string">"Frontend Dev"</span>,</span>
                <span className="code-line">  stack: [<span className="string">"React"</span>, <span className="string">"TS"</span>]</span>
                <span className="code-line">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-content">
            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <div className="stats">
                <div className="stat-item">
                  <h3>{t.about.stat1}</h3>
                  <p>{t.about.stat1Label}</p>
                </div>
                <div className="stat-item">
                  <h3>{t.about.stat2}</h3>
                  <p>{t.about.stat2Label}</p>
                </div>
                <div className="stat-item">
                  <h3>{t.about.stat3}</h3>
                  <p>{t.about.stat3Label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">{t.projects.demo} →</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">{t.projects.github} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>{t.contact.subtitle}</h3>
              <p>{t.contact.description}</p>
              <div className="contact-methods">
                <a href="mailto:dmitrij.kulik.d.v@gmail.com" className="contact-method">
                  <span className="icon">✉</span>
                  <span>dmitrij.kulik.d.v@gmail.com</span>
                </a>
                <a href="https://rabota.by/resume/6095b535ff08ff541f0039ed1f795643766f6b" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <span className="icon">📄</span>
                  <span>{t.contact.resume}</span>
                </a>
                <a href="https://github.com/Dzmitryuser" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <span className="icon">💻</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Dzmitry Kulik. {t.footer}</p>
      </footer>
    </>
  )
}

export default App
