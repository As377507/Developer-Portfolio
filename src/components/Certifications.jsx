import { useEffect, useRef } from 'react'

const certs = [
    {
        icon: '🧠',
        provider: 'Ardent Computech Pvt. Ltd.',
        name: 'Deep Learning (TensorFlow & Keras)',
        date: 'January 2024',
        link: '#',
    },
    {
        icon: '🏛️',
        provider: 'IIT Ropar · NPTEL',
        name: 'Deep Learning Specialization',
        date: 'Jan 2024 – Apr 2024',
        link: '#',
    },
    {
        icon: '🐳',
        provider: 'IBM',
        name: 'Docker Essentials: A Developer Introduction',
        date: 'July 2025',
        link: '#',
    },
]

export default function Certifications() {
    const ref = useRef(null)
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="certifications" className="section" ref={ref}>
            <div className="container">
                <div className="reveal" style={{ marginBottom: '52px' }}>
                    <span className="section-tag">🏅 Learning</span>
                    <h2 className="section-title">Certifications &amp; <span className="gradient-text">Courses</span></h2>
                    <p className="section-subtitle">Industry and academic credentials that validate my skills.</p>
                </div>
                <div className="cert-grid">
                    {certs.map((c, i) => (
                        <div className="cert-card reveal" key={c.name} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="cert-icon">{c.icon}</div>
                            <div className="cert-provider">{c.provider}</div>
                            <div className="cert-name">{c.name}</div>
                            <div className="cert-date">📅 {c.date}</div>
                            <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                View Certificate ↗
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
