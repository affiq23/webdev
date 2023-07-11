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



