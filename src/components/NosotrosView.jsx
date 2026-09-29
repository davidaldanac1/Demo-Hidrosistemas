import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Target, 
  Eye, 
  Award,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  HardHat,
  Wrench,
  Sprout
} from 'lucide-react';

export default function NosotrosView() {
  const [activeSector, setActiveSector] = useState(null);

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

  const sectoresExperiencia = [
    {
      id: "construccion",
      badge: "Obra Civil & Infraestructura",
      titulo: "Construcción y obra civil",
      desc: "Proyectos residenciales, comerciales e industriales que requieren soluciones hidráulicas duraderas y eficientes.",
      icon: HardHat,
      color: "bg-amber-600 text-white shadow-amber-900/40 ring-amber-400/25",
      img: "/construccion.png"
    },
    {
      id: "ferreterias",
      badge: "Distribución Mayorista",
      titulo: "Ferreterías y distribuidores",
      desc: "Apoyo constante a nuestros socios comerciales con stock, logística y asesoría técnica.",
      icon: Wrench,
      color: "bg-red-600 text-white shadow-red-900/40 ring-red-400/25",
      img: "/ferreteria.jpg"
    },
    {
      id: "riego",
      badge: "Tecnificación Hidroagrícola",
      titulo: "Riego agrícola y residencial",
      desc: "Sistemas de conducción y distribución de agua para riego eficiente en campos agrícolas, jardines y áreas verdes.",
      icon: Sprout,
      color: "bg-emerald-600 text-white shadow-emerald-900/40 ring-emerald-400/25",
      img: "/riego.jpg"
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

  // Variantes dedicadas e independientes para la sección y tarjetas de Nuestra Experiencia
  const experienciaContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.08
      }
    }
  };

  const experienciaCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 35,
      scale: 0.94
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.65, 
        ease: [0.22, 1, 0.36, 1] 
      }
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
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-1 tracking-tight">
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
                  className="bg-slate-50/70 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/40 rounded-3xl p-6 transition-all duration-350 flex flex-col justify-between group hover:shadow-sm"
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

      {/* Sección: Nuestra Experiencia (Animación de Aparición Independiente al Scroll) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={experienciaContainerVariants}
        className="mt-16 md:mt-24"
      >
        {/* Encabezado */}
        <motion.div variants={experienciaCardVariants} className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-1 tracking-tight">
            Nuestra experiencia
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 mt-2 leading-relaxed">
            Conoce nuestra experiencia que hemos formado a lo largo de nuestra amplia trayectoria
          </p>
        </motion.div>

        {/* Grid de Tarjetas Interactivas de Sectores */}
        <motion.div variants={experienciaContainerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {sectoresExperiencia.map((sector) => {
            const IconComponent = sector.icon;
            const isActive = activeSector === sector.id;

            return (
              <motion.div
                key={sector.id}
                variants={experienciaCardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveSector(isActive ? null : sector.id)}
                className="relative isolate rounded-3xl overflow-hidden min-h-[460px] md:min-h-[500px] p-6 sm:p-8 flex flex-col items-center justify-center text-center group border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-350 bg-slate-950 cursor-pointer select-none"
              >
                {/* Imagen de Fondo: Se mantiene visible de inicio y desaparece por completo al interactuar */}
                <img
                  src={sector.img}
                  alt={sector.titulo}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out z-0 ${
                    isActive 
                      ? 'opacity-0 scale-95 pointer-events-none' 
                      : 'opacity-100 scale-100 brightness-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none'
                  }`}
                  loading="lazy"
                />

                {/* Fondo Oscuro: Se pinta de oscuro profundo al interactuar */}
                <div 
                  className={`absolute inset-0 z-10 pointer-events-none transition-colors duration-300 ${
                    isActive
                      ? 'bg-slate-950'
                      : 'bg-gradient-to-t from-slate-950/75 via-black/20 to-transparent group-hover:bg-slate-950'
                  }`} 
                />

                {/* Contenido Centrado en la Tarjeta */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-xs mx-auto w-full my-auto px-1">
                  {/* Ícono Circular Temático */}
                  <div className={`w-16 h-16 rounded-full ${sector.color} flex items-center justify-center mb-3 shadow-xl ring-4 ring-white/10 transition-transform duration-350 ${
                    isActive ? 'scale-105' : 'group-hover:scale-105'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Título de la Tarjeta Centrado */}
                  <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight transition-colors duration-350 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] ${
                    isActive ? 'text-sky-200' : 'group-hover:text-sky-200'
                  }`}>
                    {sector.titulo}
                  </h3>

                  {/* Línea decorativa */}
                  <div className={`h-1 bg-sky-400 rounded-full mb-2 transition-all duration-350 ${
                    isActive ? 'w-16 bg-sky-300' : 'w-10 group-hover:w-16 group-hover:bg-sky-300'
                  }`} />

                  {/* Cuadro de Información: Visible inmediatamente sin delay */}
                  <div className={`w-full mt-2 transition-opacity duration-350 ${
                    isActive 
                      ? 'opacity-100 block' 
                      : 'opacity-0 hidden group-hover:opacity-100 group-hover:block'
                  }`}>
                    <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
                      <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                        {sector.desc}
                      </p>
                    </div>
                  </div>

                  {/* Indicador de Interacción cuando está inactivo */}
                  <span className={`text-[11px] font-medium text-white/90 drop-shadow-md mt-2 transition-opacity duration-350 ${
                    isActive ? 'hidden' : 'group-hover:hidden'
                  }`}>
                    <span className="hidden md:inline">Pasa el cursor</span>
                    <span className="md:hidden">Toca la tarjeta</span> para ver información
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
