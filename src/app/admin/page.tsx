'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './admin.module.css';

interface Business {
    id: number;
    name: string;
    category: string;
    description: string;
    phone: string;
    location: string;
    icon: string;
    status: string;
    created_at: string;
}

export default function AdminPanel() {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'pending' | 'approved' | 'all'>('pending');

    // Traer datos de Supabase
    useEffect(() => {
        fetchBusinesses();
    }, [filter]);

    const fetchBusinesses = async () => {
        setLoading(true);
        try {
            let query = supabase.from('businesses').select('*');

            if (filter !== 'all') {
                query = query.eq('status', filter);
            }

            const { data, error } = await query.order('created_at', { ascending: false });

            if (error) {
                console.error('Error:', error);
            } else {
                setBusinesses(data || []);
            }
        } catch (err) {
            console.error('Error fetching:', err);
        } finally {
            setLoading(false);
        }
    };

    // Aprobar tienda
    const handleApprove = async (id: number) => {
        try {
            const { error } = await supabase
                .from('businesses')
                .update({ status: 'approved' })
                .eq('id', id);

            if (error) {
                alert('❌ Error: ' + error.message);
            } else {
                alert('✅ ¡Tienda aprobada!');
                fetchBusinesses();
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    // Rechazar tienda
    const handleReject = async (id: number) => {
        try {
            const { error } = await supabase
                .from('businesses')
                .delete()
                .eq('id', id);

            if (error) {
                alert('❌ Error: ' + error.message);
            } else {
                alert('✅ Tienda rechazada y eliminada');
                fetchBusinesses();
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>🔐 Panel de Administrador</h1>
                <p>Gestiona las solicitudes de tiendas</p>
            </div>

            <div className={styles.filterContainer}>
                <button
                    className={`${styles.filterBtn} ${filter === 'pending' ? styles.active : ''}`}
                    onClick={() => setFilter('pending')}
                >
                    ⏳ Pendientes
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'approved' ? styles.active : ''}`}
                    onClick={() => setFilter('approved')}
                >
                    ✅ Aprobadas
                </button>
                <button
                    className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                    onClick={() => setFilter('all')}
                >
                    📋 Todas
                </button>
            </div>

            {loading ? (
                <div className={styles.loading}>Cargando...</div>
            ) : businesses.length === 0 ? (
                <div className={styles.empty}>
                    <p>No hay tiendas para mostrar</p>
                </div>
            ) : (
                <div className={styles.grid}>
                    {businesses.map((business) => (
                        <div key={business.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2>
                                    {business.icon} {business.name}
                                </h2>
                                <span className={`${styles.badge} ${styles[business.status]}`}>
                                    {business.status === 'pending' ? '⏳ Pendiente' : '✅ Aprobado'}
                                </span>
                            </div>

                            <div className={styles.cardBody}>
                                <p>
                                    <strong>Categoría:</strong> {business.category}
                                </p>
                                <p>
                                    <strong>Descripción:</strong> {business.description}
                                </p>
                                <p>
                                    <strong>📞 Teléfono:</strong> {business.phone}
                                </p>
                                <p>
                                    <strong>📍 Ubicación:</strong> {business.location}
                                </p>
                                <p>
                                    <strong>📅 Fecha:</strong> {new Date(business.created_at).toLocaleDateString()}
                                </p>
                            </div>

                            {business.status === 'pending' && (
                                <div className={styles.actions}>
                                    <button
                                        className={styles.approveBtn}
                                        onClick={() => handleApprove(business.id)}
                                    >
                                        ✅ Aprobar
                                    </button>
                                    <button
                                        className={styles.rejectBtn}
                                        onClick={() => handleReject(business.id)}
                                    >
                                        ❌ Rechazar
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
