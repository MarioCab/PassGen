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


var inputArray = [];
var passArray = [];

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

function askForOptions() {
  var passLength = prompt ("How long do you want your password? (between 8 and 128)");
  
  if (passLength === "") {
    alert("Please enter a number")
    return;
  } 
  passLength = parseInt(passLength)
  console.log(passLength)

  if (isNaN(passLength) === true){
    alert("Input must be a number")
    return;
  }

  if (passLength <8 || passLength >128) {
    alert("Please input a number between 8 and 128")
    return;
  }
  var numberBoolean = confirm ("Do you want you password to contain numbers?");
 
  var upperBoolean = confirm ("Do yo want your password to contain uppercase numbers?");
  
  var lowerBoolean = confirm ("Do you want your password to contain lower case characters?");
 
  var specialBoolean = confirm ("Do you want your password to contain special characters?");
 
  
  if (numberBoolean === false && upperBoolean === false && lowerBoolean === false && specialBoolean === false){
    alert("Please select one character type")
    return;
  }
  var options = {
    passLength, numberBoolean, upperBoolean, lowerBoolean, specialBoolean
  }
  console.log(options)
  return options;
}

function generatePassword() {
  var options = askForOptions()
  console.log(options)
  if(options.lowerBoolean === true){
    inputArray=inputArray.concat(lowerCharacters);
  }
  if(options.upperBoolean === true){
    inputArray=inputArray.concat(upperCharacters);
  }
  if(options.specialBoolean === true){
    inputArray=inputArray.concat(specialCharacters);
  }
  if(options.numberBoolean === true){
    inputArray=inputArray.concat(numberCharacters);
  }
  console.log(inputArray)
  for (var i = 0; i < options.passLength; i++){
    var index = Math.floor(Math.random() * inputArray.length)
    console.log(index)

    var passdigit = inputArray[index]
    passArray.push(passdigit)
    console.log(passdigit)
  }
  return passArray.join("")


};