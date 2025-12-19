import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <div className={styles.heroMain}>
                    <div className={styles.textContent}>
                        <span className="badge">Healthcare Professional</span>
                        <h1 className={styles.title}>
                            Providing Care for <span>Little Lives</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Dedicated Pediatric Nurse at DHQ Hospital Muzaffargarh.
                            Specialized in compassionate care, medication management, and pediatric emergencies.
                        </p>
                        <div className={styles.buttons}>
                            <a href="#contact" className="btn-primary">Connect with Me</a>
                            <a href="#about" className="btn-secondary">My Journey</a>
                        </div>
                    </div>
                    <div className={styles.visualContent}>
                        <div className={styles.imageContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                alt="Healthcare Professional"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
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
