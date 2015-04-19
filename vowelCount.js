// function vowelCount takes a parameter str and returns the number of vowels it contains

function vowelCount(str) { 
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
	  if (str.toLowerCase()[i] === "a" || str.toLowerCase()[i] === "e" || str.toLowerCase()[i] === "i" || str.toLowerCase()[i] === "o" || str.toLowerCase()[i] === "u") {
      counter++; 
    }                 
  }
  return counter; 
}

// loops through string and after string converted to lowercase, checks each character to see if it is equal to a vowel
// if character is a vowel, increment counter. Then return counter
