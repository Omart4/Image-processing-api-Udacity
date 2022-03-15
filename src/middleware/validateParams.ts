import express from "express";
import { exists } from "../utils/imageExists";

export const ValidateParam = (
  req: express.Request,
  res: express.Response,
  next: Function
):void => {
  const { query } = req;
  const parameters = ["file", "width", "height"];
  for (let i = 0; i < parameters.length; i++) {
    const param = parameters[i];
    if (query[param] === undefined) {
      res.status(400).send("Error: Parameter(s) missing..");
    }

    const value = query[param];

    if (param == "file" && typeof value !== "string") {
      res.status(400).send("Filename must be a string");
    }

    if (param == "height" || param == "width") {
      const num = Number(value);
      if (!num) {
        res.status(400).send("Height and Width must be numbers");
      }
    }
  }
  if (exists(`../../images/${query["file"]}.jpg`)) {
    next();
  } else {
    res.status(400).send("File doesn't exist");
  }
};
