import React from 'react';
import { ArrowRight, Layers, Gauge, Box, ShieldCheck, CheckCircle2, BookOpen } from 'lucide-react';

const defaultCategories = [
  {
    id: 'tuberias',
    code: 'SEC-01 // TUBERÍAS',
    title: 'Tuberías Especializadas',
    subtitle: 'PEAD Corrugado y PVC Hidráulico C-40/C-80',
    desc: 'Sistemas de conducción presurizada y flujo por gravedad para redes municipales, sanitarias e industriales con hermeticidad certificada.',
    tag: 'PEAD · PVC C-40/80 · Alcantarillado',
    page: 3,
    icon: Layers,
    specs: [
      { label: 'Normativa', val: 'NMX-E-242 / ASTM D1785' },
      { label: 'Diámetros', val: '1/2" hasta 48" de paso' },
      { label: 'Unión', val: 'Campana bicapa / Termofusión' }
    ]
  },
  {
    id: 'valvulas',
    code: 'SEC-02 // VALVULERÍA',
    title: 'Conexiones y Valvulería',
    subtitle: 'Fierro Fundido, Compuerta y Retención AWWA',
    desc: 'Componentes de seccionamiento y regulación para redes hidráulicas de alta presión, con recubrimiento epóxico de grado alimenticio.',
    tag: 'FoFo · Válvulas AWWA · Conexiones',
    page: 15,
    icon: Gauge,
    specs: [
      { label: 'Estándar', val: 'AWWA C509 / C515' },
      { label: 'Presión', val: '150 - 250 PSI clase trabajo' },
      { label: 'Cuerpo', val: 'Fierro dúctil / Asiento elástico' }
    ]
  },
  {
    id: 'drenaje',
    code: 'SEC-03 // URBANO & PLUVIAL',
    title: 'Drenaje, Brocales y Rejillas',
    subtitle: 'Pozos de Visita, Bocas de Tormenta y Polímero PEAR',
    desc: 'Mobiliario subterráneo y superficial de alta durabilidad sin valor de chatarra (anti-robo), con absorción de impacto y cero ruido al tráfico vehicular.',
    tag: 'Brocales PEAR · Rejillas · Pozos',
    page: 22,
    icon: Box,
    specs: [
      { label: 'Carga', val: 'Tráfico pesado SCT > 25 Ton' },
      { label: 'Material', val: 'PEAR Polímero no reciclable' },
      { label: 'Seguridad', val: 'Cero valor chatarra / Anti-ruido' }
    ]
  }
];

export default function StickyCardStack({ items = defaultCategories, onNavigate }) {
  const handleCardClick = (page = 0) => {
    if (onNavigate) {
      onNavigate('pdf-catalog', page, false);
    }
  };

  return (
    <div className="w-full py-16 md:py-24 select-none">
      
      {/* Encabezado Corporativo de Sección */}
      <div className="max-w-4xl mx-auto px-6 pb-12 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 mb-3 inline-block">
          Ingeniería de Materiales Certificados
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          Líneas de Solución Normada
        </h2>
        <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2 leading-relaxed">
          Suministro integral para redes de conducción hidráulica, drenaje sanitario e infraestructura pluvial.
        </p>
      </div>

      {/* Grid de Placas de Ingeniería B2B (Limpio, Responsivo y sin Scroll Blocking) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {items.map((item, index) => {
          const IconComponent = item.icon || Layers;

          return (
            <div
              key={item.id || index}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge Superior Técnico */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs text-slate-500 font-mono tracking-wider font-semibold">
                    {item.code || `CAT-0${index + 1} // INDUSTRIAL`}
                  </span>
                  <span className="text-[10px] text-sky-700 font-medium font-mono bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {item.tag}
                  </span>
                </div>

                {/* Título Robusto */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-tight group-hover:text-sky-800 transition-colors">
                  {item.title}
                </h3>

                {/* Subtítulo Técnico */}
                {item.subtitle && (
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    {item.subtitle}
                  </p>
                )}

                {/* Placeholder Visual Técnico (Aspect Ratio 16/9) */}
                <div className="aspect-[16/9] bg-slate-100/90 rounded-2xl w-full flex flex-col items-center justify-center p-4 my-5 border border-slate-200/70 relative overflow-hidden group-hover:bg-sky-50/40 transition-colors">
                  
                  {/* Patrón reticular de ingeniería sutil */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                      backgroundSize: '16px 16px'
                    }} 
                  />

                  {/* Icono e Insignia Central */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-slate-700 group-hover:text-sky-700 group-hover:scale-105 transition-all mb-2 z-10">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Metadatos Industriales de Ficha */}
                  <div className="text-center z-10">
                    <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider block">
                      {item.title}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono mt-0.5 inline-flex items-center gap-1 justify-center">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      ESPECIFICACIÓN VIGENTE
                    </span>
                  </div>

                  {/* Sello de Calidad Inferior */}
                  <div className="absolute bottom-2 right-2.5 text-[8px] font-mono text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-sky-700" />
                    <span>ISO / NMX</span>
                  </div>
                </div>

                {/* Descripción Corporativa */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Micro-especificaciones técnicas de ingeniería */}
                {item.specs && item.specs.length > 0 && (
                  <div className="space-y-2 w-full mt-4 pt-4 border-t border-slate-100">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-left text-xs">
                        <span className="text-[10px] uppercase font-mono text-slate-400">
                          {spec.label}
                        </span>
                        <span className="font-semibold text-slate-700 font-mono text-[11px]">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Botón B2B Ghost */}
              <button
                type="button"
                onClick={() => handleCardClick(item.page || 0)}
                className="border border-slate-300 text-slate-700 hover:text-sky-700 hover:border-sky-600 px-4 py-2.5 rounded-xl text-xs font-semibold mt-6 transition-all inline-flex items-center justify-between w-full cursor-pointer bg-white hover:bg-sky-50/50 shadow-2xs group/btn"
              >
                <span>Consultar Ficha en Catálogo</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-sky-700 group-hover/btn:translate-x-1 transition-all" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Botón de Catálogo Completo */}
      <div className="flex justify-center mt-12 px-6">
        <button
          type="button"
          onClick={() => handleCardClick(0)}
          className="inline-flex items-center gap-2.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-7 py-3.5 rounded-full transition-all cursor-pointer shadow-xs hover:shadow-sm hover:border-slate-400"
        >
          <BookOpen className="w-4 h-4 text-sky-700" />
          <span>Explorar Catálogo Técnico Completo (38 Páginas)</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

    </div>
  );
}
