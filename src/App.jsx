import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import CatalogView from './components/CatalogView';
import ContactView from './components/ContactView';
import NosotrosView from './components/NosotrosView';
import PdfCatalogView from './components/PdfCatalogView';
import AsesoriaView from './components/AsesoriaView';
import CapacitacionView from './components/CapacitacionView';
import SupervisionView from './components/SupervisionView';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setView] = useState('inicio');
  const [selectedService, setSelectedService] = useState('asesoria');
  const [selectedPdfPage, setSelectedPdfPage] = useState(0);
  const [pdfNavKey, setPdfNavKey] = useState(0);

  const handleSelectService = (srv) => {
    setSelectedService(srv);
  };

  const handleNavigate = (view, page = 0, isFrom3d = false) => {
    if (view === 'pdf-catalog' || view === 'catalogo') {
      // Exclusivamente la interacción desde el esquema 3D ("isFrom3d === true")
      // puede abrir una página técnica específica.
      // Cualquier otro botón, enlace o sección entra siempre a la portada oficial (página 0).
      setSelectedPdfPage(isFrom3d ? page : 0);
      setPdfNavKey((prev) => prev + 1);
    }
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPdf = (page = 0, isFrom3d = false) => {
    handleNavigate('pdf-catalog', page, isFrom3d);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-800 overflow-x-clip flex flex-col justify-between">
      <Navbar 
        currentView={currentView} 
        setView={(v) => handleNavigate(v, 0, false)} 
        onSelectService={handleSelectService}
      />
      
      <main className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full"
          >
            {currentView === 'inicio' && (
              <HomeView onNavigate={handleNavigate} />
            )}
            {currentView === 'productos' && (
              <CatalogView onNavigateToPdf={handleNavigateToPdf} />
            )}
            {(currentView === 'pdf-catalog' || currentView === 'catalogo') && (
              <PdfCatalogView 
                key={`pdf-view-${pdfNavKey}`}
                initialPage={selectedPdfPage} 
                onBackToCatalog={() => handleNavigate('inicio', 0, false)} 
              />
            )}
            {(currentView === 'supervision' || (currentView === 'servicios' && selectedService === 'supervision')) && (
              <SupervisionView onContactClick={() => handleNavigate('contacto', 0, false)} />
            )}
            {(currentView === 'capacitacion' || (currentView === 'servicios' && selectedService === 'capacitacion')) && (
              <CapacitacionView onContactClick={() => handleNavigate('contacto', 0, false)} />
            )}
            {(currentView === 'asesoria' || (currentView === 'servicios' && selectedService === 'asesoria')) && (
              <AsesoriaView onContactClick={() => handleNavigate('contacto', 0, false)} />
            )}
            {currentView === 'nosotros' && <NosotrosView />}
            {currentView === 'contacto' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Global Corporativo */}
      <Footer 
        setView={(v) => handleNavigate(v, 0, false)} 
        onSelectService={handleSelectService} 
      />
    </div>
  );
}
