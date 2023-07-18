//rewriting code from callbacks folder
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange("red", 1000)
    .then(() => {
        return delayedColorChange("orange", 1000)
    })
    .then(() => {
        return delayedColorChange("green", 1000)
    })
    .then(() => {
        return delayedColorChange("purple", 1000)
    })