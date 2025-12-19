import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className="section" style={{ background: 'white' }}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <span className="badge">Knowledge & Heart</span>
                        <h2 className="section-title" style={{ textAlign: 'left', marginLeft: 0 }}>My Professional Story</h2>
                        <p>
                            I am <strong>Amal Ramin</strong>, a dedicated healthcare professional currently serving at <strong>DHQ Hospital Muzaffargarh</strong>.
                        </p>
                        <p>
                            My heart lies in the <strong>Pediatric Ward</strong>. Every day, I am driven by the opportunity to provide specialized care to children and support their families during challenging times.
                        </p>
                        <p>
                            With experience handling <strong>50+ patients per shift</strong>, I am accustomed to high-pressure environments where precision, speed, and compassion are equally vital.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Core Values</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span>
                                <div>
                                    <strong style={{ display: 'block' }}>Patient Advocacy</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Prioritizing the needs and comfort of every child.</span>
                                </div>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span>
                                <div>
                                    <strong style={{ display: 'block' }}>Clinical Excellence</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Maintaining high standards in all medical procedures.</span>
                                </div>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: 'var(--brand-primary)', fontWeight: 'bold' }}>✓</span>
                                <div>
                                    <strong style={{ display: 'block' }}>Collaborative Care</strong>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Working seamlessly with medical teams for best outcomes.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
