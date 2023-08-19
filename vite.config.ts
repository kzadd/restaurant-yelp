import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  preview: { port: 3030 },
  resolve: { alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }] },
  server: { port: 3000 }
})
