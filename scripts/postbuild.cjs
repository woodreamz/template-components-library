const fs = require('fs-extra');

// Write package.json file to dist folder.
fs.copy('package.json', 'dist/package.json');

// Copy README.md to dist folder.
fs.copy('README.md', 'dist/README.md');

// Copy icons
fs.copy('src/lib/icons', 'dist/icons');
