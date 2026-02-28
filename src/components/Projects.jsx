import { useEffect, useRef } from 'react'

const GithubIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
    </svg>
)
const ExternalIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
)

const projects = [
    {
        icon: '✅',
        name: 'Smart Task Tracker',
        year: '2025',
        tech: ['React.js', 'Spring Boot', 'MySQL', 'JWT', 'REST API', 'Spring JPA'],
        bullets: [
            'Architected full-stack task management app with JWT-based auth for 500+ users.',
            'Implemented CRUD with priority levels, deadlines & status tracking; persisted 1,000+ tasks via RESTful APIs.',
            'Designed scalable REST endpoints following MVC architecture for clean separation of concerns.',
        ],
        github: 'https://github.com/As377507',
        live: null,
    },
    {
        icon: '🌐',
        name: 'Developer Portfolio Website',
        year: '2025',
        tech: ['React.js', 'Tailwind CSS', 'Vercel', 'EmailJS'],
        bullets: [
            'Developed responsive portfolio using React.js & Tailwind CSS — achieved Lighthouse SEO score of 95+.',
            'Integrated EmailJS for contact form validated via 50+ successful test submissions.',
            'Deployed on Vercel with continuous delivery pipeline for zero-downtime updates.',
        ],
        github: 'https://github.com/As377507',
        live: 'https://vercel.com',
    },
    {
        icon: '🤖',
        name: 'AI Mental Health Chatbot',
        year: '2023',
        tech: ['Python', 'NLP', 'Machine Learning', 'PHQ-9', 'GAD-7'],
        bullets: [
            'Built AI chatbot integrating PHQ-9 & GAD-7 clinical scoring to evaluate mental health levels.',
            'Analyzed 100+ user inputs to generate tailored video, game & article recommendations — 70% click-through uplift.',
            'Presented at Smart India Hackathon 2023, showcasing AI in real-world healthcare applications.',
        ],
        github: 'https://github.com/As377507',
        live: null,
    },
    {
        icon: '📈',
        name: 'Strategic Sales Analysis — Time-Series Forecasting',
        year: '2025',
        tech: ['Python', 'Facebook Prophet', 'Time-Series', 'Cross-Validation', 'Pandas'],
        bullets: [
            'Built end-to-end forecasting pipeline using Facebook Prophet, achieving 5.21% MAPE on a 12-month revenue forecast.',
            'Engineered external regressors (Discount & Shipping Cost) improving accuracy by 7.38 pp over baseline.',
            'Delivered actionable strategic insights for business decision-making.',
        ],
        github: 'https://github.com/As377507',
        live: null,
    },
]

export default function Projects() {
    const ref = useRef(null)
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                <div className="reveal" style={{ marginBottom: '52px' }}>
                    <span className="section-tag">🛠️ My Work</span>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">A selection of projects that showcase my full-stack and AI/ML capabilities.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div className="project-card reveal" key={p.name} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="project-header">
                                <div className="project-icon">{p.icon}</div>
                                <span className="project-year">{p.year}</span>
                            </div>
                            <div className="project-name">{p.name}</div>
                            <ul className="project-bullets">
                                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>
                            <div className="project-tech">
                                {p.tech.map(t => <span className="tech-badge" key={t}>{t}</span>)}
                            </div>
                            <div className="project-links">
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="plink plink-gh">
                                    <GithubIcon /> GitHub
                                </a>
                                {p.live && (
                                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="plink plink-live">
                                        <ExternalIcon /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
