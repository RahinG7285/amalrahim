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
        <section id="contact" className={`section ${styles.contactSection}`}>
            <div className="container">
                <div className={`${styles.box} reveal`}>
                    <div className={styles.header}>
                        <span className="badge">Professional Inquiry</span>
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Initiate Connection</h2>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Amal Ramin"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Professional Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@medical.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label htmlFor="message">Consultation Details</label>
                            <textarea
                                id="message"
                                placeholder="Inquire about clinical services or collaborative projects..."
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Processing...' : 'Secure Send'}
                        </button>

                        {status === 'success' && (
                            <div className={`${styles.statusMessage} ${styles.success} ${styles.fullWidth}`}>
                                ✨ Message transmitted successfully.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`${styles.statusMessage} ${styles.error} ${styles.fullWidth}`}>
                                ❌ Transmission failed. Please retry.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
