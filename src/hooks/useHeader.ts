import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CONFIG } from '@/constants/globalConstants';

export function useHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  }, [pathname, closeMenu]);

  const handleFaqClick = useCallback(() => {
    const scrollToFaq = () => {
      const faqElement = document.getElementById('faq');
      if (!faqElement) return;

      const elementPosition = faqElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - CONFIG.HEADER_OFFSET;
      
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    };

    if (pathname === '/') {
      scrollToFaq();
    } else {
      navigate('/');
      setTimeout(scrollToFaq, CONFIG.SCROLL_DELAY);
    }
    closeMenu();
  }, [pathname, navigate, closeMenu]);

  return { isMobileMenuOpen, toggleMenu, closeMenu, handleHomeClick, handleFaqClick };
}
