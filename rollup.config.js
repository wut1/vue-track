  
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import {uglify} from 'rollup-plugin-uglify';


export default {
    input: 'src/main.js',
    output: [
        { file: pkg.main, format: 'cjs' }
    ],
    plugins:[
        resolve(),
        
        babel({ babelHelpers: 'bundled' }),
        uglify()
    ]
}