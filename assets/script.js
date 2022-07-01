// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Lits all arrays to generate password
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "~"];
    var userChoice = [];

   // length of password
   var characterCount = window.prompt("How many characters would you like your password to be? Can be between 10-200.");

    // if statement for character count
    if (isNaN(characterCount) || characterCount < 10 || characterCount > 200) {
      window.alert("Password length must be a number between 8 - 128. Please try again.");
      return generatePassword();
     }

    // Variable lists
    var confirmLowerCase = window.confirm("Would you like to include lowercase letters in your password?");
    var confirmUpperCase = window.confirm("Would you like to include uppercase letters in your password?");
    var confirmNumbers = window.confirm("Would you like to include numbers in your password?");
    var confirmSymbols = window.confirm("Would you like to include special characters in your password?");

    // if statements with all special characters included 
      if (confirmLowercase) {
         userChoice = userChoice.concat(alphaLower);
        }
      if (confirmUppercase) {
        userChoice = userChoice.concat(alphaUpper);
        }
      if (confirmNumbers) {
        userChoice = userChoice.concat(number);
        }
      if (confirmSymbols) {
        userChoice = userChoice.concat(symbol);
        } 
        // input
    console.log(userChoice);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// password generator function
var newPassword = "";
for (var i = 0; i < characterCount; i++) {
    var randomChar = Math.floor(Math.random() * userChoice.length);
    newPassword = newPassword + userChoice[randomChar];
  }
    //print password
    return newPassword;
}  

  // password print
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
