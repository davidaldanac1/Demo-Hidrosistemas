import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Building2, 
  Clock,
  ShieldCheck
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

  const trackEvent = (eventName, payload) => {
    console.info(`[Analytics - Demo Mode]: ${eventName}`, payload);
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { url: 'https://wa.me/7712167150', view: 'contacto' });
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
      className="pt-28 md:pt-32 pb-20 md:pb-24 px-6 max-w-5xl mx-auto selection:bg-sky-100 selection:text-sky-800"
    >
      {/* Encabezado */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-3 tracking-tight">
          Ponte en Contacto con Nosotros
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Soporte técnico, asesoría en obra y cotizaciones de suministro para tu empresa o proyecto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Columna Izquierda: Información y Canales Directos (5 cols) */}
        <motion.div 
          variants={itemVariants} 
          className="md:col-span-5 bg-white p-7 rounded-3xl border border-slate-100 shadow-sm space-y-6"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
              Canales Oficiales
            </span>
            <h2 className="text-lg font-bold text-slate-800 mt-2">
              Oficinas Generales
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Atención ejecutiva a constructoras y dependencias públicas.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Planta / Oficinas</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{companyInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Atención Telefónica</p>
                <p className="text-xs text-slate-500 mt-0.5">{companyInfo.phones}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-sky-700 shrink-0 shadow-2xs">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Correo Comercial</p>
                <p className="text-xs text-slate-500 mt-0.5">{companyInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Enlace Directo a WhatsApp Oficial */}
          <div className="pt-2">
            <a
              href="https://wa.me/7712167150"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 px-4 rounded-2xl transition-all shadow-sm hover:shadow-md hover:shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100 group-hover:scale-110 transition-transform" />
              <span>Chatear por WhatsApp Oficial</span>
            </a>
          </div>
        </motion.div>

        {/* Columna Derecha: Formulario B2B (7 cols) */}
        <motion.div 
          variants={itemVariants} 
          className="md:col-span-7 bg-white p-7 md:p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-100">
              Solicitud Directa
            </span>
            <h2 className="text-lg font-bold text-slate-800 mt-2">
              Envíanos un Mensaje
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Completa el formulario y un asesor técnico responderá a la brevedad.
            </p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-emerald-900">¡Mensaje Enviado con Éxito!</h3>
              <p className="text-xs text-emerald-700 mt-1 max-w-sm mx-auto">
                Hemos recibido tu solicitud técnica. Nuestro departamento comercial se pondrá en contacto contigo.
              </p>
            </motion.div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Requerimientos Técnicos o Partida de Obra
                </label>
                <textarea 
                  rows="3" 
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Describe los diámetros, volumen de tuberías, piezas especiales o servicio que requieres..." 
                  className="w-full text-xs bg-slate-50/70 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-700 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white text-xs font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-700/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-white/90" />
                <span>Enviar Solicitud de Información</span>
              </button>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Datos protegidos confidencialmente
            </span>
            <span>Respuesta en menos de 24 hrs hábiles</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
