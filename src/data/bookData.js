export const bookChapters = [
  { id: 1, title: "CPVC Agua Caliente", page: 1, tag: "Sistemas Hidráulicos Termoplásticos", range: "Pág. 01 - 02" },
  { id: 2, title: "Hidráulica PVC C-40 y C-80", page: 3, tag: "Cédulas de Presión e Industrial", range: "Pág. 03 - 07" },
  { id: 3, title: "Polietileno PAD / PEAD", page: 8, tag: "Conducción Pluvial y Sanitaria", range: "Pág. 08 - 17" },
  { id: 4, title: "Conexiones Fierro Fundido", page: 18, tag: "Uso Pesado y Redes de Agua", range: "Pág. 18 - 19" },
  { id: 5, title: "Alcantarillado Sanitario", page: 20, tag: "Sistemas Métricos y Atarjeas", range: "Pág. 20 - 28" },
  { id: 6, title: "Soportería y Brocales PEAR", page: 29, tag: "Polímeros Anti-Robo y Conexiones", range: "Pág. 29 - 32" },
];

export const getChapterContent = (page) => {
  if (page <= 2) {
    return {
      code: "CAT-SEC-01",
      normative: "ASTM D2846 · NMX-E-181-CNCP · NSF/ANSI 61",
      colorBadge: "bg-amber-600 text-white",
      leftPage: {
        pageNum: 1,
        familyTitle: "Tuberías y Conexiones CPVC FlowGuard Gold®",
        familyDescription: "Diseñado para conducción de agua fría y caliente a alta presión en edificaciones residenciales, hoteleras y hospitalarias. Inerte al cloro, resistente a temperaturas de hasta 82°C.",
        certifications: ["Certificado Grado Potable NSF 61", "Resistencia a Presión: 100 PSI @ 82°C / 400 PSI @ 23°C", "Unión por Cemento Solvente de Un Solo Paso", "Vida útil estimada: > 50 Años"],
        materialSummary: "Compuesto de Policloruro de Vinilo Clorado (CPVC) virgen de celda 23447 conforme a ASTM D1784."
      },
      rightPage: {
        pageNum: 2,
        tableTitle: "Tabla de Piezas y Partidas de Catálogo",
        parts: [
          { sku: "CPVC-TUB-050", name: 'Tubo CPVC FlowGuard Gold 1/2"', diamNom: '1/2" (13 mm)', espesor: '1.73 mm', presion: '400 PSI @ 23°C', empaque: 'Tramo 3.05 m', desc: 'Tubería rígida para ramaleo interior en baños y cocinas.' },
          { sku: "CPVC-TUB-075", name: 'Tubo CPVC FlowGuard Gold 3/4"', diamNom: '3/4" (19 mm)', espesor: '2.03 mm', presion: '400 PSI @ 23°C', empaque: 'Tramo 3.05 m / 6.10 m', desc: 'Línea de alimentación principal para departamentos y residencias.' },
          { sku: "CPVC-C90-075", name: 'Codo 90° CPVC Cementar 3/4"', diamNom: '3/4" (19 mm)', espesor: 'SDR 11', presion: '150 PSI Continuo', empaque: 'Caja 50 pzas', desc: 'Cambio de dirección a 90 grados con pared interior de baja fricción.' },
          { sku: "CPVC-TU-MET075", name: 'Tuerca Unión CPVC con Inserto de Latón', diamNom: '3/4" NPT', espesor: 'Cédula Pesada', presion: '150 PSI @ 82°C', empaque: 'Caja 20 pzas', desc: 'Conexión de transición desmontable para boiler y bombas de presión.' },
          { sku: "CPVC-VAL-075", name: 'Válvula de Paso CPVC Esfera 3/4"', diamNom: '3/4" (19 mm)', espesor: 'Cuerpo Robusto', presion: '150 PSI', empaque: 'Pieza Unitaria', desc: 'Cierre rápido 1/4 de vuelta para control de flujo en cuartos de baño.' }
        ]
      }
    };
  } else if (page <= 7) {
    return {
      code: "CAT-SEC-02",
      normative: "ASTM D1785 · ASTM D2466 / D2467 · NMX-E-145/1",
      colorBadge: "bg-sky-700 text-white",
      leftPage: {
        pageNum: 3,
        familyTitle: "Sistemas Hidráulicos PVC para Presión Industrial",
        familyDescription: "Tuberías y conexiones fabricadas con resina virgen de PVC para conducción de agua a presión en plantas de tratamiento, sistemas de bombeo, irrigación tecnificada y procesos químicos industriales.",
        certifications: ["Presiones de 140 PSI a 600 PSI según diámetro", "Cédula 80 resistente a fluidos corrosivos", "Conexión Cementar y Roscada NPT", "Fabricación bajo control de calidad ISO 9001"],
        materialSummary: "Policloruro de Vinilo Tipo 1 Grado 1 (PVC 1120). Temperatura máxima de operación 60°C."
      },
      rightPage: {
        pageNum: 4,
        tableTitle: "Tabla de Piezas y Partidas de Catálogo",
        parts: [
          { sku: "PVC-C40-200", name: 'Tubo PVC Hidráulico C-40 2"', diamNom: '2" (50 mm)', espesor: '3.91 mm', presion: '280 PSI', empaque: 'Tramo 6.00 m', desc: 'Conducción presurizada en sistemas contra incendio y riego.' },
          { sku: "PVC-C80-200", name: 'Tubo PVC Industrial C-80 2"', diamNom: '2" (50 mm)', espesor: '5.54 mm', presion: '400 PSI', empaque: 'Tramo 6.00 m', desc: 'Pared gruesa para procesos industriales y transporte de químicos.' },
          { sku: "VAL-ESF-C80-2", name: 'Válvula de Esfera PVC C-80 True Union 2"', diamNom: '2" (50 mm)', espesor: 'Pared C-80', presion: '150 PSI @ 23°C', empaque: 'Pieza Unitaria', desc: 'Doble unión desmontable, asientos de teflón PTFE y sellos EPDM.' },
          { sku: "PVC-TEE-C80-2", name: 'Tee Recta PVC C-80 Cementar 2"', diamNom: '2" x 2" x 2"', espesor: 'Inyección C-80', presion: '400 PSI', empaque: 'Caja 15 pzas', desc: 'Derivación hidráulica a 90 grados con refuerzo en vértices.' },
          { sku: "PVC-BUSH-215", name: 'Reducción Bushing C-80 2" x 1 1/2"', diamNom: '2" a 1 1/2"', espesor: 'Inyección C-80', presion: '400 PSI', empaque: 'Caja 25 pzas', desc: 'Reducción concéntrica cementar para líneas de bombeo.' }
        ]
      }
    };
  } else if (page <= 17) {
    return {
      code: "CAT-SEC-03",
      normative: "NMX-E-242/1-ANCE · ASTM F2306 · AASHTO M294",
      colorBadge: "bg-slate-800 text-white",
      leftPage: {
        pageNum: 8,
        familyTitle: "Polietileno Corrugado PAD y Tubería Lisa PE100",
        familyDescription: "Tuberías corrugadas de polietileno de alta densidad (PAD) con interior liso para drenaje pluvial, alcantarillado sanitario y retención pluvial.",
        certifications: ["Rigidez Anular Clase 50 (Soporta tráfico H-25)", "Coeficiente Manning n = 0.009 (Autolavable)", "Empaque elastomérico integrado conforme a ASTM F477", "Inmune a la abrasión por arena, grava y lodos"],
        materialSummary: "Polietileno de Alta Densidad virgen con aditivo negro de humo para protección a la intemperie."
      },
      rightPage: {
        pageNum: 9,
        tableTitle: "Tabla de Piezas y Partidas de Catálogo",
        parts: [
          { sku: "PEAD-CORR-04", name: 'Tubo Corrugado PAD 4" Hermético', diamNom: '4" (100 mm)', espesor: 'Rigidez SN4', presion: 'Gravedad / 10.8 PSI', empaque: 'Tramo 6.00 m', desc: 'Drenaje pluvial domiciliario, agrícola y captación de azoteas.' },
          { sku: "PEAD-CORR-08", name: 'Tubo Corrugado PAD 8" Hermético', diamNom: '8" (200 mm)', espesor: 'Rigidez SN4 / SN8', presion: 'Hermético ASTM F477', empaque: 'Tramo 6.00 m', desc: 'Colectores pluviales y sanitarios municipales de media capacidad.' },
          { sku: "PEAD-CORR-12", name: 'Tubo Corrugado PAD 12" Hermético', diamNom: '12" (300 mm)', espesor: 'Rigidez SN8 Tráfico Pesado', presion: 'Hermético ASTM F477', empaque: 'Tramo 6.00 m', desc: 'Infraestructura urbana mayor y líneas de retención en fraccionamientos.' },
          { sku: "PEAD-LISA-110", name: 'Tubería Lisa PEAD PE100 RD-11 110mm', diamNom: '110 mm (4")', espesor: '10.0 mm', presion: 'PN 16 (230 PSI)', empaque: 'Tramo 12.00 m', desc: 'Conducción de agua potable por termofusión y electrofusión.' },
          { sku: "PEAD-SIL-0804", name: 'Silleta de Derivación PAD 8" a 4"', diamNom: '8" principal a 4"', espesor: 'Cuerpo Termoformado', presion: 'Hermética', empaque: 'Pieza con cincho inox', desc: 'Conexión de descargas domiciliarias sobre colectores en operación.' }
        ]
      }
    };
  } else if (page <= 19) {
    return {
      code: "CAT-SEC-04",
      normative: "ASTM A48 Clase 30 · AWWA C509 · AWWA C110",
      colorBadge: "bg-zinc-800 text-white",
      leftPage: {
        pageNum: 18,
        familyTitle: "Válvulas y Coladeras de Fundición Gris y Dúctil",
        familyDescription: "Soluciones de alta robustez mecánica para redes municipales de agua potable, plantas de bombeo, cuartos de máquinas y drenaje pluvial.",
        certifications: ["Carga de prueba superior a 25 Toneladas (Tráfico Pesado)", "Válvulas con cuña recubierta de EPDM vulcanizado", "Pintura epóxica aplicada por termofusión", "Cumplimiento con especificaciones de CONAGUA"],
        materialSummary: "Fierro Fundido Gris ASTM A48 y Fierro Dúctil ASTM A536 Grado 65-45-12."
      },
      rightPage: {
        pageNum: 19,
        tableTitle: "Tabla de Piezas y Partidas de Catálogo",
        parts: [
          { sku: "FF-COL-PLUV-4", name: 'Coladera Pluvial de Piso Fierro Fundido 4"', diamNom: '4" Salida Inferior', espesor: 'Pared 8.0 mm', presion: 'Tráfico Pesado', empaque: 'Unidad con Rejilla', desc: 'Coladera con rejilla removible de fundición y canastilla sedimentadora.' },
          { sku: "FF-VAL-COMP-04", name: 'Válvula de Compuerta Bridadas 4" AWWA C509', diamNom: '4" (100 mm) Brida ANSI 125', espesor: 'Fierro Dúctil', presion: '250 PSI Prueba', empaque: 'Pieza Unitaria', desc: 'Vástago no ascendente de acero inox con cuña vulcanizada en EPDM.' },
          { sku: "FF-CHK-VAL-04", name: 'Válvula Check de Retención Columpio 4"', diamNom: '4" (100 mm) Brida', espesor: 'Fierro Fundido', presion: '200 PSI', empaque: 'Pieza Unitaria', desc: 'Evita el retorno de flujo y golpes de ariete en líneas de bombeo.' },
          { sku: "FF-JUNTA-GIB-04", name: 'Junta Gibault para Tubería 4"', diamNom: '4" (100 mm)', espesor: 'Brida con empaques', presion: '150 PSI', empaque: 'Juego con tornillería', desc: 'Acoplamiento rápido para unir tuberías de asbesto-cemento, PVC y acero.' }
        ]
      }
    };
  } else if (page <= 28) {
    return {
      code: "CAT-SEC-05",
      normative: "NMX-E-199/1-SCFI · NMX-E-215/1-CNCP",
      colorBadge: "bg-emerald-800 text-white",
      leftPage: {
        pageNum: 20,
        familyTitle: "Tubería Sanitaria Serie 20 y Serie 25 (Sistema Métrico)",
        familyDescription: "Línea completa para atarjeas y colectores sanitarios urbanos. Fabricada con unión espiga-campana y anillo de hule 'Rieber' integrado.",
        certifications: ["Hermeticidad total: Cero fugas y cero infiltraciones", "Serie 20 (S-20) para profundidad normal", "Serie 25 (S-25) para profundidades mayores y alto tráfico vehicular", "Resistente a la formación de ácido sulfhídrico y gases cloacales"],
        materialSummary: "PVC rígido no plastificado formulado para resistencia a la fluencia y flexión permanente."
      },
      rightPage: {
        pageNum: 21,
        tableTitle: "Tabla de Piezas y Partidas de Catálogo",
        parts: [
          { sku: "SAN-S20-160", name: 'Tubo Sanitario PVC Serie 20 160 mm', diamNom: '160 mm (6")', espesor: '3.2 mm', presion: 'Gravedad Hermética', empaque: 'Tramo 6.00 m', desc: 'Atarjea secundaria para descargas sanitarias en fraccionamientos.' },
          { sku: "SAN-S20-200", name: 'Tubo Sanitario PVC Serie 20 200 mm', diamNom: '200 mm (8")', espesor: '4.0 mm', presion: 'Gravedad Hermética', empaque: 'Tramo 6.00 m', desc: 'Colector sanitario principal para vialidades públicas.' },
          { sku: "SAN-S25-250", name: 'Tubo Sanitario PVC Serie 25 250 mm (Uso Pesado)', diamNom: '250 mm (10")', espesor: '6.2 mm', presion: 'Alta Rigidez Anular', empaque: 'Tramo 6.00 m', desc: 'Instalaciones a profundidades mayores a 3 metros bajo vialidades pesadas.' },
          { sku: "SAN-CODO-160-45", name: 'Codo Sanitario 45° PVC Campana-Espiga 160 mm', diamNom: '160 mm', espesor: 'Serie 20', presion: 'Con empaque Rieber', empaque: 'Pieza Unitaria', desc: 'Desviaciones suaves en zanja para mantener la línea hidráulica.' },
          { sku: "SAN-YEE-160110", name: 'Yee Reducida Sanitaria 160 x 110 mm', diamNom: '160 mm x 110 mm', espesor: 'Inyección Hermética', presion: 'Hermética', empaque: 'Pieza Unitaria', desc: 'Interconexión de albañal domiciliario hacia atarjea colectora.' }
        ]
      }
    };
  } else {
    return {
      code: "CAT-SEC-06",
      normative: "Norma SCT · Normativa Municipal Urbana de Obras Públicas",
      colorBadge: "bg-red-800 text-white",
      leftPage: {
        pageNum: 29,
        familyTitle: "Brocales, Rejillas y Mobiliario Urbano en PEAR",
        familyDescription: "Fabricados en Polietileno de Alta Resistencia (PEAR). La solución tecnológica definitiva para erradicar el robo de tapas metálicas en la vía pública.",
        certifications: ["Material sin valor comercial de reciclaje en chatarreras (Cero Robos)", "Capacidad de Carga: Resiste > 25 Toneladas (Tráfico Pesado SCT)", "Cero ruidos de cascabeleo al paso de llantas", "Inmune al ácido pluvial, salinidad y corrosión química"],
        materialSummary: "Polímero de ingeniería de ultra alto impacto formulado con aditivos anti-envejecimiento UV."
      },
      rightPage: {
        pageNum: 30,
        tableTitle: "Tabla de Piezas y Partidas de Catálogo",
        parts: [
          { sku: "BR-PEAR-PV60", name: 'Brocal y Tapa para Pozo de Visita 60 cm', diamNom: 'Luz libre 60 cm (Marco 85 cm)', espesor: 'Pared sólida 50 mm', presion: 'Carga > 25 Toneladas', empaque: 'Juego Marco + Tapa', desc: 'Tapa con superficie diamantada antiderrapante y orificios para gancho de apertura.' },
          { sku: "BT-PEAR-5050", name: 'Boca de Tormenta PEAR 50 x 50 cm', diamNom: '50 x 50 cm con Marco', espesor: 'Rejilla reforzada', presion: 'Tráfico Pesado', empaque: 'Marco + Rejilla', desc: 'Captación pluvial en guarnición de banquetas con ranuras biseladas.' },
          { sku: "BT-PEAR-6070", name: 'Boca de Tormenta PEAR 60 x 70 cm', diamNom: '60 x 70 cm con Marco', espesor: 'Rejilla de alto caudal', presion: 'Tráfico Pesado', empaque: 'Marco + Rejilla', desc: 'Gran capacidad de captación en pasos a desnivel y avenidas principales.' },
          { sku: "ESC-POL-ACERO", name: 'Escalón para Pozo de Visita Polipropileno / Acero', diamNom: 'Ancho 30 cm x 20 cm fondo', espesor: 'Varilla 1/2" Corrugada', presion: 'Carga 150 kg', empaque: 'Caja 20 pzas', desc: 'Peldaño de descenso con recubrimiento de polímero naranja antiderrapante.' }
        ]
      }
    };
  }
};
