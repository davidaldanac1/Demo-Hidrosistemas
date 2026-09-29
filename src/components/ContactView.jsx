import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink, 
  Navigation 
} from 'lucide-react';
import { companyInfo } from '../data/mockData';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const mapsUrl = "https://www.google.com/maps/place/Hidrosistemas/@20.0460323,-98.7244177,17z/data=!3m1!4b1!4m6!3m5!1s0x842eeef8364d9bcf:0xd7ba69856107117d!8m2!3d20.0460323!4d-98.7244177!16s%2Fg%2F1ptx4_c9j";

  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { url: 'https://wa.me/527712167150', view: 'contacto' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('contact_form_submit', { ...formData, view: 'contacto' });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 4000);
  };

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
      {/* Encabezado Principal */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-3 tracking-tight">
          Ponte en Contacto con Nosotros
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-500 mt-2 max-w-xl mx-auto leading-relaxed">
          Soporte técnico, asesoría en obra y cotizaciones de suministro para tu empresa o proyecto.
        </p>
      </motion.div>

      {/* Contenedores de Información y Formulario: Mismo tamaño, alineados y nivelados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Contenedor 1: Información de Contacto */}
        <motion.div 
          variants={itemVariants} 
          className="bg-white p-7 md:p-9 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mt-1">
              Contáctanos
            </h2>
            <div className="w-16 h-1 bg-sky-600 rounded-full mt-2 mb-6" />

            {/* Bloques de Datos de Contacto */}
            <div className="space-y-4">
              {/* Dirección */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Dirección</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* Teléfonos y WhatsApp en 2 columnas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Teléfonos */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-50 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Teléfonos</p>
                    <div className="text-xs text-slate-600 mt-0.5 space-y-0.5">
                      <a href="tel:7717132513" className="block hover:text-sky-700 transition-colors font-medium">771 713 2513</a>
                      <a href="tel:7717132514" className="block hover:text-sky-700 transition-colors font-medium">771 713 2514</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-50 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">WhatsApp</p>
                    <a 
                      href="https://wa.me/527712167150" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-0.5 block"
                    >
                      771 216 7150
                    </a>
                    <span className="text-[10px] text-emerald-600 block mt-0.5 font-medium">Respuesta rápida</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3.5 hover:bg-slate-50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Email</p>
                  <a 
                    href={`mailto:${companyInfo.email}`}
                    className="text-xs text-slate-700 hover:text-sky-700 font-medium leading-relaxed mt-0.5 block transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Atención y cotizaciones formales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enlace y CTA WhatsApp Corporativo */}
          <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
            <a
              href="https://wa.me/527712167150"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3.5 px-4 rounded-2xl transition-all shadow-sm hover:shadow-md hover:shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
              <span>Cotización por WhatsApp (771 216 7150)</span>
            </a>
            <p className="text-[11px] text-center text-slate-400">
              Mineral de la Reforma, Hidalgo • Envíos a todo el país
            </p>
          </div>
        </motion.div>

        {/* Contenedor 2: Formulario B2B */}
        <motion.div 
          variants={itemVariants} 
          className="bg-white p-7 md:p-9 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative overflow-hidden"
        >
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mt-1">
              Envíanos un Mensaje
            </h2>
            <div className="w-16 h-1 bg-red-600 rounded-full mt-2 mb-6" />

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-auto py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-emerald-900">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 mt-2 max-w-sm mx-auto">
                  Hemos recibido tu solicitud técnica. Nuestro departamento comercial se pondrá en contacto contigo a la brevedad.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombre Completo o Razón Social
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Constructora del Centro / Ing. Alejandro Gómez" 
                    className="w-full text-xs bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-700 focus:bg-white transition-all" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contacto@empresa.com" 
                      className="w-full text-xs bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-700 focus:bg-white transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Teléfono de Contacto
                    </label>
                    <input 
                      type="tel" 
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="(771) 000-0000" 
                      className="w-full text-xs bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-700 focus:bg-white transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-3">
                    Requerimientos Técnicos o Partida de Obra
                  </label>
                  <textarea 
                    rows="4" 
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Describe los diámetros, volumen de tuberías, piezas especiales o servicio que requieres..." 
                    className="w-full text-xs bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-700 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white text-xs font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-700/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5 text-white/90" />
                  <span>Enviar Solicitud de Información</span>
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Datos protegidos confidencialmente
            </span>
            <span>Respuesta en menos de 24 hrs</span>
          </div>
        </motion.div>

      </div>

      {/* Contenedor del Mapa: Ancho completo (del tamaño de los dos contenedores juntos) */}
      <motion.div 
        variants={itemVariants} 
        className="w-full mt-8 md:mt-10 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-sm"
      >
        {/* Cabecera del Mapa */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
              Ubicación de Planta y Oficinas
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Circuito Emprendedores No. 19, Parque Industrial Metropolitano, CP 42186
            </p>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold transition-all shadow-sm hover:shadow-md hover:shadow-sky-700/20 shrink-0 group cursor-pointer"
          >
            <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Abrir en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-200" />
          </a>
        </div>

        {/* Marco y Canvas del Mapa Interactivo */}
        <div className="relative w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-200 mt-6 shadow-inner bg-slate-100">
          <iframe
            title="Mapa de Ubicación de Hidrosistemas"
            src="https://maps.google.com/maps?q=20.0460323,-98.7244177&hl=es&z=17&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
