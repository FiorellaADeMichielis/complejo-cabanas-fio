import { type JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout inyecta el Header, Footer y el Outlet */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}