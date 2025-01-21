const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

const pathOfOriginalFolder = path.join(__dirname, 'files');
const pathOfCopyFolder = path.join(__dirname, 'files-copy');
let filesAll = [];

function copyOnlyFiles(fileObj) {
  if (!fileObj.isFile()) return;
  const file = fileObj.name;
  const oldPath = path.join(pathOfOriginalFolder, file);
  const newPath = path.join(pathOfCopyFolder, file);
  fs.copyFile(oldPath, newPath, (err) => {
    if (err) console.log(err);
  });
}

function deleteCopyDir() {
  fs.rm(pathOfCopyFolder, { recursive: true }, (err) => {
    if (err) console.log(err);
  });
}
fs.mkdir(pathOfCopyFolder, (err) => {
  if (err) console.log(err);
})
fs.readdir(pathOfOriginalFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else files.forEach(item => copyOnlyFiles(item))
});
setTimeout(deleteCopyDir, 5000);