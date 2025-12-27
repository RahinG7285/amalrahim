import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '12rem' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span className="badge">Professional</span>
                    <h1 className="section-title">
                        Nursing Portfolio
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                        A comprehensive overview of my qualifications, clinical expertise, and dedicated experience in pediatric care.
                    </p>
                </div>
                <About />
                <Skills />
                <div style={{ background: 'var(--bg-main)', padding: '4rem 0' }}>
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
