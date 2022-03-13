import express from "express"
import { ReturnParam } from "../middleware/returnParams"
import { ValidateParam } from "../middleware/validateParams"
import images from "./api/images"
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send("Main Router")
})

routes.use('/images',ValidateParam,ReturnParam,images)

export default routes;