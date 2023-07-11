const input = document.querySelector("input");
const h1 = document.querySelector("h1");

/*input.addEventListener("change", function(e){
    console.log("change event") //only happens when you click away from the input box after adding something new
});*/

input.addEventListener("input", function(e){
   // console.log("input event") //happens whenever anything in the input box changes
   h1.innerText = input.value;
});

