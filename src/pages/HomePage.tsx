import { type JSX } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section: Inmersión visual y propuesta de valor inmediata */}
      <section className="relative bg-primary text-white py-28 sm:py-36 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-25 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1600&auto=format&fit=crop" 
            alt="Complejo Cabañas Fio en entorno natural" 
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs uppercase tracking-widest bg-accent/90 text-white px-3 py-1.5 rounded-full font-medium shadow-sm">
            Hospedaje en la Naturaleza
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Complejo Paso del Rey
          </h1>
          <p className="text-lg sm:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Features Section: Validación de confianza y diferenciales */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted text-base">
            Cuidamos cada detalle para garantizar una estadía inolvidable, combinando la calidez artesanal con servicios de primer nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center space-y-4 group">
            <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-5 6h3l-4 6h3l-5 6h18l-5-6h3l-4-6h3L12 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary">Entorno Natural</h3>
            <p className="text-muted text-sm leading-relaxed">
              Rodeados de vegetación autóctona y aire puro, ideales para la desconexión total y el descanso profundo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center space-y-4 group">
            <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary">Lorem ipsum dolor sit.</h3>
            <p className="text-muted text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus culpa commodi, rerum repellat, distinctio harum cumque nesciunt, itaque eius perferendis sint voluptatum
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border flex flex-col items-center text-center space-y-4 group">
            <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary">Atención Personalizada</h3>
            <p className="text-muted text-sm leading-relaxed">
              Atendido directamente por sus dueños, garantizando una hospitalidad cercana, cálida y de absoluta confianza.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section: Invitación a la acción intermedia */}
      <section className="py-16 bg-surface-muted border-y border-border px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            Comenzá a planear tu próxima escapada
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Descubrí nuestras opciones de alojamiento y encontrá la cabaña perfecta para vos y tu familia.
          </p>
          <div className="pt-2">
            <Link to="/cabins">
              <Button variant="primary" size="md" className="bg-primary hover:bg-primary/90 text-white">
                Ver Cabañas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section: Mapa interactivo (Paso de la Patria) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-primary tracking-tight">
            ¿Dónde Encontrarnos?
          </h2>
          <p className="text-muted text-base">
            Te esperamos en Paso de la Patria, Corrientes, un enclave privilegiado junto al río.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-md border border-border bg-surface h-[450px] w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.0424138747394!2d-58.565325784085736!3d-27.311861153108556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944539e4e1ac6399%3A0xecfcf1856267c085!2sComplejo%20Paso%20Del%20Rey!5e0!3m2!1ses-419!2sar!4v1785804960619!5m2!1ses-419!2sar" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </section>
    </div>
  );
}