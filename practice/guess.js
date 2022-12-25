let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum = parseInt(prompt("Please enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let count = 1;  
while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    count++;
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}
if(guess === 'q'){
    console.log("OK, YOU QUIT!");
}
else {
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${count} guesses`);
}