import express from "express";
import Path from "path"
import { exists } from "../utils/imageExists";

export const ResizeImage = async (req: express.Request,res: express.Response,next: Function):Promise<void> => {
    let {file,width,height} = req.query
    const f = file;
    const w = width;
    const h = height;
    try{
        let imagePath = `${f}.jpg`
        const imageExists = await exists(`../../images/${imagePath}`)
        if(imageExists){
            res.sendFile(`images/${imagePath}`,{root:Path.join(__dirname,'../../')})
        }else{
            res.status(400).send("Image not found")
        }
    }catch(err){
        console.log(err)
    }
}