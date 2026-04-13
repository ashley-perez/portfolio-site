import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// need to import and use tailwind
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
		  react(),
		  tailwindcss(),
  ],
})
