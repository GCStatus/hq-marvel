import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': `${new URL('./src', import.meta.url).pathname}`,
      '@react-leaflet/core/lib/context': 'react-leaflet',
    },
  },
  optimizeDeps: {
    include: ['goober', 'socket.io-client'],
  },
})
