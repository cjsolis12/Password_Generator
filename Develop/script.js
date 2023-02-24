// Assignment code here

// Array of options for password
var uniqueChars = [ "!", "#", "$", "%", "'", "&","(", ")", "*",  "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var randomPassword = [];
var password = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // User prompts for criteria

  // Length of the password user wants
    let characterLength = parseInt(prompt(`How many characters will your password be? Enter a number from 8-128`));
      while( isNaN(characterLength) ||characterLength < 8 || characterLength > 128) {
        alert( `Character length should be a number and between 8 - 128 digits. Try again.`);
        characterLength = parseInt(prompt(`How many characters will your password be? Enter a number from 8-128`));
    } 

    // does user want Uppercase letters
    let useUpperCase = confirm(`Do you want Uppercase letters in your password?`)
      if(useUpperCase){
      randomPassword = randomPassword.concat(upper);
      }
    // Does user want lowercase letters
    let useLowerCase = confirm(`Do you want Lowercase Letters in your password?`)
        if(useLowerCase){
        randomPassword = randomPassword.concat(lower);
      }
    
      // Does user want numbers
      let useNum = confirm(`Do you want numbers in your password?`)
      if(useNum){
      randomPassword = randomPassword.concat(num);
    }
    
    
      console.log(randomPassword)
    
    // for(let i = 0; i < length; i++){
    //   let index = Math.floor(Math.random() * randomPassword.length)
    //   password = password + randomPassword[index]
    // }
    // return password
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
