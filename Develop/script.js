// Assignment code here

// Array of options for password
var uniqueChars = [ "!", "#", "$", "%", "'", "&","(", ")", "*",  "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var randomPassword = [];
var password = ""
var selection = false;
let characterLength = 0;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Gather all the user inputs
var gatherOptions = function(){
 
  characterLength = parseInt(prompt(`How many characters will your password be? Enter a number from 8-128`));
      while( isNaN(characterLength) ||characterLength < 8 || characterLength > 128) {
        alert( `Character length should be a number and between 8 - 128 digits. Try again.`);
        characterLength = parseInt(prompt(`How many characters will your password be? Enter a number from 8-128`));
    } 
// Does user want special characters
  let useSpecialChar = confirm(`How many special characters do you want in your password? Must pick at least 1`);
    if(useSpecialChar){
        randomPassword = randomPassword.concat(uniqueChars)
        selection = true;
      }

// does user want Uppercase letters
  let useUpperCase = confirm(`Do you want Uppercase letters in your password?`)
    if(useUpperCase){
        randomPassword = randomPassword.concat(upper);
        selection = true;
      }
// Does user want lowercase letters
  let useLowerCase = confirm(`Do you want Lowercase Letters in your password?`)
    if(useLowerCase){
        randomPassword = randomPassword.concat(lower);
        selection = true;
      }
// Does user want numbers
  let useNum = confirm(`Do you want numbers in your password?`)
    if(useNum){
        randomPassword = randomPassword.concat(num);
        selection = true;
      }
}

function generatePassword() {
 // User prompts for criteria
    while(selection === false){
        gatherOptions();
        if(selection === false){
          alert(`Need to select criteria`);
    }
  }
// Generate a random password with user criteria
    for(let i = 0; i < characterLength; i++){
      let index  = Math.floor(Math.random() * randomPassword.length -1)
      password = password.concat(randomPassword[index])
      console.log(password)
    }
    return password
}

// Write password to the #password input
function writePassword() {
  selection = false;
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

