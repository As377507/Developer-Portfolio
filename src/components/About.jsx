import { useEffect, useRef } from 'react'

const scores = [
    { name: 'B.Tech CGPA', val: '8.47 / 10', pct: 84.7 },
    { name: 'Higher Secondary (WBCHSE)', val: '75.4%', pct: 75.4 },
    { name: 'Secondary (WBBSE)', val: '72.42%', pct: 72.42 },
]

export default function About() {
    const ref = useRef(null)

    useEffect(() => {
        const els = ref.current?.querySelectorAll('.score-fill') || []
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.width = e.target.dataset.pct + '%'
                }
            })
        }, { threshold: 0.3 })
        els.forEach(el => { el.style.width = '0%'; obs.observe(el) })
        const revs = ref.current?.querySelectorAll('.reveal') || []
        const rObs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.15 })
        revs.forEach(el => rObs.observe(el))
        return () => { obs.disconnect(); rObs.disconnect() }
    }, [])

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <div className="about-grid">
                    <div className="reveal">
                        <span className="section-tag">🙋 About Me</span>
                        <h2 className="section-title">Turning <span className="gradient-text">ideas</span> into reality</h2>
                        <p className="about-text">
                            I'm <span className="about-highlight">Akash Sen</span>, a B.Tech Computer Science &amp; Engineering graduate
                            from <span className="about-highlight">Future Institute of Engineering and Management, Kolkata</span>.
                            I specialize in building scalable full-stack applications using <span className="about-highlight">React.js</span> and <span className="about-highlight">Spring Boot</span>,
                            with a strong foundation in AI/ML.
                        </p>
                        <p className="about-text">
                            My work spans from architecting RESTful APIs with JWT security to training deep learning models
                            for healthcare applications. I presented at <span className="about-highlight">Smart India Hackathon 2023</span>,
                            demonstrating the real-world impact of AI in mental health.
                        </p>
                        <p className="about-text">
                            I'm passionate about clean code, scalable architecture, and continuously learning new technologies
                            to solve problems that matter.
                        </p>
                        <div className="about-cards">
                            {[
                                { icon: '📍', label: 'Location', value: 'Kolkata, West Bengal' },
                                { icon: '🎓', label: 'Degree', value: 'B.Tech CSE (2025)' },
                                { icon: '⭐', label: 'CGPA', value: '8.47 / 10' },
                                { icon: '📧', label: 'Email', value: 'asen05897@gmail.com' },
                            ].map(c => (
                                <div className="about-card" key={c.label}>
                                    <div className="about-card-icon">{c.icon}</div>
                                    <div className="about-card-label">{c.label}</div>
                                    <div className="about-card-value">{c.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-right reveal">
                        <span className="section-tag">📊 Academic Performance</span>
                        <div className="score-map" style={{ marginTop: '24px' }}>
                            {scores.map(s => (
                                <div className="score-row" key={s.name}>
                                    <div className="score-meta">
                                        <span className="score-name">{s.name}</span>
                                        <span className="score-val">{s.val}</span>
                                    </div>
                                    <div className="score-bar">
                                        <div className="score-fill" data-pct={s.pct} style={{ width: '0%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '36px' }}>
                            <span className="section-tag">🏆 Highlights</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                                {[
                                    { emoji: '🥇', text: 'Smart India Hackathon 2023 Presenter' },
                                    { emoji: '🤖', text: 'Built AI chatbot with PHQ-9 & GAD-7 clinical scoring' },
                                    { emoji: '📈', text: '5.21% MAPE on 12-month revenue forecast model' },
                                    { emoji: '🔐', text: 'JWT-secured REST API serving 500+ users' },
                                    { emoji: '🎖️', text: 'IBM, NPTEL & Industry Certified Professional' },
                                ].map((h, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                                        <span style={{ fontSize: '1.2rem' }}>{h.emoji}</span>
                                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{h.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
