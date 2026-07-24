import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo "<username>.github.io": GitHub Pages serve il sito dalla root del
  // dominio (https://dieeegooo.github.io/), quindi il base resta "/".
  // Se in futuro il sito venisse spostato in un repo di progetto
  // (es. "portfolio"), qui andrebbe messo "/portfolio/".
  base: '/',
})
