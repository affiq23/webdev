const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const playToSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function(){
    if(!isGameOver){ //while game has not gotten to winScore
        p1Score += 1; //keep incrementing score
        if(p1Score == winScore){ //if score equals winScore
            isGameOver = true; //game is over
            p1Display.classList.add("has-text-success");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!isGameOver){ //while game has not gotten to winScore
        p2Score += 1; //keep incrementing score
        if(p2Score == winScore){ //if score equals winScore
            isGameOver = true; //game is over
            p2Display.classList.add("has-text-success");
            p1Display.classList.add("has-text-danger");
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
});

playToSelect.addEventListener("change", function(){
   // alert(this.value); gives the number we are currently on in the selector
   winScore = parseInt(this.value);
   reset();

});

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score; //could also just reset to 0
    p2Display.textContent = p2Score;
    p1Display.classList.remove("has-text-success", "has-text-danger");
    p2Display.classList.remove("has-text-success", "has-text-danger");
    p1Button.disabled = false;
    p2Button.disabled = false;
}