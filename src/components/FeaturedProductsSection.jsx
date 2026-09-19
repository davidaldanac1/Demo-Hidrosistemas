import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowRight, 
  Layers, 
  Gauge, 
  Box, 
  ShieldCheck, 
  BookOpen 
} from 'lucide-react';

export default function FeaturedProductsSection({ onNavigate }) {
  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleCatalogNavigate = (page = 0, categoryName = 'General') => {
    trackEvent('featured_category_click', { category: categoryName, page });
    if (onNavigate) {
      onNavigate('pdf-catalog', 0, false);
    }
  };

  const categories = [
    {
      id: 'tuberias',
      title: 'Tuberías Especializadas',
      desc: 'Sistemas en PEAD corrugado, PVC hidráulico C-40/C-80, alcantarillado métrico y polietileno de alta densidad.',
      linkText: 'Ver en Catálogo (Pág. 3 y 21) →',
      page: 3,
      icon: Layers,
      tag: 'PEAD · PVC C-40/80 · Alcantarillado'
    },
    {
      id: 'valvulas',
      title: 'Conexiones y Valvulería',
      desc: 'Piezas de fierro fundido, válvulas de compuerta, mariposa, retención y conexiones de inserción para alta presión.',
      linkText: 'Ver en Catálogo (Pág. 15 y 18) →',
      page: 15,
      icon: Gauge,
      tag: 'FoFo · Válvulas AWWA · Conexiones'
    },
    {
      id: 'infraestructura',
      title: 'Accesorios de Infraestructura',
      desc: 'Los accesorios para tuberia son componentes especializados diseñados para regular, controlar y proteger sistemas de conduccion de fluidos.',
      linkText: 'Ver en Catálogo (Pág. 22 y 31) →',
      page: 22,
      icon: Box,
      tag: 'Brocales PEAR · Rejillas · Pozos'
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-16 border-t border-slate-200/70 select-none">
      
      {/* 1. Encabezado de Sección */}
      <div className="max-w-6xl mx-auto px-6 pb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Líneas de Solución Normada
        </h2>
        <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto mt-2 leading-relaxed">
          Materiales certificados bajo estándares nacionales e internacionales para conducción hidráulica, sanitaria y pluvial.
        </p>
      </div>

      {/* 2. Grid de Categorías Principales (3 Columnas Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Placeholder visual superior con aspect-16/9 */}
                <div className="aspect-[16/9] bg-slate-100 rounded-xl mb-4 flex flex-col items-center justify-center text-slate-400 text-xs font-medium relative overflow-hidden group-hover:bg-sky-50/60 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs flex items-center justify-center text-slate-500 group-hover:text-sky-700 group-hover:scale-105 transition-all mb-1.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 group-hover:text-sky-800 transition-colors">
                    {cat.tag}
                  </span>
                </div>

                {/* Título */}
                <h3 className="font-bold text-slate-800 text-base group-hover:text-sky-700 transition-colors">
                  {cat.title}
                </h3>

                {/* Descripción */}
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-normal">
                  {cat.desc}
                </p>
              </div>

              {/* Enlace inferior */}
              <button
                onClick={() => handleCatalogNavigate(cat.page, cat.title)}
                className="w-full text-left text-xs font-semibold text-sky-700 hover:text-sky-900 pt-4 border-t border-slate-50 mt-4 cursor-pointer flex items-center justify-between transition-colors group/link"
              >
                <span>{cat.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. Botón de Catálogo Completo */}
      <div className="flex justify-center px-6">
        <button
          onClick={() => {
            trackEvent('open_full_catalog_click', { pages: 38 });
            if (onNavigate) {
              onNavigate('pdf-catalog', 0, false);
            }
          }}
          className="inline-flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-6 py-3 rounded-full transition-all cursor-pointer shadow-xs hover:shadow-sm hover:border-slate-300"
        >
          <BookOpen className="w-4 h-4 text-sky-700" />
          <span>Abrir Catálogo Completo (38 Páginas)</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

    </section>
  );
}

