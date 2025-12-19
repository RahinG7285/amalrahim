import styles from '../admin.module.css';

export default function DashboardPage() {
    return (
        <div>
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Total Projects</span>
                    <span className={styles.statValue}>12</span>
                    <span style={{ fontSize: '0.75rem', color: '#48bb78' }}>+2 this month</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Skills Listed</span>
                    <span className={styles.statValue}>8</span>
                    <span style={{ fontSize: '0.75rem', color: '#718096' }}>Updated 3 days ago</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Recent Messages</span>
                    <span className={styles.statValue}>5</span>
                    <span style={{ fontSize: '0.75rem', color: '#e53e3e' }}>3 unread</span>
                </div>
                <div className={styles.statCard}>
                    <span className={styles.statLabel}>Profile Visits</span>
                    <span className={styles.statValue}>1,240</span>
                    <span style={{ fontSize: '0.75rem', color: '#48bb78' }}>+15% from last week</span>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className={styles.contentCard}>
                <h3>Recent Messages</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Sender</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Oct 24, 2023</td>
                            <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>Read</span></td>
                            <td>
                                <button className={styles.btnAction}>View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alice Smith</td>
                            <td>Oct 23, 2023</td>
                            <td><span className={`${styles.badge}`} style={{ background: '#fef3c7', color: '#92400e' }}>Unread</span></td>
                            <td>
                                <button className={styles.btnAction}>View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Robert Wilson</td>
                            <td>Oct 22, 2023</td>
                            <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>Read</span></td>
                            <td>
                                <button className={styles.btnAction}>View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
