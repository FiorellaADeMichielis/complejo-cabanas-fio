import { useState, type JSX } from 'react';
import { FAQ_DATA } from '@/data/faqData';

export function FaqSection(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="inline-block text-xs uppercase tracking-widest bg-copper/10 text-copper px-3 py-1.5 rounded-full font-medium">
          Resolvé tus dudas
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
          Preguntas Frecuentes
        </h2>
        <p className="text-muted text-base">
          Encontrá respuestas rápidas a las consultas más habituales sobre tu estadía en el complejo.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_DATA.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
              >
                <span className="font-semibold text-primary text-base sm:text-lg group-hover:text-copper transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted transition-transform duration-300 ${
                    isOpen ? 'transform rotate-180 text-copper' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-muted text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}