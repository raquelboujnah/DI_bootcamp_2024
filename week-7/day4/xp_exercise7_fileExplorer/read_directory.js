import fs from "fs"

fs.readdir('.', (err, files) => {
    if (err) {
        console.log();
    }
    files.forEach(file => {
        console.log(file);
    });
});