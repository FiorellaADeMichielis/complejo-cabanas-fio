import { type JSX } from 'react';
import { Link } from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Paso del Rey
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Inicio
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Nosotros
          </Link>
          <Link to="/unidades" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Habitaciones
          </Link>
        </nav>
      </div>
    </header>
  );
}