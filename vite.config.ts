import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages 子路径：https://zl66z.github.io/zl-portfolio-2016/
  base: mode === 'production' ? '/zl-portfolio-2016/' : '/',
  plugins: [react(), tailwindcss()],
}))
