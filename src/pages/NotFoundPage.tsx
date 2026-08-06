import { type JSX } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background px-4 text-center">
      <div className="text-copper/50 mb-6">
        <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      </div>
      <h1 className="text-6xl font-extrabold text-primary tracking-tight mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold text-foreground mb-4">
        Parece que te perdiste
      </h2>
      <p className="text-muted text-lg max-w-md mx-auto mb-8">
        La página que estás buscando no existe, fue movida o ocurrió un error inesperado.
      </p>
      
      {/* Botón para volver */}
      <Link to="/">
        <Button size="lg" className="bg-copper hover:bg-copper/95 text-white">
          Volver al Inicio
        </Button>
      </Link>
      
    </div>
  );
}