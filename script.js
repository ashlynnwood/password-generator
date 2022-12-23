// Global Variables
// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lower case characters
var lowerCaseCharacters = [
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
var upperCaseCharacters = [
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
  // Variable to store length of password from user input (using prompt)
  var numberCount = parseInt(prompt("How many characters would you like your password to contain?", "0"), 10);

  console.log(numberCount);
  console.log(typeof numberCount);
  console.log(isNaN(numberCount));

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  // show alert if the length variable from above isn't a number
  if(isNaN(numberCount)) {
    window.alert('Error: You need to choose a number.');
    getPasswordOptions();
  
 // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  // show alert if the length variable from above is less than 8
  } else if (numberCount < 7) {
    window.alert('Error: Password must be at least 8 characters.');
    getPasswordOptions();
  
//   // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
//   // show alert if the length variable from above is greater than 128
  } else if (numberCount > 129) {
    window.alert('Error: Password cannot be longer than 128 characters.');
    getPasswordOptions();

  } else {
//     // Variable to store boolean regarding the inclusion of SPECIAL characters
      var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');
//     // Variable to store boolean regarding the inclusion of NUMERIC characters
      var hasNumericCharacters = confirm('Click OK to confirm including numeric characters.');
//     // Variable to store boolean regarding the inclusion of LOWERCASE characters
      var hasLowerCaseCharacters = confirm('Click OK to confirm including lowercase characters.');
//     // Variable to store boolean regarding the inclusion of UPPERCASE characters
      var hasUpperCaseCharacters = confirm('Click OK to confirm including uppercase characters.');
   };

// // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
// // show alert that tells them they need to have at least one type of character
if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCaseCharacters && !hasUpperCaseCharacters) {
  window.alert("You must choose at least one type of character.");
  getPasswordOptions();
} 


// Object to store user input
var passwordOptions = {
  // your variable for length,
  length: numberCount,
  hasSpecialCharacters: hasSpecialCharacters, // this will be true or false
  // same pattern for each type of character
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCharacters: hasLowerCaseCharacters,
  hasUpperCharacters: hasUpperCaseCharacters,
};

return passwordOptions;
};
getPasswordOptions();

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];
  
  // Array to store types of characters to include in password
  var possibleCharacters = [];
  
  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];
  
  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    // add specialCharacters to the possibleCharacters array
    specialCharacters.concat(possibleCharacters);
    // add a random character from specialCharacters to the guaranteedCharacters array
    // Get random index from options
    var index = Math.floor(Math.random() * specialCharacters.length);
    guaranteedCharacters = options[index];
  
    // following the pattern from above, do the same thing for NUMERIC characters
  } else if (options.hasNumericCharacters) {
    numericCharacters.concat(possibleCharacters);
    var index2 = Math.floor(Math.random() * numericCharacters.length);
    guaranteedCharacters = options[index2];

    // following the pattern from above, do the same thing for LOWERCASE characters
  } else if (options.hasLowerCaseCharacters) {
    lowerCaseCharacters.concat(possibleCharacters);
    var index3 = Math.floor(Math.random() * lowerCaseCharacters.length);
    guaranteedCharacters = options[index3];

// following the pattern from above, do the same thing for UPPERCASE characters
  } else if (options.hasUpperCaseCharacters) {
    upperCaseCharacters.concat(possibleCharacters);
    var index4 = Math.floor(Math.random() * upperCaseCharacters.length);
    guaranteedCharacters = options[index4]; 
  }
};

// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
