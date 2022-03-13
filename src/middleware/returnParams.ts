import express from "express"

export const ReturnParam =(req:express.Request,res:express.Response,next:Function) => {
    const {query} = req
    const parameters = ["file","width","height"]
    for(let i = 0 ;i<parameters.length;i++){
        let param = parameters[i]
        console.log(`${param} : ${query[param]}`)
    }
    next()
}