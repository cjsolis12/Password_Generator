// Assignment code here

// Array of options for password

let uniqueChars = [ "!", "#", "$", "%", "'", "&","(", ")", "*",  "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // User prompts for criteria
  let length = prompt(`How many characters will your password be? Enter a number from 8-128`);
  if (length < 8 || length > 128) {
    alert("Sorry, password must be between 8 and 128 character long.");
  }
  let specialChar = prompt(`How many special characters do you want in your password? Must have at least 1`);
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
