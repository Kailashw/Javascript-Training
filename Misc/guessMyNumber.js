const generatedNumber = Math.floor(Math.random() * 100);
const MAX_ATTEMPS = 10;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
 
function guessNumber(count=0) {
    readline.question(`What's your guess Number : `, num => {
        processFunc(Number(num.toString()),count);
    })
}

function processFunc(curNum, count) {
    if(isNaN(curNum)){
        console.log(`Attempt ${count+1}: Please enter valid number.`);
        count+=1;
        guessNumber(count);
    }
    else if(count === MAX_ATTEMPS){
        console.log(`You lost !!. You tried ${count} times. Please try again !!`);
        readline.close();
    }
    else if(curNum === generatedNumber){
        console.log(`You WON in ${count+1} attempts.`);
        readline.close();
    }
    else if(curNum > generatedNumber){
        console.log(`Attempt ${count+1}: Number too high !! Go Low !!`);
        count+=1;
        guessNumber(count);
    }
    else {
        console.log(`Attempt ${count+1}: Number too low !! Go High !!`);
        count+=1;
        guessNumber(count);
    }
}

guessNumber();