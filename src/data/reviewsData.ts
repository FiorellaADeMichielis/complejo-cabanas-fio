import { type Review } from '@/types/reviews.types';

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Natalia Carrizo',
    rating: 5,
    date: 'Hace 5 meses',
    comment: 'Excelente servicio! Muy cómodo para grupo familiar o para una persona sola, precios accesibles en tiempo de temporada, cuenta con su propia pileta, su propio comedor que sirven comida muy rica y de muy buen precio y el desayuno es gratis, la gente que trabaja en el lugar es muy respetuosa, el hotel está ubicado a solo dos cuadras de la playa.',
    source: 'Google Maps'
  },
  {
    id: '2',
    author: 'Juan Carlos Pereyra Nieva',
    rating: 4,
    date: 'Hace un año',
    comment: 'Super lindo y cómodo para alojarse unos días las habitaciones super limpias el personal muy amable se desayuna muy rico precio económico un lugar 100x100 recomendado para ir solo o con la familia.',
    source: 'Google Maps'
  },
  {
    id: '3',
    author: 'Elba R. Palavecino',
    rating: 4,
    date: 'Hace 6 meses',
    comment: 'La verdad muy lindo lugar la atención amables el desayuno muy bueno y te queda a unos pasos de la playa.',
    source: 'Google Maps'
  }
];