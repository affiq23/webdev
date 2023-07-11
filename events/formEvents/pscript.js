// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector("#list");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const qty = form.elements.qty.value;
    const ptd = form.elements.product.value;
    const newLI = document.createElement("li");
    newLI.innerText = `${qty} ${ptd}`;
    list.appendChild(newLI);
    form.reset();
})