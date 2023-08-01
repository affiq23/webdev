const fs = require("fs");
const dirName = process.argv[2] || "Project" //default name
// ASYNC VERSION:
// fs.mkdir("Dogs", { recursive: true}, (err) => {
//     console.log("In the callback")
//     if (err) throw err;
// });

// SYNC VERSION:
fs.mkdirSync(dirName);
fs.writeFileSync(dirName + "/index.html") //not working