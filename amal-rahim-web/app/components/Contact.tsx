import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2>Ready to Collaborate?</h2>
                    <p>I am available for opportunities in Pediatric Nursing.</p>
                    <a href="mailto:amal.ramin@example.com" className="btn-primary">Contact Me</a>
                </div>
            </div>
        </section>
    );
}
