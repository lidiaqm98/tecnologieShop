import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tecnologieShop/', // Asegúrate de que el nombre coincida exactamente con tu repo
  build: {
    outDir: 'docs' // Esto cambiará la carpeta de salida 'dist' por 'docs'
  }
})
