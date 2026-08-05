import { type JSX } from 'react';
import { Link } from 'react-router-dom';
import { useHeader } from '@/hooks/useHeader';

export function Header(): JSX.Element {
  const { 
    isMobileMenuOpen, 
    toggleMenu, 
    closeMenu, 
    handleHomeClick, 
    handleFaqClick 
  } = useHeader();

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" onClick={handleHomeClick} className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary tracking-tight">
            Complejo Paso del Rey
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" onClick={handleHomeClick} className="text-sm font-medium text-muted hover:text-copper transition-colors">
            Inicio
          </Link>
          <Link to="/about" onClick={closeMenu} className="text-sm font-medium text-muted hover:text-copper transition-colors">
            Nosotros
          </Link>
          <Link to="/unidades" onClick={closeMenu} className="text-sm font-medium text-muted hover:text-copper transition-colors">
            Unidades
          </Link>
          <button onClick={handleFaqClick} className="text-sm font-medium text-muted hover:text-copper transition-colors bg-transparent border-none cursor-pointer p-0">
            Preguntas Frecuentes
          </button>
        </nav>

        {/* Toggle Menú Móvil */}
        <button 
          className="md:hidden p-2 text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-border shadow-lg flex flex-col px-4 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <Link to="/" onClick={handleHomeClick} className="text-base font-medium text-primary hover:text-copper border-b border-border/50 pb-3 transition-colors">
            Inicio
          </Link>
          <Link to="/about" onClick={closeMenu} className="text-base font-medium text-primary hover:text-copper border-b border-border/50 pb-3 transition-colors">
            Nosotros
          </Link>
          <Link to="/unidades" onClick={closeMenu} className="text-base font-medium text-primary hover:text-copper border-b border-border/50 pb-3 transition-colors">
            Unidades
          </Link>
          <button onClick={handleFaqClick} className="text-base font-medium text-primary hover:text-copper text-left border-b border-border/50 pb-3 transition-colors bg-transparent border-none p-0">
            Preguntas Frecuentes
          </button>
        </div>
      )}
    </header>
  );
}