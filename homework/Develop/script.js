// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
 const uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
 ];

const specialCharactersArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "’",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  "~",
  "`",
  "|",

];
const numbersArray = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

function generatePassword (){
  let isLowerCase;
  let isUpperCase;
  let isNumber;
  let isSpecialCharacter;
  let password = "";
  let optionsArray = [];
};
if (passwordLength < 8) {
  alert("Your password must have more than 7 characters");
}
// If the user password length is more than 128 characters, an alert shows and an empty string is returned.
if (passwordLength > 128) {
  alert("Your password can have no more than 128 characters");
}

passwordLength = Number.parseInt(passwordLength);

{
  if (passwordLength >= 8 && passwordLength <=128)

  const confirmUpper = confirm ( "Do you wish to use uppercase characters in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'"
  );
  const confirmLower = confirm ("Do you wish to use lowercase characters in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'"

  );
  const confirmNumbers = confirm ("Do you wish to use numbers in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'"

  );
  const confirmSpecialCharacters = confirm ("Do you wish to use special characters in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'"

  );

  if (confirmLower) {
    combinedArray.push(...lowercase);
  }
  if (confirmUpper) {
    combinedArray.push(...uppercase);
  }
  if (confirmNumber) {
    combinedArray.push(...numbers);
  }
  if (confirmSpecial) {
    combinedArray.push(...specials);
  }

  if (
    !isLowerCaseCharacters &&
    !isUpperCaseCharacters &&
    !isNumericCharacters &&
    !isSpecialCharacters
  ) {
    alert("To generate a password you must pick at least one character type");
  }

  
  function randomPasswordGenerator (){
    const randomIndex = Math.floor(Math.random() * optionsArray.length);
    const randomChoice = optionsArray [randomIndex];
    return randomChoice;
  }

  for  (let i =0; i< passwordLength; i++){
    let randomResult = randomPasswordGenerator();
    result.push(randomResult);
    return password;

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
