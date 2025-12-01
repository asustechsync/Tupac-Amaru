'use client';

import styles from './Header.module.css';

interface HeaderProps {
    darkMode: boolean;
    onToggleDarkMode: () => void;
}

export function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
    return (
        <header className={`${styles.header} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    🛍️ TUPAC AMARU I
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.contact}>
                        📞 +51 952 123 456
                    </div>
                    <button
                        className={styles.darkToggle}
                        onClick={onToggleDarkMode}
                    >
                        {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
                    </button>
                </div>
            </div>
        </header>
    );
}
