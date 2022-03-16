"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeImage = void 0;
const path_1 = __importDefault(require("path"));
const imageExists_1 = require("../utils/imageExists");
const sharp_1 = require("./sharp");
const ResizeImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { file, width, height } = req.query;
    const f = file;
    const w = parseInt(width);
    const h = parseInt(height);
    try {
        let imagePath = `${f} ${w}X${h}.jpg`;
        let finalPath = path_1.default.join(__dirname, `../../results/`);
        const imageExists = yield (0, imageExists_1.exists)(`../../results/${imagePath}`);
        //First Checks if image exists in the results
        if (imageExists) {
            res.sendFile(`images/${imagePath}`, {
                root: path_1.default.join(__dirname, "../../"),
            });
        }
        //If it doesn't this would create the image and put it in the folder
        else if (!imageExists) {
            const image = yield (0, sharp_1.sharpResize)(f, w, h);
            image.toFile(path_1.default.join(finalPath, imagePath), (err) => {
                if (err) {
                    res.status(403).send({
                        ok: "failed",
                        message: err.message,
                    });
                }
                else {
                    res.sendFile(`results/${imagePath}`, {
                        root: path_1.default.join(__dirname, "../../"),
                    });
                }
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.ResizeImage = ResizeImage;
