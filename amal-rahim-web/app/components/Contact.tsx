'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error: any) {
            console.error('Submission Error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2 className="section-title">Get In Touch</h2>
                    <p style={{ marginBottom: '2rem', textAlign: 'center' }}>Available for opportunities in Pediatric Nursing. Drop me a message!</p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={status === 'loading'} style={{ width: '100%' }}>
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p style={{ color: '#48bb78', marginTop: '1rem', textAlign: 'center' }}>Message sent successfully!</p>}
                        {status === 'error' && <p style={{ color: '#e53e3e', marginTop: '1rem', textAlign: 'center' }}>Error sending message. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
