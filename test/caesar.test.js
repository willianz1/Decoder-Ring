// Write your tests here!
// Write your tests here!
const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect; 

describe("Ceaser Test", () => {    

   

    it("encode a message by shifting the letters - WD", () => {
        const text = "THINKFUL";
        const actual = caesar(text, 3) 
        const expected = "wklqnixo"; 
        expect(actual).to.eql(expected);
          
    });
    it("should leave spaces and other symbols alone by WD", () => {
        const text = "THINKFUL!";
        const actual = ceaser(text, 3);
        const expected = "wklqnixo!";
        expect(actual).to.eql(expected); 
    })
    /*
    it("should ignore capital letters", () => {
    })
    it("should handle letters at the end of the alphabet", () => {
    })
    it("should allow for negative shift", () => {
    })*/

  });