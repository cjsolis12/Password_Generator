// Assignment code here

// Array of options for password

let uniqueChars = [ "!", "#", "$", "%", "'", "&","(", ")", "*",  "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let randomPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // User prompts for criteria
  let length = parseInt(prompt(`How many characters will your password be? Enter a number from 8-128`));
    if( isNaN(length) ||length < 8 || length > 128) {
      alert( `Character length should be a number and between 8 - 128 digits. Try again.`);
      return " ";
    } 
  let useUpperCase = confirm(`Do you want to use Uppercase letters?`)
    if(useUpperCase){
      randomPassword = randomPassword.concat(upperCase)
    }
    let password = "";
    for(let i = 0; i < length; i++){
      let index = Math.floor(Math.random() * randomPassword.length)
      password = password + randomPassword[index]
    }
    return password
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
