import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/utils/ScrollToTop';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { UnitsPage } from '@/pages/UnitsPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { WhatsAppButton } from './components/ui/WhatsappButton';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Uun div flex-col con min-h-screen garantiza que el footer baje */}
      <div className="flex flex-col min-h-screen">
        <Header />
        
        {/* main ocupa el espacio restante (flex-grow) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/unidades" element={<UnitsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          
        </main>
        <Footer />
        <WhatsAppButton />
      </div>

    </BrowserRouter>
  );
}