const button = document.querySelector("button");
button.addEventListener('click', function (evt){ //evt is event object
    alert("CLICK")
    console.log(evt)
})

const input = document.querySelector("input");
input.addEventListener("keydown", function(evt){
    console.log(evt.key) //type of key
    console.log(evt.code) //actual location of key on keyboard
})
/*input.addEventListener("keyup", function(evt){
    console.log("KEYUP")
    console.log(evt)
})*/
