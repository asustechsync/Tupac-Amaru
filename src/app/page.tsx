'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Hero } from '@/components/Hero/Hero';
import { LocationSection } from '@/components/LocationSection/LocationSection';
import { InfoCards } from '@/components/InfoCards/InfoCards';
import { useDarkMode } from '@/hooks/useDarkMode';

interface Business {
  id: number;
  name: string;
  category: string;
  description: string;
  phone: string;
  location: string;
  icon: string;
  status: string;
}

export default function Home() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
    const { darkMode, toggleDarkMode, isMounted } = useDarkMode();

  // Traer SOLO tiendas aprobadas de Supabase
  useEffect(() => {
    const fetchApprovedBusinesses = async () => {
      try {
        const { data, error } = await supabase
          .from('businesses')
          .select('*')
          .eq('status', 'approved')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching businesses:', error);
        } else {
          setBusinesses(data || []);
          setFilteredBusinesses(data || []);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedBusinesses();
  }, []);

  // Filtrar cuando cambia búsqueda o categoría
  useEffect(() => {
    let filtered = businesses;

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(b => b.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        b =>
          b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBusinesses(filtered);
  }, [searchTerm, selectedCategory, businesses]);

  return (
    <div style={{ backgroundColor: darkMode ? '#1a1a1a' : '#fff' }}>
      <Hero darkMode={darkMode} onExplore={() => {}} />
      
      <div style={{ padding: '40px 20px' }}>
        <SearchBar
          searchTerm={searchTerm}
          category={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          darkMode={darkMode}
        />
      </div>

      <InfoCards darkMode={darkMode} />

      {/* Sección de negocios */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: darkMode ? '#fff' : '#333' }}>
          {filteredBusinesses.length} Negocios encontrados
        </h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Cargando negocios...</p>
          </div>
        ) : filteredBusinesses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ color: darkMode ? '#ccc' : '#666' }}>
              No se encontraron negocios con esos criterios
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {filteredBusinesses.map((business) => (
              <div
                key={business.id}
                style={{
                  background: darkMode ? '#2a2a2a' : '#fff',
                  border: `1px solid ${darkMode ? '#444' : '#ddd'}`,
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{ margin: '0 0 10px 0', color: darkMode ? '#fff' : '#333' }}>
                  {business.icon} {business.name}
                </h3>

                <p style={{ margin: '8px 0', color: darkMode ? '#bbb' : '#666', fontSize: '12px' }}>
                  <strong>Categoría:</strong> {business.category}
                </p>

                <p style={{ margin: '8px 0', color: darkMode ? '#bbb' : '#666', fontSize: '14px' }}>
                  {business.description}
                </p>

                <p style={{ margin: '8px 0', color: darkMode ? '#bbb' : '#666', fontSize: '12px' }}>
                  📍 {business.location}
                </p>

                <a
                  href={`https://wa.me/${business.phone.replace(/\D/g, '')}?text=Hola%20${business.name}%20desde%20Túpac%20Amaru`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '15px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1da752';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#25D366';
                  }}
                >
                  💬 Contactar por WhatsApp
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      <LocationSection darkMode={darkMode} />

      {/* Enlace al registro */}
      <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: darkMode ? '#2a2a2a' : '#f9f9f9' }}>
        <h3 style={{ color: darkMode ? '#fff' : '#333' }}>¿Tienes un negocio en el mall?</h3>
        <a
          href="/register"
          style={{
            display: 'inline-block',
            marginTop: '15px',
            backgroundColor: '#667eea',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          📝 Registra tu tienda aquí
        </a>
      </div>
    </div>
  );
}
