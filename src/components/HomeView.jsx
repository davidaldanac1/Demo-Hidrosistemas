import React from 'react';
import { motion } from 'framer-motion';
import { FileText, PhoneCall, ChevronDown, ShieldCheck } from 'lucide-react';
import InteractiveHero from './InteractiveHero';
import StickyCardStack from './ui/StickyCardStack';
import { partnerBrands } from '../data/mockData';

export default function HomeView({ onNavigate }) {
  const scrollToInteractive = () => {
    const el = document.getElementById('seccion-interactiva');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variantes de animación en cascada (Stagger) para el Hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 110
      }
    }
  };

  return (
    <div className="w-full bg-slate-50 overflow-x-clip">
      
      {/* SECCIÓN 1: Contenedor del Hero con Imagen de Fondo y Gradiente (Sticky Layer 1) */}
      <section className="min-h-screen relative md:sticky top-0 z-10 w-full flex flex-col justify-between overflow-hidden select-none">
        
        {/* Capa Base: Imagen de Fondo de Alta Resolución */}
        <img 
          src="/hero-industrial.jpg" 
          alt="Infraestructura Hidráulica Industrial" 
          className="object-cover w-full h-full absolute inset-0 z-0 select-none pointer-events-none"
        />

        {/* Capa de Gradiente y Contraste (Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/60 to-slate-50 z-10 pointer-events-none" />

        {/* Bloque Central de Contenido */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-32 md:pt-40 w-full flex flex-col items-center"
        >

          {/* Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-5xl mx-auto drop-shadow-md text-center"
          >
            Especialistas en Sistemas Hidráulicos e Infraestructura
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-slate-200 mt-6 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm text-center"
          >
            Soluciones integrales en tuberías, válvulas y proyectos pluviales con estricto cumplimiento normativo para la industria y vivienda.
          </motion.p>

          {/* Botones de Acción (CTAs) */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            {/* Botón 1: Catálogo */}
            <button
              onClick={() => onNavigate('pdf-catalog', 0, false)}
              className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full shadow-xl shadow-sky-900/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-5 h-5 text-sky-200" />
              <span>Ver Catálogo PDF</span>
            </button>

            {/* Botón 2: Asesor / Contacto */}
            <button
              onClick={() => onNavigate('contacto')}
              className="w-full sm:w-auto bg-slate-900/50 hover:bg-slate-900/75 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-5 h-5 text-white" />
              <span>Contactar Asesor</span>
            </button>
          </motion.div>

          {/* Carrusel de Marcas Distribuidas (Centrado, Extendido y con Mayor Legibilidad) */}
          <motion.div 
            variants={itemVariants}
            className="relative z-20 max-w-6xl md:max-w-7xl w-full mx-auto px-2 sm:px-4 mt-12 md:mt-14 mb-4 flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-sky-200/90 font-bold mb-4 block text-center drop-shadow-sm">
              Nuestras Marcas Distribuidas
            </span>

            <div className="relative w-full overflow-hidden py-1.5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex items-center gap-4 sm:gap-6 w-max"
                animate={{ x: ['0%', '-33.333%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 60
                }}
              >
                {[...partnerBrands, ...partnerBrands, ...partnerBrands].map((brand, idx) => (
                  <div
                    key={`${brand.id}-${idx}`}
                    className="flex items-center gap-3.5 sm:gap-4 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-slate-950/40 hover:bg-slate-950/60 border border-white/20 text-white backdrop-blur-md transition-all duration-200 shrink-0 select-none group cursor-default shadow-lg"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 group-hover:bg-sky-500/30 text-sky-300 font-extrabold text-sm sm:text-base flex items-center justify-center transition-colors border border-sky-400/30 shrink-0 shadow-inner">
                      {brand.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="text-left pr-2">
                      <p className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide leading-tight group-hover:text-sky-200 transition-colors whitespace-nowrap">
                        {brand.name}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Transición hacia el Esquema Pluvial (Indicador Animado) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={scrollToInteractive}
          className="relative z-20 flex flex-col items-center gap-2 cursor-pointer group select-none pb-6 text-center mt-2"
        >
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-600 group-hover:text-sky-700 transition-colors">
            Descubre el Sistema Pluvial
          </span>
          <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-600 group-hover:bg-sky-50 group-hover:border-sky-300 group-hover:text-sky-800 group-hover:scale-110 transition-all">
            <ChevronDown className="w-5 h-5 animate-bounce text-slate-600" />
          </div>
        </motion.div>

      </section>

      {/* SECCIÓN 2: Esquema Interactivo de Infraestructura Pluvial (Parallax Stacking Layer 2) */}
      <section 
        id="seccion-interactiva" 
        className="relative md:sticky top-0 z-20 min-h-screen w-full bg-slate-900 shadow-[0_-30px_70px_rgba(0,0,0,0.85)] border-t border-slate-800 flex flex-col justify-center"
      >
        <InteractiveHero onNavigateToCatalog={(page) => onNavigate('pdf-catalog', page, true)} />
      </section>

      {/* SECCIÓN 3: Categorías Principales y Soluciones Normadas (Parallax Stacking Layer 3) */}
      <section
        id="seccion-productos"
        className="relative z-30 min-h-screen w-full bg-slate-50 shadow-[0_-30px_70px_rgba(0,0,0,0.18)] border-t border-slate-200 flex flex-col justify-center"
      >
        <StickyCardStack onNavigate={onNavigate} />
      </section>

    </div>
  );
}

