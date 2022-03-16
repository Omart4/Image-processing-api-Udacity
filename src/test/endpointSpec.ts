import supertest from "supertest";
import app from "../main";

const request = supertest(app)
describe("Testing multiple possible endpoints",()=>{
    it("Should return status code 200 for fjord.jpg 200X100",async()=>{
        const response = await request.get('/api/images?file=fjord&width=100&height=50')
        expect(response.status).toBe(200)
    })
    it("Should return status code 403 for dog.jpg 200X100",async()=>{
        const response = await request.get('/api/images?file=dog&width=200&height=100')
        expect(response.status).toBe(400)
    })
    it("Should return status code 400 for fjord.jpg dX100",async()=>{
        const response = await request.get('/api/images?file=fjord&width=d&height=100')
        expect(response.status).toBe(400)
    })
})