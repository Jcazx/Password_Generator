// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array for lower case characters
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
// Array for upper case characters 
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
//Array for special characters
const specialCArray = [
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
// Array for numbers declared in global 
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
//Declaring
function generatePassword(){
    let password =[];
    let isLowerCase;
    let isUpperCase;
    let isNumber;
    let isSpecialCharacter;
    let optionsArray = [];
    const result = [];

    let passwordLength = prompt (
        "How long would you like your password to be ? please choose a number between 8 and 128"
    );
    passwordLength = Number.parseInt(passwordLength);
    // Using if statements to create conditions for the prompts
    if (passwordLength < 8) {
        alert("Your password must have more than 7 characters.");
        return;
    } else if (!passwordLength){
        alert("You must input a number for a password to be generated. Please input a number.");
        return;
    } else if (passwordLength > 128) {
        alert("Your password can have no more than 128 characters");
        return;
    }
    //if the previous conditions were met then allow the person to continue 
    if (passwordLength >= 8 && passwordLength <= 128){
    // creates alerts that come up giving the user the opportunity to decide the characters they will use 
    isUpperCase = confirm 
    ( "Do you wish to use uppercase characters in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'");
    isLowerCase = confirm 
    ("Do you wish to use lowercase characters in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'");
    isNumber = confirm 
    ("Do you wish to use numbers in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'");
    isSpecialCharacter = confirm 
    ("Do you wish to use special characters in your password ? If you do please press 'Ok 'to accept and to decline please press 'cancel'");

    // if they have chosen a group of these characters then the array gets pushed
    if (isUpperCase) {
    optionsArray.push(...uppercaseArray); }
    if (isLowerCase) {
    optionsArray.push(...lowercaseArray); }
    if (isNumber) {
    optionsArray.push(...numbersArray); }
    if (isSpecialCharacter) {
    optionsArray.push(...specialCArray); }
    // if they dont choose any of them then they are tolf thye have to with an alert
    if (
        !isLowerCase &&
        !isUpperCase &&
        !isNumber&&
        !isSpecialCharacter
      ) {
        alert("To generate a password you must pick at least one character type");
      }
      
    // function to generate password based on the users requests 
    function randomPasswordGenerator (){
        const randomIndex = Math.floor(Math.random() * optionsArray.length);
        const randomChoice = optionsArray[randomIndex];

        return randomChoice;
    }
    // loop 
    for (let i =0; i < passwordLength; i++) {
        let randomResult = randomPasswordGenerator();
        result.push(randomResult);
    }
        password = result.join("");
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
