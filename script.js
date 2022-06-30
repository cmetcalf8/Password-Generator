// Assignment code here

var passwordLength = 8; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = getPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function passwordCriteria() {
  var generate = prompt("Select desired password criteria.");
  if (generate == null) {
    document.getElementById("button").innerHTML = 
    "Thank you.";
  }
}

function getPrompts() { 
  
}

  if(passwordLength <8 || passwordLength >128) {
    alert("Please input between 8 and 128 characters.")
    return;
  } else {
    // do passwordy things
  }