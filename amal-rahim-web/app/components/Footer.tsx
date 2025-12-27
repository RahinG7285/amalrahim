import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <h3 className={styles.title}>
                    Amal Ramin
                </h3>
                <p className={styles.subtitle}>
                    Healthcare Professional specialized in Pediatric Care
                </p>
                <div className={styles.links}>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Amal Ramin. Built with heart and precision.
                </p>
            </div>
        </footer>
    );
}
