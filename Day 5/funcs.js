// function declaration with paramaters
function greet(name,age) {
    // console.log(`Hello ${name}. I know you are ${age} years old.`)
}

// function invoking
greet("Sravanthi", 29);

// function declaration with default paramaters.
function myFunction(name="Sravanthi",age=29){
    // console.log(`Hello ${name}. I know you are ${age} years old.`)
}

myFunction("Kailas", 28)
myFunction();
myFunction("Akash");

myFunction("",23) // not recommended.



// IIFE - Immediately Invoked Function Expression
// it does not need a function name
// it can be used when you dont want to create a function and use it later but still want a function
(function () {
    setInterval(() => {
        console.log("Hello Sravanthi")
    }, 1000);
})()


function add(a,b) {
    // console.log(`sum of two numbers ${a} and ${b} is`, a+b)
    return a+b;
}

function mul(a,b) {
    // console.log(`multiplication of two numbers ${a} and ${b} is`, a*b)
    return a*b;
}

let SumOf2and4 = add(2,4);
console.log(SumOf2and4);

console.log(mul(3,4))




