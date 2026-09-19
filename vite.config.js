import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 5174, // Cambia este número por el puerto deseado
    strictPort: true, // Opcional: fuerza el uso de este puerto y falla si está ocupado
  },
})
