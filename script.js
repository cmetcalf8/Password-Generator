var passwordLength = 8; 
var randomArray = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = passwordCriteria();

  if (password) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}
}

function generatePassword() {
  var password = ""; 
  for(var i =  0; i < characterLength; I++) {
    var randomIndex = Math.floor(Math.random() * randomArray.length);
    password = password + randomArray[randomIndex];
  }
}

function passwordCriteria() {
  randomArray = [];
  var generate = prompt("Enter the length of your password between 8 and 128 characters.");
  if(generate <8 || generate >128) {
    alert("Please input a number between 8 and 128 characters.")
    return;
  } else {
    confirm("Do you want lowercase letters in your password?");
    randomArray = randomArray.concat(lowercase);

    confirm("Do you want uppercase letters in your password?");
    randomArray = randomArray.concat(uppercase);
    
    confirm("Do you want numbers in your password?");
    randomArray = randomArray.concat(numeric);
    
    confirm("Do you want special characters in your password?");
    randomArray = randomArray.concat(special);
    
    return password;
  }
}
