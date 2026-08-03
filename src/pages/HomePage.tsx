import { type JSX } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <img 
            src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1600&auto=format&fit=crop" 
            alt="Cabañas fondo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Complejo Cabañas turisticas
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, quo.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link to="/about">
              <Button variant="primary" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Conocer Más
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section (Por qué elegirnos) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
          <p className="mt-2 text-gray-600">Todo lo que necesitas para una estadía perfecta.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center space-y-3">
            <div className="text-emerald-600 text-3xl font-bold">🌲</div>
            <h3 className="text-xl font-semibold text-gray-800">Entorno Natural</h3>
            <p className="text-gray-600 text-sm">Rodeados de vegetación y aire puro para desconectar por completo de la rutina.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center space-y-3">
            <div className="text-emerald-600 text-3xl font-bold">🏡</div>
            <h3 className="text-xl font-semibold text-gray-800">Totalmente Equipadas</h3>
            <p className="text-gray-600 text-sm">Cabañas cálidas con cocina completa, parrilla privada y todas las comodidades.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center space-y-3">
            <div className="text-emerald-600 text-3xl font-bold">⭐</div>
            <h3 className="text-xl font-semibold text-gray-800">Atención Personalizada</h3>
            <p className="text-gray-600 text-sm">Atendido por sus dueños para garantizar que tu experiencia sea inolvidable.</p>
          </div>
        </div>
      </section>

      {/* Location Section (Mapa) */}
      <section className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">¿Dónde Encontrarnos?</h2>
            <p className="mt-2 text-gray-600">Te esperamos en Paso de la Patria, Corrientes, Argentina.</p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white h-[400px] w-full">
            <iframe
              title="Ubicación Complejo Cabañas Fio"
              src="https://maps.google.com/maps?q=Paso+de+la+Patria,+Corrientes,+Argentina&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}