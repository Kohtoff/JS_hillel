
function reverseNumber(number) {
    let result;
    result = Array.from(number.toString());
    result = result.reverse().join('');
    result = Number(result);
    return result; 
}

function isPalindrom(number){
    if(number === reverseNumber(number)){ return true }
    return false;
}


function createPalindorm(number, steps = 0){
    let resultOfStep;
    if(isPalindrom(number)){
        const resultObject = {
            result: number,
            steps
        }
        return resultObject;
    } else {
        steps++;
        resultOfStep = number + reverseNumber(number);
        return createPalindorm(resultOfStep, steps);
    }
}


// function reverseNumber(number, result = []){
//     const mod = 10;
//     const reducingDigitCapacity = 10;
//     const lessThan = 0;
//     if(number > lessThan){
//         result.push(number % mod);
//         return reverseNumber(Math.floor(number / reducingDigitCapacity), result);
//     } else {
//         result = result.join('');
//         result = Number(result);
//         return result;
//     }
// }

// function isPalindrom(number){
//     if(number === reverseNumber(number)){
//         return true;
//     }
//     return false;
// }

// const stepsByDefault = 0;

// function createPalindrom(number, steps = stepsByDefault) {
//     let resultOfStep;
//     if(isPalindrom(number)){
//         const obj = {
//             result: number,
//             steps
//         };
//         return obj;

//     } else {
//         steps++;
//         resultOfStep = number + reverseNumber(number);
//         return createPalindrom(resultOfStep, steps);
//     }
// }
// const testNumberFirst = 96;
// const testNumberSec = 312;
// createPalindrom(testNumberFirst);
// createPalindrom(testNumberSec);
