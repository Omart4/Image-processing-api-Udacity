"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imageExists_1 = require("../utils/imageExists");
describe("Checks if images exist in a directory", () => {
    it("Image fjord exists", () => {
        expect((0, imageExists_1.exists)("../../images/fjord.jpg")).toBeTruthy();
    });
    it("Image dog doesn't exist", () => {
        expect((0, imageExists_1.exists)("../../images/dog.jpg")).toBeFalsy();
    });
});
