"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../middleware/index");
const images_1 = __importDefault(require("./api/images"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send("Main Router");
});
routes.use('/images', index_1.ValidateParam, index_1.ReturnParam, images_1.default);
exports.default = routes;
