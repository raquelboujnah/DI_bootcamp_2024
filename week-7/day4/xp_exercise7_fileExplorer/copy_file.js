import fs from "fs"
export function readFile(){
    try{
    const data = fs.readFileSync("source.txt", "utf-8")
    console.log(data);
    }catch(e){
        console.log(e);
    }
}

readFile()

export function copyFile(){
    try{
        fs.copyFileSync("source.txt", "destination.txt", "utf-8")
    }catch(err){
        console.log(err);
    }
}

copyFile()

