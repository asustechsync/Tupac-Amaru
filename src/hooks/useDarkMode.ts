// src/hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem('darkMode') === 'true';
        setDarkMode(saved);
    }, []);

    const toggleDarkMode = () => {
        const newValue = !darkMode;
        setDarkMode(newValue);
        localStorage.setItem('darkMode', String(newValue));
    };

    return { darkMode, toggleDarkMode, isMounted };
}
