import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/global.css';
const rootElement = document.getElementById('root');
// Verificación estricta de nulidad para cumplir con TypeScript strict mode
if (!rootElement) {
  throw new Error('Error crítico: No se encontró el elemento root en el DOM');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);