/** @type {import('tailwindcss').Config} */
export default {
 content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
 theme: { extend: {
  colors: {
   primary: { DEFAULT:'#367b48', hover:'#28633c', deep:'#103d2e', soft:'#e4ead8' },
   secondary:'#103d2e', accent:'#d7f876',
   ink: { DEFAULT:'#132c25', muted:'#64716a' },
   surface: { DEFAULT:'#f4f3eb', lowest:'#fffef8', low:'#e8ecdf', container:'#dfe7d5', high:'#d5e1ca' },
   outline: { DEFAULT:'#bcc9b4', variant:'#d7dbd0' }
  },
  fontFamily: { heading:['"Plus Jakarta Sans"','system-ui','sans-serif'], sans:['Inter','system-ui','sans-serif'] },
  borderRadius: { xl:'0.75rem', '2xl':'1.5rem' },
  boxShadow: { soft:'0 4px 12px -2px rgba(19,44,37,.05)', card:'0 8px 24px -6px rgba(19,44,37,.09)' },
  maxWidth: { container:'1360px' },
  keyframes: { 'fade-up':{ '0%':{opacity:'0',transform:'translateY(16px)'}, '100%':{opacity:'1',transform:'translateY(0)'} }, pulsering:{'0%':{transform:'scale(1)',opacity:'.6'},'100%':{transform:'scale(1.8)',opacity:'0'}} },
  animation: { 'fade-up':'fade-up .6s ease-out forwards', pulsering:'pulsering 1.8s ease-out infinite' }
 } },
 plugins: [],
}
