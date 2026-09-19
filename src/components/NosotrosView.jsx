import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target, 
  Eye, 
  Award,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export default function NosotrosView() {
  const pilares = [
    {
      titulo: "Experiencia",
      desc: "Más de 20 años en el mercado con un historial sólido de calidad y confianza.",
      icon: Award,
      color: "text-sky-700 bg-sky-50 border-sky-100"
    },
    {
      titulo: "Productos de calidad",
      desc: "Trabajamos solo con proveedores certificados para ofrecer lo mejor en cada categoría de producto.",
      icon: ShieldCheck,
      color: "text-emerald-700 bg-emerald-50 border-emerald-100"
    },
    {
      titulo: "Compromiso con la innovación",
      desc: "Siempre atentos a las últimas tendencias y necesidades del mercado, con planes de expansión hacia la fabricación.",
      icon: TrendingUp,
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      titulo: "Servicio al cliente",
      desc: "Nos dedicamos a entender y satisfacer las necesidades de nuestros clientes, brindando asesoría y atención personalizada.",
      icon: HeartHandshake,
      color: "text-red-700 bg-red-50 border-red-100"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className="pt-28 md:pt-32 pb-20 md:pb-24 px-6 max-w-6xl mx-auto selection:bg-sky-100 selection:text-sky-800"
    >
      {/* Encabezado de Sección */}
      <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-3 tracking-tight">
          Liderazgo en Infraestructura Hídrica
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Soluciones integrales de conducción, captación y tratamiento de fluidos en México.
        </p>
      </motion.div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Caja 1: Principal - Nuestra Empresa (Columna 1-8 en desktop) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-8 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl -z-10 group-hover:bg-sky-100/60 transition-colors"></div>
          <div>
            <div className="w-12 h-12 rounded-2xl bg-sky-700 text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 tracking-tight">
              Nuestra Empresa
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              En Hidrosistemas se fabrica, ensambla, instala y se comercializan tuberías, equipos, conexiones y accesorios de la más alta calidad y eficiencia técnica en sistemas de agua potable, alcantarillado, riego y conducción pluvial.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1 text-sky-700">
              <ShieldCheck className="w-4 h-4" /> Normativas Certificadas
            </span>
            <span>•</span>
            <span>Distribución Nacional</span>
            <span>•</span>
            <span>Ingeniería Hidráulica</span>
          </div>
        </motion.div>

        {/* Caja 2: Placeholder Fotografía Corporativa (Columna 9-12 en desktop) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl border border-slate-200/80 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[260px] shadow-sm"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-sm text-slate-400 flex items-center justify-center mb-3 shadow-inner group-hover:scale-105 transition-transform">
            <Building2 className="w-8 h-8 text-slate-500" />
          </div>
          <h3 className="font-semibold text-slate-700 text-sm">Instalaciones y Planta</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-[200px]">
            Parque Industrial Metropolitano, Mineral de la Reforma, Hidalgo.
          </p>
          <span className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white/60 px-3 py-1 rounded-full border border-slate-200">
            Fotografía Corporativa
          </span>
        </motion.div>

        {/* Caja 3: Misión (Columna 1-6) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-700 flex items-center justify-center mb-5">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Misión</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Nuestra misión principal es atender las expectativas de nuestros clientes de una manera rentable y sostenible con los materiales de la más alta calidad y soluciones integrales en el manejo del agua.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-red-700">
            <CheckCircle2 className="w-4 h-4" />
            <span>Compromiso y Rentabilidad Sostenible</span>
          </div>
        </motion.div>

        {/* Caja 4: Visión (Columna 7-12) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Visión</h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Ser una empresa que satisfaga las necesidades de los mercados del sector agua en infraestructura urbana y agrícola, consolidándonos como referentes de innovación y confianza técnica.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-sky-700">
            <CheckCircle2 className="w-4 h-4" />
            <span>Infraestructura Urbana y Agrícola</span>
          </div>
        </motion.div>

        {/* Caja 5: Cuadrícula de 4 Pilares con Íconos (Columna 1-12 completa) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-12 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Nuestras Fortalezas</span>
              <h3 className="text-xl font-bold text-slate-800 mt-1">¿Por qué elegir Hidrosistemas?</h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Pilares que respaldan nuestra trayectoria y garantizan la máxima confiabilidad técnica en cada suministro y proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, idx) => {
              const IconComponent = pilar.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50/70 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/40 rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between group hover:shadow-sm"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${pilar.color} group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-base mb-2 leading-snug">
                      {pilar.titulo}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      {pilar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
