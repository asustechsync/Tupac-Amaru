'use client';

import styles from './LocationSection.module.css';

interface LocationSectionProps {
    darkMode: boolean;
}

export function LocationSection({ darkMode }: LocationSectionProps) {
    return (
        <section className={`${styles.section} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h3>📍 Ubicación</h3>
                    <p>
                        <strong>Dirección:</strong> Av. Pinto con Av. Coronel Mendoza
                        <br />
                        Frente Colegio Carlos Armando Laura
                        <br />
                        Tacna, Perú
                    </p>
                    <p>
                        <strong>Horarios:</strong>
                        <br />
                        Lunes a Domingo: 8:00 AM - 9:00 PM
                    </p>
                    <p>
                        <strong>¿Por qué visitarnos?</strong>
                    </p>
                    <ul>
                        <li>✅ 100+ negocios variados</li>
                        <li>✅ Productos importados de calidad</li>
                        <li>✅ Precios competitivos</li>
                        <li>✅ A solo 1 hora de Arica, Chile</li>
                        <li>✅ Amplio estacionamiento</li>
                    </ul>
                </div>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8845627449086!2d-70.24563!3d-18.01969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915a4c7c8c8c8c8d%3A0x1234567890abcdef!2sAv.%20Pinto%20%26%20Av.%20Coronel%20Mendoza%2C%20Tacna!5e0!3m2!1ses!2spe!4v1701376800000"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
