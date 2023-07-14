// setTimeout(() => {
//     document.body.style.backgroundColor = "red"

//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange"
        
//         setTimeout(() => {
//             document.body.style.backgroundColor = "green"
            
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "blue"
            
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayColorChange("red", 3000, () =>{
    delayColorChange("green" , 1000, () => {
        delayColorChange("blue", 1000, () =>{
        })
    })
});
