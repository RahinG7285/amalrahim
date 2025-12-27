import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container`}>
                <div className={styles.heroMain}>
                    <div className={styles.textContent}>
                        <span className="badge">Medical Professional</span>
                        <h1 className={styles.title}>
                            Clinical Excellence in Pediatric Nursing.
                        </h1>
                        <p className={styles.subtitle}>
                            Serving with precision and dedication at DHQ Hospital Muzaffargarh.
                            Focused on high-impact patient care and medical standards.
                        </p>
                        <div className={styles.buttons}>
                            <a href="#about" className="btn-primary">Professional Profile</a>
                            <a href="#contact" className="btn-secondary">Contact Office</a>
                        </div>
                    </div>
                    <div className={styles.visualContent}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1551076805-e18690437511?auto=format&fit=crop&q=80&w=800"
                                alt="DHQ Hospital Muzaffargarh Clinical Care"
                            />
                        </div>
                        <div className={styles.stats}>
                            <span className={styles.statsLabel}>Annual Patient Volume</span>
                            <span className={styles.statsValue}>15,000+</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
