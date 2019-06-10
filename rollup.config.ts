import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

const libraryName = 'react-native-better-qrcode-scanner'

const extensions = ['.ts', '.js']

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
      include: ['*.ts+(|x)', '**/*.ts+(|x)'],
      exclude: ['*.d.ts', '**/*.d.ts', 'node_modules']
    }),

    // Resolve source maps to the original source
    sourceMaps()
  ]
}