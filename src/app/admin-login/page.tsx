'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

const ADMIN_PASSWORD = 'TupacAdmin123'; // ⚠️ CAMBIA ESTO POR TU CONTRASEÑA

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password === ADMIN_PASSWORD) {
            // Guardar en localStorage que está autenticado
            localStorage.setItem('adminAuth', 'true');
            router.push('/admin');
        } else {
            setError('❌ Contraseña incorrecta');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>🔐 Panel Admin</h1>
                <p>Ingresa la contraseña de administrador</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError('');
                        }}
                        autoFocus
                    />

                    <button type="submit">Ingresar</button>

                    {error && <p className={styles.error}>{error}</p>}
                </form>

                <p style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
                    Solo administradores
                </p>
            </div>
        </div>
    );
}
