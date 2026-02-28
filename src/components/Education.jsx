import { useEffect, useRef } from 'react'

const education = [
    {
        year: 'Aug 2021 – Jul 2025',
        degree: 'Bachelor of Technology in Computer Science & Engineering',
        school: 'Future Institute of Engineering and Management',
        location: 'Kolkata, West Bengal (Under MAKAUT)',
        grade: 'CGPA: 8.47 / 10',
        icon: '🎓',
    },
    {
        year: 'Jul 2021',
        degree: 'Higher Secondary — WBCHSE',
        school: 'Naktala High School',
        location: 'Kolkata, West Bengal',
        grade: 'Percentage: 75.4%',
        icon: '🏫',
    },
    {
        year: 'May 2019',
        degree: 'Secondary — WBBSE',
        school: 'Gandhi Colony Madhyamik Vidyalaya (H.S)',
        location: 'Kolkata, West Bengal',
        grade: 'Percentage: 72.42%',
        icon: '📚',
    },
]

export default function Education() {
    const ref = useRef(null)
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section id="education" className="section section-alt" ref={ref}>
            <div className="container">
                <div className="reveal" style={{ marginBottom: '52px' }}>
                    <span className="section-tag">🎓 Background</span>
                    <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
                    <p className="section-subtitle">Academic journey at top institutions in West Bengal.</p>
                </div>
                <div className="edu-timeline">
                    {education.map((e, i) => (
                        <div className="edu-item" key={i}>
                            <div className="edu-dot" />
                            <div className={`edu-card reveal`} style={{ transitionDelay: `${i * 0.12}s` }}>
                                <div className="edu-year">{e.year}</div>
                                <div className="edu-degree">{e.icon} {e.degree}</div>
                                <div className="edu-school">{e.school}</div>
                                <div className="edu-location">📍 {e.location}</div>
                                <div className="edu-grade">⭐ {e.grade}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
