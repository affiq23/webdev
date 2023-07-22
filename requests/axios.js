
// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESPONSE IS: ", res);
//     })
//     .catch((e) => {
//         console.log("ERROR!: ", e);
//     })

const getRebels = async (id) => {
    try {
        const res = await axios.get("https://swapi.dev/api/people/" + id + "/");
        console.log(res.data);
    }
    catch (e) {
        console.log("Error: ", e);
    }
}

getRebels(5);