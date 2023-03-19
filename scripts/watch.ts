import { run } from 'shell-commands';
// import { watch, existsSync } from 'fs';
// import { join } from 'path';
// import waitFor from 'wait-for-async';

const main = async () => {
  await run('rm -rf build');
  run('parcel src/index.html --dist-dir build -p 1234');
  run('parcel watch --target electron --target preload -p 1235');

  // const electronFilePath = join(__dirname, '..', 'build', 'electron.js');
  // await waitFor({ interval: 100, condition: () => existsSync(electronFilePath) });
  // watch(electronFilePath, (eventType, filename) => {
  //   console.log(`File ${filename} changed with event type ${eventType}`);
  // });
};

main();
