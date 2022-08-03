// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
   //global variables
   let square = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "(i/j)", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z", " "],
  ];

  // encode to polybius
  if (encode) {
    //creates an array of the input and seperates each letter
    let inputArr = input.split("");
    //Go through all of the input array and makes it lowercase 
    let fixedInputArr = inputArr.map((inp) => {
      let lowerCase = inp.toLowerCase();
      //checks if there is an i or j, if not just return the lowercase
      if(lowerCase === "i" || lowerCase === "j"){
        return "(i/j)";
      }else{
        return lowerCase;
      } 
    });

    // Find X and Y coordinates
    let xCoords = [];
    // Goes through all of the lower letters in fixedInput
    let yCoords = fixedInputArr.map((letter) => {
      // Go through the square array
      for (let i=0; i<square.length; i++) {
        // this will find which row it is on
        const row = square[i];
        if (row.find((alpha) => alpha === letter)) {
          // if it finds the letter it will assign that to x
          xCoords.push(i+1);
          // adds y coordinate of where its found in the row
          return row.indexOf(letter) + 1;
        }
      }
    });

    // Put x and y coordinates all together
    result = xCoords.reduce((accum, xVal, index) => {
      let pair = `${yCoords[index]}${xVal}`;
      // if 65 found it creates a space
      if(pair === "65") pair = " " ;
      accum.push(pair);
      return accum;
    }, []);
  }

  // decoding
  if (!encode) {
    let spacesAdded = input.replace(" ", 65);
    // checks that there are an even number of characters so that all coordinate pairs are kept together
    if (spacesAdded.length % 2 !== 0) return false;
    let coordinates = spacesAdded.match(/..?/g);
    result = coordinates.map((yx) => {
      let rowIndex = yx.split("")[1] - 1;
      let columnIndex = yx.split("")[0] - 1;
      return square[rowIndex][columnIndex];
    });
  }
  // put all characters back to normal 
  return result.join("");
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
