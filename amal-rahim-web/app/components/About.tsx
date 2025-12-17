import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className="section">
            <div className={styles.container}>
                <h2 className="section-title">About Me</h2>
                <div className={styles.card}>
                    <h3>Professional Background</h3>
                    <p>
                        My name is Amal Ramin. I am a dedicated nurse currently serving at <strong>DHQ Hospital Muzaffargarh</strong>. My primary area of interest and expertise is the <strong>Pediatric Ward</strong>, where I find deep fulfillment in caring for children.
                    </p>
                    <p>
                        I thrive in fast-paced environments and am capable of managing <strong>50+ patients</strong> in a single shift without compromising the quality of care.
                    </p>
                </div>
            </div>
        </section>
    );
}
