import fs from "fs"
export function readFile(){
    try{
    const data = fs.readFileSync("file-data.txt", "utf-8")
    console.log(data);
    }catch(e){
        console.log(e);
    }
}

