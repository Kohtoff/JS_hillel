
function createSum(){ 
    let counter = 0; 

    return function(number){
        return counter += number;
    };
}

const calculatedSum = createSum();

console.log("+3: ", calculatedSum(3));
console.log("+5: ", calculatedSum(5));
console.log("+20: ", calculatedSum(20));

console.log("///////////////////////////////");

function createCounter(start, step){
    let counter = start;
    let firstCall = true

    return function(reset = false){
        if(reset || firstCall){
            firstCall = false;
            return counter = start;
        }
        return counter += step;
    }
}


const counter = createCounter(6, 4);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log("reset!");

console.log(counter(true));
console.log(counter());
console.log(counter());




