const btn = document.querySelector("#v2");
    btn.onclick = function(){
        console.log("You clicked me!")
        alert("Worked!");
    }

    function scream(){
        console.log("AHHHHHHHHH");
    }
     btn.onmouseenter = scream;


    //event listener; allows for more than one function to be called
    const btn3 = document.querySelector("#v3");
    btn3.addEventListener("click", function(){
        alert("clicked!");
    })