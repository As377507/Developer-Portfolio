import { useState, useEffect } from 'react'

const ROLES = ['Full Stack Developer', 'React.js Engineer', 'Spring Boot Developer', 'AI/ML Enthusiast', 'Problem Solver']

const GithubIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" /></svg>
)
const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01z" /></svg>
)
const LeetcodeIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M13.48 8.85L9.32 13l4.16 4.15a1 1 0 0 1-1.41 1.41L7.2 13.7a1 1 0 0 1 0-1.41l4.87-4.85a1 1 0 0 1 1.41 1.41zM16 5H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm0 12H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" /></svg>
)

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [text, setText] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const role = ROLES[roleIdx]
        const speed = deleting ? 55 : 110
        const timer = setTimeout(() => {
            if (!deleting) {
                if (text.length < role.length) setText(role.slice(0, text.length + 1))
                else setTimeout(() => setDeleting(true), 2000)
            } else {
                if (text.length > 0) setText(text.slice(0, -1))
                else { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length) }
            }
        }, speed)
        return () => clearTimeout(timer)
    }, [text, deleting, roleIdx])

    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="hero-grid" />
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>
            <div className="container">
                <div className="hero-layout">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            Open to Opportunities
                        </div>
                        <h1 className="hero-name">
                            <span className="hero-name-main">Akash Sen</span>
                        </h1>
                        <div className="hero-title-line">
                            <span>I'm a&nbsp;</span>
                            <span className="hero-role">{text}<span className="cursor" /></span>
                        </div>
                        <p className="hero-description">
                            B.Tech CSE graduate from Kolkata, building scalable full-stack applications
                            and AI-powered solutions. Passionate about clean code, thoughtful architecture,
                            and turning complex ideas into impactful products.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                🚀 View Projects
                            </a>
                            <a href="/resume.pdf" download="Akash_Sen_Resume.pdf" className="btn-secondary">
                                📄 Download Resume
                            </a>
                            <a href="#contact" className="btn-secondary" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                                💬 Get In Touch
                            </a>
                        </div>
                        <div className="hero-socials">
                            <span className="socials-label">// find me on</span>
                            <a href="https://github.com/As377507" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><GithubIcon /></a>
                            <a href="https://linkedin.com/in/akash-sen-28834a30b" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><LinkedinIcon /></a>
                            <a href="https://leetcode.com/asen05897" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode"><LeetcodeIcon /></a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-avatar-wrap">
                            <div className="hero-avatar-ring">
                                <div className="hero-avatar-inner">AS</div>
                            </div>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat"><span className="stat-value">8.47</span><span className="stat-label">CGPA</span></div>
                            <div className="hero-stat"><span className="stat-value">4+</span><span className="stat-label">Projects</span></div>
                            <div className="hero-stat"><span className="stat-value">3</span><span className="stat-label">Certs</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
