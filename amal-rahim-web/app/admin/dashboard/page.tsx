'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import styles from '../admin.module.css';
import Link from 'next/link';

interface Message {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export default function DashboardPage() {
    const [stats, setStats] = useState({
        messages: 0,
        skills: 0,
    });
    const [recentMessages, setRecentMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            setLoading(true);

            // Fetch total skills count
            const { count: skillsCount } = await supabase
                .from('skills')
                .select('*', { count: 'exact', head: true });

            // Fetch total messages count
            const { count: messagesCount } = await supabase
                .from('messages')
                .select('*', { count: 'exact', head: true });

            // Fetch recent 3 messages
            const { data: latestMessages } = await supabase
                .from('messages')
                .select('id, name, email, created_at')
                .order('created_at', { ascending: false })
                .limit(3);

            setStats({
                skills: skillsCount || 0,
                messages: messagesCount || 0,
            });
            setRecentMessages(latestMessages || []);
            setLoading(false);
        }

        fetchDashboardData();
    }, []);

    return (
        <div>
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Skills Listed</span>
                    <span className={styles.statValue}>{loading ? '...' : stats.skills}</span>
                    <span style={{ fontSize: '0.75rem', color: '#48bb78' }}>Live on site</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Total Messages</span>
                    <span className={styles.statValue}>{loading ? '...' : stats.messages}</span>
                    <span style={{ fontSize: '0.75rem', color: '#48bb78' }}>From contact form</span>
                </div>
                {/* Static placeholders for others */}
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Profile Visits</span>
                    <span className={styles.statValue}>12+</span>
                    <span style={{ fontSize: '0.75rem', color: '#48bb78' }}>This month</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Hospital Shifts</span>
                    <span className={styles.statValue}>Full Time</span>
                    <span style={{ fontSize: '0.75rem', color: '#718096' }}>DHQ Muzaffargarh</span>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className={styles.contentCard}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3>Recent Messages</h3>
                    <Link href="/admin/dashboard/messages" className={styles.btnAction}>View All</Link>
                </div>

                {loading ? (
                    <p>Loading messages...</p>
                ) : recentMessages.length === 0 ? (
                    <p>No messages received yet.</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentMessages.map((msg) => (
                                <tr key={msg.id}>
                                    <td style={{ fontWeight: 'bold' }}>{msg.name}</td>
                                    <td>{msg.email}</td>
                                    <td>{new Date(msg.created_at).toLocaleDateString()}</td>
                                    <td>
                                        <Link href="/admin/dashboard/messages" className={styles.btnAction}>Read</Link>
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

