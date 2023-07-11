//7-11-23
const button = document.querySelector("button");
button.addEventListener('click', function (evt) { //evt is event object
    alert("CLICK");
    console.log(evt);
})

const input = document.querySelector("input");
input.addEventListener("keydown", function (evt) {
    console.log(evt.key); //type of key
    console.log(evt.code); //actual location of key on keyboard
})
/*input.addEventListener("keyup", function(evt){
    console.log("KEYUP")
    console.log(evt)
})*/

window.addEventListener("keydown", function (evt) { //doesn't need to just be in input box
    switch (evt.code) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("DOWN!");
            break;
        case "ArrowLeft":
            console.log("LEFT!");
            break;
        case "ArrowRight":
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
            break;
    }
})
