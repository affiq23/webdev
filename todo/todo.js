let todo = [];
let val = true;

function ifItemIsNew(){
    let newTodo = prompt(console.log("What would you like to add?"));
    todo.push(newTodo);
    console.log(`Added ${newTodo} to list.`)
    console.log("--------------------------------------");
}

function showList(){
    for(let i  = 0; i < todo.length; i++){
        console.log(`${i} ${todo[i]}`);
    }
    console.log("--------------------------------------");
}

function deleteItem(){
    let indexItem = prompt("Enter the index of the entry you want to delete.");
    let val = todo.splice(indexItem, 1);
    console.log(`Deleted "${val}" from list`);
    console.log("--------------------------------------");
}

let condition = prompt("What would you like to do?");
while(condition !== "quit"){

    if(condition === "new"){
        ifItemIsNew();
    }

    if(condition === "list"){
        showList();
    }


    if(condition === "delete"){
        deleteItem();
    }
   
    condition = prompt("What would you like to do?");
}
console.log("You quit the app");

