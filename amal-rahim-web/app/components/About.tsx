import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className="section-title">Professional Overview</h2>
                        <p>
                            I am <strong>Amal Ramin</strong>, a registered healthcare professional currently dedicated to
                            the Pediatric Ward at <strong>DHQ Hospital Muzaffargarh</strong>.
                        </p>
                        <p>
                            With an extensive background in managing high-volume clinical environments, I specialize in
                            pediatric medication administration, emergency response, and long-term care management
                            for 50+ patients per active shift.
                        </p>
                        <p>
                            My professional philosophy centers on medical integrity, patient safety protocols, and
                            collaborative care models within the Pakistani healthcare landscape.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Institutional Duty</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '2rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--brand-primary)' }}>Clinical Practice</strong>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>DHQ Hospital Muzaffargarh. Serving the Muzaffargarh community through dedicated pediatric care.</span>
                            </li>
                            <li style={{ marginBottom: '2rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--brand-primary)' }}>Shift Management</strong>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Efficiently handling 50+ concurrent pediatric cases with high-standard medical protocols.</span>
                            </li>
                            <li style={{ marginBottom: '2rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--brand-primary)' }}>Pediatric Specialization</strong>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Specialized in infant care, IV procedures, and intensive patient monitoring.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
