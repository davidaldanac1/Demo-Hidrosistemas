import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pentagon, 
  Home, 
  Package, 
  Wrench, 
  Lightbulb, 
  GraduationCap, 
  Search, 
  Users, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  FileText,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ currentView, setView, onSelectService }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleServiceSelect = (serviceId) => {
    if (onSelectService) onSelectService(serviceId);
    setView(serviceId);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  };

  const handleNavigate = (viewId) => {
    setView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50 flex flex-col items-center px-4">
      <nav className="bg-white/100 backdrop-blur-md shadow-lg shadow-slate-200/50 border border-slate-100 rounded-full px-5 sm:px-5 md:px-7 py-2.5 flex items-center justify-between gap-3 md:gap-8 max-w-5xl w-full">
        
        {/* Logo Corporativo con Pentágono */}
        <div 
          onClick={() => handleNavigate('inicio')} 
          className="flex items-center gap-2 cursor-pointer group select-none shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-700 group-hover:scale-105 transition-transform">
            <Pentagon className="w-5 h-5 fill-red-700 text-red-700" />
          </div>
          <span className="font-extrabold text-sm md:text-base text-slate-800 tracking-wider">
            HIDROSISTEMAS
          </span>
        </div>

        {/* Menú Central Desktop (md+) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          
          {/* 1. Inicio */}
          <button
            onClick={() => setView('inicio')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              currentView === 'inicio' 
                ? 'text-sky-700 bg-sky-50 font-semibold' 
                : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Inicio</span>
          </button>

          {/* 2. Productos (Catálogo Interactivo) */}
          <button
            onClick={() => setView('pdf-catalog')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              currentView === 'pdf-catalog' || currentView === 'productos' || currentView === 'catalogo'
                ? 'text-sky-700 bg-sky-50 font-semibold' 
                : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Productos</span>
          </button>

          {/* 3. Servicios (Dropdown: Asesoría, Capacitación, Supervisión) */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                currentView === 'servicios' || currentView === 'asesoria' || currentView === 'capacitacion' || currentView === 'supervision' || servicesOpen
                  ? 'text-sky-700 bg-sky-50 font-semibold' 
                  : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Servicios</span>
              {servicesOpen ? (
                <ChevronUp className="w-3.5 h-3.5 text-sky-700" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                <button 
                  onClick={() => handleServiceSelect('asesoria')}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Asesoría</span>
                </button>
                <button 
                  onClick={() => handleServiceSelect('capacitacion')}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-800 transition-colors cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-sky-700" />
                  <span>Capacitación</span>
                </button>
                <button 
                  onClick={() => handleServiceSelect('supervision')}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4 text-emerald-700" />
                  <span>Supervisión</span>
                </button>
              </div>
            )}
          </div>

          {/* 4. Nosotros */}
          <button
            onClick={() => setView('nosotros')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              currentView === 'nosotros' 
                ? 'text-sky-700 bg-sky-50 font-semibold' 
                : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Nosotros</span>
          </button>
        </div>

        {/* Acciones Derecha (Contacto en Desktop + Botón Hamburguesa en Móvil) */}
        <div className="flex items-center gap-2">
          {/* Botón Contacto (Visible siempre, adaptable) */}
          <button 
            onClick={() => handleNavigate('contacto')}
            className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md shadow-red-700/20 hover:shadow-lg hover:shadow-red-700/30 flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Contacto</span>
          </button>

          {/* Botón Hamburguesa Móvil (< md) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable Móvil (< md) con Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden mt-2 w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-100 shadow-2xl p-4 flex flex-col gap-1.5 z-50"
          >
            {/* 1. Inicio */}
            <button
              onClick={() => handleNavigate('inicio')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-colors text-left cursor-pointer ${
                currentView === 'inicio' ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Home className="w-4 h-4 text-sky-700" />
              <span>Inicio</span>
            </button>

            {/* 2. Productos */}
            <button
              onClick={() => handleNavigate('pdf-catalog')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-colors text-left cursor-pointer ${
                currentView === 'pdf-catalog' || currentView === 'productos' || currentView === 'catalogo' ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Package className="w-4 h-4 text-sky-700" />
              <span>Productos (Catálogo y Libro)</span>
            </button>

            {/* 3. Servicios con acordeón */}
            <div className="rounded-2xl bg-slate-50/70 p-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-4 h-4 text-sky-700" />
                  <span>Servicios Especializados</span>
                </div>
                {mobileServicesOpen ? (
                  <ChevronUp className="w-4 h-4 text-sky-700" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {mobileServicesOpen && (
                <div className="pt-1 pb-1 px-1 space-y-1">
                  <button
                    onClick={() => handleServiceSelect('asesoria')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-amber-50 hover:text-amber-800 transition-colors text-left cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>Asesoría Técnica</span>
                  </button>
                  <button
                    onClick={() => handleServiceSelect('capacitacion')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-sky-50 hover:text-sky-800 transition-colors text-left cursor-pointer"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-sky-700" />
                    <span>Capacitación en Obra</span>
                  </button>
                  <button
                    onClick={() => handleServiceSelect('supervision')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-800 transition-colors text-left cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Supervisión de Proyectos</span>
                  </button>
                </div>
              )}
            </div>

            {/* 4. Nosotros */}
            <button
              onClick={() => handleNavigate('nosotros')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-colors text-left cursor-pointer ${
                currentView === 'nosotros' ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4 text-sky-700" />
              <span>Nosotros</span>
            </button>

            {/* 5. Contacto */}
            <button
              onClick={() => handleNavigate('contacto')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-xs font-semibold transition-colors text-left cursor-pointer ${
                currentView === 'contacto' ? 'bg-red-50 text-red-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Mail className="w-4 h-4 text-red-700" />
              <span>Contacto Directo</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
