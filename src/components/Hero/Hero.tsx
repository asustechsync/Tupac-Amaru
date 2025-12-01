'use client';

import styles from './Hero.module.css';

interface HeroProps {
    darkMode: boolean;
    onExplore: () => void;
}

export function Hero({ darkMode, onExplore }: HeroProps) {
    return (
        <section className={`${styles.hero} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.heroContent}>
                <h1>Tupac Amaru I</h1>
                <p>El mayor centro comercial de Tacna con 100+ negocios</p>
                <p className={styles.subtitle}>
                    Productos importados de China • Precios competitivos • Ubicado en Avenida Pinto
                </p>
                <button className={styles.ctaButton} onClick={onExplore}>
                    Explorar negocios
                </button>
            </div>
        </section>
    );
}
