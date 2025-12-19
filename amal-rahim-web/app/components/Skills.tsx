'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import styles from './Skills.module.css';

interface Skill {
    id: number;
    name: string;
    level: string;
}

export default function Skills() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSkills() {
            const { data, error } = await supabase
                .from('skills')
                .select('*')
                .order('name', { ascending: true });

            if (!error && data) {
                setSkills(data);
            }
            setLoading(false);
        }
        fetchSkills();
    }, []);

    return (
        <section id="skills" className="section">
            <div className={styles.container}>
                <h2 className="section-title">Clinical & Technical Skills</h2>
                <div className={styles.grid}>
                    {loading ? (
                        <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>Loading skills...</p>
                    ) : skills.length > 0 ? (
                        skills.map((skill) => (
                            <div key={skill.id} className={styles.card}>
                                <div className={styles.icon}>🔹</div>
                                <h3>{skill.name}</h3>
                                <p>Level: {skill.level}</p>
                            </div>
                        ))
                    ) : (
                        // Fallback content if no skills in DB
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
