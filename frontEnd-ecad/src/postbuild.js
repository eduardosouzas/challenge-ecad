const fs = require('fs');
const packageJson = require('./package.json');

const health = {
  status: 'UP',
};
const info = {
  application: {
    name: packageJson.name,
    version: packageJson.version,
  },
};

fs.mkdirSync('build/monitor');
fs.writeFile(
  'build/monitor/health.json',
  JSON.stringify(health),
  'utf8',
  () => console.log('[ + ] Monitor Health Created'),
);
fs.writeFile(
  'build/monitor/info.json',
  JSON.stringify(info),
  'utf8',
  () => console.log('[ + ] Monitor Info Created'),
);
