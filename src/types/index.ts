// src/types/index.ts
export interface Business {
    name: string;
    category: string;
    icon: string;
    description: string;
    location: string;
    phone: string;
}

export const CATEGORIES = [
    "Ropa",
    "Ropa bebé",
    "Lencería",
    "Zapatillas",
    "Medias",
    "Sábanas",
    "Accesorios",
    "Lentes"
] as const;
