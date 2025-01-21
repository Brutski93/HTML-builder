const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;
const taskDir = path.join(__dirname, 'secret-folder');
stdout.write('Folder content this files:\n');

function getSize(thisPath) {
  let a = fs.statSync(thisPath);
  return a.size + ' b';
}
function getExtend(thisPath) {
  return path.extname(thisPath);
}
function showTask(fileObj) {
  if (!fileObj.isFile()) return;
  const file = fileObj.name;
  const thisPath = path.join(taskDir, file);
  const fileName = file.split('.').at(0).padEnd(8, ' ');
  const extend = getExtend(thisPath).padEnd(8, ' ');
  const size = getSize(thisPath).toString().padEnd(8, ' ');
  console.log('>', fileName, extend, size);
}
let filesAll = [];
fs.readdir(taskDir, { withFileTypes: true }, (err, files) => {
  if (err)
    console.log(err);
  else files.forEach(file => {
    filesAll.push(file);
  })
});
setTimeout(() => filesAll.forEach(file => showTask(file)), 100);