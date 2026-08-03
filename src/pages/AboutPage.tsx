import { type JSX } from 'react';

export function AboutPage(): JSX.Element {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900">Sobre Nosotros</h1>
      <p className="mt-4 text-lg text-gray-600">Información sobre el proyecto.</p>
    </div>
  );
}