import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig({
  plugins: [svelte({configFile: false, compilerOptions: {dev: false}})],
  test: {
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Skeleton Markdown',
      fileName: 'skeleton-markdown',
    },
    rollupOptions: {
      external: ['svelte', '@skeletonlabs/skeleton', 'marked'],
      input: 'src/index.js',
      output: {
        globals: {
          svelte: 'svelte',
          '@skeletonlabs/skeleton': 'skeleton',
          marked: 'marked',
        },
      },
    },
    ssr: true
  }
})