import { exists } from "../utils/imageExists"

describe("Checks if images exist in a directory",()=>{
    it("Image fjord exists",()=>{
        expect(exists('../../images/fjord.jpg')).toBeTruthy()
    })
    it("Image dog doesn't exist",()=>{
        expect(exists('../../images/dog.jpg')).toBeFalsy()
    })
})
