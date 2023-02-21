// Global Variables
let generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '!',
  '~',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '+',
  '?', 
  '{',
  '}',
  '[',
  ']',
  '"',
  '.'
];

// Array of numeric characters to be in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lower case characters
let lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of upper case characters
let upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input 
  let length = parseInt(prompt("How many characters would you like your password to contain?", "0"), 10);

  // Check if password length is a number
  if(isNaN(length)) {
    window.alert('Error: You need to choose a number.');
    getPasswordOptions();
  
 // Check if password is at least 8 characters
  } else if (length < 8) {
    window.alert('Error: Password must be at least 8 characters.');
    getPasswordOptions();

//  Check if password length is less than 128 characters
  } else if (length > 128) {
    window.alert('Error: Password cannot be longer than 128 characters.');
    getPasswordOptions();

  } else {
     // Variable to store boolean of SPECIAL characters
      let hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
     // Variable to store boolean of NUMERIC characters
      let hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
     // Variable to store boolean of LOWERCASE characters
      let hasLowerCaseCharacters = confirm('Click OK to confirm including lowercase characters.');
     // Variable to store boolean of UPPERCASE characters
      let hasUpperCaseCharacters = confirm('Click OK to confirm including uppercase characters.');

      // Check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
      if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCaseCharacters && !hasUpperCaseCharacters) {
        window.alert("You must choose at least one type of character.");
      getPasswordOptions();
    } 

    // Object to store user input
    let passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters, 
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCharacters: hasLowerCaseCharacters,
      hasUpperCharacters: hasUpperCaseCharacters,
    };
    console.log(passwordOptions)
      return passwordOptions;
      
    };
  };
  

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  let result = [];
  
  // Array to store types of characters to include in password
  let possibleCharacters = [];
  
  // Array to contain one of each type of chosen character to ensure each will be used
  let guaranteedCharacters = [];
  
  // Add array of special characters into array of possible characters based on user input
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    let index = Math.floor(Math.random() * specialCharacters.length);
    // Push new random special character to guaranteedCharacters
    guaranteedCharacters.push(specialCharacters[index]);
  }
    // Do the same thing for NUMERIC characters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    let index2 = Math.floor(Math.random() * numericCharacters.length);
    guaranteedCharacters.push(numericCharacters[index2]);
  }
    // Do the same thing for LOWERCASE characters
   if (options.hasLowerCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    let index3 = Math.floor(Math.random() * lowerCaseCharacters.length);
    guaranteedCharacters.push(lowerCaseCharacters[index3]);
   }
// Do the same thing for UPPERCASE characters
 if (options.hasUpperCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    let index4 = Math.floor(Math.random() * upperCaseCharacters.length);
    guaranteedCharacters.push(upperCaseCharacters[index4]); 
  }

  // loop over the options.length for each iteration - get a random index from the possibleCharacters array and add it to the result variable
  for (let i = 0; i < options.length; i++) {
    let i5 = Math.floor(Math.random() * possibleCharacters.length);
    result.push(possibleCharacters[i5]);
  }

  // loop over guaranteedChars, set result[i] = guarChars[i] - in order to include at least one of each guaranteed charcater
  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  } 
   // change the result into string and return it
   return result.join('');
};

// Write password to the #password input
function writePassword() {
  // generate password func returns the string
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
