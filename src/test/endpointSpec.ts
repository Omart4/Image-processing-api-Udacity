import supertest from "supertest";
import app from "../main";

const request = supertest(app)
describe("Testing multiple possible endpoints",()=>{
    it("Should return status code 200 for santamonica.jpg 100X50",async()=>{
        const response = await request.get('/api/images?file=santamonica&width=100&height=50')
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
    it("Should return status code 200 for icelandwaterfall.jpg 600X300",async()=>{
        const response = await request.get('/api/images?file=icelandwaterfall&width=600&height=300')
        expect(response.status).toBe(200)
    })
})
