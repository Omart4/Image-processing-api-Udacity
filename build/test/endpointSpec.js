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
const supertest_1 = __importDefault(require("supertest"));
const main_1 = __importDefault(require("../main"));
const request = (0, supertest_1.default)(main_1.default);
describe("Testing multiple possible endpoints", () => {
    it("Should return status code 200 for santamonica.jpg 200X100", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?file=santamonica&width=200&height=100');
        expect(response.status).toBe(200);
    }));
    it("Should return status code 403 for dog.jpg 200X100", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?file=dog&width=200&height=100');
        expect(response.status).toBe(400);
    }));
    it("Should return status code 400 for fjord.jpg dX100", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?file=fjord&width=d&height=100');
        expect(response.status).toBe(400);
    }));
    it("Should return status code 200 for icelandwaterfall.jpg 800X400", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?file=fallout&width=800&height=400');
        expect(response.status).toBe(200);
    }));
});
