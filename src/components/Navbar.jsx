import { useState, useEffect } from 'react'

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certs' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40)
            const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact']
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(sections[i]); break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (e, href) => {
        e.preventDefault()
        const id = href.replace('#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-inner">
                        <a href="#home" className="navbar-logo" onClick={e => handleNav(e, '#home')}>
                            <span className="logo-accent">&lt;</span>AS<span className="logo-accent">/&gt;</span>
                        </a>
                        <ul className="navbar-links">
                            {links.map(l => (
                                <li key={l.href}>
                                    <a href={l.href} className={active === l.href.replace('#', '') ? 'active' : ''} onClick={e => handleNav(e, l.href)}>
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                            <li><a href="#contact" className="nav-cta" onClick={e => handleNav(e, '#contact')}>Contact</a></li>
                        </ul>
                        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="menu">
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
                <ul>
                    {links.map(l => (
                        <li key={l.href}><a href={l.href} onClick={e => handleNav(e, l.href)}>{l.label}</a></li>
                    ))}
                    <li><a href="#contact" onClick={e => handleNav(e, '#contact')}>Contact</a></li>
                </ul>
            </div>
        </>
    )
}
