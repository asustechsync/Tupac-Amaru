'use client';

import styles from './SearchBar.module.css';
import { CATEGORIES } from '@/types';

interface SearchBarProps {
    searchTerm: string;
    category: string;
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    darkMode: boolean;
}

export function SearchBar({
    searchTerm,
    category,
    onSearchChange,
    onCategoryChange,
    darkMode
}: SearchBarProps) {
    return (
        <section className={`${styles.searchSection} ${darkMode ? styles.dark : ''}`}>
            <div className={`${styles.searchContainer} ${darkMode ? styles.dark : ''}`}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="🔍 Buscar producto o negocio..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <select
                    className={styles.categorySelect}
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <option value="">📁 Todas las categorías</option>
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
}

