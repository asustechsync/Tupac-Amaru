'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  // DATOS DE NEGOCIOS
  const businessesData = [
    {
      name: "La Elegancia",
      category: "Lencería",
      icon: "👗",
      description: "Lencería importada de calidad",
      location: "Pasillo A - Puesto 12",
      phone: "987123456"
    },
    {
      name: "Baby Fashion",
      category: "Ropa bebé",
      icon: "👶",
      description: "Ropa cómoda para tus bebés",
      location: "Pasillo B - Puesto 05",
      phone: "987234567"
    },
    {
      name: "Zapatería El Paso",
      category: "Zapatillas",
      icon: "👟",
      description: "Zapatillas y calzado deportivo",
      location: "Pasillo C - Puesto 18",
      phone: "987345678"
    },
    {
      name: "Medias Premium",
      category: "Medias",
      icon: "🧦",
      description: "Medias, boxer y ropa interior",
      location: "Pasillo A - Puesto 08",
      phone: "987456789"
    },
    {
      name: "Dulces Sueños",
      category: "Sábanas",
      icon: "🛏️",
      description: "Sábanas y edredones de calidad",
      location: "Pasillo D - Puesto 22",
      phone: "987567890"
    },
    {
      name: "Moda Niños",
      category: "Ropa",
      icon: "👕",
      description: "Ropa trendy para niños",
      location: "Pasillo B - Puesto 15",
      phone: "987678901"
    },
    {
      name: "Óptica Visión",
      category: "Lentes",
      icon: "👓",
      description: "Lentes y gafas de sol",
      location: "Pasillo C - Puesto 10",
      phone: "987789012"
    },
    {
      name: "Ropa Casual",
      category: "Ropa",
      icon: "👔",
      description: "Ropa casual para toda la familia",
      location: "Pasillo A - Puesto 20",
      phone: "987890123"
    },
    {
      name: "Accesorios Plus",
      category: "Accesorios",
      icon: "💍",
      description: "Collares, pulseras y más",
      location: "Pasillo D - Puesto 09",
      phone: "987901234"
    },
    {
      name: "Zapatos Formales",
      category: "Zapatillas",
      icon: "👞",
      description: "Calzado formal e informal",
      location: "Pasillo B - Puesto 25",
      phone: "988012345"
    },
    {
      name: "Ropa Importada",
      category: "Ropa",
      icon: "🎽",
      description: "Última moda importada de China",
      location: "Pasillo C - Puesto 30",
      phone: "988123456"
    },
    {
      name: "Bolsos & Billeteras",
      category: "Accesorios",
      icon: "👜",
      description: "Bolsos y complementos",
      location: "Pasillo A - Puesto 03",
      phone: "988234567"
    }
  ];

  useEffect(() => {
    setBusinesses(businessesData);
  }, []);

  const filteredBusinesses = businessesData.filter(business => {
    const matchSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = categoryFilter === '' || business.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #0ea5e9;
          --secondary: #1e293b;
          --accent: #f59e0b;
          --bg-dark: #0f172a;
          --bg-light: #f8fafc;
          --text-dark: #1e293b;
          --text-light: #f1f5f9;
          --card-dark: #1e293b;
          --card-light: #ffffff;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: var(--bg-light);
          color: var(--text-dark);
          line-height: 1.6;
          transition: background-color 0.3s;
        }

        body.dark {
          background-color: var(--bg-dark);
          color: var(--text-light);
        }

        header {
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 2rem;
          color: white;
        }

        .header-contact {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dark-toggle {
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s;
        }

        .dark-toggle:hover {
          background: rgba(255,255,255,0.3);
        }

        .hero {
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-button {
          background: #f59e0b;
          color: white;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }

        .cta-button:hover {
          background: #d97706;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
        }

        .search-section {
          max-width: 1200px;
          margin: -2rem auto 3rem;
          padding: 0 2rem;
        }

        .search-container {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        body.dark .search-container {
          background: var(--card-dark);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .search-input, .category-select {
          padding: 0.8rem;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        body.dark .search-input,
        body.dark .category-select {
          background: #1e293b;
          border-color: #334155;
          color: #f1f5f9;
        }

        .search-input:focus, .category-select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          text-align: center;
          color: var(--primary);
        }

        body.dark .section-title {
          color: #38bdf8;
        }

        .business-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .business-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: all 0.3s;
          cursor: pointer;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        body.dark .business-card {
          background: var(--card-dark);
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }

        .business-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.15);
        }

        .business-header {
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          min-height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .business-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .business-name {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }

        .business-category {
          font-size: 0.9rem;
          background: rgba(255,255,255,0.3);
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          margin-top: 0.5rem;
        }

        .business-body {
          padding: 1.5rem;
        }

        .business-info {
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .business-info strong {
          color: var(--primary);
        }

        body.dark .business-info strong {
          color: #38bdf8;
        }

        .business-location {
          margin-bottom: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .whatsapp-btn {
          background: #25d366;
          color: white;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          width: 100%;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          text-decoration: none;
        }

        .whatsapp-btn:hover {
          background: #1ead54;
          transform: scale(1.02);
        }

        .location-section {
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          padding: 3rem 2rem;
          margin-bottom: 3rem;
          border-radius: 12px;
        }

        body.dark .location-section {
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }

        .location-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .location-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        body.dark .location-info h3 {
          color: #38bdf8;
        }

        .location-info p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .location-info ul {
          text-align: left;
          margin-top: 1rem;
          margin-left: 1.5rem;
        }

        .location-info li {
          margin-bottom: 0.5rem;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          min-height: 300px;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .info-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        body.dark .info-card {
          background: var(--card-dark);
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }

        .info-card-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        body.dark .info-card h3 {
          color: #38bdf8;
        }

        footer {
          background: var(--secondary);
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: 3rem;
        }

        body.dark footer {
          background: #0f172a;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.2);
          font-size: 0.9rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .search-container {
            grid-template-columns: 1fr;
          }

          .location-content {
            grid-template-columns: 1fr;
          }

          .business-grid {
            grid-template-columns: 1fr;
          }

          .header-right {
            gap: 1rem;
            flex-direction: column;
          }

          .header-contact {
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* HEADER */}
      <header>
        <div className="header-container">
          <div className="logo">
            🛍️ TUPAC AMARU I
          </div>
          <div className="header-right">
            <div className="header-contact">
              📞 +51 952 123 456
            </div>
            <button 
              className="dark-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Tupac Amaru I</h1>
          <p>El mayor centro comercial de Tacna con 100+ negocios</p>
          <p style={{ fontSize: '1rem', opacity: 0.9 }}>Productos importados de China • Precios competitivos • Ubicado en Avenida Pinto</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('businesses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar negocios
          </button>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section">
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="🔍 Buscar producto o negocio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="category-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">📁 Todas las categorías</option>
            <option value="Ropa">Ropa</option>
            <option value="Ropa bebé">Ropa bebé</option>
            <option value="Lencería">Lencería</option>
            <option value="Zapatillas">Zapatillas</option>
            <option value="Medias">Medias y boxer</option>
            <option value="Sábanas">Sábanas y edredones</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Lentes">Lentes</option>
          </select>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* DIRECTORY SECTION */}
        <section id="businesses">
          <h2 className="section-title">Nuestros Negocios</h2>
          <div className="business-grid">
            {filteredBusinesses.length === 0 ? (
              <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem' }}>
                No se encontraron negocios
              </p>
            ) : (
              filteredBusinesses.map((business, index) => (
                <div key={index} className="business-card">
                  <div className="business-header">
                    <div className="business-icon">{business.icon}</div>
                    <div className="business-name">{business.name}</div>
                    <div className="business-category">{business.category}</div>
                  </div>
                  <div className="business-body">
                    <div className="business-info">{business.description}</div>
                    <div className="business-location">
                      📍 {business.location}
                    </div>
                    <a 
                      href={`https://wa.me/51${business.phone}?text=Hola%20${business.name}%2C%20me%20interesan%20sus%20productos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                    >
                      💬 Contactar
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* LOCATION SECTION */}
        <section className="location-section">
          <div className="location-content">
            <div className="location-info">
              <h3>📍 Ubicación</h3>
              <p><strong>Dirección:</strong> Av. Pinto con Av. Coronel Mendoza<br/>
              Frente Colegio Carlos Armando Laura<br/>
              Tacna, Perú</p>
              <p><strong>Horarios:</strong><br/>
              Lunes a Domingo: 8:00 AM - 9:00 PM</p>
              <p><strong>¿Por qué visitarnos?</strong></p>
              <ul>
                <li>✅ 100+ negocios variados</li>
                <li>✅ Productos importados de calidad</li>
                <li>✅ Precios competitivos</li>
                <li>✅ A solo 1 hora de Arica, Chile</li>
                <li>✅ Amplio estacionamiento</li>
              </ul>
            </div>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8845627449086!2d-70.24563!3d-18.01969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915a4c7c8c8c8c8d%3A0x1234567890abcdef!2sAv.%20Pinto%20%26%20Av.%20Coronel%20Mendoza%2C%20Tacna!5e0!3m2!1ses!2spe!4v1701376800000" 
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className="info-section">
          <div className="info-card">
            <div className="info-card-icon">🏪</div>
            <h3>100+ Negocios</h3>
            <p>Una gran variedad de rubros y productos para toda la familia</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">💰</div>
            <h3>Precios Competitivos</h3>
            <p>Los mejores precios importados directamente de China</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">🚗</div>
            <h3>Fácil Acceso</h3>
            <p>Ubicación céntrica con amplio estacionamiento</p>
          </div>
          <div className="info-card">
            <div className="info-card-icon">🌍</div>
            <h3>Accesible desde Chile</h3>
            <p>Solo 1 hora de Arica - Frontera Perú-Chile</p>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <h3>Tupac Amaru I - Centro Comercial</h3>
          <p>Av. Pinto con Av. Coronel Mendoza, Tacna</p>
          <p>📞 +51 952 123 456 | 📱 WhatsApp disponible</p>
          <div className="footer-bottom">
            <p>&copy; 2025 Tupac Amaru I. Todos los derechos reservados.</p>
            <p>Diseñado para conectar con clientes de Tacna, Arica y Chile</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
