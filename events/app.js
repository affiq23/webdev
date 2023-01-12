const btn = document.querySelector("#v2");
    btn.onclick = function(){
        console.log("You clicked me!")
        alert("Worked!");
    }

    function scream(){
        console.log("AHHHHHHHHH");
    }

    btn.onmouseenter = scream;