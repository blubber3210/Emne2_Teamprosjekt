function filterPlaces(searchInput) {
    // DOM and data reference
    let feedDiv = document.querySelector('#feedDiv');
    let places = model.data.placesList;
    let input = searchInput;
    console.log('kjører filter')
    let feedItem = ''; // String container
    feedDiv.innerHTML = '';

    for (let i = 0; i < places.length; i++) {
        if (places[i].address.toLowerCase().includes(input.toLowerCase()) 
            || places[i].city.toLowerCase().includes(input.toLowerCase())) 
        {
            feedItem = `
            <div>
                ${places[i].address}
            </div>
            <img src="${places[i].image}">         

            `
            feedDiv.innerHTML += feedItem;
        }
        else (console.log("No further results"));
    }
}

