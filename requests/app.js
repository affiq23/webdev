// THIS WAY IS CLEANER TO READ
// fetch("https://swapi.dev/api/people/1/")
//     .then((res1) => {  //body returned in res is not able to be read
//         console.log("FIRST REQUEST");
//         return res1.json(); 
//     })
//     .then((dataReq1) => {  //res.json returns a promise as well, so need to write another one
//         console.log(dataReq1);
//         return fetch("https://swapi.dev/api/people/2/");
//     })
//     .then((res2) => {
//         console.log("SECOND REQUEST");
//         return res2.json();
//     })
//     .then((dataReq2) => {
//         console.log(dataReq2);
//     })
//     .catch((e) => {
//         console.log("ERROR");
//     })

// WITH ASYNC FUNCTION
const loadRebels = async (id) => {
    try {
        const res = await fetch("https://swapi.dev/api/people/" + id + "/");
        const data = await res.json();
        console.log(data);

    } catch (e) { //wrap async function in try-catch to catch error if there is one
        console.log("ERROR! ", e);
    }
};

loadRebels(1); //returns Luke Skywalker
loadRebels(2); //returns C-3PO

