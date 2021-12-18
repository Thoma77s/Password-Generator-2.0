// Assignment code here
var passwordLength = "8 < i < 128";


uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
number = ["1","2","3","4","5","6","7","8","9","0"];
character = ["!","@","#","$","%","^","&","*","?","<",">","+","=","_","-",]


function generatePassword (){
  var choices = [];
  var passwordArray = [];
  var password = "";
  var input;
  var confirmNumber;
  var confirmCharacter;
  var confirmUppercase;
  var confirmLowercase;
  input=(prompt("How many long do you want your password to be? Choose between 8 and 128."));
  if (!input) {
    alert("This needs to be a value!")
    return generatePassword();
  } else if (input < 8 || input > 128) {
    alert("You must choose between 8 and 128!");
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain uppercase letters?");
    confirmLowercase = confirm("Will this contain lowercase letters?")
  };
  



  if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
    alert("You need to select criteria!");
  } 

  if(confirmNumber) {
    choices = choices.concat(number);
  }
  if(confirmCharacter) {
    choices = choices.concat(character);
  }
  if(confirmUppercase) {
    choices = choices.concat(uppercase);
  }
  if(confirmLowercase) {
    choices = choices.concat(lowercase);
  }

  var passwordLength = input
  
  for(i=0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    passwordArray.push(pickChoices)  
  }

  password = passwordArray.join("") 

  return password;


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);
