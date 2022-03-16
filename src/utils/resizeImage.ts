import express from "express";
import Path from "path";
import { exists } from "../utils/imageExists";
import { sharpResize } from "./sharp";

export const ResizeImage = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  let { file, width, height } = req.query;
  const f = file as string;
  const w = parseInt(width as string);
  const h = parseInt(height as string);
  try {
    let imagePath = `${f} ${w}X${h}.jpg`;
    let finalPath = Path.join(__dirname, `../../results/`);
    const imageExists = await exists(`../../results/${imagePath}`);
    //First Checks if image exists in the results
    if (imageExists) {
      res.sendFile(`results/${imagePath}`, {
        root: Path.join(__dirname, "../../"),
      });
    }
    //If it doesn't this would create the image and put it in the folder
    else if (!imageExists) {
      const image = await sharpResize(f, w, h);
      image.toFile(Path.join(finalPath, imagePath), (err: Error) => {
        if (err) {
          res.status(403).send({
            ok: "failed",
            message: err.message,
          });
        } else {
          res.sendFile(Path.join(finalPath,imagePath));
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};
