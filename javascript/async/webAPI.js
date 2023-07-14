console.log("Sending request to server");
setTimeout(() => {
    console.log("Here is your data from the server...");
}, 3000); //number of milliseconds
console.log("end of file")

/*
JavaScript runs the first line;
setTimeout is Web API function; browser reminds JS after 3 seconds to run
Third line runs
After 3 seconds, JS runs the the second line
*/