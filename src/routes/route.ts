import express from "express";
import { ValidateParam } from "../middleware/bundler";
import { ResizeImage } from "../utils/resizeImage";
import images from "./api/images";
const routes = express.Router();

routes.get("/", (req:express.Request, res:express.Response) => {
  res.send("Main Router");
});

routes.use("/images", ValidateParam, ResizeImage, images);

export default routes;
