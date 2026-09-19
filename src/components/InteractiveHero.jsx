import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  ChevronRight,
  Droplet, 
  Filter, 
  Box, 
  Cpu, 
  Sprout 
} from 'lucide-react';

export default function InteractiveHero({ onNavigateToCatalog }) {
  // Estado para el hotspot seleccionado (1 al 5) o null
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Cerrar al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveHotspot(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const hotspots = [
    {
      id: '1',
      numero: '1',
      nombre: 'Captación y Filtrado Preliminar',
      zona: 'Entradas de Captación / Superficie',
      catalogPage: 5,
      posicion: { top: '60%', left: '10%' },
      color: 'bg-red-600',
      pingColor: 'bg-red-400',
      icono: Droplet,
      datos: {
        titulo: 'Entradas de Captación y Filtración Preliminar',
        categoria: 'Bocas de Tormenta y Rejillas Pluviales',
        descripcion: 'Módulos de captación de escorrentía superficial diseñados con trampas de sedimentos y sólidos mayores para evitar obstrucciones en la red.',
        productos: [
          { id: 'h1-1', nombre: 'Boca de Tormenta 60x70 cm PEAR', norma: 'NMX Tráfico Pesado', sku: 'BT-6070', tag: 'Captación Vial' },
          { id: 'h1-2', nombre: 'Rejilla de Acero Galvanizado Fig 48-RHA', norma: 'Alta Resistencia ASTM', sku: 'RHA-48', tag: 'Tráfico Intenso' },
          { id: 'h1-3', nombre: 'Coladera Pluvial de Fierro Fundido', norma: 'ASTM A48 Clase 30', sku: 'CP-FF01', tag: 'Desbaste Primario' }
        ]
      }
    },
    {
      id: '2',
      numero: '2',
      nombre: 'Pozos de Filtración y Decantación',
      zona: 'Tratamiento Primario',
      catalogPage: 5,
      posicion: { top: '65%', left: '24%' },
      color: 'bg-sky-600',
      pingColor: 'bg-sky-400',
      icono: Filter,
      datos: {
        titulo: 'Pozos de Filtración y Desbaste Fino',
        categoria: 'Cámaras y Pozos de Filtrado',
        descripcion: 'Cámaras de inspección con filtros ciclónicos y decantadores que retienen partículas finas y grasas antes de ingresar a la cisterna.',
        productos: [
          { id: 'h2-1', nombre: 'Pozo de Visita Modular PEAR', norma: 'Hermeticidad Total', sku: 'PV-PEAR', tag: 'Registro Sanitario' },
          { id: 'h2-2', nombre: 'Filtro Ciclónico para Agua Pluvial', norma: 'Retención de Partículas', sku: 'FLT-CIC01', tag: 'Ciclónico 98%' },
          { id: 'h2-3', nombre: 'Brocal y Tapa Hermética 60 cm', norma: 'Normativa SCT / Urbana', sku: 'BR-PV01', tag: 'Cierre Hermético' }
        ]
      }
    },
    {
      id: '3',
      numero: '3',
      nombre: 'Cisterna Modular Subterránea',
      zona: 'Atenuación e Infiltración Pluvial',
      catalogPage: 3,
      posicion: { top: '78%', left: '48%' },
      color: 'bg-sky-600',
      pingColor: 'bg-sky-400',
      icono: Box,
      datos: {
        titulo: 'Cisterna Modular (Stormwater Attenuation Crates)',
        categoria: 'Celdas de Infiltración y Retención',
        descripcion: 'Estructuras modulares de alta capacidad de carga para almacenamiento subterráneo, amortiguamiento pluvial o infiltración al manto freático.',
        productos: [
          { id: 'h3-1', nombre: 'Celdas Pluviales de Infiltración / Retención', norma: '95% Volumen Útil', sku: 'CEL-PLUV', tag: 'Amortiguamiento' },
          { id: 'h3-2', nombre: 'Geomembrana y Geotextil No Tejido', norma: 'Polipropileno 200g/m²', sku: 'GEO-200', tag: 'Impermeabilización' },
          { id: 'h3-3', nombre: 'Tubería Corrugada PAD Ranurada', norma: 'NMX-E-242/1-ANCE', sku: 'PEAD-RAN', tag: 'Conducción / Dren' }
        ]
      }
    },
    {
      id: '4',
      numero: '4',
      nombre: 'Gabinete de Control y Bombeo',
      zona: 'Automatización y Presurización',
      catalogPage: 4,
      posicion: { top: '50%', left: '73%' },
      color: 'bg-red-600',
      pingColor: 'bg-red-400',
      icono: Cpu,
      datos: {
        titulo: 'Gabinete de Control y Presurización',
        categoria: 'Equipos de Bombeo y Desinfección',
        descripcion: 'Estación de bombeo y purificación con bombas sumergibles, dosificación y control automatizado para la recirculación del agua tratada.',
        productos: [
          { id: 'h4-1', nombre: 'Bomba Sumergible Multietapas Acero Inox', norma: '1.5 HP Alta Eficiencia', sku: 'BOM-SUM15', tag: 'Impulsión' },
          { id: 'h4-2', nombre: 'Tablero de Control y Alternancia Automatizado', norma: 'Gabinete IP65', sku: 'TAB-CTRL', tag: 'Automatización' },
          { id: 'h4-3', nombre: 'Sistema de Filtración de Discos y Lámpara UV', norma: 'Desinfección Bacteriológica', sku: 'FLT-UV01', tag: 'Purificación UV' }
        ]
      }
    },
    {
      id: '5',
      numero: '5',
      nombre: 'Reúso: Riego, Limpieza y Sanitario',
      zona: 'Distribución y Aprovechamiento',
      catalogPage: 3,
      posicion: { top: '24%', left: '82%' },
      color: 'bg-emerald-600',
      pingColor: 'bg-emerald-400',
      icono: Sprout,
      datos: {
        titulo: 'Red de Reutilización y Conducción',
        categoria: 'Riego, Limpieza y Red Sanitaria',
        descripcion: 'Líneas de distribución presurizada para riego de áreas verdes, lavado de vialidades y alimentación de sanitarios (WC).',
        productos: [
          { id: 'h5-1', nombre: 'Tubería Morada para Agua Tratada PVC 3/4" - 2"', norma: 'Identificación Oficial', sku: 'TUB-MORADA', tag: 'Línea de Reúso' },
          { id: 'h5-2', nombre: 'Aspersores y Electroválvulas de Riego', norma: 'Control Solenoide 24V', sku: 'ASP-RIEGO', tag: 'Microaspersión' },
          { id: 'h5-3', nombre: 'Válvula Reguladora de Presión y Antirretorno', norma: 'Bronce Cédula Pesada', sku: 'VAL-REG01', tag: 'Regulación Red' }
        ]
      }
    }
  ];

  // Geometría y conexiones de líneas SVG del Mapa Mental (Porcentajes relativos al canvas 0-100)
  const mindMapConfig = {
    '1': {
      origin: { x: 10, y: 60 },
      nodes: [
        {
          cardStyle: { left: '26%', top: '22%' },
          end: { x: 26, y: 22 },
          c1: { x: 16, y: 60 },
          c2: { x: 18, y: 22 }
        },
        {
          cardStyle: { left: '35%', top: '54%' },
          end: { x: 35, y: 54 },
          c1: { x: 22, y: 60 },
          c2: { x: 26, y: 54 }
        },
        {
          cardStyle: { left: '26%', top: '82%' },
          end: { x: 26, y: 82 },
          c1: { x: 16, y: 60 },
          c2: { x: 18, y: 82 }
        }
      ]
    },
    '2': {
      origin: { x: 24, y: 65 },
      nodes: [
        {
          cardStyle: { left: '13%', top: '24%' },
          end: { x: 16, y: 28 },
          c1: { x: 24, y: 44 },
          c2: { x: 16, y: 38 }
        },
        {
          cardStyle: { left: '42%', top: '26%' },
          end: { x: 42, y: 26 },
          c1: { x: 30, y: 46 },
          c2: { x: 36, y: 26 }
        },
        {
          cardStyle: { left: '48%', top: '68%' },
          end: { x: 48, y: 68 },
          c1: { x: 36, y: 65 },
          c2: { x: 42, y: 68 }
        }
      ]
    },
    '3': {
      origin: { x: 48, y: 78 },
      nodes: [
        {
          cardStyle: { left: '20%', top: '32%' },
          end: { x: 28, y: 34 },
          c1: { x: 42, y: 58 },
          c2: { x: 32, y: 46 }
        },
        {
          cardStyle: { left: '48%', top: '22%' },
          end: { x: 48, y: 28 },
          c1: { x: 48, y: 56 },
          c2: { x: 48, y: 38 }
        },
        {
          cardStyle: { left: '76%', top: '32%' },
          end: { x: 68, y: 34 },
          c1: { x: 54, y: 58 },
          c2: { x: 64, y: 46 }
        }
      ]
    },
    '4': {
      origin: { x: 73, y: 50 },
      nodes: [
        {
          cardStyle: { left: '44%', top: '22%' },
          end: { x: 52, y: 25 },
          c1: { x: 64, y: 50 },
          c2: { x: 56, y: 25 }
        },
        {
          cardStyle: { left: '36%', top: '52%' },
          end: { x: 44, y: 52 },
          c1: { x: 58, y: 50 },
          c2: { x: 48, y: 52 }
        },
        {
          cardStyle: { left: '44%', top: '80%' },
          end: { x: 52, y: 80 },
          c1: { x: 64, y: 50 },
          c2: { x: 56, y: 80 }
        }
      ]
    },
    '5': {
      origin: { x: 82, y: 24 },
      nodes: [
        {
          cardStyle: { left: '52%', top: '18%' },
          end: { x: 60, y: 20 },
          c1: { x: 72, y: 24 },
          c2: { x: 64, y: 20 }
        },
        {
          cardStyle: { left: '46%', top: '50%' },
          end: { x: 54, y: 52 },
          c1: { x: 68, y: 24 },
          c2: { x: 60, y: 52 }
        },
        {
          cardStyle: { left: '58%', top: '78%' },
          end: { x: 66, y: 78 },
          c1: { x: 74, y: 24 },
          c2: { x: 70, y: 78 }
        }
      ]
    }
  };

  const activeSpot = hotspots.find(h => h.id === activeHotspot);
  const currentMindMap = activeHotspot ? mindMapConfig[activeHotspot] : null;

  return (
    <div className="w-full bg-slate-900 py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      
      {/* 1. Resplandor de Fondo Decorativo detrás del Lienzo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] md:w-[950px] md:h-[550px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Encabezado de la Sección (Fuera de la Imagen) */}
      <div className="max-w-3xl mx-auto text-center mb-5 md:mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Esquema de Infraestructura Pluvial
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed font-normal">
          Haz clic en los nodos interactivos del sistema para explorar los componentes, especificaciones y soluciones normadas aplicadas a cada etapa del ciclo del agua.
        </p>

        {/* Selector Rápido de Fases */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {hotspots.map((h) => {
            const isSelected = activeHotspot === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(isSelected ? null : h.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-sky-600 border-sky-400 text-white shadow-md shadow-sky-500/30 scale-105'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 backdrop-blur-sm'
                }`}
              >
                <span className={`w-4 h-4 rounded-full ${h.color} text-white font-extrabold text-[10px] flex items-center justify-center`}>
                  {h.numero}
                </span>
                <span className="hidden sm:inline">{h.nombre}</span>
                <span className="sm:hidden">Fase {h.numero}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. El Lienzo Central (Canvas Showcase) del Modelo 3D */}
      <div className="relative max-w-6xl mx-auto w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl shadow-sky-900/20 group">
        
        {/* Imagen del Esquema dentro del Lienzo */}
        <img 
          src="/sistema-pluvial.png" 
          alt="Esquema de Infraestructura Pluvial" 
          className="w-full h-full object-cover object-center opacity-90 select-none pointer-events-none"
        />

        {/* Gradiente sutil para profundidad visual */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10 pointer-events-none" />

        {/* 4. Puntos Interactivos (Hotspots) con Anillos Animados */}
        {hotspots.map((spot) => {
          const isSelected = activeHotspot === spot.id;
          return (
            <div
              key={spot.id}
              style={{ top: spot.posicion.top, left: spot.posicion.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              {/* Pulsador Circular con Tailwind y animate-ping */}
              <button
                onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 focus:outline-none group/btn"
                aria-label={`Ver especificaciones de la fase ${spot.numero}: ${spot.nombre}`}
              >
                {/* Anillo animado animate-ping */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping" />
                
                {/* Círculo central con borde */}
                <span className={`relative inline-flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full ${spot.color} border-2 border-white text-white font-extrabold text-xs md:text-sm shadow-xl transition-all ${
                  isSelected ? 'ring-4 ring-sky-300 scale-110 shadow-sky-500/50' : 'hover:brightness-110'
                }`}>
                  {spot.numero}
                </span>
              </button>

              {/* Tooltip flotante al pasar el cursor */}
              {!activeHotspot && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 pointer-events-none transition-all duration-200 z-30 hidden sm:block opacity-0 group-hover/btn:opacity-100 -translate-y-1">
                  <div className="bg-slate-900/95 text-white text-[10px] md:text-[11px] font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{spot.nombre}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* 5. CAPA DE MAPA MENTAL: TARJETAS CON LÍNEAS DESPLEGABLES */}
        <AnimatePresence>
          {activeHotspot && activeSpot && currentMindMap && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-30"
            >
              {/* Backdrop translúcido con cierre al clic fuera */}
              <div 
                onClick={() => setActiveHotspot(null)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] cursor-pointer"
                title="Haz clic para volver al esquema general"
              />

              {/* Barra Consola Superior dentro del Canvas */}
              <motion.div 
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08, duration: 0.2 }}
                className="absolute top-3 sm:top-4 left-3 sm:left-6 right-3 sm:right-6 z-40 flex items-center justify-between gap-3 bg-slate-900/95 backdrop-blur-md px-3.5 sm:px-5 py-2 rounded-2xl border border-slate-700/80 shadow-2xl pointer-events-auto"
              >
                {/* Información de la Fase Activa */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-xl ${activeSpot.color} text-white font-extrabold text-xs flex items-center justify-center shrink-0 border border-white/20 shadow-xs`}>
                    {activeSpot.numero}
                  </div>
                  <div className="truncate">
                    <p className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
                      {activeSpot.nombre}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate hidden sm:block">
                      {activeSpot.datos.categoria} · {activeSpot.datos.productos.length} componentes normados
                    </p>
                  </div>
                </div>

                {/* Acciones de la Consola */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onNavigateToCatalog(activeSpot.catalogPage, true)}
                    className="inline-flex items-center gap-1.5 bg-sky-700 hover:bg-sky-600 text-white font-semibold text-[11px] sm:text-xs px-3 py-1.5 rounded-xl transition-all shadow-sm hover:shadow-sky-700/30 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Catálogo (Pág. {activeSpot.catalogPage})</span>
                    <span className="sm:hidden">Pág. {activeSpot.catalogPage}</span>
                  </button>

                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
                    aria-label="Cerrar mapa mental"
                    title="Cerrar mapa mental (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* VERSIÓN DESKTOP Y TABLET: LÍNEAS DESPLEGABLES SVG Y TARJETAS FLOTANTES */}
              <div className="hidden md:block absolute inset-0 pointer-events-none">
                
                {/* Lienzo SVG con viewBox 0 0 100 100 para líneas de conexión curvas */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-30" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="mindMapGradShowcase" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.95" />
                    </linearGradient>
                    <filter id="glowEffectShowcase" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="0.7" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Líneas Conectoras hacia cada Tarjeta */}
                  {currentMindMap.nodes.map((node, idx) => (
                    <g key={`branch-${idx}`}>
                      {/* Resplandor suave */}
                      <motion.path
                        d={`M ${currentMindMap.origin.x} ${currentMindMap.origin.y} C ${node.c1.x} ${node.c1.y}, ${node.c2.x} ${node.c2.y}, ${node.end.x} ${node.end.y}`}
                        fill="none"
                        stroke="rgba(56, 189, 248, 0.4)"
                        strokeWidth="1.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                      />

                      {/* Línea Segmentada Técnica */}
                      <motion.path
                        d={`M ${currentMindMap.origin.x} ${currentMindMap.origin.y} C ${node.c1.x} ${node.c1.y}, ${node.c2.x} ${node.c2.y}, ${node.end.x} ${node.end.y}`}
                        fill="none"
                        stroke="url(#mindMapGradShowcase)"
                        strokeWidth="0.6"
                        strokeDasharray="2.5 1.2"
                        filter="url(#glowEffectShowcase)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                      />

                      {/* Punto de anclaje terminal en la tarjeta */}
                      <motion.circle
                        cx={node.end.x}
                        cy={node.end.y}
                        r="1.2"
                        fill="#0284c7"
                        stroke="#ffffff"
                        strokeWidth="0.35"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.08, duration: 0.2 }}
                      />
                    </g>
                  ))}

                  {/* Círculo Central Pulsante en el Hotspot */}
                  <circle
                    cx={currentMindMap.origin.x}
                    cy={currentMindMap.origin.y}
                    r="2"
                    fill="#38bdf8"
                    opacity="0.85"
                    className="animate-pulse"
                  />
                </svg>

                {/* Tarjetas Desplegables Flotantes */}
                {activeSpot.datos.productos.map((prod, idx) => {
                  const node = currentMindMap.nodes[idx];
                  return (
                    <motion.div
                      key={prod.id}
                      style={{ ...node.cardStyle }}
                      initial={{ scale: 0.75, opacity: 0, y: 12 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.85, opacity: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 280, 
                        damping: 22, 
                        delay: 0.12 + idx * 0.08 
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 w-60 lg:w-68 pointer-events-auto z-40"
                    >
                      <div 
                        onClick={() => onNavigateToCatalog(activeSpot.catalogPage, true)}
                        className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-200/90 shadow-2xl hover:shadow-sky-500/25 hover:border-sky-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer group relative overflow-hidden"
                      >
                        {/* Acento lateral */}
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-sky-600 rounded-l-2xl group-hover:w-1.5 transition-all" />

                        {/* Encabezado: SKU y Tag */}
                        <div className="flex items-center justify-between gap-2 mb-1.5 pl-1.5">
                          <span className="font-mono text-[9px] font-bold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                            {prod.sku}
                          </span>
                          <span className="text-[10px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100 truncate max-w-[120px]">
                            {prod.tag}
                          </span>
                        </div>

                        {/* Nombre del Producto */}
                        <p className="font-bold text-xs text-slate-800 group-hover:text-sky-800 transition-colors leading-snug line-clamp-2 pl-1.5">
                          {prod.nombre}
                        </p>

                        {/* Norma Técnica */}
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium mt-1.5 pl-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{prod.norma}</span>
                        </div>

                        {/* CTA al Catálogo */}
                        <div className="flex items-center justify-between text-[10px] font-bold text-sky-700 pt-2 border-t border-slate-100 mt-2 pl-1.5 group-hover:text-sky-900 transition-colors">
                          <span>Ver Ficha en Catálogo</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* VERSIÓN MÓVIL (< md): ÁRBOL DESPLEGABLE RESPONSIVO */}
              <div className="md:hidden absolute inset-0 top-16 p-3 flex flex-col justify-center pointer-events-auto overflow-y-auto">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative bg-slate-900/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-700 shadow-2xl space-y-2.5 max-h-[calc(100%-1.5rem)] overflow-y-auto"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs font-bold text-sky-400">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    <span>Componentes normados de esta fase:</span>
                  </div>

                  <div className="relative pl-3.5 space-y-2">
                    {/* Tronco de línea vertical */}
                    <div className="absolute left-1 top-2 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-sky-600 to-slate-700" />

                    {activeSpot.datos.productos.map((prod) => (
                      <div key={prod.id} className="relative flex items-center">
                        {/* Conector horizontal */}
                        <div className="absolute -left-2.5 w-3 h-0.5 bg-sky-500" />
                        <div className="absolute -left-3 w-1.5 h-1.5 rounded-full bg-sky-400" />

                        {/* Tarjeta de Producto */}
                        <div 
                          onClick={() => onNavigateToCatalog(activeSpot.catalogPage, true)}
                          className="w-full bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-md flex items-center justify-between gap-2 cursor-pointer active:scale-98 transition-transform"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded">
                                {prod.sku}
                              </span>
                              <span className="text-[9px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.2 rounded-full">
                                {prod.tag}
                              </span>
                            </div>
                            <p className="text-xs font-bold text-slate-800 truncate">
                              {prod.nombre}
                            </p>
                            <p className="text-[10px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                              <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span>{prod.norma}</span>
                            </p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-sky-700 shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onNavigateToCatalog(activeSpot.catalogPage, true)}
                    className="w-full mt-2 bg-sky-700 hover:bg-sky-600 text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Ver Fase Completa en Catálogo (Pág. {activeSpot.catalogPage})</span>
                  </button>
                </motion.div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
