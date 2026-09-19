# Contexto del Proyecto: Plataforma Hidrosistemas (B2B / B2C)

## Descripción y Modos de Operación
Plataforma web integral para "Hidrosistemas" (tuberías, válvulas y sistemas pluviales). Combina una experiencia educativa B2C (maqueta del sistema pluvial) con un catálogo técnico B2B de alta conversión.
No habrá conexión real a backend ni base de datos por el momento en esta demo. Toda la información será "hardcodeada".

El proyecto opera bajo dos modos secuenciales:
*   **MODO 1 (Actual - Demo / Mockup):** Frontend puro en Vite/React. Datos hardcodeados en `src/data/mockData.js`. Renderizado condicional en `App.jsx`. Simulación de eventos 3D y telemetría por consola, responsividad tanto en dispositivos moviles como en computadoras.
*   **MODO 2 (Futuro - Producción):** Conexión a API REST en FastAPI, persistencia en PostgreSQL con Prisma ORM, visor 3D interactivo en Spline/Canvas y analítica con GA4/Microsoft Clarity.

## Tech Stack Oficial
*   **Frontend Core:** React 18+ (Vite), JavaScript moderno / JSX.
*   **Estilos y Maquetación:** Tailwind CSS (Mobile-First, flexbox, grid, utilidades arbitrarias restringidas).
*   **Animaciones e Interactividad:** `framer-motion` (stagger reveals, layout transitions, modern lookbook).
*   **Iconografía:** `lucide-react`.
*   **Visualización de Documentos:** Visor nativo de navegador vía `<iframe>` con deep-linking hash (`/catalogo-2026.pdf#page=X`). Prohibido instalar librerías externas de renderizado PDF.
*   **Futuro Backend (Fase 2):** FastAPI (Python), PostgreSQL, Prisma ORM, Pydantic V2.

## Design System y Tokens de Interfaz
Estética industrial, minimalista corporativa y limpia (inspirada en la arquitectura de información de Tigre PVC y Chartogne-Taillet).
*   **Superficie / Fondos:** `bg-slate-50` (lienzo general), `bg-white` (tarjetas y paneles flotantes), `bg-slate-100` (áreas de visualización técnica).
*   **Tipografía:** Sans-serif neutral (`text-slate-800` en títulos, `text-slate-600` en cuerpo, `text-slate-400` en metadatos y SKUs).
*   **Acento Técnico / B2B:** `bg-sky-700` hover `hover:bg-sky-800`, texto `text-sky-700`.
*   **Acento Corporativo / Conversión:** `bg-red-700` hover `hover:bg-red-800`, texto `text-red-700` (reservado para isotipo pentagonal y CTAs prioritarios).
*   **Bordes y Separadores:** `border border-slate-100` o `border-slate-200`. Prohibido el uso de bordes negros o gruesos.
*   **Profundidad:** `shadow-sm` para tarjetas estáticas, `shadow-xl` con baja opacidad para paneles laterales deslizantes (offcanvas).

## Contrato de Datos y Mapeo Relacional (`mockData.js`)
Para garantizar compatibilidad directa con el esquema futuro de Prisma/PostgreSQL, los objetos deben estructurarse con normalización técnica:
*   **Entidades:** Todo producto debe tener `id` (entero o string único), `slug`, `name`, `category_id`, `material` (ej. PEAD, PVC, FoFo), `normative` (ej. NMX-E-242/1-ANCE, ASTM), `diameters` (array de strings), `catalog_page` (número entero que apunta al PDF) y `sku`.
*   **Nodos 3D:** Cada nodo pluvial (`hotspot`) debe contener una clave identificadora (`node_id`), `title`, `description` técnica y un array de IDs de productos relacionados para cross-referencing instantáneo.

## Reglas de Desarrollo y Telemetría
1.  **Componentes Modulares:** Desacoplamiento estricto. Vistas en `src/views/` o `src/components/views/`, componentes atómicos en `src/components/ui/`.
2.  **Preparación de Telemetría (Analytics):** Todo botón de cotización (WhatsApp), descarga de PDF o clic en hotspot 3D debe invocar un helper centralizado `trackEvent(eventName, payload)`. En Modo 1, este helper únicamente imprime en `console.info`.
3.  **Degradación Elegante:** Si un iframe o lienzo interactivo no carga, la interfaz debe mostrar un contenedor esquelético (`bg-slate-200 animate-pulse`) sin romper el flujo de la página.
4.  **Cero Rotos:** Enlaces externos prohibidos salvo WhatsApp oficial (`https://wa.me/7712167150`). Imágenes inexistentes deben reemplazarse con bloques estructurales `div` grises con etiqueta de texto.

---

## ACCIÓN INICIAL DEL AGENTE AL INICIAR SESIÓN
**Cuando el ingeniero inicie una conversación, el agente debe:**
1. Confirmar la lectura y adopción de este archivo (`context.md`).
2. Identificar el modo activo de trabajo (**MODO 1: Demo** o **MODO 2: Producción**).
3. Realizar un escaneo del árbol de archivos en `src/components/`, `src/data/mockData.js` y `src/App.jsx`.

---

## PROTOCOLO DE REVISIÓN TÉCNICA Y MODIFICACIÓN DE CÓDIGO (Single-Turn Execution)

El agente responderá en dos fases obligatorias dentro del mismo turno:

**FASE 1: ANÁLISIS TÉCNICO PREVIO**
a. **Archivos Afectados:** Rutas exactas dentro de `src/` que serán creadas o modificadas.
b. **Justificación Técnica:** Explicación técnica concisa de la solución elegida y descarte de alternativas.
c. **Casos Límite:** Verificación de desbordamiento horizontal (`overflow-x-hidden`), textos largos y consistencia responsive en viewport móvil.
d. **Evaluación de Impacto en los 5 Pilares (DEMO):**
   - *Fidelidad Visual y Design System:* Validación de paleta (Slate/Sky/Red), bordes y coherencia B2B/B2C.
   - *Rendimiento y 60 FPS:* Animaciones livianas con transform/opacity en Framer Motion, evitando bloqueos por re-render.
   - *Compatibilidad con Backend:* Uso estricto de estructuras normalizadas en `mockData.js` compatibles con modelos relacionales.
   - *Mantenibilidad en React:* Código modular, nombres semánticos, sin clases arbitrarias redundantes.
   - *Telemetría y Negocio:* Verificación de llamadas a `trackEvent` en acciones clave de conversión.

**FASE 2: APLICACIÓN DIRECTA Y REVERSIBILIDAD**
e. **Ejecución de Cambios y Rollback:**
   - Aplicación directa de los cambios sobre el código fuente mediante herramientas del entorno, sin pedir confirmaciones intermedias.
   - Provisión inmediata del comando Git para revertir cambios (`git checkout -- <ruta>` o `git restore .`) ante cualquier discrepancia.

**FASE 3: VERIFICACIÓN AUTOMATIZADA Y DEFINITION OF DONE (Smoke Test)**
f. **Prueba Obligatoria de Compilación:**
   - Tras aplicar los cambios y ANTES de dar por concluida la respuesta, el agente debe ejecutar obligatoriamente en la terminal:
     ```bash
     pnpm build
     ```
   - **Bucle de Auto-Corrección:** Si el comando `pnpm build` arroja algún error de sintaxis, imports inexistentes, referencias rotas en `mockData.js` o fallos en Tailwind/JSX, el agente tiene prohibido reportar el error al usuario para que este lo solucione. El agente debe corregir el código inmediatamente e iterar el build hasta obtener código de salida `exit code 0`.
   - **Criterio de Aceptación:** La tarea solo se considera terminada cuando la compilación de Vite sea 100% exitosa y libre de errores en consola.
g. **Reversibilidad:** En el mensaje final, proporcionar el comando Git exacto para revertir la acción (`git checkout -- <archivo>` o `git restore .`) ante cualquier discrepancia visual.