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
                <div className={styles.box}>
                    <div className={styles.header}>
                        <span className="badge">Get In Touch</span>
                        <h2 className="section-title">Let's Connect</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem' }}>
                            I am always open to discussing new opportunities in pediatric care or healthcare collaborations.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="How can I help you?"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className={`${styles.statusMessage} ${styles.success}`}>
                                ✨ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`${styles.statusMessage} ${styles.error}`}>
                                ❌ Error sending message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
