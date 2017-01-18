'use strict';

var child_process = require('child_process');
var fs = require('fs');
var fse = require('fs-extra');
var glob = require('glob');
var path = require('path');
var yaml = require('js-yaml');

var src = 'src/azure-sdk-for-node';
var dest = 'docs-ref-autogen';
var doc = 'Documentation';
var configPath = 'node2docfx.json';
var tempConfigPath = '_node2docfx_temp.json';

function itemsByType(type) {
  return packageNames.filter(function (value) {
    return value.indexOf(type) > -1;
  });
}

function buildTocItems(keys) {
  return keys.sort().map(function (key) {
    var packageToc = path.join(dest, key, 'toc.yml');
    var href, topicHref;
    if (fs.existsSync(packageToc)) {
      href = path.join(key, 'toc.yml');
    } else {
      href = key + '/';
    }
    var packageIndex = path.join(dest, key, 'index.md');
    if (fs.existsSync(packageIndex)) {
      topicHref = path.join(key, 'index.md');
    } else {
      topicHref = undefined;
    }
    return {
      name: key,
      href: href,
      topicHref: topicHref
    };
  });
}

// 1. prepare
fse.removeSync(dest);

// 2. generate yml and copy readme.md for azure.js
child_process.execFileSync('node', ['node_modules/node2docfx/node2docfx.js', configPath]);
console.log('Finish generating YAML files for azure.js');

// 3. generate yml and copy readme.md for all sub packages
var packageJsons = glob.sync(path.join(src, 'lib/**/package.json'));
packageJsons.forEach(function (p) {
  var config = fse.readJsonSync(configPath);
  var dir = path.dirname(p);
  var packageName = fse.readJsonSync(p).name;
  config.source.include = [dir];
  config.package = p;
  config.readme = path.join(dir, 'README.md');
  config.destination = path.join(dest, packageName);
  fse.writeJsonSync(tempConfigPath, config);
  child_process.execFileSync('node', ['node_modules/node2docfx/node2docfx.js', tempConfigPath]);
  console.log('Finish generating YAML files for ' + packageName);
});
fs.unlink(tempConfigPath);

// 4. copy documentation
fse.copySync(path.join(src, doc), path.join(dest, doc));
console.log('Finish copying documentation');

// 5. generate root toc
var toc = yaml.safeLoad(fs.readFileSync(path.join(dest, 'toc.yml')));
var packageNames = packageJsons.map(function (p) {
  return fse.readJsonSync(p).name;
});
var groupedToc = [
  {
    name: 'Azure Services',
    items: buildTocItems(packageNames.filter(function (item) {
      return !(item.indexOf('-arm-') > -1 || item.indexOf('-asm-') > -1 || item.indexOf('-common') > -1);
    }))
  },
  {
    name: 'Resource Management',
    items: buildTocItems(itemsByType('-arm-'))
  },
  {
    name: 'Service Management',
    items: buildTocItems(itemsByType('-asm-'))
  },
  {
    name: 'Common Libs',
    items: buildTocItems(itemsByType('-common'))
  }
];
toc.unshift({ name: 'Azure SDK Packages', items: groupedToc });
fs.writeFileSync(path.join(dest, 'toc.yml'), yaml.safeDump(toc));
console.log('Finish combining root TOC with sub TOCs');