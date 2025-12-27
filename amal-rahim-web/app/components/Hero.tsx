import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <div className={styles.heroMain}>
                    <div className={`${styles.textContent} reveal`}>
                        <h1 className={styles.title}>
                            Dedicated <br />
                            <span>Nursing Care.</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Professional Pediatric Specialist at DHQ Hospital Muzaffargarh.
                            Commitment to excellence in clinical procedures and patient advocacy.
                        </p>
                        <div className={styles.buttons}>
                            <a href="#contact" className="btn-primary">Professional Consultation</a>
                            <a href="#about" className="btn-secondary">Technical Journey</a>
                        </div>
                    </div>
                    <div className={`${styles.visualContent} reveal delay-1`}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Medical Professional"
                            />
                        </div>
                        <div className={styles.stats}>
                            <span className={styles.statsValue}>50+</span>
                            <span className={styles.statsLabel}>Emergency <br />Cases Daily</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
