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
   };


// Object to store user input
let passwordOptions = {
  // your variable for length,
  length: passLength,
  hasSpecialCharacters: hasSpecialCharacters, // this will be true or false
  // same pattern for each type of character
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCharacters: hasLowerCaseCharacters,
  hasUpperCharacters: hasUpperCaseCharacters,
};

return passwordOptions;
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
  
  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    // if this ^ is true, add specialCharacters to the possibleCharacters array
    specialCharacters.concat(possibleCharacters);
    // add a random character from specialCharacters to the guaranteedCharacters array
    // Get random index from options
    let index = Math.floor(Math.random() * specialCharacters.length);
    guaranteedCharacters = options[index];
  
    // following the pattern from above, do the same thing for NUMERIC characters
  } else if (options.hasNumericCharacters) {
    numericCharacters.concat(possibleCharacters);
    let index2 = Math.floor(Math.random() * numericCharacters.length);
    guaranteedCharacters = options[index2];

    // following the pattern from above, do the same thing for LOWERCASE characters
  } else if (options.hasLowerCaseCharacters) {
    lowerCaseCharacters.concat(possibleCharacters);
    let index3 = Math.floor(Math.random() * lowerCaseCharacters.length);
    guaranteedCharacters = options[index3];

// following the pattern from above, do the same thing for UPPERCASE characters
  } else if (options.hasUpperCaseCharacters) {
    upperCaseCharacters.concat(possibleCharacters);
    let index4 = Math.floor(Math.random() * upperCaseCharacters.length);
    guaranteedCharacters = options[index4]; 
  }

  // loop over the options.length for each iteration - get a random index from the possibleCharacters array and add it to tje result variable

  // loop over guaranteedChars, set result[i] = guarChars[i] - in order to include at least one of each guaranteed charcater

  // change teh result into a string
  // return that string
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
