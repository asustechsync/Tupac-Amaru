'use client';

import styles from './Footer.module.css';

interface FooterProps {
    darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
    return (
        <footer className={`${styles.footer} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.container}>
                <h3>Tupac Amaru I - Centro Comercial</h3>
                <p>Av. Pinto con Av. Coronel Mendoza, Tacna</p>
                <p>📞 +51 952 123 456 | 📱 WhatsApp disponible</p>
                <div className={styles.bottom}>
                    <p>&copy; 2025 Tupac Amaru I. Todos los derechos reservados.</p>
                    <p>Diseñado para conectar con clientes de Tacna, Arica y Chile</p>
                </div>
            </div>
        </footer>
    );
}
