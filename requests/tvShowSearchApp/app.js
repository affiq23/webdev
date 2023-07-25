const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    // removeImages() - make this
    e.preventDefault();

    // console.log(form.elements.query.value); //prints the input that the user types into the search bar
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } } // is helpful when you have multiple query strings that you want to call for your API
    const res = await axios.get("http://api.tvmaze.com/search/shows?q=", config);
    makeImages(res.data);
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}
