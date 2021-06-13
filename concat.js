const fse = require('fs-extra');
const concat = require('concat');
const fs = require('fs');
(async function build() {
  const files = [
    './dist/lazyElementsPOC/runtime.js',
    './dist/lazyElementsPOC/polyfills.js',
    './dist/lazyElementsPOC/main.js',
  ]
  await fse.ensureDir('lazyElementsPOC')
  await concat(files, 'dist/lazyElementsPOC/elements.js');
  await fse.copy('./prePareIndex/index.html','dist/lazyElementsPOC/index.html' )
})()
