import fs from "fs"

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile('destination.txt', data, 'utf8', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('copied');
    });
});

