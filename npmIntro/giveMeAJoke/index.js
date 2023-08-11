/*
    To install local node module:
    1. run npm init and hit enter until done
    2. make index.js file
    3. run npm install {package name}

    To install global node module:
    1. run npm install -g {package name}
    2. If permission error, run sudo chown -R $USER /usr/local/lib/node_modules
    3. run npm install -g {package name again}

    To use global npm module with require 
    1. run npm link {package name}
*/

const jokes = require("give-me-a-joke");
const colors = require("colors");

// jokes.getRandomDadJoke(function (joke) {
//     console.log(joke.trap.rainbow.inverse);
//     console.log("");
//     //console.log(joke.rainbow);
// });

let input = process.argv[2];
console.log(input.trap.rainbow)