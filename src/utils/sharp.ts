import sharp, { Sharp } from "sharp";
import Path from "path";

export const sharpResize = async (
  file: string,
  width: number,
  height: number
): Promise<Sharp> => {
  const sourcePath = Path.join(__dirname, `../../images/${file}.jpg`);
  const editted = await sharp(sourcePath).resize(width, height).jpeg();
  console.log(sourcePath);
  return editted;
};
