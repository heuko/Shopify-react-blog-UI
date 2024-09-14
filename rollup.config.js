import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json'; // Import the JSON plugin

export default {
  input: 'pages/index.tsx', // Your entry point
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.es.js',
      format: 'esm',
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    json(), // Add the JSON plugin here
    typescript({
      jsx: 'preserve', // Ensures TypeScript doesn't strip JSX out
    }),
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensures Babel processes .tsx files
    }),
    terser() // Minify the output
  ],
  external: ['react', 'react-dom']
};