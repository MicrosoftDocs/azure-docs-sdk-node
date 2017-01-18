'use strict';

var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

var dest = 'docs-ref-autogen';
var filenameMaxLength = 100;
var packagesToFilter = ['azure-arm-datalake-store'];

// remove files with too long filename that breaks DocFX
packagesToFilter.forEach(function (p) {
  var uidsToFilter = [];
  fs.readdirSync(path.join(dest, p)).forEach(function (f) {
    if (f.length > filenameMaxLength) {
      var filePath = path.join(dest, p, f);
      uidsToFilter.push(yaml.safeLoad(fs.readFileSync(filePath)).items[0].uid);
      fs.unlinkSync(filePath);
      console.log('File with too long name is removed from ref folder: ' + filePath);
    }
  });
  var tocPath = path.join(dest, p, 'toc.yml');
  if (fs.existsSync(tocPath)) {
    var toc = yaml.safeLoad(fs.readFileSync(tocPath)).filter(function(i){
      return uidsToFilter.indexOf(i.uid) == -1;
    });
    fs.writeFileSync(tocPath, yaml.safeDump(toc));
    console.log('TOC updated after removing files: ' + tocPath);
  }
});