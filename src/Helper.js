let characters = '';
let passwordLength = 0;

// upperCase
const setUpperCase = isUpperCase => {
    if (isUpperCase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    return '';
}
//lowerCase

const setLowerCase = isLowerCase => {
    if (isLowerCase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    return '';
}

//Special Char
const setSymbols = isSymbol => {
    if (isSymbol) {
        characters += '!@#$%^&*()<>,.?/[]{}-=_+|/';
    }
    return '';
}

//Numbers
const setNumber = isNumeric => {
    if (isNumeric) {
        characters += '0123456789';
    }
    return '';
}

characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789';

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const passwordCharacters = () => {
    let password = '';
    if (characters.length) {
        for (let i = 0; i < passwordLength; i++) {
            password += characters[getRandomInteger(0, characters.length - 1)];
        }
        characters = '';
        passwordLength = 0;
        return password;
    }
}

//Set the Password Length
export const setPasswordLength = length => {
    passwordLength = length;
    return passwordLength;
}

export const generatePassword = (passwordProps, pwdLength) => {
    const { uppercase, lowercase, symbols, numbers } = passwordProps;
    setPasswordLength(pwdLength);
    setUpperCase(uppercase);
    setLowerCase(lowercase);
    setSymbols(symbols);
    setNumber(numbers);
    const password = passwordCharacters();
    return password;
}