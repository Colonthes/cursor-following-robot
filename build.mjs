import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const root=dirname(fileURLToPath(import.meta.url));
await build({entryPoints:[resolve(root,'src/robot.js')],outfile:resolve(root,'assets/robot.bundle.js'),bundle:true,minify:true,format:'iife',target:['es2020'],loader:{'.png':'dataurl'},legalComments:'eof'});
await import('./scripts/build-demo.mjs');
