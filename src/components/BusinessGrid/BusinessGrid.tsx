'use client';

import { Business } from '@/types';
import { BusinessCard } from '../BusinessCard/BusinessCard';
import styles from './BusinessGrid.module.css';

interface BusinessGridProps {
    businesses: Business[];
    darkMode: boolean;
}

export function BusinessGrid({ businesses, darkMode }: BusinessGridProps) {
    return (
        <section id="businesses" className={styles.section}>
            <h2 className={`${styles.title} ${darkMode ? styles.dark : ''}`}>
                Nuestros Negocios
            </h2>
            <div className={styles.grid}>
                {businesses.length === 0 ? (
                    <p className={styles.empty}>No se encontraron negocios</p>
                ) : (
                    businesses.map((business, index) => (
                        <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <BusinessCard business={business} darkMode={darkMode} />
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
