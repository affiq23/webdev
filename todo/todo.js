let todo = [];
let val = true;
let condition = prompt("What would you like to do?");

while(condition !== "quit"){

     if (condition === "list") {
        for (let i = 0; i < todo.length; i++) {
            console.log(i + " " + todo[i]);
        }
        console.log("********");
    }

    else if (condition === "new") {
        let newTodo = prompt("Enter new to do");
        todo.push(newTodo);
        console.log(`${newTodo} added to list`);
        console.log("********");
    } 

     else if(condition == "delete"){
        let index = prompt("Enter index of list entry you want to delete.");
        let deletedVal = todo.splice(index, 1);
        console.log(`Deleted ${deletedVal}`);
        console.log("********"); 
    }
    condition = prompt("What would you like to do?");
}
console.log("You quit the app");
