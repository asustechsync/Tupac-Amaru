// src/data/businesses.ts
import { Business } from '@/types';

export const businesses: Business[] = [
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
        name: "Dulce Luz",
        category: "Medias",
        icon: "🧦",
        description: "Medias, boxer y Lencería por mayor",
        location: "Pasillo 1 - Puesto C-63",
        phone: "987456789"
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

export const categories = [
    "Ropa",
    "Ropa bebé",
    "Lencería",
    "Zapatillas",
    "Medias",
    "Sábanas",
    "Accesorios",
    "Lentes"
] as const;
