// Configuración de Tailwind usada para generar assets/site.css
module.exports = {
  content: ['./index.html'],
  theme: {
        extend: {
          colors: {
            noche:    { DEFAULT: '#0B0F0D', 800: '#101613', 700: '#151D19' }, // fondos base
            carbon:   '#14110E',                                              // negro cálido
            botanico: { DEFAULT: '#1F3A2E', 600: '#2E5443', 900: '#0F1C16' }, // verde botánico
            crema:    '#F4ECDF',                                              // texto principal
            arena:    { DEFAULT: '#E2CBA4', 600: '#B89A6B' },                 // acentos arena
            terracota:{ DEFAULT: '#C9693F', 400: '#E08A5F', 700: '#9A4A2A' }, // acento principal
            halo:     '#E2262B'                                               // rojo del logo
          },
          fontFamily: {
            display: ['Fraunces', 'Georgia', 'serif'],
            sans:    ['Manrope', 'system-ui', 'sans-serif']
          },
          letterSpacing: { ultra: '.28em' }
        }
      }
};
