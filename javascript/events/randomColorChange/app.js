// 7-9-23
const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function(){
    const newcolor = randomColor();
    document.body.style.backgroundColor = newcolor;
    h1.innerText = newcolor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
