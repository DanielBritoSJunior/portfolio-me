import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O plugin do Tailwind para Vite
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Garante que o plugin do Tailwind seja carregado corretamente
    tailwindcss(), 
  ],
  
  // OPCIONAL: Adicionar a seção 'css' se o erro persistir, 
  // forçando o PostCSS a usar o Tailwind.
  /*
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  */
})