import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Profile() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem'
                    }}>
                        Professional Profile
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Comprehensive overview of qualifications and experience.
                    </p>
                </div>
                <About />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
