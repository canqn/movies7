import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    dts: true,
    dirs: ['./src'],
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
    ],
  }), AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],

    // global imports to register
    imports: [
      // presets
      'vue',
      'vue-router',
      // custom
      {
        '@vueuse/core': [
          // named imports
          'useMouse', // import { useMouse } from '@vueuse/core',
          // alias
          ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
        ],
        'axios': [
          // default imports
          ['default', 'axios'], // import { default as axios } from 'axios',
        ],
        '[package-name]': [
          '[import-names]',
          // alias
          ['[from]', '[alias]'],
        ],
      },
      // example type import
      {
        from: 'vue-router',
        imports: ['RouteLocationRaw'],
        type: true,
      },
    ],
    // Enable auto import by filename for default module exports under directories
    defaultExportByFilename: false,

    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    dirs: [
      './src'
      // './hooks',
      // './composables' // only root modules
      // './composables/**', // all nested modules
      // ...
    ],

    // Filepath to generate corresponding .d.ts file.
    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
    // Set `false` to disable.
    dts: './auto-imports.d.ts',

    // Auto import inside Vue template
    // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: false,

    // Custom resolvers, compatible with `unplugin-vue-components`
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
      /* ... */
    ],

    // Inject the imports at the end of other imports
    injectAtEnd: true,

    // Generate corresponding .eslintrc-auto-import.json file.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  })],
  server: {
    port: 5000
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5100',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: [
      { find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '~assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
      { find: '~cmp', replacement: fileURLToPath(new URL('./src/shared/cmp', import.meta.url)) },
      { find: '~stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
      { find: '~use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) },
    ],
  },
  define: {
    'process.env': {}
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
})
