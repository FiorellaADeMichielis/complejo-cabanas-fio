import { type JSX } from 'react';
import { type Review } from '@/types/reviews.types';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps): JSX.Element {
  return (
    <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Estrellas */}
        <div className="flex text-amber-500 gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.690h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.690l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-muted text-sm leading-relaxed italic">
          &quot;{review.comment}&quot;
        </p>
      </div>

      <div className="pt-4 border-t border-border flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-primary text-sm">{review.author}</h4>
          <span className="text-xs text-muted">{review.date}</span>
        </div>
        <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-md">
          {review.source}
        </span>
      </div>
    </div>
  );
}