import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    typescript(),
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/external-helpers'],
      runtimeHelpers: true
    }),
    resolve(),
    commonjs(
      {
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': ['isFragment', 'ForwardRef', 'Memo']
        }
      }
    ),
  ]
};
