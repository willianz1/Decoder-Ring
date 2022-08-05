// Write your tests here!
// Write your tests here!
// Write your tests here!
const {polybius} = require("../src/polybius.js");
const expect = require("chai").expect; 

describe("Polybius test", () => {    

    it("should translate message to numbers", () => {
        const text = "thinkful";
        const actual = polybius(text) 
        const expected = "4432423352125413"; 
        expect(actual).to.eql(expected);
          
    });
    
    it("should be fine with spaces and not destroy the code", () => {
        const text = "Hello world";
        const actual = polybius(text) 
        const expected = "3251131343 2543241341"; 
        expect(actual).to.eql(expected);
    })
    
    it("should be able to change i or j to i/j which equals 42", () => {
        const text = "i j";
        const actual = polybius(text, -1) 
        const expected = "42 42"; 
        expect(actual).to.eql(expected);
    })

    it("should be able to decode messages", () => {
        const text = "42 42";
        const actual = polybius(text, false);  
        const expected = "(i/j) (i/j)"; 
        expect(actual).to.eql(expected);
    })
  });