import { type JSX } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function MainLayout(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Acá se renderizan los componentes hijos según la ruta actual */  }
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}