import React from 'react';
import { Pentagon } from 'lucide-react';
export default function Footer({ setView, onSelectService }) {
  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleNavigate = (view) => {
    trackEvent('footer_navigation', { destination: view });
    if (setView) setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId) => {
    trackEvent('footer_service_navigation', { service: serviceId });
    if (onSelectService) onSelectService(serviceId);
    if (setView) setView(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { url: 'https://wa.me/7712167150', source: 'footer' });
  };

  return (
    <footer className="w-full bg-[#232323] text-white border-t border-neutral-800 select-none">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        
        {/* Grilla Principal de 3 Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* Columna 1: HIDROSISTEMAS (Lg: 5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-700 group-hover:scale-105 transition-transform">
                <Pentagon className="w-5 h-5 fill-red-700 text-red-700" />
              </div>
              <span className="font-extrabold text-bold md:text-base text-white tracking-wider">
                HIDROSISTEMAS
              </span>
             </div> 
            {/* Línea roja decorativa */}
            <div className="w-10 h-0.5 bg-red-700 mt-2 mb-4" />
            
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-sm mb-5 font-normal">
              Tenemos las mejores marcas, con la calidad que buscas.
            </p>

            {/* Redes Sociales con Íconos Oficiales */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('social_click', { platform: 'facebook' })}
                className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Facebook Hidrosistemas"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/7712167150"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp Hidrosistemas"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.3" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('social_click', { platform: 'instagram' })}
                className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram Hidrosistemas"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios (Lg: 4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-extrabold text-base md:text-lg tracking-wider text-white">
              Servicios
            </h3>
            {/* Línea roja decorativa */}
            <div className="w-10 h-0.5 bg-red-700 mt-2 mb-4" />

            <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleServiceClick('asesoria')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Asesoría
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('capacitacion')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Capacitación
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('supervision')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Supervisión
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces Rápidos (Lg: 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-extrabold text-base md:text-lg tracking-wider text-white">
              Enlaces Rápidos
            </h3>
            {/* Línea roja decorativa */}
            <div className="w-10 h-0.5 bg-red-700 mt-2 mb-4" />

            <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('pdf-catalog')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-normal"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Separador y Derechos Reservados */}
        <div className="border-t border-neutral-800/80 pt-6 text-center">
          <p className="text-xs text-slate-400 font-normal">
            © 2026 Hidrosistemas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

