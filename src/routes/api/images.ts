import express from "express";
const images = express.Router();

images.get("/", (req:express.Request, res:express.Response) => {
  res.send("Images Route");
});

export default images;
