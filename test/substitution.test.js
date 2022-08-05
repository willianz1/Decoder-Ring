// Write your tests here!
const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect; 

describe("Substitution Test", () => {    

    it("should convert to new letters", () => {
        const text = "thinkful";
        const actual = substitution(text, "xoyqmcgrukswaflnthdjpzibev") 
        const expected = "jrufscpw"; 
        expect(actual).to.eql(expected);
          
    });
    
    it("should ignore spaces", () => {
        const text = "thi nkful";
        const actual = substitution(text, "xoyqmcgrukswaflnthdjpzibev") 
        const expected = "jru fscpw"; 
        expect(actual).to.eql(expected);
          
    });
    
    it("should be able to decode", () => {
        const text = "y&ii$r&";
        const actual = substitution(text, "$wae&zrdxtfcygvuhbijnokmpl", false) 
        const expected = "message"; 
        expect(actual).to.eql(expected);
          
    });

  });