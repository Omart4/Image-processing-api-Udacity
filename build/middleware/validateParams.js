"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateParam = void 0;
const imageExists_1 = require("../utils/imageExists");
const ValidateParam = (req, res, next) => {
    const { query } = req;
    const parameters = ["file", "width", "height"];
    for (let i = 0; i < parameters.length; i++) {
        const param = parameters[i];
        if (query[param] === undefined) {
            res.status(400).send("Error: Parameter(s) missing..");
            return;
        }
        const value = query[param];
        if (param == "file" && typeof value !== "string") {
            res.status(400).send("Filename must be a string");
            return;
        }
        if (param == "height" || param == "width") {
            const num = Number(value);
            if (!num) {
                res.status(400).send("Height and Width must be numbers");
                return;
            }
        }
    }
    if ((0, imageExists_1.exists)(`../../images/${query["file"]}.jpg`)) {
        next();
    }
    else {
        res.status(400).send("File doesn't exist");
    }
};
exports.ValidateParam = ValidateParam;
