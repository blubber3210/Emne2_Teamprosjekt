function filterPlaces() {
    let places = model.data.placesList;
    let filteredPlaces = [];
    let input;

    if (model.viewState.mainFeed.search) {
        input = model.viewState.mainFeed.search;
        for (let i = 0; i < places.length; i++) {
            if (
                places[i].address.toLowerCase().includes(input.toLowerCase()) ||
                places[i].city.toLowerCase().includes(input.toLowerCase())
            ) {
                filteredPlaces.push(places[i]);
            }
        }
        return filteredPlaces;


    } else if (!model.viewState.mainFeed.search) {
        return model.data.placesList;
    }
}
