import fs from "fs";
try{
    const data = fs.readFileSync("info.txt", "utf-8")
    console.log(data);
}catch(e){
    console.log(e);
}