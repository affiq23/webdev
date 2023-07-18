//creating promises
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("YOUR FAKE DATA HERE")
            }
            else {
                reject("ERROR GETTING THIS DATA")
            }
        }, 1000)
    })
}

fakeRequest("/dogs/1") //url link
    .then((data) => {
        console.log("REQUEST DONE")
        console.log("data is: ", data) //data is whatever was passed into the resolve parameters
    })
    .catch((err) => {
        console.log(err)
        console.log("Oh no, Error!")
    })