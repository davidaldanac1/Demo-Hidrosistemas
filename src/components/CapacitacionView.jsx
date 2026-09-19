import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Award, 
  TrendingUp, 
  Wrench, 
  Gauge, 
  SunMedium, 
  Layers, 
  Droplets, 
  FileSpreadsheet, 
  Hammer, 
  ArrowRight, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export default function CapacitacionView({ onContactClick }) {
  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleRequestDates = () => {
    trackEvent('capacitacion_cta_click', { action: 'solicitar_calendario_fechas', view: 'capacitacion' });
    if (onContactClick) onContactClick();
  };

  const handleCourseInquiry = (courseTitle) => {
    trackEvent('curso_inquiry_click', { curso: courseTitle, view: 'capacitacion' });
    if (onContactClick) onContactClick();
  };

  const beneficios = [
    {
      id: 'instructores-expertos',
      title: 'Instructores Expertos',
      desc: 'Profesionales con más de 15 años de experiencia activa en obras y proyectos.',
      icon: UserCheck,
    },
    {
      id: 'certificacion',
      title: 'Certificación',
      desc: 'Diplomas con validez oficial reconocidos por el sector hidráulico e infraestructura.',
      icon: Award,
    },
    {
      id: 'rentabilidad',
      title: 'Rentabilidad',
      desc: 'Mejoras directas en la eficiencia operativa que reducen mermas y costos de mantenimiento.',
      icon: TrendingUp,
    },
    {
      id: 'enfoque-practico',
      title: 'Enfoque Práctico',
      desc: '70% del tiempo curricular dedicado a talleres y prácticas con equipos reales.',
      icon: Wrench,
    },
  ];

  const cursos = [
    {
      id: 'mantenimiento-hidroneumatico',
      title: 'Mantenimiento Hidroneumático',
      desc: 'Mantenimiento preventivo y correctivo de sistemas hidroneumáticos, diagnóstico de fallas y protocolos operativos.',
      icon: Gauge,
      duracion: '24 horas · Teórico / Práctico',
    },
    {
      id: 'bombas-centrifugas-solares',
      title: 'Bombas Centrífugas y Solares',
      desc: 'Procedimientos de desmontaje, mantenimiento preventivo, reparación y reinstalación de equipos de bombeo.',
      icon: SunMedium,
      duracion: '32 horas · Taller en Banco',
    },
    {
      id: 'soporteria-control-vibracion',
      title: 'Soportería y Control de Vibración',
      desc: 'Técnicas de sujeción para tuberías de gran diámetro, análisis de vibración y uso de empaques antivibratorios.',
      icon: Layers,
      duracion: '16 horas · Normativa Sísmica',
    },
    {
      id: 'deteccion-avanzada-fugas',
      title: 'Detección Avanzada de Fugas',
      desc: 'Técnicas no invasivas para localización de fugas en redes hidráulicas y uso de instrumental especializado.',
      icon: Droplets,
      duracion: '20 horas · Práctica en Campo',
    },
    {
      id: 'interpretacion-planos-hidraulicos',
      title: 'Interpretación de Planos Hidráulicos',
      desc: 'Lectura de planos ejecutivos, simbología normada bajo estándares nacionales y aplicación en campo.',
      icon: FileSpreadsheet,
      duracion: '18 horas · Presencial / Online',
    },
    {
      id: 'plomeria-instalaciones-profesionales',
      title: 'Plomería e Instalaciones Profesionales',
      desc: 'Técnicas normadas con enfoque en sistemas domésticos, comerciales e industriales de alta presión.',
      icon: Hammer,
      duracion: '30 horas · Certificación Laboral',
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
      {/* 1. HERO SECTION (PRESENTACIÓN DEL PROGRAMA) */}
      <motion.section variants={itemVariants} className="pt-28 md:pt-32 pb-14 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Texto (7 cols) */}
          <div className="lg:col-span-7 text-left">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
              Programas de Capacitación Hidráulica
            </h1>

            <p className="text-sm text-slate-600 mt-4 leading-relaxed font-normal">
              Ofrecemos programas de capacitación diseñados para satisfacer las necesidades específicas de profesionales en el sector hidráulico. Combinamos fundamentos teóricos con aplicaciones prácticas para garantizar una formación integral.
            </p>

            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Instructores altamente calificados con amplia experiencia industrial. Modalidades presencial y en línea con flexibilidad de horarios para empresas y dependencias.
            </p>

            <div className="mt-6">
              <button
                onClick={handleRequestDates}
                className="bg-red-700 hover:bg-red-800 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:shadow-red-700/20 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Solicitar Calendario y Fechas</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/90" />
              </button>
            </div>
          </div>

          {/* Columna Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="aspect-video lg:aspect-square bg-slate-200 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-slate-400 p-8 relative overflow-hidden group">
              <div className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-xs border border-slate-200/80 flex items-center justify-center text-sky-700 shadow-sm mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-10 h-10 text-sky-700" />
              </div>
              <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">
                Aula y Talleres Prácticos
              </span>
              <p className="text-[11px] text-slate-500 text-center mt-2 max-w-xs leading-relaxed">
                Capacitación in-situ en planta y módulos interactivos con simuladores de presión y termofusión.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-white/70 px-2.5 py-1 rounded-full border border-slate-200">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>Validez Técnica STPS & NMX</span>
              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. BENEFICIOS DE LA CAPACITACIÓN (4 TARJETAS BENTO) */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-left mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
            Beneficios Institucionales
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Impacto directo en la reducción de costos operativos, seguridad del personal y vida útil de la red.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {beneficios.map((ben) => {
            const IconComp = ben.icon;
            return (
              <motion.div
                key={ben.id}
                variants={itemVariants}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-sky-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700 mb-3 group-hover:bg-sky-100 transition-colors">
                    <IconComp className="w-5 h-5 text-sky-700" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1.5">
                    {ben.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1 text-[10px] text-sky-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Estándar certificado</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* 3. SECCIÓN: CATÁLOGO DE CURSOS (GRID) */}
      <motion.section variants={itemVariants} className="max-w-6xl mx-auto px-6 pb-20 md:pb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              Cursos Disponibles
            </h2>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">
              Programas curriculares teórico-prácticos para ingenieros, supervisores y cuadrillas.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 self-start sm:self-auto shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-sky-700" />
            <span>Modalidades Presencial y Online</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cursos.map((curso) => {
            const CourseIcon = curso.icon;
            return (
              <motion.div
                key={curso.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-sky-200 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-sky-700 mb-4 group-hover:bg-sky-50 transition-colors">
                    <CourseIcon className="w-6 h-6 text-sky-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-sky-800 transition-colors">
                    {curso.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {curso.desc}
                  </p>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {curso.duracion}
                  </span>
                </div>

                <button
                  onClick={() => handleCourseInquiry(curso.title)}
                  className="text-xs font-semibold text-sky-700 hover:text-sky-800 pt-4 border-t border-slate-50 mt-4 flex items-center justify-between cursor-pointer w-full text-left"
                >
                  <span>Solicitar temario y requisitos</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}
