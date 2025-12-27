import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.content} reveal`}>
                        <span className="badge">Professional Background</span>
                        <h2 className="section-title" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                            Clinical Excellence & <br />
                            Dedicated Pedagogy.
                        </h2>
                        <p>
                            Serving at <strong>DHQ Hospital Muzaffargarh</strong>, I specialize in the Pediatric Ward,
                            where I manage critical care and routine procedures for over 50 patients per shift.
                        </p>
                        <p>
                            My approach combines technical precision with deep compassion, ensuring that every child
                            receives the highest standard of medical attention.
                        </p>
                    </div>
                    <div className={`${styles.card} reveal delay-1`}>
                        <h3>Core Values</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '2.5rem', display: 'flex', gap: '2rem' }}>
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    background: 'var(--brand-primary)',
                                    borderRadius: '50%',
                                    marginTop: '0.6rem',
                                    flexShrink: 0
                                }}></div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Patient Advocacy</strong>
                                    <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Prioritizing child safety and comfort above all.</span>
                                </div>
                            </li>
                            <li style={{ marginBottom: '2.5rem', display: 'flex', gap: '2rem' }}>
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    background: 'var(--brand-primary)',
                                    borderRadius: '50%',
                                    marginTop: '0.6rem',
                                    flexShrink: 0
                                }}></div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Medical Standards</strong>
                                    <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Adhering to global clinical protocols.</span>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    background: 'var(--brand-primary)',
                                    borderRadius: '50%',
                                    marginTop: '0.6rem',
                                    flexShrink: 0
                                }}></div>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Efficient Management</strong>
                                    <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Optimizing ward operations under pressure.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
