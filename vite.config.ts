import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig({
  plugins: [svelte({hot: !process.env.VITEST})],
  test: {
    include: ['tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ["@skeletonlabs/skeleton"]
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Skeleton Markdown',
      // the proper extensions will be added
      fileName: 'skeleton-markdown',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  }
})