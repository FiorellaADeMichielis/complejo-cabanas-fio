import { type JSX } from 'react';
import { MOCK_REVIEWS } from '@/data/reviewsData';
import { ReviewCard } from '@/components/ui/ReviewCard';

export function Reviews(): JSX.Element {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
          <span className="font-bold text-primary">★ 4.2  en Google Maps</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Lo que dicen nuestros huéspedes
        </h2>
        <p className="text-muted text-base">
          Experiencias reales compartidas por quienes ya disfrutaron de su estadía con nosotros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}