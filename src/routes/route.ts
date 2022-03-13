import express from "express"
import {ValidateParam,ReturnParam} from '../middleware/index'
import images from "./api/images"
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.send("Main Router")
})

routes.use('/images',ValidateParam ,ReturnParam,images)

export default routes;