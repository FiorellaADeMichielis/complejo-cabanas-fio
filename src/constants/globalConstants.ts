export const CONFIG = {
  WHATSAPP_URL: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '5493790000000'}`,
  HEADER_OFFSET: 80,
  SCROLL_DELAY: 300,
} as const;
