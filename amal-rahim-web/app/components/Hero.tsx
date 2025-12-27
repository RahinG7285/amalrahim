import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <div className={styles.heroMain}>
                    <div className={`${styles.textContent} reveal`}>
                        <span className="badge">Professional Care</span>
                        <h1 className={styles.title}>
                            Compassionate care for your <span>children.</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Experienced Pediatric Nurse at DHQ Hospital Muzaffargarh.
                            Specializing in expert clinical care with a soft touch for your little ones.
                        </p>
                        <div className={styles.buttons}>
                            <a href="#contact" className="btn-primary">Book Consultation</a>
                            <a href="#about" className="btn-secondary">Learn More</a>
                        </div>
                    </div>
                    <div className={`${styles.visualContent} reveal delay-2`}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800"
                                alt="Caring for children"
                            />
                        </div>
                        <div className={styles.stats}>
                            <span className={styles.statsValue}>50+</span>
                            <span className={styles.statsLabel}>Daily Patients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
