'use client';

import styles from './InfoCards.module.css';

interface InfoCardsProps {
    darkMode: boolean;
}

export function InfoCards({ darkMode }: InfoCardsProps) {
    const cards = [
        {
            icon: '🏪',
            title: '100+ Negocios',
            description: 'Una gran variedad de rubros y productos para toda la familia'
        },
        {
            icon: '💰',
            title: 'Precios Competitivos',
            description: 'Los mejores precios importados directamente de China'
        },
        {
            icon: '🚗',
            title: 'Fácil Acceso',
            description: 'Ubicación céntrica con amplio estacionamiento'
        },
        {
            icon: '🌍',
            title: 'Accesible desde Chile',
            description: 'Solo 1 hora de Arica - Frontera Perú-Chile'
        }
    ];

    return (
        <section className={`${styles.section} ${darkMode ? styles.dark : ''}`}>
            {cards.map((card, index) => (
                <div key={index} className={`${styles.card} ${darkMode ? styles.dark : ''}`}>
                    <div className={styles.icon}>{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}
        </section>
    );
}
