export const companyInfo = {
  name: "Hidrosistemas",
  address: "Circuito Emprendedores No. 19, Parque Industrial Metropolitano, Mineral de la Reforma, Hgo. CP 42186",
  phones: "771-713-2513 / 771-216-7150",
  email: "ventas@hidrosistemas.com.mx",
};

export const productCategories = [
  { id: 'todos', name: 'Todos los Productos', count: 18, page: 1 },
  { id: 'cpvc', name: 'CPVC Agua Caliente', count: 3, page: 1 },
  { id: 'hidraulica-pvc', name: 'Hidráulica PVC C-40 y C-80', count: 3, page: 3 },
  { id: 'polietileno-pad', name: 'Polietileno PAD/PEAD', count: 4, page: 8 },
  { id: 'fierro-fundido', name: 'Conexiones Fierro Fundido', count: 2, page: 18 },
  { id: 'alcantarillado', name: 'Alcantarillado Sanitario', count: 3, page: 20 },
  { id: 'soporteria-pear', name: 'Soportería y Brocales PEAR', count: 3, page: 29 },
];

export const catalogProducts = [
  // CPVC Agua Caliente
  {
    id: 201,
    name: 'Tubería CPVC FlowGuard Gold 1/2" a 2"',
    category: 'CPVC Agua Caliente',
    categoryId: 'cpvc',
    norm: 'ASTM D2846 / NMX-E-181',
    diam: '1/2", 3/4", 1", 1 1/2", 2"',
    sku: 'CPVC-TUB01',
    pdfPage: 1,
    desc: 'Tubería termoplástica resistente a altas temperaturas (hasta 82°C) y presiones de trabajo continuas para redes de agua potable caliente y fría.'
  },
  {
    id: 202,
    name: 'Codo 90° CPVC Cementar',
    category: 'CPVC Agua Caliente',
    categoryId: 'cpvc',
    norm: 'ASTM D2846 Cédula Estándar',
    diam: '1/2", 3/4", 1"',
    sku: 'CPVC-C90',
    pdfPage: 1,
    desc: 'Accesorio de unión cementada para cambios de dirección a 90 grados con alta resistencia química y nula corrosión.'
  },
  {
    id: 203,
    name: 'Tuerca Unión CPVC con Inserto de Latón',
    category: 'CPVC Agua Caliente',
    categoryId: 'cpvc',
    norm: 'Transición Roscada NPT',
    diam: '3/4" y 1"',
    sku: 'CPVC-TU01',
    pdfPage: 2,
    desc: 'Conexión desmontable para equipos hidroneumáticos, bombas y calentadores sin necesidad de cortar la línea.'
  },

  // Hidráulica PVC C-40 y C-80
  {
    id: 204,
    name: 'Tubería PVC Hidráulica Cédula 40',
    category: 'Hidráulica PVC C-40 y C-80',
    categoryId: 'hidraulica-pvc',
    norm: 'ASTM D1785 / NMX-E-145/1',
    diam: '1/2" hasta 8"',
    sku: 'PVC-C40-01',
    pdfPage: 3,
    desc: 'Línea de conducción de agua a presión con unión cementar, ideal para sistemas de bombeo, riego tecnificado e industria.'
  },
  {
    id: 205,
    name: 'Tubería PVC Industrial Cédula 80',
    category: 'Hidráulica PVC C-40 y C-80',
    categoryId: 'hidraulica-pvc',
    norm: 'ASTM D1785 Uso Rudo',
    diam: '1/2" hasta 12"',
    sku: 'PVC-C80-01',
    pdfPage: 4,
    desc: 'Pared gruesa para procesos químicos, tratamiento de aguas y fluidos industriales de alta presión y exigencia mecánica.'
  },
  {
    id: 206,
    name: 'Válvula de Esfera PVC C-80 Roscada',
    category: 'Hidráulica PVC C-40 y C-80',
    categoryId: 'hidraulica-pvc',
    norm: '150 PSI @ 23°C',
    diam: '1/2" a 4"',
    sku: 'VAL-ESF80',
    pdfPage: 5,
    desc: 'Válvula termoplástica de corte rápido y libre mantenimiento con asiento de PTFE y sellos en EPDM.'
  },

  // Polietileno PAD/PEAD
  {
    id: 101,
    name: 'Tubo Corrugado PAD Hermético 4"',
    category: 'Polietileno PAD/PEAD',
    categoryId: 'polietileno-pad',
    norm: 'NMX-E-242/1-ANCE',
    diam: '4" (100 mm)',
    sku: 'PEAD-04',
    pdfPage: 8,
    desc: 'Tubería corrugada con interior liso para drenaje pluvial, sanitario y alcantarillado con campana bicapa integrada.'
  },
  {
    id: 102,
    name: 'Tubo Corrugado PAD Hermético 8"',
    category: 'Polietileno PAD/PEAD',
    categoryId: 'polietileno-pad',
    norm: 'NMX-E-242/1-ANCE',
    diam: '8" (200 mm)',
    sku: 'PEAD-08',
    pdfPage: 9,
    desc: 'Alta resistencia al aplastamiento (rigidez anular) para colectores principales y redes de retención pluvial.'
  },
  {
    id: 103,
    name: 'Tubo Corrugado PAD Hermético 12"',
    category: 'Polietileno PAD/PEAD',
    categoryId: 'polietileno-pad',
    norm: 'NMX-E-242/1-ANCE',
    diam: '12" (300 mm)',
    sku: 'PEAD-12',
    pdfPage: 10,
    desc: 'Gran capacidad de caudal con bajo coeficiente de fricción Manning (n=0.009), autolavable y resistente a químicos.'
  },
  {
    id: 107,
    name: 'Tubería Lisa PEAD RD-9 / RD-11',
    category: 'Polietileno PAD/PEAD',
    categoryId: 'polietileno-pad',
    norm: 'ISO 4427 / ASTM D3035',
    diam: '1/2" hasta 24"',
    sku: 'PEAD-LISA',
    pdfPage: 12,
    desc: 'Tubería de polietileno de alta densidad grado PE100 para unión por termofusión y electrofusión en agua potable a presión.'
  },

  // Conexiones Fierro Fundido
  {
    id: 301,
    name: 'Coladera Pluvial de Fierro Fundido',
    category: 'Conexiones Fierro Fundido',
    categoryId: 'fierro-fundido',
    norm: 'ASTM A48 Clase 30',
    diam: '4" y 6"',
    sku: 'CP-FF01',
    pdfPage: 18,
    desc: 'Coladera de piso de alta durabilidad para patios de maniobras, naves industriales y captación pluvial exterior.'
  },
  {
    id: 302,
    name: 'Válvula de Compuerta Fierro Fundido con Vástago',
    category: 'Conexiones Fierro Fundido',
    categoryId: 'fierro-fundido',
    norm: 'AWWA C509 Brida ANSI',
    diam: '3" hasta 12"',
    sku: 'VAL-COMP-FF',
    pdfPage: 19,
    desc: 'Cierre hermético con cuña recubierta de elastómero EPDM para redes municipales de agua potable.'
  },

  // Alcantarillado Sanitario
  {
    id: 106,
    name: 'Tubería Sanitaria PVC Métrico Serie 20',
    category: 'Alcantarillado Sanitario',
    categoryId: 'alcantarillado',
    norm: 'NMX-E-199/1-SCFI',
    diam: '160 mm',
    sku: 'SAN-160',
    pdfPage: 20,
    desc: 'Tubería de PVC para atarjeas y colectores sanitarios urbanos con unión espiga-campana y empaque hermético.'
  },
  {
    id: 108,
    name: 'Tubería Sanitaria PVC Serie 25 (Uso Pesado)',
    category: 'Alcantarillado Sanitario',
    categoryId: 'alcantarillado',
    norm: 'NMX-E-199/1-SCFI',
    diam: '200 mm a 400 mm',
    sku: 'SAN-200P',
    pdfPage: 21,
    desc: 'Mayor rigidez circunferencial para instalaciones a mayor profundidad y tráfico vehicular constante.'
  },
  {
    id: 109,
    name: 'Yee Doble y Reducciones PVC Sanitario',
    category: 'Alcantarillado Sanitario',
    categoryId: 'alcantarillado',
    norm: 'Normativa Municipal Hermética',
    diam: '110mm x 160mm',
    sku: 'SAN-YEE01',
    pdfPage: 22,
    desc: 'Conexiones termoformadas e inyectadas para interconexión de descargas domiciliarias hacia la red principal.'
  },

  // Soportería y Brocales PEAR
  {
    id: 104,
    name: 'Brocal y Tapa para Pozo de Visita PEAR',
    category: 'Soportería y Brocales PEAR',
    categoryId: 'soporteria-pear',
    norm: 'SCT Tráfico Pesado / Ligero',
    diam: '60 cm Diámetro',
    sku: 'BR-PV01',
    pdfPage: 29,
    desc: 'Fabricado en Polietileno de Alta Resistencia (PEAR). Material no reciclable para chatarrería (evita robos), cero ruido y nula corrosión.'
  },
  {
    id: 105,
    name: 'Boca de Tormenta PEAR 50x50 cm y 60x70 cm',
    category: 'Soportería y Brocales PEAR',
    categoryId: 'soporteria-pear',
    norm: 'Norma NMX Urbana',
    diam: '50x50 / 60x70 cm',
    sku: 'BT-5050',
    pdfPage: 30,
    desc: 'Rejilla y marco para captación pluvial en guarniciones de banquetas y vialidades públicas.'
  },
  {
    id: 110,
    name: 'Escalón de Polipropileno con Alma de Acero',
    category: 'Soportería y Brocales PEAR',
    categoryId: 'soporteria-pear',
    norm: 'CFR Norma de Seguridad',
    diam: '30 cm Ancho',
    sku: 'ESC-POL01',
    pdfPage: 31,
    desc: 'Peldaño antiderrapante para descenso seguro en pozos de visita y cajas de válvulas subterráneas.'
  }
];

export const partnerBrands = [
  { id: 'ares', name: 'Ares' },
  { id: 'bravalco', name: 'Bravalco' },
  { id: 'cresco', name: 'Cresco' },
  { id: 'dorot', name: 'Dorot' },
  { id: 'el-rosario', name: 'El Rosario' },
  { id: 'fontanery', name: 'Fontanery' },
  { id: 'helvex', name: 'Helvex' },
  { id: 'ideal', name: 'Ideal' },
  { id: 'protor', name: 'Protor' },
  { id: 'ptm', name: 'PTM' },
  { id: 'rotoplas', name: 'Rotoplas' },
  { id: 'rugo', name: 'Rugo' },
  { id: 'simex', name: 'Simex' },
  { id: 'sogar', name: 'Sogar' },
  { id: 'spirs', name: 'Spirs' },
  { id: 'unda', name: 'Unda' },
  { id: 'villareal', name: 'Villareal Soluciones Equipos'}
];

