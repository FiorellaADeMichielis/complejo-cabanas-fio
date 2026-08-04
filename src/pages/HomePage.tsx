import { type JSX } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Reviews } from '@/components/ui/Reviews';
import { ImageCarousel } from '@/components/ui/Carousel';
import { COMPLEX_GALLERY } from '@/data/ComplexGalleryData';

export function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-28 sm:py-36 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-25 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop" 
            alt="Piscina y exterior del apartotel" 
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs uppercase tracking-widest bg-copper/40 text-white px-3 py-1.5 rounded-full font-medium shadow-sm">
            Apartotel Tranquilo en Paso de la Patria
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Complejo Paso del Rey
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Disfrutá de unidades sencillas con balcón, piscina al aire libre y un ambiente ideal para el descanso junto al río.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/unidades">
              <Button size="lg" className="w-full sm:w-auto bg-copper/80 hover:bg-copper/95 text-white shadow-md">
                Ver Unidades y Tarifas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section (Por qué elegirnos) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Tu estadía perfecta
          </h2>
          <p className="text-muted text-base">
            Todo lo que necesitas para relajarte y disfrutar de unos días únicos de desconexión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Unidades con Balcón */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center space-y-4 group">
            <div className="p-4 bg-copper/10 rounded-2xl text-copper group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-copper">Unidades con Balcón</h3>
            <p className="text-muted text-sm leading-relaxed">
              Espacios sencillos, cómodos y luminosos equipados con balcón privado para disfrutar del aire libre.
            </p>
          </div>

          {/* Card 2: Piscina al Aire Libre */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center space-y-4 group">
            <div className="p-4 bg-copper/10 rounded-2xl text-copper group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-copper">Piscina al Aire Libre</h3>
            <p className="text-muted text-sm leading-relaxed">
              Un área de solárium y piscina diseñada para refrescarte y descansar durante los días cálidos.
            </p>
          </div>

          {/* Card 3: Bar y Relax */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center space-y-4 group">
            <div className="p-4 bg-copper/10 rounded-2xl text-copper group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-copper">Bar y Tranquilidad</h3>
            <p className="text-muted text-sm leading-relaxed">
              Disfrutá de bebidas y tragos en nuestro bar integrado en un ambiente sumamente apacible.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Conocé el Complejo
          </h2>
          <p className="text-muted text-base">
            Un recorrido visual por nuestros espacios diseñados para tu comodidad y descanso.
          </p>
        </div>
        <ImageCarousel images={COMPLEX_GALLERY} />
      </section>

      {/* Google Maps Reviews Section */}
      <Reviews />

      {/* Location Section (Mapa) */}
      <section className="py-20 bg-surface-muted border-t border-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-primary tracking-tight">
              ¿Dónde Encontrarnos?
            </h2>
            <p className="text-muted text-base">
              Te esperamos en Paso de la Patria, Corrientes, cerca de la costa y con fácil acceso a los principales atractivos de la zona.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md border border-border bg-surface h-[450px] w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.9490164647405!2d-58.563464356501676!3d-27.311692602897146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944539e4e1ac6399%3A0xecfcf1856267c085!2sComplejo%20Paso%20Del%20Rey!5e0!3m2!1ses!2sar!4v1785859912605!5m2!1ses!2sar" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}