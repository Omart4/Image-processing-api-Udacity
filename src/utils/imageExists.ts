import fs from "fs";
import Path from "path";
import express from "express";
export const exists = (path: string):boolean => {
  const check = fs.existsSync(Path.join(__dirname, path));
  return check;
};
