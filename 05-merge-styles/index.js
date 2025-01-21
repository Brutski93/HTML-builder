const fs = require("fs");
const path = require("path");
const mergedFile = path.join(__dirname, 'project-dist', 'bundle.css');

function addNewText(data) {
  fs.appendFile(mergedFile, data, (err) => {
      if (err) throw err;
    }
  );
}

function getContentFronFile(file) {
  const filePath = path.join(__dirname, 'styles', file);
  fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) throw err;
      addNewText(data);
    },
  );
}

function insertContent(fileObj) {
  if (!fileObj.isFile()) return;
  const fileName = fileObj.name;
  if (fileName.slice(-4) !== '.css') return;
  getContentFronFile(fileName);
}

fs.writeFile(mergedFile, '',
 (err) => {
    if (err) throw err;
 }
);

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else files.forEach(item => insertContent(item));
});