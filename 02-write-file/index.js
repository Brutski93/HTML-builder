const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;
/*
const today = new Date();
let newFileName = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, '0')}-${today.getDate()}_`;
newFileName += `${today.getHours()}`.padStart(2, '0') + '-';
newFileName += `${today.getMinutes()}`.padStart(2, '0') + '-';
newFileName += `${today.getSeconds()}`.padStart(2, '0') + '_textfile.txt';
*/
const newFileName = 'new_text.txt';
function createNewFile() {
  fs.writeFile(
    path.join(__dirname, newFileName),
    '',
    (err) => {
      if (err) throw err;
    },
  );
}
function addNewText(text) {
  finishTheProgramm(text);
  fs.appendFile(
    path.join(__dirname, newFileName),
    text,
    (err) => {
      if (err) throw err;
    },
  );
}
function finishTheProgramm(text) {
  const myBuffer = Buffer.from(text, "utf-8");
  const textTemp = myBuffer.toString().slice(0, -2);
  if (textTemp === 'exit') {
    stdout.write('Mission complited.');
    process.exit();
  }
}
// fs.unlink(path.join(__dirname, newFileName), (err) => {
  // if (err) createNewFile();
// });
createNewFile();
stdout.write('Input text: ');
stdin.on("data", (data) => addNewText(data));
process.on('SIGINT', () => console.log('Mission complited.'));
