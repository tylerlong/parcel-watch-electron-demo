import { run } from 'shell-commands';

const main = async () => {
  await run('rm -rf build');
  run('parcel src/index.html --dist-dir build -p 1234');
  run('parcel watch --target electron --target preload -p 1235');
};

main();
