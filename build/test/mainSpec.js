"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
describe("Tests", () => {
    it("Should add", () => {
        expect((0, main_1.adder)(5, 5)).toEqual(10);
    });
});
