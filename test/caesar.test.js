// Write your tests here!
// Write your tests here!
const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect; 

describe("Ceaser Test", () => {    

    it("moves letters by certain amount and makes them lowercase", () => {
        const text = "THINKFUL";
        const actual = caesar(text, 3) 
        const expected = "wklqnixo"; 
        expect(actual).to.eql(expected);
          
    });
    
    it("should handle letters at the end of the alphabet", () => {
        const text = "z";
        const actual = caesar(text, 1) 
        const expected = "a"; 
        expect(actual).to.eql(expected);
    })
    
    it("should allow for negative shift and make sure it loops back around the array", () => {
        const text = "a";
        const actual = caesar(text, -1) 
        const expected = "z"; 
        expect(actual).to.eql(expected);
    })

  });