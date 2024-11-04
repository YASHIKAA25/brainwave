import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({
  plugins: [react()],
  // base: mode === 'production' ? '/brainwave/' : '/',  // Set base only for production
}))
