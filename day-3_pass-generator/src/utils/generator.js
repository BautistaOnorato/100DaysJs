const onlyLower = "abcdefghijklmnopqrstuvwxyz";
const onlyUpper = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const onlyNumbers = "0123456789";
const onlySymbols = "@$!%*?&";
const rxAll = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&!])[A-Za-z\d@$!%*?&!]+$/;
const rxDuplicate = /(.).*\1/;

const randomChar = (charChain) => {
  return charChain.charAt(Math.floor(Math.random() * charChain.length))
} 

export const checkStrength = (password) => {
  console.log(password.length, rxAll.test(password));
  if (password.length >= 12 && rxAll.test(password) && !rxDuplicate.test(password)) {
    return "strong"
  } else if (password.length >= 8 && rxAll.test(password)) {
    return "medium"
  } else {
    return "weak"
  }
}

export const generatePassword = (length, upper, numbers, symbols, duplicate) => {
  let password = '';
  let caracteres = onlyLower;

  if (upper) {
    caracteres += onlyUpper;
  }
  if (numbers) {
    caracteres += onlyNumbers;
  }
  if (symbols) {
    caracteres += onlySymbols;
  }
  
  while (password.length < length) {
    let newChar = randomChar(caracteres)
    if (duplicate) {
      if (password.includes(newChar)) {
        continue;
      } else {
        password += newChar;
      }
    } else {
      password += newChar;
    }
  }

  return password;
}