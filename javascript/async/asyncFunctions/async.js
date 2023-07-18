const login = async (username, password) => {
    if(!username || !password){
        throw "Missing credentials"
    } 
    if(password == "qwerty"){
        return "Welcome!"
    } 
    throw "Invalid password"
}

login("affiq23", "qwerty")
    .then((msg) => {
        console.log("Logged in!")
        console.log(msg) //will print Welcome!
    })
    .catch((err) => {
        console.log("Error!")
        console.log(err)
    })

    //declaring a function async creates a promise that is returned automatically