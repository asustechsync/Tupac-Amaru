'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { BusinessGrid } from '@/components/BusinessGrid/BusinessGrid';
import { LocationSection } from '@/components/LocationSection/LocationSection';
import { InfoCards } from '@/components/InfoCards/InfoCards';
import { Footer } from '@/components/Footer/Footer';
import { useDarkMode } from '@/hooks/useDarkMode';
import { businesses, categories } from '@/data/businesses';
import { Business } from '@/types';

export default function Home() {
  const { darkMode, toggleDarkMode, isMounted } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(businesses);

  useEffect(() => {
    const filtered = businesses.filter((business) => {
      const matchSearch =
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = category === '' || business.category === category;
      return matchSearch && matchCategory;
    });
    setFilteredBusinesses(filtered);
  }, [searchTerm, category]);

  const handleExplore = () => {
    const element = document.getElementById('businesses');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) return null;

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
          line-height: 1.6;
          transition: background-color 0.3s;
        }

        body.dark-mode {
          background-color: #0f172a;
          color: #f1f5f9;
        }
      `}</style>

      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} onExplore={handleExplore} />
      <SearchBar
        searchTerm={searchTerm}
        category={category}
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategory}
        darkMode={darkMode}
      />
      <BusinessGrid businesses={filteredBusinesses} darkMode={darkMode} />
      <LocationSection darkMode={darkMode} />
      <InfoCards darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
