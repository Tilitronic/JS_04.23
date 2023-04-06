/* eslint quotes: ["error", "single"] */
function validateInput(someInput, validationType){
    switch (validationType) {
        case 'wholePositiveNumbers':
            const regex1 = /^\+?[1-9]\d*$/;
            return regex1.test(someInput);
        case 'positiveNumbersUpTo9':
            const regex2 = /^[1-9]$/;
            return regex2.test(someInput);
        case 'upToAnyThreeChar':
            return someInput.toString() && someInput.toString().length<4;
        default:
            return false;
    }
}

function getValue (validationType){
    const message = `Put your input in the field below! ${validationType}`;
    let input = prompt(message);
    let isValid = validateInput(input, validationType);
    while(!isValid){
        console.log('Incorrect input!');
        input = prompt(message);
        isValid = validateInput(input, validationType);
    }
    return input;
}

const input = getValue ('wholePositiveNumbers');

function getFactorial(number) {
    let factorial = 1n;
    for (let i = 1n; i <= number; i++) {
        factorial *= i;
    }
    if (factorial.toString().length > 50) {
        return bigIntToE(factorial);
    } else {
        return factorial.toString();
    }
}
  
function bigIntToE(bigint) {
    const exponent = bigint.toString().length - 1;
    const mantissa = Number(bigint.toString()[0] + '.' + bigint.toString().slice(1, 4));
    return mantissa.toPrecision(3) + 'E' + exponent;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
        return false;
        }
    }

    return true;
}

function getDivisors(number){
    let divisors = [];
    for(let i = 1; i <= Math.sqrt(number); i++){
        if (number % i !== 0){
            continue;
        }
        if (parseInt(number / i, 10) == i){
            divisors.push(i);
        }
        else {
            divisors.push(i);
            divisors.push(number / i);
        }      
    }
    return  divisors.sort((a, b)=>a-b).join(', ');
}

function logMessage (number){
    const message = `Number: ${number}\nFactorial: ${getFactorial (number)}\nSquare: ${number*number}\nisPrime: ${isPrime(number).toString()}\nisEven: ${number%2===0}\nDelimiters: ${getDivisors(number)}`;
    console.log(message);
}

logMessage(input);

const someString = getValue('upToAnyThreeChar');
const columnsNumner = getValue('positiveNumbersUpTo9');

const str = Array(Number(columnsNumner)).fill(someString).join(' ')+'\n';
console.log(str.repeat(columnsNumner));