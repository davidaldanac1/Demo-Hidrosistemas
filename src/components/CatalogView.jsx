import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  productCategories, 
  catalogProducts 
} from '../data/mockData';
import { 
  Search, 
  Filter, 
  FileText, 
  ArrowRight, 
  Package, 
  ShieldCheck, 
  Layers, 
  Download, 
  X, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

export default function CatalogView({ onNavigateToPdf }) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  // Filtrado reactivo por categoría y texto de búsqueda
  const filteredProducts = catalogProducts.filter((prod) => {
    const matchesCategory = selectedCategory === 'todos' || prod.categoryId === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.norm.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-28 md:pt-32 pb-20 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen selection:bg-sky-100 selection:text-sky-800"
    >
      {/* Encabezado Principal y Barra de Búsqueda */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100 shadow-2xs">
            Catálogo General de Materiales
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2 tracking-tight">
            Tuberías, Válvulas y Conexiones Normadas
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl">
            Explora nuestro catálogo generalizado de piezas para infraestructura hidráulica, sanitaria y pluvial.
          </p>
        </div>

        {/* Acciones y Acceso al Visor PDF */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Barra de Búsqueda Rápida */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, SKU o norma..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-sky-700 shadow-2xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Botón de Salto al Visor PDF Oficial */}
          <button
            onClick={() => {
              trackEvent('open_pdf_from_catalog', { page: 1, view: 'catalog' });
              if (onNavigateToPdf) onNavigateToPdf(1);
            }}
            className="bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold px-5 py-2.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-sky-700/20 flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <FileText className="w-4 h-4 text-sky-200" />
            <span>Abrir Visor PDF Oficial</span>
          </button>
        </div>
      </motion.div>

      {/* Estructura Principal: Índice Lateral + Grilla de Piezas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
        
        {/* Columna Izquierda: Índice de Productos (Responsive: scroll horizontal en móvil, sidebar en desktop) */}
        <motion.aside variants={itemVariants} className="lg:col-span-3 bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-sm lg:sticky lg:top-24">
          <div className="flex items-center gap-2 pb-3.5 border-b border-slate-100 mb-3">
            <Filter className="w-4 h-4 text-sky-700" />
            <h3 className="font-bold text-sm text-slate-800">Índice de Categorías</h3>
          </div>

          {/* Categorías: Horizontal scroll en pantallas móviles, lista vertical en desktop */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none -mx-1 px-1">
            {productCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 lg:w-full text-left px-3.5 py-2 lg:py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-2 group cursor-pointer ${
                    isActive
                      ? 'bg-sky-700 text-white font-semibold shadow-xs'
                      : 'text-slate-600 bg-slate-50 lg:bg-transparent hover:bg-slate-100 lg:hover:bg-slate-50 hover:text-sky-700'
                  }`}
                >
                  <span className="whitespace-nowrap lg:truncate pr-1">{cat.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 lg:bg-slate-100 text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-700'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tarjeta de Soporte B2B (Visible en Desktop o pantallas medianas) */}
          <div className="hidden sm:block mt-6 pt-5 border-t border-slate-100 bg-slate-50/70 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-4 sm:p-5 rounded-b-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
              <ShieldCheck className="w-4 h-4 text-red-700" />
              <span>Suministro a Constructoras</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Cotizaciones por mayoreo y certificados de calidad de laboratorio para cada partida de obra.
            </p>
            <button
              onClick={() => onNavigateToPdf && onNavigateToPdf(1)}
              className="text-[11px] font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 cursor-pointer"
            >
              Consultar lista de precios en PDF <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </motion.aside>

        {/* Columna Derecha: Cuadrícula General de Piezas */}
        <motion.section variants={itemVariants} className="lg:col-span-9">
          
          {/* Barra de Estado / Conteo */}
          <div className="flex items-center justify-between mb-5 px-1">
            <p className="text-xs text-slate-500">
              Mostrando <strong className="text-slate-800">{filteredProducts.length}</strong> piezas encontradas
              {selectedCategory !== 'todos' && ` en ${productCategories.find(c => c.id === selectedCategory)?.name}`}
            </p>

            {selectedCategory !== 'todos' && (
              <button
                onClick={() => setSelectedCategory('todos')}
                className="text-xs font-medium text-sky-700 hover:underline cursor-pointer"
              >
                Ver todos
              </button>
            )}
          </div>

          {/* Si no hay resultados */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="font-bold text-slate-700 text-base">No se encontraron piezas</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                No hay productos que coincidan con "{searchQuery}". Intenta con otro término o revisa el catálogo en PDF.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('todos'); }}
                className="mt-4 text-xs font-semibold text-sky-700 hover:underline cursor-pointer"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            /* Grilla de Productos Animada */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-sky-200"
                >
                  <div>
                    {/* Thumbnail Placeholder con SKU */}
                    <div className="w-full aspect-[16/10] bg-slate-100 rounded-2xl mb-4 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group-hover:bg-slate-100/80 transition-colors">
                      <Layers className="w-8 h-8 text-slate-400 group-hover:scale-105 transition-transform" />
                      <span className="text-[10px] font-mono font-semibold text-slate-500 mt-1">
                        {p.sku}
                      </span>
                      <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full text-slate-600 border border-slate-200 shadow-2xs">
                        Pág. {p.pdfPage}
                      </span>
                    </div>

                    {/* Categoría y Nombre */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-slate-800 text-sm mt-2 leading-snug group-hover:text-sky-800 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  {/* Especificaciones y Botones de Acción */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Norma: <strong className="text-slate-700">{p.norm}</strong></span>
                      <span>Diám: <strong className="text-slate-700">{p.diam}</strong></span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          trackEvent('view_product_detail', { sku: p.sku });
                          setSelectedProduct(p);
                        }}
                        className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2 px-3 rounded-xl transition-colors text-center border border-slate-200 cursor-pointer"
                      >
                        Ver Ficha
                      </button>
                      <button
                        onClick={() => {
                          trackEvent('view_product_pdf', { sku: p.sku, page: p.pdfPage });
                          if (onNavigateToPdf) onNavigateToPdf(p.pdfPage);
                        }}
                        className="flex-1 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                        title={`Abrir página ${p.pdfPage} en visor PDF`}
                      >
                        <span>En PDF</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </motion.section>

      </div>

      {/* Modal Detallado de Ficha Técnica con Animación */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                {selectedProduct.category}
              </span>
              <h2 className="text-xl font-bold text-slate-800 mt-2">
                {selectedProduct.name}
              </h2>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {selectedProduct.desc}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 my-5 border border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Clave / SKU:</span>
                  <span className="font-mono font-bold text-slate-800">{selectedProduct.sku}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Certificación Normativa:</span>
                  <span className="font-semibold text-slate-800">{selectedProduct.norm}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Diámetros / Medidas Disponibles:</span>
                  <span className="font-semibold text-slate-800">{selectedProduct.diam}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Página de Referencia en Catálogo:</span>
                  <span className="font-bold text-sky-700">Página {selectedProduct.pdfPage}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const page = selectedProduct.pdfPage;
                    setSelectedProduct(null);
                    if (onNavigateToPdf) onNavigateToPdf(page);
                  }}
                  className="flex-1 bg-sky-700 hover:bg-sky-800 text-white font-semibold py-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver en Visor PDF (Pág. {selectedProduct.pdfPage})</span>
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-5 rounded-2xl text-xs transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
