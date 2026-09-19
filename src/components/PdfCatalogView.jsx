import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Pentagon, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  Target, 
  Eye, 
  Building2, 
  Sparkles,
  Award,
  PhoneCall,
  FileSpreadsheet,
  Search,
  X
} from 'lucide-react';

export default function PdfCatalogView({ initialPage = 0, onBackToCatalog }) {
  const [currentPage, setCurrentPage] = useState(typeof initialPage === 'number' ? initialPage : 0);
  const [direction, setDirection] = useState(1); // 1 para siguiente, -1 para anterior
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (initialPage !== undefined && initialPage !== null) {
      // Si se pasa una página mayor o igual a 0
      const targetPage = typeof initialPage === 'number' ? initialPage : 0;
      setCurrentPage(Math.min(targetPage, bookPages.length - 1));
    }
  }, [initialPage]);

  // Definición de las Páginas del Libro (Hardcodeadas)
  const bookPages = [
    // PÁGINA 1: PORTADA OFICIAL (Fondo Oscuro bg-slate-900)
    {
      id: 1,
      type: 'cover',
      render: () => (
        <div className="w-full h-full bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Fondo geométrico con acentos */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-700/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-sky-700/20 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Header de Portada */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-700/20 border border-red-700/40 flex items-center justify-center text-red-500">
                <Pentagon className="w-5 h-5 fill-red-700 text-red-700" />
              </div>
              <span className="font-extrabold text-sm tracking-widest text-slate-100">HIDROSISTEMAS</span>
            </div>
            <span className="text-[10px] font-mono uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/10 text-slate-300">
              EDICIÓN TÉCNICA 2026
            </span>
          </div>

          {/* Título Central de la Portada */}
          <div className="my-auto py-6 z-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
              Catálogo Oficial de Fabricación y Suministro
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
              CATÁLOGO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-sky-400">
                HIDROSISTEMAS
              </span> <br />
              2026
            </h1>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed pt-1">
              Tuberías, válvulas, conexiones y sistemas pluviales certificados bajo normativas NMX, ASTM y CONAGUA.
            </p>
          </div>

          {/* Footer de Portada */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 z-10">
            <span>Parque Industrial Metropolitano, Hgo.</span>
            <span className="font-mono text-slate-500">Pág. 01</span>
          </div>
        </div>
      )
    },

    // PÁGINA 2: NUESTRA EMPRESA / MISIÓN Y VISIÓN (Fondo Blanco)
    {
      id: 2,
      type: 'company',
      render: () => (
        <div className="w-full h-full bg-white text-slate-800 p-8 md:p-10 flex flex-col justify-between relative overflow-y-auto select-none">
          <div>
            {/* Header de Página */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-700 bg-red-50 px-2.5 py-0.5 rounded">
                Identidad Corporativa
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">Pág. 02</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-3">
              Misión y Visión
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
              En Hidrosistemas nos dedicamos a la fabricación, ensamble, comercialización e instalación de soluciones integrales para la conducción y almacenamiento de fluidos con los más estrictos estándares de ingeniería.
            </p>

            {/* Cajas de Misión y Visión */}
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                  <Target className="w-4 h-4 text-red-700" />
                  <span>Nuestra Misión</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Atender las expectativas de nuestros clientes de una manera rentable y sostenible, suministrando materiales de la más alta calidad y eficiencia técnica.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                  <Eye className="w-4 h-4 text-sky-700" />
                  <span>Nuestra Visión</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Ser la empresa líder y referente en el sector agua e infraestructura urbana en México, consolidando proyectos de alta durabilidad e innovación.
                </p>
              </div>
            </div>
          </div>

          {/* Sellos Inferiores */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Calidad Certificada
            </span>
            <span>Hidrosistemas de México S.A. de C.V.</span>
          </div>
        </div>
      )
    },

    // PÁGINA 3: ÍNDICE DE CONTENIDOS (Fondo bg-sky-900 con texto blanco)
    {
      id: 3,
      type: 'index',
      render: () => (
        <div className="w-full h-full bg-sky-900 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-y-auto select-none">
          <div>
            {/* Header de Página */}
            <div className="flex items-center justify-between pb-3 border-b border-sky-800 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300 bg-sky-800/60 px-2.5 py-0.5 rounded">
                Sumario Técnico
              </span>
              <span className="text-xs font-mono font-bold text-sky-300">Pág. 03</span>
            </div>

            <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
              Índice de Secciones
            </h2>
            <p className="text-xs text-sky-200 mb-6">
              Líneas de producto estructuradas por aplicación hidráulica y sanitaria:
            </p>

            {/* Lista del Índice */}
            <div className="space-y-2.5">
              {[
                { title: 'Tubería Corrugada PAD Hermética', tag: 'Drenaje Pluvial y Sanitario', p: 'Pág. 04' },
                { title: 'CPVC Agua Caliente FlowGuard Gold', tag: 'Redes Hidráulicas Presurizadas', p: 'Pág. 05' },
                { title: 'Hidráulica PVC Cédula 40 y 80', tag: 'Procesos Industriales y Bombeo', p: 'Pág. 06' },
                { title: 'Soportería y Brocales PEAR', tag: 'Mobiliario Urbano Anti-Robo', p: 'Pág. 07' },
                { title: 'Conexiones Fierro Fundido y Válvulas', tag: 'Uso Pesado AWWA C509', p: 'Pág. 08' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-sky-950/40 border border-sky-800/60 hover:bg-sky-800/40 transition-colors"
                >
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{item.title}</p>
                    <span className="text-[10px] text-sky-300">{item.tag}</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-sky-300">{item.p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-sky-800 flex items-center justify-between text-[10px] text-sky-300">
            <span>Guía Rápida de Selección</span>
            <span>Edición 2026</span>
          </div>
        </div>
      )
    },

    // PÁGINA 4: PRODUCTO - TUBERÍA CORRUGADA PAD (Fondo Blanco)
    {
      id: 4,
      type: 'product',
      render: () => (
        <div className="w-full h-full bg-white text-slate-800 p-8 md:p-10 flex flex-col justify-between relative overflow-y-auto select-none">
          <div>
            {/* Header de Página */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded">
                Drenaje Pluvial y Sanitario
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">Pág. 04</span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
              Tubería Corrugada PAD
            </h2>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Polietileno de Alta Densidad con interior liso y campana bicapa integrada.
            </p>

            {/* Imagen Placeholder / Diagrama */}
            <div className="w-full h-28 bg-slate-100 rounded-2xl border border-slate-200/80 mb-4 flex flex-col items-center justify-center text-slate-400 p-3">
              <div className="flex items-center gap-2 text-sky-700">
                <Layers className="w-6 h-6" />
                <span className="text-xs font-bold text-slate-700">PAD CORRUGADO HERMÉTICO</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">Norma NMX-E-242/1-ANCE · ASTM F2306</span>
            </div>

            {/* Tabla de Medidas y Especificaciones */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden text-[11px] mb-3">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                  <tr>
                    <th className="py-2 px-3">Diámetro</th>
                    <th className="py-2 px-3">Rigidez</th>
                    <th className="py-2 px-3">Largo</th>
                    <th className="py-2 px-3">Unión</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">4" (100 mm)</td>
                    <td className="py-1.5 px-3">SN 4</td>
                    <td className="py-1.5 px-3">6.00 m</td>
                    <td className="py-1.5 px-3 text-sky-700 font-medium">Bicapa Hermética</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">8" (200 mm)</td>
                    <td className="py-1.5 px-3">SN 4 / SN 8</td>
                    <td className="py-1.5 px-3">6.00 m</td>
                    <td className="py-1.5 px-3 text-sky-700 font-medium">Empaque F477</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">12" (300 mm)</td>
                    <td className="py-1.5 px-3">SN 8 Pesado</td>
                    <td className="py-1.5 px-3">6.00 m</td>
                    <td className="py-1.5 px-3 text-sky-700 font-medium">Empaque F477</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-3 text-[10px] text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Manning n=0.009</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Cargas Tráfico H-25</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>Partida: PEAD-CORR-01</span>
            <span>Uso: Conducción de Caudales Pluviales</span>
          </div>
        </div>
      )
    },

    // PÁGINA 5: PRODUCTO - CPVC AGUA CALIENTE (Fondo Blanco)
    {
      id: 5,
      type: 'product',
      render: () => (
        <div className="w-full h-full bg-white text-slate-800 p-8 md:p-10 flex flex-col justify-between relative overflow-y-auto select-none">
          <div>
            {/* Header de Página */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
                Sistemas Presurizados
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">Pág. 05</span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
              CPVC FlowGuard Gold®
            </h2>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Tuberías y conexiones termoplásticas para agua fría y caliente hasta 82°C.
            </p>

            {/* Imagen Placeholder */}
            <div className="w-full h-28 bg-slate-100 rounded-2xl border border-slate-200/80 mb-4 flex flex-col items-center justify-center text-slate-400 p-3">
              <div className="flex items-center gap-2 text-amber-600">
                <Layers className="w-6 h-6" />
                <span className="text-xs font-bold text-slate-700">CPVC CÉDULA ESTÁNDAR SDR-11</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">Norma ASTM D2846 · Certificación NSF 61</span>
            </div>

            {/* Tabla de Medidas */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden text-[11px] mb-3">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                  <tr>
                    <th className="py-2 px-3">Medida</th>
                    <th className="py-2 px-3">Presión 23°C</th>
                    <th className="py-2 px-3">Presión 82°C</th>
                    <th className="py-2 px-3">Presentación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">1/2" (13 mm)</td>
                    <td className="py-1.5 px-3">400 PSI</td>
                    <td className="py-1.5 px-3 text-amber-700 font-semibold">100 PSI</td>
                    <td className="py-1.5 px-3">Tramo 3.05 m</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">3/4" (19 mm)</td>
                    <td className="py-1.5 px-3">400 PSI</td>
                    <td className="py-1.5 px-3 text-amber-700 font-semibold">100 PSI</td>
                    <td className="py-1.5 px-3">Tramo 3.05 m</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">1" (25 mm)</td>
                    <td className="py-1.5 px-3">400 PSI</td>
                    <td className="py-1.5 px-3 text-amber-700 font-semibold">100 PSI</td>
                    <td className="py-1.5 px-3">Tramo 6.10 m</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-3 text-[10px] text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Cero Incrustaciones</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Inmune a Cloro</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>Partida: CPVC-FLOW-01</span>
            <span>Uso: Hotelería y Residencial</span>
          </div>
        </div>
      )
    },

    // PÁGINA 6: PRODUCTO - BROCALES Y REJILLAS PEAR (Fondo Blanco)
    {
      id: 6,
      type: 'product',
      render: () => (
        <div className="w-full h-full bg-white text-slate-800 p-8 md:p-10 flex flex-col justify-between relative overflow-y-auto select-none">
          <div>
            {/* Header de Página */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-700 bg-red-50 px-2.5 py-0.5 rounded">
                Mobiliario Urbano Anti-Robo
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">Pág. 06</span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
              Brocales y Rejillas PEAR
            </h2>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Polietileno de Alta Resistencia para pozos de visita y captación pluvial urbana.
            </p>

            {/* Imagen Placeholder */}
            <div className="w-full h-28 bg-slate-100 rounded-2xl border border-slate-200/80 mb-4 flex flex-col items-center justify-center text-slate-400 p-3">
              <div className="flex items-center gap-2 text-red-700">
                <Layers className="w-6 h-6" />
                <span className="text-xs font-bold text-slate-700">PEAR POLÍMERO NO RECICLABLE</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">Norma SCT Tráfico Pesado · Resistencia &gt; 25 Ton</span>
            </div>

            {/* Tabla de Medidas */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden text-[11px] mb-3">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                  <tr>
                    <th className="py-2 px-3">Modelo</th>
                    <th className="py-2 px-3">Luz Libre</th>
                    <th className="py-2 px-3">Carga</th>
                    <th className="py-2 px-3">Ventaja</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">Brocal PV-60</td>
                    <td className="py-1.5 px-3">60 cm</td>
                    <td className="py-1.5 px-3 text-red-700 font-semibold">&gt; 25 Ton</td>
                    <td className="py-1.5 px-3">Anti-Robo</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">Boca Tormenta</td>
                    <td className="py-1.5 px-3">60 x 70 cm</td>
                    <td className="py-1.5 px-3 text-red-700 font-semibold">Pesado</td>
                    <td className="py-1.5 px-3">Alto Caudal</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-3 font-semibold">Tapa Cuadrada</td>
                    <td className="py-1.5 px-3">50 x 50 cm</td>
                    <td className="py-1.5 px-3 text-red-700 font-semibold">Ligero / Med</td>
                    <td className="py-1.5 px-3">Cero Ruido</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-3 text-[10px] text-slate-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Cero Valor Chatarra</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Nula Corrosión</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>Partida: PEAR-URB-01</span>
            <span>Uso: Infraestructura Vial y Municipal</span>
          </div>
        </div>
      )
    }
  ];

  // Navegación: en móvil avanza de 1 en 1; en escritorio avanza de 2 en 2
  const maxPage = bookPages.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => {
      const step = isMobile ? 1 : 2;
      if (prev + step < maxPage) return prev + step;
      if (isMobile) return prev;
      if (prev + 1 < maxPage) return prev + 1;
      return prev;
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => {
      const step = isMobile ? 1 : 2;
      if (prev - step >= 0) return prev - step;
      return 0;
    });
  };

  // Ítems del Índice Lateral que apuntan a páginas específicas del libro
  const indexItems = [
    { 
      id: 'portada',
      title: "Portada Oficial", 
      page: 0, 
      mobilePage: 0,
      tag: "Edición Técnica 2026", 
      badge: "Pág. 1",
      keywords: "portada editorial edicion 2026 oficial caratula presentacion hidrosistemas normas astm nmx conagua"
    },
    { 
      id: 'empresa',
      title: "Nuestra Empresa", 
      page: 0, 
      mobilePage: 1,
      tag: "Misión y Visión", 
      badge: "Pág. 2",
      keywords: "mision vision valores empresa identidad objetivos certificada calidad ingenieria hidrosistemas sa de cv"
    },
    { 
      id: 'sumario',
      title: "Sumario Técnico", 
      page: 2, 
      mobilePage: 2,
      tag: "Índice de Secciones", 
      badge: "Pág. 3",
      keywords: "sumario indice contenidos lineas producto clasificacion capitulos pead cpvc brocales fierro fundido valvulas c-40 c-80"
    },
    { 
      id: 'pad',
      title: "Tubería Corrugada PAD", 
      page: 2, 
      mobilePage: 3,
      tag: "Drenaje Pluvial y Sanitario", 
      badge: "Pág. 4",
      keywords: "pad pead polietileno corrugado hermetico campana bicapa manning f477 drenaje pluvial alcantarillado nmx-e-242 astm f2306 sn4 sn8 h-25"
    },
    { 
      id: 'cpvc',
      title: "CPVC FlowGuard Gold®", 
      page: 4, 
      mobilePage: 4,
      tag: "Agua Fría y Caliente", 
      badge: "Pág. 5",
      keywords: "cpvc flowguard gold agua caliente presion termoplastico sdr-11 astm d2846 nsf 61 tuberia conexiones codos cloro hoteleria residencial"
    },
    { 
      id: 'pear',
      title: "Brocales y Rejillas PEAR", 
      page: 4, 
      mobilePage: 5,
      tag: "Mobiliario Urbano Anti-Robo", 
      badge: "Pág. 6",
      keywords: "brocales rejillas pear anti robo sct trafico pesado pozo de visita boca de tormenta polietileno alta resistencia chatarra cero ruido"
    },
  ];

  const filteredIndexItems = indexItems.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q) ||
      item.badge.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    );
  });

  const [mobileIndexOpen, setMobileIndexOpen] = useState(false);

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 min-h-[calc(100vh-80px)] bg-slate-100/70 flex flex-col justify-center items-center box-border select-none overflow-x-hidden">
      <div className="flex-1 flex flex-col lg:flex-row gap-4 xl:gap-5 w-full max-w-[1360px] mx-auto items-center lg:items-start justify-center my-auto">
        
        {/* COLUMNA IZQUIERDA: Índice de Productos a la par del visor con Buscador Integrado */}
        <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-5 flex flex-col justify-between lg:h-[620px]">
          <div className="flex flex-col h-full min-h-0">
            {onBackToCatalog && (
              <button
                onClick={onBackToCatalog}
                className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-700 transition-colors cursor-pointer shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver a Catálogo de Piezas</span>
              </button>
            )}

            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-slate-800">Índice del Libro</h2>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">Navega directamente a cada sección</p>
                </div>
              </div>

              {/* Botón expandir/contraer en pantallas chicas */}
              <button
                onClick={() => setMobileIndexOpen(!mobileIndexOpen)}
                className="lg:hidden text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg hover:bg-sky-100 transition-colors cursor-pointer"
              >
                {mobileIndexOpen ? 'Ocultar' : 'Ver Capítulos'}
              </button>
            </div>

            {/* Buscador Rápido de Secciones y Temas */}
            <div className={`${mobileIndexOpen ? 'block' : 'hidden'} lg:block mb-3 shrink-0`}>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar en el índice o por norma..."
                  className="w-full pl-8 pr-7 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="flex items-center justify-between mt-1 px-1 text-[10px] text-slate-500">
                  <span>{filteredIndexItems.length} {filteredIndexItems.length === 1 ? 'coincidencia' : 'coincidencias'}</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-sky-700 hover:underline cursor-pointer font-medium"
                  >
                    Ver todos
                  </button>
                </div>
              )}
            </div>

            {/* Lista de Secciones (Scrollable) */}
            <div className={`${mobileIndexOpen ? 'block' : 'hidden'} lg:block flex-1 overflow-y-auto pr-1 space-y-1.5 min-h-0`}>
              {filteredIndexItems.length > 0 ? (
                filteredIndexItems.map((item) => {
                  const isSelected = isMobile 
                    ? currentPage === item.mobilePage 
                    : currentPage === item.page;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        const targetPage = isMobile ? item.mobilePage : item.page;
                        setDirection(targetPage > currentPage ? 1 : -1);
                        setCurrentPage(targetPage);
                        setMobileIndexOpen(false);
                      }}
                      className={`w-full text-left p-2.5 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? 'bg-sky-700 text-white shadow-sm font-semibold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-sky-700 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold transition-colors shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-sky-100 group-hover:text-sky-700'
                        }`}>
                          {item.badge.replace('Pág. ', '')}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold leading-tight truncate">{item.title}</p>
                          <span className={`text-[10px] font-normal truncate block mt-0.5 ${isSelected ? 'text-sky-100' : 'text-slate-400'}`}>
                            {item.tag}
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono font-bold shrink-0 ml-2 ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                        {item.badge}
                      </span>
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-slate-400">
                  <Search className="w-6 h-6 mx-auto text-slate-300 mb-1.5 stroke-[1.5]" />
                  <p className="text-xs font-semibold text-slate-600">No se encontraron resultados</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Intenta buscando "PAD", "CPVC", "Brocal" o "Norma"</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs text-sky-700 font-semibold hover:underline cursor-pointer"
                  >
                    Restablecer búsqueda
                  </button>
                </div>
              )}
            </div>

            {/* Botón de Descarga Integrado */}
            <div className="pt-3 border-t border-slate-100 mt-3 shrink-0">
              <a
                href="/catalogo-2026.pdf"
                download="Catalogo-Hidrosistemas-2026.pdf"
                className="w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2.5 px-4 rounded-2xl text-xs transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-sky-700/20 flex items-center justify-center gap-2 cursor-pointer text-center group"
              >
                <Download className="w-4 h-4 text-sky-200 group-hover:scale-110 transition-transform" />
                <span>Descargar Catálogo PDF</span>
              </a>
              <p className="text-[10px] text-center text-slate-400 mt-1 font-medium">
                Documento Oficial 2026 · Formato PDF
              </p>
            </div>
          </div>
        </aside>

        {/* COLUMNA DERECHA: EL LIBRO ABIERTO MODERNO (CON ANIMACIÓN FRAMER MOTION Y CONTROLES) */}
        <section className="w-full lg:w-[880px] xl:w-[980px] shrink-0 flex flex-col items-center relative">
          
          {/* Contenedor del Libro y Botones Flotantes */}
          <div className="relative w-full flex items-center justify-center">
            
            {/* Botón Flotante Izquierdo (Integrado limpiamente sobre el libro) */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-white/90 hover:bg-white text-slate-700 hover:text-sky-700 rounded-full shadow-md hover:shadow-xl border border-slate-200 items-center justify-center backdrop-blur-xs disabled:opacity-0 disabled:pointer-events-none cursor-pointer transition-all hover:scale-110 active:scale-95"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* El "Libro Abierto" (Adaptable h-[520px] sm:h-[580px] lg:h-[620px]) */}
            <div className="w-full h-[520px] sm:h-[580px] lg:h-[620px] bg-white shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden flex relative border border-slate-200/80">
              
              {/* El Lomo Central (Spine) con degradado sutil para simular el doblez del libro en desktop */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none hidden md:block w-[2px] bg-gradient-to-b from-transparent via-slate-300 to-transparent shadow-[0_0_15px_rgba(0,0,0,0.12)] z-20"
                aria-hidden="true"
              />

              {/* Contenido Animado de Páginas */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ x: direction * 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -direction * 40, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full h-full flex flex-col md:flex-row"
                >
                  {/* Mitad Izquierda (En móvil ocupa el 100%, en desktop el 50%) */}
                  <div className="w-full md:w-1/2 h-full md:border-r border-slate-100 relative overflow-y-auto">
                    {bookPages[currentPage] ? (
                      bookPages[currentPage].render()
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 text-xs">
                        Página no disponible
                      </div>
                    )}
                  </div>

                  {/* Mitad Derecha (Oculta en móvil para ver de 1 en 1 sin saltar páginas, visible en desktop) */}
                  <div className="hidden md:block md:w-1/2 h-full relative overflow-y-auto">
                    {bookPages[currentPage + 1] ? (
                      bookPages[currentPage + 1].render()
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                        <Pentagon className="w-8 h-8 text-slate-300 mb-2 fill-slate-200" />
                        <span className="text-xs font-bold text-slate-600">Fin del Catálogo</span>
                        <p className="text-[11px] text-slate-400 mt-1">Usa la flecha izquierda para regresar a las páginas anteriores.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Botón Flotante Derecho */}
            <button
              onClick={handleNext}
              disabled={isMobile ? currentPage >= maxPage - 1 : currentPage >= maxPage - 2}
              className="hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-white/90 hover:bg-white text-slate-700 hover:text-sky-700 rounded-full shadow-md hover:shadow-xl border border-slate-200 items-center justify-center backdrop-blur-xs disabled:opacity-0 disabled:pointer-events-none cursor-pointer transition-all hover:scale-110 active:scale-95"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Barra de Controles Móviles Ergonómica (< sm) */}
          <div className="flex sm:hidden items-center justify-between w-full mt-3 px-1 gap-3">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="flex-1 bg-white border border-slate-200 text-slate-700 hover:text-sky-700 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-2xs disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <span className="text-xs font-mono font-bold text-slate-600 px-2">
              {currentPage + 1}/{bookPages.length}
            </span>

            <button
              onClick={handleNext}
              disabled={isMobile ? currentPage >= maxPage - 1 : currentPage >= maxPage - 2}
              className="flex-1 bg-sky-700 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Indicador de Páginas Abiertas Inferior */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-500 font-medium text-center">
            <span>
              {isMobile ? (
                <>Mostrando Página <strong className="text-slate-800 font-bold">{currentPage + 1}</strong> de {bookPages.length}</>
              ) : (
                <>Mostrando Páginas <strong className="text-slate-800 font-bold">{currentPage + 1}</strong> y <strong className="text-slate-800 font-bold">{Math.min(currentPage + 2, bookPages.length)}</strong> de {bookPages.length}</>
              )}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-sky-700 font-semibold">Simulador de Catálogo Editorial Hidrosistemas</span>
          </div>

        </section>

      </div>
    </div>
  );
}
