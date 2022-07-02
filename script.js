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
  var correctPrompts = passwordCriteria();
  var passwordText = document.querySelector("#password");

  if (password) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
}
}

function generatePassword() {
  var password = ""; 
  for(var i =  0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * randomArray.length);
    password = password + randomArray[randomIndex];
  }
  return password;
}

function passwordCriteria() {
  randomArray = [];
  characterLength = parseInt(prompt("How many characters do you want in your password? (Between 8 and 128.)"));
  
  if(characterLength <8 || characterLength >128) {
    alert("Please input a number between 8 and 128 characters.")
    return;
  } 
    if(confirm("Do you want lowercase letters in your password?")) {
    randomArray = randomArray.concat(lowercase);
    }

    if(confirm("Do you want uppercase letters in your password?")) {
    randomArray = randomArray.concat(uppercase);
    }
    
    if(confirm("Do you want numbers in your password?")) {
    randomArray = randomArray.concat(numeric);
    }
    
    if(confirm("Do you want special characters in your password?")) {
    randomArray = randomArray.concat(special);
    }
    
    return;
  }
