import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
let html = await readFile(new URL('examples/demo.html', root), 'utf8');
const css = await readFile(new URL('assets/robot.css', root), 'utf8');
html = html.replace('<link rel="stylesheet" href="../assets/robot.css">', `<style>${css}</style>`);
const poster = await readFile(new URL('assets/robot-poster.png', root));
html = html.replace('src="../assets/robot-poster.png"', `src="data:image/png;base64,${poster.toString('base64')}"`);
for (const name of ['chat-bridge.js', 'loader.js']) {
  const source = (await readFile(new URL('assets/' + name, root), 'utf8')).replaceAll('</script', '<\\/script');
  html = html.replace(`<script defer src="../assets/${name}"></script>`, () => `<script>${source}</script>`);
}
const bundle = (await readFile(new URL('assets/robot.bundle.js', root), 'utf8')).replaceAll('</script', '<\\/script');
html = html.replace('<!-- standalone-bundle -->', () => `<script>${bundle}</script>`);
html = html.replace('data-bundle="../assets/robot.bundle.js"', 'data-bundle=""');
html = html.replace('href="../docs/wordpress.md"', 'href="wordpress.md"').replace('href="../docs/wordpress.fa.md"', 'href="wordpress.fa.md"');
await writeFile(new URL('docs/demo-and-guide.html', root), html);
console.log('Built docs/demo-and-guide.html');
