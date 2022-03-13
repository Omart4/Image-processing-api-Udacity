import fs from "fs"
import Path from "path"
export const exists = (path:string) =>{
    const check = fs.existsSync(Path.join(__dirname,path))
    return check
}
