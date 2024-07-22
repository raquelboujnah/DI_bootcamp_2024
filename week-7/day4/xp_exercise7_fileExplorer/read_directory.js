import fs from "fs"
let testFolder = "/xp_exercise7_fileExplorer"

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
       console.log(file);
    });
});
