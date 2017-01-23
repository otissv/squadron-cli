import shell from 'shelljs/global';
import path from 'path';
import fs from 'fs-promise';

function promise (fn) {
  return new Promise((resolve, reject) => fn (resolve, reject));
}

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});


function writeFiles ({ oldFile, moduleName, content, dir }) {

  return Box(oldFile)
    .map(oldFile => oldFile.replace('templates/client/module', dir))
    .map(filePath => {
      
      const fileName = filePath.split('/')[filePath.split('/').length - 1];
      const tmpPath = filePath.replace(/\/[^\/]+$/, '');

      mkdir('-p', tmpPath);

      return `${tmpPath}/${fileName}`;
    })
    .fold(filePath => {
      const ext = oldFile.split('.')[oldFile.split('.').length - 1];
      const newFile = filePath.replace(`.${ext}`, `-${moduleName}.${ext}`);
      return fs.writeFile(newFile, content)
        .then(() => newFile);
    }); 
}

function readAndReplaceContentModuleNames ({ file, moduleName }) {
  return promise ((resolve, reject) => {
    fs.readFile(file, {encoding:'utf8'})
      .then(content => {
        const lowerCaseName = moduleName;
        const capitalName = `${moduleName.charAt(0).toLocaleUpperCase()}${moduleName.substr(1, moduleName.length - 1)}`
        const upperCaseName = moduleName.replace(/\.?([A-Z]+)/g,  (x,y) => `_${y}`).replace(/^_/, "").toUpperCase();

        const replaceContent = str => {
          return Box(str)
            .map(str => str.replace(/\[\[\[upperCaseName\]\]\]/ig, upperCaseName))
            .map(str => str.replace(/\[\[\[lowerCaseName\]\]\]/ig, lowerCaseName))
            .fold(str => str.replace(/\[\[\[capitalName\]\]\]/ig, capitalName))
        }
        resolve(replaceContent(content));
      })
      .catch(error => reject(error));

  })
}

function module ({ module, dir }) {
  const moduleName = module;
  const dest = `${dir}/${moduleName}`
  const sourceDir = './templates/client/module'

 
  // find files
  find(sourceDir).filter(files => {
    const mathResult = files.match(/\.js$/);

    if (mathResult) {
      const  file  =  mathResult.input;

      readAndReplaceContentModuleNames({ file, moduleName })
        .then(content => {
          writeFiles({ 
            oldFile: file, 
            moduleName, 
            content,
            dir
          })
            .then(newFilePath => process.stdout.write(`created file ${newFilePath}\n`))
            .catch(error => {
              throw new Error(error);
            });
        })
        .catch(error => { 
          throw new Error(error);
        });
    }
  });

  // replace module name

}


function creatApp () {
  const args = Array.from(arguments);
  cd('example')

  exec(`create-react-app ${args.join(' ')}`)
  module({
    dir: './src/holiday/holidayType',
    module: 'holidayType'
  });
}

creatApp('my-app');