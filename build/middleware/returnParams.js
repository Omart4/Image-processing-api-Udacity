"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnParam = void 0;
const ReturnParam = (req, res, next) => {
  const { query } = req;
  const parameters = ["file", "width", "height"];
  for (let i = 0; i < parameters.length; i++) {
    let param = parameters[i];
    console.log(`${param} : ${query[param]}`);
  }
  next();
};
exports.ReturnParam = ReturnParam;
