fs = require('fs');

fs.readFile('dist/gradebook.js', 'utf8', function (err, gradebookJs) {
  if (err) {
    return console.log(err);
  }
  if(gradebookJs == null){
    return "empty gradebook.js file";
  }
  // remove newlines and replace doule-quotes with single
  gradebookJs = gradebookJs.replace(/[\n\r]+/g, ' ').replace(/\"/g, "'");

  fs.readFile('src/gradebook.md', 'utf8', function (err ,readme) {
    if (err) {
      return console.log(err);
    }
    if(readme == null){
      return "empty README.md file";
    }
    let output = readme.replace("{{GRADEBOOK}}", gradebookJs);

    fs.writeFile('dist/gradebook.md', output, function(err){
        if (err) {
          return console.log(err);
        }
    });
  });
});