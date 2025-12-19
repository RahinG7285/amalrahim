'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../admin.module.css';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className={styles.adminContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    ADMIN PANEL
                </div>
                <nav className={styles.sidebarNav}>
                    <Link
                        href="/admin/dashboard"
                        className={`${styles.navItem} ${pathname === '/admin/dashboard' ? styles.navItemActive : ''}`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/dashboard/skills"
                        className={`${styles.navItem} ${pathname === '/admin/dashboard/skills' ? styles.navItemActive : ''}`}
                    >
                        Manage Skills
                    </Link>
                    <Link
                        href="/admin/dashboard/projects"
                        className={`${styles.navItem} ${pathname === '/admin/dashboard/projects' ? styles.navItemActive : ''}`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/admin/dashboard/messages"
                        className={`${styles.navItem} ${pathname === '/admin/dashboard/messages' ? styles.navItemActive : ''}`}
                    >
                        Messages
                    </Link>
                </nav>
                <div style={{ padding: '1rem' }}>
                    <Link href="/" className={styles.navItem}>
                        View Site
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className={styles.mainContent}>
                <header className={styles.topBar}>
                    <h2>{pathname.split('/').pop()?.toUpperCase() || 'DASHBOARD'}</h2>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '1rem' }}>Welcome, Admin</span>
                        <Link href="/admin/login" className={styles.btnAction} style={{ background: '#fee2e2', color: '#991b1b', border: 'none' }}>
                            Logout
                        </Link>
                    </div>
                </header>
                <div className={styles.dashboardBody}>
                    {children}
                </div>
            </main>
        </div>
    );
}
