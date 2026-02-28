import { useEffect, useRef } from 'react'

const categories = [
    {
        icon: '💻', name: 'Programming Languages', color: 'cyan',
        tags: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL']
    },
    {
        icon: '⚛️', name: 'Frameworks & Libraries', color: 'purple',
        tags: ['React.js', 'Spring Boot', 'TensorFlow', 'Keras', 'Scikit-Learn', 'NumPy', 'Pandas']
    },
    {
        icon: '🗄️', name: 'Databases', color: 'indigo',
        tags: ['MySQL', 'Spring Data JPA']
    },
    {
        icon: '☁️', name: 'DevOps & Cloud', color: 'green',
        tags: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD Pipelines', 'Vercel']
    },
    {
        icon: '🛠️', name: 'Developer Tools', color: 'pink',
        tags: ['Git', 'GitHub', 'Postman', 'REST APIs']
    },
    {
        icon: '🧠', name: 'Core Concepts', color: 'cyan',
        tags: ['OOP', 'Data Structures & Algorithms', 'DBMS', 'Machine Learning', 'Deep Learning']
    },
]

export default function Skills() {
    const ref = useRef(null)
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.12 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="skills" className="section section-alt" ref={ref}>
            <div className="container">
                <div className="reveal" style={{ marginBottom: '52px' }}>
                    <span className="section-tag">⚡ Tech Stack</span>
                    <h2 className="section-title">Skills &amp; <span className="gradient-text">Technologies</span></h2>
                    <p className="section-subtitle">A collection of tools, languages, and frameworks I work with to build scalable solutions.</p>
                </div>
                <div className="skills-grid">
                    {categories.map((cat, i) => (
                        <div className={`skill-cat reveal`} key={cat.name} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="skill-cat-header">
                                <span className="skill-cat-icon">{cat.icon}</span>
                                <span className="skill-cat-name">{cat.name}</span>
                            </div>
                            <div className="skill-tags">
                                {cat.tags.map(t => (
                                    <span className={`stag stag-${cat.color}`} key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
