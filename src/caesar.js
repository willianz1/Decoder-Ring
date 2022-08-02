// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // check shift number
    if(shift === 0 || shift > 25 || shift < -25) return false;
    
    //shifts letterse in opposiee direction
    if (!encode){shift *= -1}; 

    let newWord = "";
    //make the letters lowercase
    input = input.toLowerCase(); 
    const alph = ['a','b','c','d','e','f','g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    //Go through their text
    for(let i =0; i<input.length; i++){
      //if it has a letter it should shift it
      const check = alph.some((alphabet) => alphabet.includes(input[i]));
      if(check){
        //find the  index of the letter in alph
        let originalIndex = alph.indexOf(input[i]);
        //need to check if shift makes it go past the array   
        let newIndex = originalIndex + shift; 
        
        //beginnining of the alphabet
        if(newIndex < 0){
          newIndex = newIndex + 26;
          newWord += alph[newIndex]; 
        }else if(newIndex >= alph.length){ 
          //end of alphabet ^
          newIndex = newIndex - 26; 
          newWord += alph[newIndex]; 
        }else{
          newWord += alph[newIndex]; //The index is inside the array and has no issues
        }
      }else{
        //this means that its a special character
        newWord += input[i]; 
      }
    }


    return newWord; 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
