// 7-11-23
const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catname"); //whatever is typed into input field
const list = document.querySelector("#cats");


form.addEventListener("submit", function (evt) {
    evt.preventDefault(); //prevents form from doing its default behavior (moving to new page)
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName; //adds cat to LI
    list.append(newLI); //appends element to webpage
    input.value = ""; //clears the input value
});

list.addEventListener("click", function(e){
    //nodeName makes sure you are clicking on li
    e.target.nodeName == "LI" && e.target.remove(); //target makes sure you remove li you click on in the ul is removed
})

/*
e.stopPropagation() is used to handle event bubbling; used in the same way as e.preventDefault() 
didn't feel like writing whole code for it
*/
