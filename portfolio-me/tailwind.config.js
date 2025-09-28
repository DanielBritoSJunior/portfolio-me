// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Garante que o Tailwind escaneie todos os seus arquivos React
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ⬇️ ADICIONANDO CONFIGURAÇÃO DE FONTES ⬇️
      fontFamily: {
        // Fonte Sans-serif principal (Títulos e Corpo)
        sans: ['Inter', 'sans-serif'], 
        // Fonte Monospace para menus e áreas de código
        mono: ['Fira Code', 'monospace'],
      },
      // ⬆️ FIM DA CONFIGURAÇÃO DE FONTES ⬆️
      
      // Configuração da Animação de Carrossel
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }, // Rola metade do conteúdo
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite', // Nome, duração, estilo e repetição
      },
      // Fim da Configuração da Animação
    },
  },
  plugins: [],
};