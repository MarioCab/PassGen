// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {

var lowerCharacters = [
  "q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"  
];

var upperCharacters = [
  "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"  
];

var numberCharacters = [
  "0","1","2","3","4","5","6","7","8","9"
];

var specialCharacters = [
  "!", '"', "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"
];

var numOfCharacters = prompt ("How long do you want your password? (between 8 and 128)");
var numberCharacters = confirm ("Do you want you password to contain numbers?");
var upperCharacters = confirm ("Do yo want your password to contain uppercase numbers?");
var lowerCharacters = confirm ("Do you want your password to contain lower case characters?");
var specialCharacters = confirm ("Do you want your password to contain special characters?")

}