import fs from "fs";

export function readFile(file){
    try{
    const data = fs.readFileSync(file, "utf-8")
    console.log(data);
    }catch(e){
        console.log(e);
    }
}

export function writeFile(file, data){
    try{
        fs.writeFileSync(file, data, "utf-8")
    }catch(err){

    }
}