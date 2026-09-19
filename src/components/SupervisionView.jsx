import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  HardHat, 
  Compass, 
  ClipboardCheck, 
  Building2 
} from 'lucide-react';

export default function SupervisionView({ onContactClick }) {
  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleRequestClick = () => {
    trackEvent('supervision_cta_click', { action: 'solicitar_supervision_proyecto', view: 'supervision' });
    if (onContactClick) onContactClick();
  };

  const pilares = [
    {
      id: 'cumplimiento-normativo',
      title: 'Cumplimiento Normativo',
      desc: 'Aplicación estricta de normativas oficiales en cada tramo de tubería y conexión.',
      icon: ShieldCheck,
    },
    {
      id: 'alineacion-planos',
      title: 'Alineación a Planos',
      desc: 'Inspección milimétrica de trazos, niveles, pendientes y diámetros contra el proyecto ejecutivo autorizado.',
      icon: FileCheck2,
    },
    {
      id: 'control-materiales',
      title: 'Control de Materiales',
      desc: 'Validación física y documental de tuberías, válvulas y piezas especiales antes de su montaje subterráneo.',
      icon: CheckCircle2,
    },
    {
      id: 'mitigacion-plazos',
      title: 'Mitigación y Plazos',
      desc: 'Supervisión continua que previene cuellos de botella, retrabajos y costos imprevistos de mantenimiento futuro.',
      icon: Clock,
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
      {/* 1. HERO SECTION DE SUPERVISIÓN */}
      <motion.section variants={itemVariants} className="pt-28 md:pt-32 pb-14 px-6 max-w-5xl mx-auto text-center">

        {/* Título */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
          Supervisión Profesional de Proyectos
        </h1>

        {/* Subtítulo */}
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mt-3 leading-relaxed">
          Garantizamos el éxito de sus proyectos hidráulicos con nuestra supervisión experta, asegurando calidad, eficiencia y cumplimiento de normativas en cada etapa del proceso.
        </p>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleRequestClick}
            className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:shadow-red-700/20 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Solicitar Supervisión de Proyecto</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90" />
          </button>
        </div>
      </motion.section>

      {/* 2. SECCIÓN DE ENFOQUE ESPECIALIZADO (GRID A 2 COLUMNAS) */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Texto (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
              Supervisión Especializada en Campo
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-3 font-normal">
              En Hidrosistemas, verificamos y supervisamos el cumplimiento de instalaciones y avance contra proyecto, integrando la aplicación rigurosa de las normas y reglamentos nacionales e internacionales vigentes.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-3 font-normal">
              Garantizamos que cada material empleado cumpla con los estándares de calidad y que todas las instalaciones se realicen conforme a los planos y especificaciones técnicas aprobadas.
            </p>

            <p className="text-xs text-slate-500 leading-relaxed">
              Acompañamos a nuestros socios durante cada etapa de la obra para asegurar una inversión segura, funcional y con viabilidad a largo plazo, reduciendo riesgos operativos y costos de mantenimiento mientras cumplimos con los plazos establecidos.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>Dictámenes Técnicos Oficiales</span>
              </span>
            </div>
          </div>

          {/* Columna Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="aspect-4/3 bg-slate-200 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-slate-400 p-8 relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-xs border border-slate-200/80 flex items-center justify-center text-sky-700 shadow-sm mb-4 group-hover:scale-105 transition-transform">
                <HardHat className="w-8 h-8 text-sky-700" />
              </div>
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                Ingeniería y Supervisión en Sitio
              </span>
              <p className="text-[11px] text-slate-500 text-center mt-2 max-w-xs leading-relaxed">
                Auditorías en zanja, verificación de camas de apoyo, termofusión y atraques de concreto.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-white/70 px-2.5 py-1 rounded-full border border-slate-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>Auditoría en Obra Civil e Industrial</span>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 3. PILARES OPERATIVOS DE SUPERVISIÓN (GRID DE 4 TARJETAS BENTO) */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto px-6 pb-20 md:pb-24">
        <div className="text-left mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
            Compromisos de Control Técnico
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Mitigación sistemática de riesgos operativos, vicios ocultos y sobrecostos en obra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {pilares.map((pilar) => {
            const IconComp = pilar.icon;
            return (
              <motion.div
                key={pilar.id}
                variants={itemVariants}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-sky-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-3 group-hover:bg-sky-100 transition-colors">
                    <IconComp className="w-5 h-5 text-sky-700" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1.5">
                    {pilar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1 text-[10px] text-sky-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Control de Calidad</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}
