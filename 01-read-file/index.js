const fs = require("fs");
const path = require("path");
// let txtAdress = ;
// console.log(' ', txtAdress, '\n ', );
fs.readFile(
  path.join(path.join(__dirname, "text.txt")),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  },
);