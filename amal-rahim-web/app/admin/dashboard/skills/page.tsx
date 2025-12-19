'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import styles from '../../admin.module.css';

interface Skill {
    id: number;
    name: string;
    level: string;
}

export default function ManageSkills() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSkills();
    }, []);

    async function fetchSkills() {
        setLoading(true);
        const { data, error } = await supabase
            .from('skills')
            .select('*')
            .order('name', { ascending: true });

        if (error) {
            console.error('Error fetching skills:', error);
        } else {
            setSkills(data || []);
        }
        setLoading(false);
    }

    const addSkill = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newSkill.name) return;

        const { data, error } = await supabase
            .from('skills')
            .insert([newSkill])
            .select();

        if (error) {
            alert('Error adding skill: ' + error.message);
        } else if (data) {
            setSkills([...skills, data[0]]);
            setNewSkill({ name: '', level: 'Beginner' });
        }
    };

    const removeSkill = async (id: number) => {
        const { error } = await supabase
            .from('skills')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Error deleting skill: ' + error.message);
        } else {
            setSkills(skills.filter(s => s.id !== id));
        }
    };

    return (
        <div>
            <div className={styles.contentCard} style={{ marginBottom: '2rem' }}>
                <h3>Add New Skill</h3>
                <form onSubmit={addSkill} style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <div style={{ flex: 1 }}>
                        <input
                            type="text"
                            placeholder="Skill Name"
                            className={styles.btnAction}
                            style={{ width: '100%', padding: '0.75rem' }}
                            value={newSkill.name}
                            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                        />
                    </div>
                    <div style={{ width: '150px' }}>
                        <select
                            className={styles.btnAction}
                            style={{ width: '100%', padding: '0.75rem' }}
                            value={newSkill.level}
                            onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                        >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                            <option>Expert</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.loginButton} style={{ width: 'auto', padding: '0 2rem' }}>
                        Add
                    </button>
                </form>
            </div>

            <div className={styles.contentCard}>
                <h3>Skills List</h3>
                {loading ? (
                    <p>Loading skills...</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Skill</th>
                                <th>Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills.map((skill) => (
                                <tr key={skill.id}>
                                    <td>{skill.name}</td>
                                    <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>{skill.level}</span></td>
                                    <td>
                                        <button onClick={() => removeSkill(skill.id)} className={styles.btnAction} style={{ color: 'red' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
