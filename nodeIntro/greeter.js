const args = process.argv.slice[2]; //the first two elements are the executable path and the location of file; do not want
for(let arg of args){
    console.log("Hi " + arg + "!");
}