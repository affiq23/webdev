//rewriting code from callbacks folder
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange("red", 1000)
//     .then(() => {
//         return delayedColorChange("orange", 1000)
//     })
//     .then(() => {
//         return delayedColorChange("green", 1000)
//     })
//     .then(() => {
//         return delayedColorChange("purple", 1000)
//     })

async function rainbow() {
    await delayedColorChange("red", 1000) //this await here waits for the promise to be resolved
    await delayedColorChange("blue", 1000)
    await delayedColorChange("green", 1000)
}

async function printColors(){
    await rainbow()
    console.log("Printed all colors!")
}

printColors();