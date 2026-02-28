import { useEffect, useRef, useState } from 'react'

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" /></svg>
)
const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0h.01z" /></svg>
)
const LeetcodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.277a2.099 2.099 0 0 0 1.243.619l.13.013a2.1 2.1 0 0 0 1.37-.44l.04-.03 5.428-5.929a1.31 1.31 0 0 0-.207-1.774l-.04-.032-.011-.01a1.313 1.313 0 0 0-1.77.209l-4.982 5.437-1.957-1.957 6.106-6.51a1.313 1.313 0 0 0-.029-1.785l-.001-.003-.003-.003a1.313 1.313 0 0 0-1.784-.03L7.748 15.95l-2.001-2.001a3.05 3.05 0 0 1-.593-.998 3.002 3.002 0 0 1 .05-2.118 2.988 2.988 0 0 1 .715-1.123l3.811-4.078 5.408-5.853a1.313 1.313 0 0 0-.655-2.178z" /></svg>
)

export default function Contact() {
    const ref = useRef(null)
    const [status, setStatus] = useState('idle') // idle | sending | success | error
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
        }, { threshold: 0.1 })
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('sending')
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    subject: `Portfolio Contact from ${form.name}`,
                }),
            })
            const data = await res.json()
            if (data.success) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                console.error('Web3Forms Error:', data)
                setStatus('error')
            }
        } catch (err) {
            console.error('Fetch Error:', err)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="section section-alt" ref={ref}>
            <div className="container">
                <div className="reveal" style={{ marginBottom: '52px' }}>
                    <span className="section-tag">📬 Contact</span>
                    <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="section-subtitle">Have an opportunity or just want to say hello? Drop me a message!</p>
                </div>

                <div className="contact-grid">
                    {/* ── Left: Info ── */}
                    <div className="reveal">
                        <div className="contact-items">
                            <a href="mailto:asen05897@gmail.com" className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <div className="contact-item-label">Email</div>
                                    <div className="contact-item-value">asen05897@gmail.com</div>
                                </div>
                            </a>
                            <a href="https://linkedin.com/in/akash-sen-28834a30b" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon">💼</div>
                                <div>
                                    <div className="contact-item-label">LinkedIn</div>
                                    <div className="contact-item-value">akash-sen-28834a30b</div>
                                </div>
                            </a>
                            <a href="https://github.com/As377507" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon">🐙</div>
                                <div>
                                    <div className="contact-item-label">GitHub</div>
                                    <div className="contact-item-value">github.com/As377507</div>
                                </div>
                            </a>
                            <div className="contact-item" style={{ cursor: 'default' }}>
                                <div className="contact-icon">📍</div>
                                <div>
                                    <div className="contact-item-label">Location</div>
                                    <div className="contact-item-value">Kolkata, West Bengal, India</div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-social-row">
                            <a href="https://github.com/As377507" target="_blank" rel="noopener noreferrer" className="csocial-btn"><GithubIcon /> GitHub</a>
                            <a href="https://linkedin.com/in/akash-sen-28834a30b" target="_blank" rel="noopener noreferrer" className="csocial-btn"><LinkedinIcon /> LinkedIn</a>
                            <a href="https://leetcode.com/asen05897" target="_blank" rel="noopener noreferrer" className="csocial-btn"><LeetcodeIcon /> LeetCode</a>
                        </div>
                    </div>

                    {/* ── Right: Contact Form ── */}
                    <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                        <div className="contact-form-box">
                            <h3 className="contact-form-title">Send me a message</h3>
                            <p className="contact-form-sub">I'll get back to you within 24 hours ✨</p>

                            {status === 'success' ? (
                                <div className="form-success">
                                    <span style={{ fontSize: '3rem' }}>🎉</span>
                                    <h4>Message Sent!</h4>
                                    <p>Thanks for reaching out. I'll reply to <strong>{form.email || 'you'}</strong> soon!</p>
                                    <button className="btn-primary" onClick={() => setStatus('idle')} style={{ marginTop: '16px' }}>
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Your Name</label>
                                            <input
                                                id="contact-name"
                                                className="form-input"
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Your Email</label>
                                            <input
                                                id="contact-email"
                                                className="form-input"
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea
                                            id="contact-message"
                                            className="form-input form-textarea"
                                            name="message"
                                            placeholder="Hi Akash, I'd love to discuss an opportunity..."
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    {status === 'error' && (
                                        <div className="form-error">⚠️ Something went wrong. Try emailing directly at asen05897@gmail.com</div>
                                    )}
                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={status === 'sending'}
                                        style={{ width: '100%', justifyContent: 'center' }}
                                    >
                                        {status === 'sending' ? '⏳ Sending...' : '🚀 Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
