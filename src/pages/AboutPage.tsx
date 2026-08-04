import { type JSX } from 'react';

export function AboutPage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest bg-accent/90 text-white px-3 py-1.5 rounded-full font-medium shadow-sm inline-block">
            Nuestra Esencia
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Sobre Nosotros
          </h1>
          <p className="text-stone-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Un espacio pensado para ofrecerte tranquilidad, unidades sencillas con balcón, piscina y bar en Paso de la Patria.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              Descanso y comodidad a pocos pasos del río
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Complejo Cabañas Fio funciona como un apartotel tranquilo diseñado para quienes buscan una estadía independiente pero con todas las comodidades. Ofrecemos unidades sencillas equipadas con balcón para disfrutar de las tardes al aire libre.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Nuestras instalaciones cuentan con una agradable piscina al aire libre y un bar exclusivo para nuestros huéspedes, creando el clima perfecto para relajarse y desconectar de la rutina diaria.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md border border-border bg-surface">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop" 
              alt="Instalaciones del apartotel" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
          {/* Card 1: Unidades con Balcón */}
          <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center space-y-4 group">
            <div className="p-3.5 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="font-semibold text-accent text-lg">Unidades con Balcón</h3>
            <p className="text-muted text-sm leading-relaxed">Espacios sencillos y acogedores con balcón privado para tu comodidad.</p>
          </div>

          {/* Card 2: Piscina al Aire Libre */}
          <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center space-y-4 group">
            <div className="p-3.5 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-accent text-lg">Piscina al Aire Libre</h3>
            <p className="text-muted text-sm leading-relaxed">Zona de esparcimiento y solárium para disfrutar plenamente del clima.</p>
          </div>

          {/* Card 3: Bar */}
          <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center space-y-4 group">
            <div className="p-3.5 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-accent text-lg">Bar Exclusivo</h3>
            <p className="text-muted text-sm leading-relaxed">Un espacio distendido dentro del complejo para compartir un trago.</p>
          </div>
        </div>
      </section>
    </div>
  );
}