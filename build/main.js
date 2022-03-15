"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const app = (0, express_1.default)();
const PORT = 8000;
app.use("/api", route_1.default);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
exports.default = app;
