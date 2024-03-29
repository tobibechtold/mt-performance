const shell = require('shelljs');

processCmd('Copying assets to library folder', () => {
  const pathSource = './src/assets/_redirects';
  const pathDest = './dist/mt-performance/browser/_redirects';
  if (process.platform === 'win32') {
    return shell.cp('-R', pathSource, pathDest).code;
  }
  return shell.exec(`cp -aR ${pathSource} ${pathDest}`).code;
});

function processCmd(name, processing) {
  shell.echo(`Process: ${name}...`);
  const code = processing();
  shell.echo(`Process End: ${name} Code: ${code}`);
  if (code !== undefined && code !== 0) {
    shell.exit(1);
  }
}
