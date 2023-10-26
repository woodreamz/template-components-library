const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const { version: localVersion, name: packageName } = require(`../package.json`);

if (!packageName) {
  console.error('A package name is required');
  process.exit(1);
}

const { version: npmVersion } = JSON.parse(execSync(`npm view ${packageName} --json`));

if (localVersion === npmVersion) {
  console.error(`\x1b[31mPlease manually bump the version on the package.json file.\x1b[0m`);
  process.exit(1);
}

const changelog = readFileSync('./CHANGELOG.md', 'utf8');
if (!changelog.includes(localVersion)) {
  console.error(
    `\x1b[31m Changelog version missing. Please add version and description docs to CHANGELOG.md \x1b[0m`
  );
  process.exit(1);
}
