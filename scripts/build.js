'use strict';

var child_process = require('child_process');
var fs = require('fs');
var fse = require('fs-extra');
var glob = require('glob');
var path = require('path');
var yaml = require('js-yaml');

var src = 'src';
var packageMappingFileRelativePath = 'package_service_mapping.json';
var repoRelativePath = 'repo.json';
var dest = 'docs-ref-autogen';
var configPath = 'node2docfx.json';
var tempConfigPath = '_node2docfx_temp.json';
var filenameMaxLength = 100;
var packagesToFilter = ['azure-arm-datalake-store'];

function itemsByType(type) {
  return packageNames.filter(function (value) {
    return value.indexOf(type) > -1;
  });
}

function buildTocItems(keys, relativePathToRootFolder) {
  return keys.sort().map(function (key) {
    var packageToc = path.join(dest, key, 'toc.yml');
    var href, topicHref;
    if (fs.existsSync(packageToc)) {
      href = path.join(relativePathToRootFolder, key, 'toc.yml');
    } else {
      href = key + '/';
    }
    var packageIndex = path.join(dest, key, 'index.md');
    if (fs.existsSync(packageIndex)) {
      topicHref = path.join(relativePathToRootFolder, key, 'index.md');
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

function generatePackageDoc(packagePath, configPath, dest, rootPackage, whiteList, repo, repoName) {
  var config = fse.readJsonSync(configPath);
  var dir = path.dirname(packagePath);
  var packageName = fse.readJsonSync(packagePath).name;
  
  if (whiteList && whiteList.indexOf(packageName) == -1) {
    return;
  }
  
  if (rootPackage) {
    if (whiteList){
      config.source.include = path.join(dir, 'lib', packageName + '.js');
    }
    else{
      // null whiteList means this root package is the only one package
      config.source.include = path.join(dir, 'lib');
    }
  }  
  else{
    config.source.include = [dir];
  }
  config.package = packagePath;
  config.readme = path.join(dir, 'README.md');
  config.destination = path.join(dest, packageName);
  if (repo) {
    config.repo = [repo[repoName]];
  }
  fse.writeJsonSync(tempConfigPath, config);
  child_process.execFileSync('node', ['node_modules/node2docfx/node2docfx.js', tempConfigPath]);
  console.log('Finish generating YAML files for ' + packageName);
}

function getWhiteListFromPackageMappingFile(sourcePath, packageMappingFileRelativePath) {
  var mapping = fse.readJsonSync(sourcePath + '/' + packageMappingFileRelativePath);
  var whiteList = [];
  Object.keys(mapping).forEach(function(element) {
    whiteList.push(element);
  }, this);
  return whiteList; 
}

// 1. prepare
fse.removeSync(dest);
var repoConfig = fse.readJsonSync(repoRelativePath);
var repo = null;
if (repoConfig && repoConfig.repo) {
  repo = repoConfig.repo;
}
// get globalWhiteList from all repo package_service_mapping files, except one package repo
var globalWhiteList = [];
Object.keys(repo).forEach(function (repoName){
  if(!repo[repoName]['onePackage']){
    var whiteList = getWhiteListFromPackageMappingFile(src + '/' + repoName, packageMappingFileRelativePath);
    globalWhiteList = globalWhiteList.concat(whiteList);
  }
});

// 2. generate yml and copy readme.md for root package of repo
var rootConfig = fse.readJsonSync(configPath);
Object.keys(repo).forEach(function (repoName){
  var packagePath = path.join(src, repoName, 'package.json');
  var whiteList = globalWhiteList;
  if(repo[repoName]['onePackage'] && repo[repoName]['onePackage'] === 'true'){
    whiteList = null;
  }
  generatePackageDoc(packagePath, configPath, rootConfig.destination, true, whiteList, repo, repoName);
});

// 3. generate yml and copy readme.md for all sub packages
Object.keys(repo).forEach(function (repoName){
  if (!repo[repoName]['onePackage']){
    var packageJsons = glob.sync(path.join(src, repoName, 'lib/**/package.json'));
    packageJsons.forEach(function (packagePath) {
      generatePackageDoc(packagePath, configPath, dest, false, globalWhiteList, repo, repoName);
    });
  }
}); 
fs.unlink(tempConfigPath);

// 4. remove files with too long filename that breaks DocFX
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

// 5. generate root toc
var rootToc = [];
var rootTocPath = path.join(dest, 'toc.yml');
var subTocs = glob.sync(path.join(dest, '**/toc.yml'));
subTocs.forEach(function (subTocPath) {
  var tocContent = yaml.safeLoad(fs.readFileSync(subTocPath));
  var packageName = subTocPath.split('/')[1];
  var topicHref = path.join(packageName, 'index.md');
  tocContent = { name: packageName, uid: packageName, landingPageType: 'Service', items: tocContent };
  rootToc.push(tocContent);
});
fs.writeFileSync(rootTocPath, yaml.safeDump(rootToc));
console.log('Finish combining sub TOCs to root TOC');
