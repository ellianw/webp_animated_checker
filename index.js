const isAnimated = require('is-animated'); //More info here https://www.npmjs.com/package/is-animated
const path = require('path')

const testFolder = './FilesFolder/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(function (file){
    if (path.extname(file) === '.webp') {  // Change the string with the file format if you want, supports GIFs, APNG and WebP images
      fs.readFile("FilesFolder/"+file, (err, data) => {
        if (err) throw err;
        if (!isAnimated(data)) {
          /*If not Animated*/
        } 
        else {
          /*If animated*/
        }; 
      });
    }; //<== Remove this semicolon if you use an else
    /*else {
      If the file is not .webp
    };*/
  });
}); 