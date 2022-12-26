//forEach function
function forEach(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.forEach(function(num){
        console.log(num + 1);
    });
}

//map function
function mapFunc(){
    const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
    let firstNames = fullNames.map = (name) => {
     return name.first;
    };
    console.log(firstNames);
}
forEach();
mapFunc();

/*Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:
    greet("Hagrid") //"Hey Hagrid!" 
    greet("Luna") //"Hey Luna!"*/

    const greet = (name) => {
        return `Hey ${name}!`;
    }

//setTimeout -- waits specified seconds to run code
console.log("this is the first message");
setTimeout(() => {
    console.log("this message displays after 3 seconds");
}, 3000);
    
//setInterval -- displays message every 2 seconds
const id = setInterval(() => {
    console.log("this message pops up every 2 seconds");
}, 2000);
clearInterval(id); //in order to stop interval

//filter method uses boolean to filter original array and make new one
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newArr.filter((newArr) =>{
    return newArr > 5; //will return a new array with 6, 7, 8, 9, 10
});