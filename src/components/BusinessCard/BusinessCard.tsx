'use client';

import { Business } from '@/types';
import styles from './BusinessCard.module.css';

interface BusinessCardProps {
    business: Business;
    darkMode: boolean;
}

export function BusinessCard({ business, darkMode }: BusinessCardProps) {
    const whatsappUrl = `https://wa.me/51${business.phone}?text=Hola%20${business.name}%2C%20me%20interesan%20sus%20productos`;

    return (
        <div className={`${styles.card} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.header}>
                <div className={styles.icon}>{business.icon}</div>
                <div className={styles.name}>{business.name}</div>
                <div className={styles.category}>{business.category}</div>
            </div>
            <div className={styles.body}>
                <div className={styles.description}>{business.description}</div>
                <div className={styles.location}>📍 {business.location}</div>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappBtn}
                >
                    💬 Contactar
                </a>
            </div>
        </div>
    );
}
