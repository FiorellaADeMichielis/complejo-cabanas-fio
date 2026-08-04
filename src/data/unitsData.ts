import { type Unit } from '@/types/unit.types';

export const UNITS_DATA: Unit[] = [
  {
    id: '1',
    name: 'Departamento Estándar con Balcón',
    description: 'Unidad luminosa y cómoda equipada con balcón privado, ideal para parejas o viajeros solos que buscan descanso y cercanía a la playa.',
    capacity: 'Hasta 2 personas',
    pricePerNight: 'Consultar',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop',
    features: ['Balcón privado', 'Aire acondicionado', 'Baño privado', 'Wi-Fi gratis']
  },
  {
    id: '2',
    name: 'Departamento Familiar con Balcón',
    description: 'Espacio amplio y confortable diseñado especialmente para familias, con excelente distribución, comodidades y vistas despejadas.',
    capacity: 'Hasta 4 personas',
    pricePerNight: 'Consultar',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop',
    features: ['Balcón amplio', 'Cocina integrada', 'Aire acondicionado', 'Wi-Fi gratis', 'Zona de estar']
  },
  {
    id: '3',
    name: 'Suite Deluxe con Vista',
    description: 'Nuestra unidad más exclusiva, que combina máximo confort, diseño moderno y una ubicación privilegiada dentro del complejo.',
    capacity: 'Hasta 3 personas',
    pricePerNight: 'Consultar',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
    features: ['Vista panorámica', 'Balcón terraza', 'Smart TV', 'Aire acondicionado', 'Atención preferencial']
  }
];