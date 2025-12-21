'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabase';
import styles from '../../admin.module.css';

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    message: string;
    created_at: string;
    status: string;
}

export default function ManageMessages() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    async function fetchMessages() {
        setLoading(true);
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching messages:', error);
        } else {
            setMessages(data || []);
        }
        setLoading(false);
    }

    const deleteMessage = async (id: number) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        const { error } = await supabase
            .from('messages')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Error deleting message: ' + error.message);
        } else {
            setMessages(messages.filter(m => m.id !== id));
        }
    };

    return (
        <div>
            <div className={styles.contentCard}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3>Contact Messages</h3>
                    <button onClick={fetchMessages} className={styles.btnAction}>Refresh</button>
                </div>

                {loading ? (
                    <p>Loading messages...</p>
                ) : messages.length === 0 ? (
                    <p>No messages found.</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((m) => (
                                <tr key={m.id}>
                                    <td style={{ whiteSpace: 'nowrap' }}>{new Date(m.created_at).toLocaleDateString()}</td>
                                    <td style={{ fontWeight: 'bold' }}>{m.name}</td>
                                    <td>{m.email}</td>
                                    <td>
                                        <div style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {m.message}
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deleteMessage(m.id)}
                                            className={styles.btnAction}
                                            style={{ color: 'red' }}
                                        >
                                            Delete
                                        </button>
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
