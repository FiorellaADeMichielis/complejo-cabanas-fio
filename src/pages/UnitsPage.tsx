import { type JSX } from 'react';
import { UNITS_DATA } from '@/data/unitsData';
import { UnitCard } from '@/components/ui/UnitCard';

export function UnitsPage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="inline-block text-xs uppercase tracking-widest bg-copper/10 text-copper px-3 py-1.5 rounded-full font-medium">
          Nuestras Opciones de Alojamiento
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
          Apartamentos y Unidades
        </h1>
        <p className="text-muted text-base">
          Espacios diseñados para ofrecerte independencia, comodidad y un descanso pleno a pasos de la playa y del río.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {UNITS_DATA.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}