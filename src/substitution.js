// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    /*checks to see if alphabet is empty
      if alphabet is less then 26
      and if every part of the alphabet is unique
    */
    if(!alphabet || alphabet.length < 26) return false; 
    //checkUnique will check if the alphabet is unique
    const checkUnique = isUnique(alphabet);
    if(!checkUnique) return false; 
    // your solution code here
    input = input.toLowerCase(); 
    const rightAlph = ['a','b','c','d','e','f','g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newWord = ""; 

    //checks if we are encoding or decoding
    if(encode){
      for(let i = 0; i < input.length; i++) {
        const char = input[i];
        /* this statement checks if theres
           anything thats not a-z and no spaces
        */
        if(char != /^[a-z]*$/ && char != " "){
        //finds index of rightAlph in input
        let index = rightAlph.indexOf(input[i]);
        newWord += alphabet[index];
        }else{
          newWord += char; 
        }
      } 
    }else{//we are now decoding
      for(let i = 0; i < input.length; i++) {
        const char = input[i];
        /* this statement checks if theres
           anything thats not a-z and no spaces
        */
        if(char != /^[a-z]*$/ && char != " "){
        //finds index of rightAlph in input
        let index = alphabet.indexOf(input[i]);
        newWord += rightAlph[index];
        }else{
          newWord += char; 
        }
      } 
    }
    return newWord;
  }
  // Checks to see if alphabet is unique
  function isUnique(str) {
    return new Set(str).size == str.length;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
