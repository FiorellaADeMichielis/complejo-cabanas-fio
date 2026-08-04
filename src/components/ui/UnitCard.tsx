import { type JSX } from 'react';
import { type Unit } from '@/types/unit.types';
import { Button } from '@/components/ui/Button';
interface UnitCardProps {
  unit: Unit;
}

export function UnitCard({ unit }: UnitCardProps): JSX.Element {
  // Número de teléfono de contacto y mensaje predefinido dinámico
  const phoneNumber = import.meta.env.VITE_NUMERO_DE_CONTACTO;
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa consultar disponibilidad y tarifas para la unidad: *${unit.name}*.`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-surface rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={unit.image}
            alt={unit.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 right-4 bg-copper text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            {unit.capacity}
          </span>
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-primary">{unit.name}</h3>
          <p className="text-muted text-sm leading-relaxed">{unit.description}</p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {unit.features.map((feature, index) => (
              <span key={index} className="text-xs bg-surface-muted text-muted px-2.5 py-1 rounded-md border border-border">
                ✓ {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex items-center justify-between border-t border-border mt-4 pt-4">
        <div>
          <span className="text-xs text-muted block">Tarifa por noche</span>
          <span className="text-base font-bold text-primary">Disponibilidad en temporada</span>
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="bg-copper hover:bg-copper/95 text-white text-sm focus:ring-copper/80 shadow-md transition-all duration-300">
            Consultar
          </Button>
        </a>
      </div>
    </div>
  );
}