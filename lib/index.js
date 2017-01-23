'use strict';

var _global = require('shelljs/global');

var _global2 = _interopRequireDefault(_global);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsPromise = require('fs-promise');

var _fsPromise2 = _interopRequireDefault(_fsPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function promise(fn) {
  return new Promise(function (resolve, reject) {
    return fn(resolve, reject);
  });
}

var Box = function Box(x) {
  return {
    map: function map(f) {
      return Box(f(x));
    },
    fold: function fold(f) {
      return f(x);
    },
    inspect: function inspect() {
      return 'Box(' + x + ')';
    }
  };
};

function writeFiles(_ref) {
  var oldFile = _ref.oldFile,
      moduleName = _ref.moduleName,
      content = _ref.content,
      dir = _ref.dir;


  return Box(oldFile).map(function (oldFile) {
    return oldFile.replace('templates/client/module', dir);
  }).map(function (filePath) {

    var fileName = filePath.split('/')[filePath.split('/').length - 1];
    var tmpPath = filePath.replace(/\/[^\/]+$/, '');

    mkdir('-p', tmpPath);

    return tmpPath + '/' + fileName;
  }).fold(function (filePath) {
    var ext = oldFile.split('.')[oldFile.split('.').length - 1];
    var newFile = filePath.replace('.' + ext, '-' + moduleName + '.' + ext);
    return _fsPromise2.default.writeFile(newFile, content).then(function () {
      return newFile;
    });
  });
}

function readAndReplaceContentModuleNames(_ref2) {
  var file = _ref2.file,
      moduleName = _ref2.moduleName;

  return promise(function (resolve, reject) {
    _fsPromise2.default.readFile(file, { encoding: 'utf8' }).then(function (content) {
      var lowerCaseName = moduleName;
      var capitalName = '' + moduleName.charAt(0).toLocaleUpperCase() + moduleName.substr(1, moduleName.length - 1);
      var upperCaseName = moduleName.replace(/\.?([A-Z]+)/g, function (x, y) {
        return '_' + y;
      }).replace(/^_/, "").toUpperCase();

      var replaceContent = function replaceContent(str) {
        return Box(str).map(function (str) {
          return str.replace(/\[\[\[upperCaseName\]\]\]/ig, upperCaseName);
        }).map(function (str) {
          return str.replace(/\[\[\[lowerCaseName\]\]\]/ig, lowerCaseName);
        }).fold(function (str) {
          return str.replace(/\[\[\[capitalName\]\]\]/ig, capitalName);
        });
      };
      resolve(replaceContent(content));
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function _module(_ref3) {
  var module = _ref3.module,
      dir = _ref3.dir;

  var moduleName = module;
  var dest = dir + '/' + moduleName;
  var sourceDir = './templates/client/module';

  // find files
  find(sourceDir).filter(function (files) {
    var mathResult = files.match(/\.js$/);

    if (mathResult) {
      (function () {
        var file = mathResult.input;

        readAndReplaceContentModuleNames({ file: file, moduleName: moduleName }).then(function (content) {
          writeFiles({
            oldFile: file,
            moduleName: moduleName,
            content: content,
            dir: dir
          }).then(function (newFilePath) {
            return process.stdout.write('created file ' + newFilePath + '\n');
          }).catch(function (error) {
            throw new Error(error);
          });
        }).catch(function (error) {
          throw new Error(error);
        });
      })();
    }
  });

  // replace module name
}

function creatApp() {
  var args = Array.from(arguments);
  cd('example');

  exec('create-react-app ' + args.join(' '));
  _module({
    dir: './src/holiday/holidayType',
    module: 'holidayType'
  });
}

creatApp('my-app');