// Assignment code here

// Array of options for password

let specialChar = ["!", "#", "$", "%", "'", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let upperCase = ["A", "B", "C", "D", "E","F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // let length = prompt(`How many characters will your password be? Enter a number from 8-128`)
  //   if(length < 8 || length >)
  // let specialChar = prompt()

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






  // 1.  Prompt the user for the password criteria (prompts)
  //   - length 8 - 128 characters (conditional)
  //   - lowercase, uppercase, numbers, special characters (arrays)
  // 2. Validate the input (check that inputs meet criteria)
  // 3. Generate the password (randomized)
  // 4. Display the generated password on the page