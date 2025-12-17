import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className={styles.container}>
                <h2 className="section-title">Clinical & Technical Skills</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>💉</div>
                        <h3>Clinical Procedures</h3>
                        <p>Expertise in medication administration, passing IV lines, and monitoring vital signs.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>👶</div>
                        <h3>Pediatric Care</h3>
                        <p>Specialized handling of infants and children, ensuring comfort and safety.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🏥</div>
                        <h3>Ward Management</h3>
                        <p>Experience handling high volumes of patients (50+) efficiently during shifts.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>💻</div>
                        <h3>Computer Literacy</h3>
                        <p>Proficient in computer operations for patient record management and hospital systems.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
