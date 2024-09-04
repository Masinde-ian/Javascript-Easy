// RANDOM PASSWORD GENERATOR.

function generate(length, upperCase, lowerCase, symbols, numbers){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";
    
    allowedChars += upperCase ? uppercaseChars : "";
    allowedChars += lowerCase ? lowercaseChars : "";
    allowedChars += symbols ? symbolChars : "";
    allowedChars += numbers ? numberChars : "";

    // console.log(allowedChars);
    if(length <= 0){
        return 'The password length must be above 1';
    }
    if(allowedChars.length === 0){
        return 'There must be atleast 1 character type';
    }
    for(let i = 0; i < length; i++){
        const charIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[charIndex];
    }

    return password;
}

const passwordLength = 15;
const upperCase = true;
const lowerCase = true;
const symbols = true;
const numbers = true;

const password = generate(passwordLength, upperCase, lowerCase, symbols, numbers);

console.log(`The password is: ${password}`);