const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" /></svg>
)
const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01z" /></svg>
)

export default function Footer() {
    const year = new Date().getFullYear()
    const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>AS<span style={{ color: 'var(--accent-cyan)' }}>/&gt;</span>
                    </div>
                    <p className="footer-copy">
                        © {year} Akash Sen — Built with React & ❤️ from Kolkata
                    </p>
                    <div className="footer-links">
                        <a href="https://github.com/As377507" target="_blank" rel="noopener noreferrer" className="footer-flink" title="GitHub"><GithubIcon /></a>
                        <a href="https://linkedin.com/in/akash-sen-28834a30b" target="_blank" rel="noopener noreferrer" className="footer-flink" title="LinkedIn"><LinkedinIcon /></a>
                        <button onClick={() => scroll('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0' }} className="footer-flink" title="Back to top">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
