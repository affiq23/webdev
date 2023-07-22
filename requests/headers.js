const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } } //need to specify header; depends from API to API
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }
    catch (e) {
        console.log("Sorry, no jokes available!")
    }

}

button.addEventListener("click", addNewJoke)


