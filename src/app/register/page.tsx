'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './register.module.css';

export default function RegisterBusiness() {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: '',
        phone: '',
        location: '',
        icon: '🏪'
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Insertar en Supabase con status "pending"
            const { error } = await supabase
                .from('businesses')
                .insert([
                    {
                        ...formData,
                        status: 'pending'  // ← Importante: pendiente de aprobación
                    }
                ]);

            if (error) {
                setMessage(`❌ Error: ${error.message}`);
            } else {
                setMessage('✅ ¡Solicitud enviada! Esperando aprobación del administrador.');
                setFormData({
                    name: '',
                    category: '',
                    description: '',
                    phone: '',
                    location: '',
                    icon: '🏪'
                });
            }
        } catch (err) {
            setMessage('❌ Algo salió mal. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1>📝 Registra tu tienda en Túpac Amaru</h1>
                <p>Completa el formulario y espera aprobación para aparecer en nuestro directorio.</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre de tu tienda *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ej: La Elegancia"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="category">Categoría *</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Selecciona categoría --</option>
                            <option value="Ropa">Ropa</option>
                            <option value="Ropa bebé">Ropa bebé</option>
                            <option value="Lencería">Lencería</option>
                            <option value="Zapatillas">Zapatillas</option>
                            <option value="Medias">Medias</option>
                            <option value="Sábanas">Sábanas</option>
                            <option value="Accesorios">Accesorios</option>
                            <option value="Lentes">Lentes</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Descripción de tu tienda *</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Describe qué vendes y tus principales productos"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Teléfono / WhatsApp *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="987123456"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location">Ubicación en el mall *</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Ej: Pasillo A - Puesto 12"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="icon">Emoji de tu tienda</label>
                        <input
                            type="text"
                            id="icon"
                            name="icon"
                            placeholder="🏪"
                            maxLength={2}
                            value={formData.icon}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" disabled={loading} className={styles.button}>
                        {loading ? 'Enviando...' : '✅ Registrar mi tienda'}
                    </button>
                </form>

                {message && <div className={styles.message}>{message}</div>}
            </div>
        </div>
    );
}
