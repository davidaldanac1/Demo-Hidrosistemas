import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  SearchCheck, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  LineChart, 
  Lightbulb
} from 'lucide-react';

export default function AsesoriaView({ onContactClick }) {
  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleRequestClick = () => {
    trackEvent('asesoria_cta_click', { action: 'solicitar_asesoria_tecnica', view: 'asesoria' });
    if (onContactClick) onContactClick();
  };

  const areasConsultoria = [
    {
      id: 'diseno-proyectos',
      title: 'Diseño y Proyectos',
      desc: 'Servicios de diseño y desarrollo de proyectos a la medida para diversas aplicaciones hídricas y pluviales.',
      icon: PenTool,
    },
    {
      id: 'diagnostico-optimizacion',
      title: 'Diagnóstico y Optimización',
      desc: 'Análisis profesional e inspección técnica de sistemas existentes para maximizar su eficiencia operativa y rendimiento.',
      icon: SearchCheck,
    },
    {
      id: 'asesoria-capacitacion',
      title: 'Asesoría y Capacitación',
      desc: 'Servicios de consultoría y formación técnica especializada para instaladores, contratistas y equipos de ingeniería.',
      icon: GraduationCap,
    },
  ];

  const fasesProceso = [
    {
      numero: '01',
      titulo: 'Evaluación preliminar',
      desc: 'Análisis de necesidades y objetivos específicos para definir el alcance y parámetros del proyecto.',
    },
    {
      numero: '02',
      titulo: 'Diagnóstico Técnico',
      desc: 'Inspección de sistemas actuales y recopilación de datos para identificar las mejoras específicas.',
    },
    {
      numero: '03',
      titulo: 'Desarrollo de Soluciones',
      desc: 'Elaboración de propuestas y alternativas técnicas que garanticen mejoras medibles.',
    },
    {
      numero: '04',
      titulo: 'Implementación Guiada',
      desc: 'Soporte técnico durante la ejecución del proyecto y acompañamiento en instalación.',
    },
    {
      numero: '05',
      titulo: 'Seguimiento Continuo',
      desc: 'Monitoreo preventivo que asegura el rendimiento y funcionamiento óptimo del sistema.',
    },
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
      className="w-full bg-slate-50 min-h-screen selection:bg-sky-100 selection:text-sky-800"
    >
      {/* 1. HERO SECTION DE ASESORÍA */}
      <motion.section variants={itemVariants} className="pt-28 md:pt-32 pb-14 px-6 max-w-5xl mx-auto text-center">

        {/* Título Principal */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
          Asesoría Técnica Especializada
        </h1>

        {/* Subtítulo */}
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mt-3 leading-relaxed">
          Proporcionamos asesoramiento al efectuar una inversión económica para ayudar a tu empresa a obtener el beneficio de un ahorro proyectado.
        </p>

        {/* CTA Principal */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleRequestClick}
            className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-700/20 hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Solicitar Asesoría Técnica</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90" />
          </button>
        </div>
      </motion.section>

      {/* 2. SECCIÓN DE SERVICIOS DE ASESORÍA (GRID DE 3 TARJETAS) */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-left mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
            Áreas de Consultoría
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Soluciones estructuradas para maximizar la durabilidad, compatibilidad y rentabilidad en obra civil e industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {areasConsultoria.map((area) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-4 group-hover:scale-105 group-hover:bg-sky-100 transition-all">
                    <IconComponent className="w-6 h-6 text-sky-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-[11px] font-semibold text-sky-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Acompañamiento especializado</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* 3. SECCIÓN: PROCESO DE ASESORÍA (LÍNEA DE TIEMPO DE 5 FASES) */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto px-6 pb-20 md:pb-24">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
              Metodología de Trabajo
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight mt-2">
              Nuestro Proceso Metodológico
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Etapas estructuradas para garantizar la viabilidad y cumplimiento normativo de cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8 relative">
            {fasesProceso.map((fase, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-50/60 rounded-2xl border border-slate-100 p-4 flex flex-col justify-between hover:bg-white hover:shadow-xs hover:border-slate-200 transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-700 font-bold text-xs flex items-center justify-center mb-3 border border-sky-100 shadow-2xs">
                    {idx + 1}
                  </div>
                  <h3 className="text-xs text-slate-800 mb-1 font-bold">
                    {fase.titulo}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {fase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banner complementario de garantía */}
          <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-sky-50/80 via-slate-50 to-emerald-50/60 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-sky-700 shrink-0">
                <ShieldCheck className="w-5 h-5 text-sky-700" />
              </div>
              <span>
                Todos los dictámenes y memorias técnicas cumplen con sus respectivos lineamientos.
              </span>
            </div>
            <button
              onClick={handleRequestClick}
              className="text-xs font-semibold text-red-700 hover:text-red-800 shrink-0 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Contactar con un Asesor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
