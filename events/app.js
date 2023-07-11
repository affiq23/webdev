const btn = document.querySelector('#v2')
const btn3 = document.querySelector('#v3')

btn.onclick = function(){
    console.log("You clicked me!")
}

function scream(){
    console.log("AHHHHHHH");
}
btn.onmouseenter = scream;

btn3.addEventListener("mouseup", function(){
    console.log("CLICKED!")
    alert("clicked")
})