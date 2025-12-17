import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <span className={styles.badge}>Pediatric Ward Specialist</span>
                <h1 className={styles.title}>Dedicated Care for<br />Little Patients</h1>
                <p className={styles.subtitle}>
                    Nurse at DHQ Hospital Muzaffargarh specialized in pediatric care, handling 50+ patients with expertise and compassion.
                </p>
                <div className={styles.buttons}>
                    <a href="#contact" className="btn-primary">Get in Touch</a>
                    <a href="#about" className="btn-secondary">Learn More</a>
                </div>
            </div>
        </section>
    );
}
