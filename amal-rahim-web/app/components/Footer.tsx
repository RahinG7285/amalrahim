export default function Footer() {
    return (
        <footer style={{
            padding: '4rem 0',
            textAlign: 'center',
            background: 'white',
            borderTop: '1px solid var(--border)'
        }}>
            <div className="container">
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                }}>
                    Amal Ramin
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Healthcare Professional specialized in Pediatric Care
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>About</a>
                    <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Skills</a>
                    <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Contact</a>
                </div>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} Amal Ramin. Built with heart and precision.
                </p>
            </div>
        </footer>
    );
}
