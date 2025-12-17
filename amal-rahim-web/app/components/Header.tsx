import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.logo}>Amal Ramin</h1>
                <nav className={styles.nav}>
                    <Link href="/#about">About</Link>
                    <Link href="/profile">Profile</Link>
                    <Link href="/#skills">Skills</Link>
                    <Link href="/#contact" className="btn-primary">Contact Me</Link>
                </nav>
            </div>
        </header>
    );
}
