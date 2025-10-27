function showMainFeedPage() {
    container.innerHTML = '';
    // Raw elements
    let feedPageWrapper = document.createElement("div");
    let addPlaceBtn = document.createElement("button");
    let searchBar = document.createElement("input");
    let searchBtn = document.createElement("button")
    let feed = document.createElement("div");

    // Context to elements
    addPlaceBtn.textContent = "Legg til plass"
    searchBar.placeholder = "Søk by/adresse"
    searchBtn.textContent = '🔍';
    feed.id = "feedDiv";

    // Input
    let userInput;
    
    // Put all elements in feedPageWrapper
    feedPageWrapper.append(addPlaceBtn, searchBar, searchBtn, feed);

    // Attach event listeners
    searchBar.addEventListener('change', e => {
        userInput = e.target.value;
    });
    searchBtn.addEventListener('click', e => {
        e = userInput;
        filterPlaces(e);
    });

    // Style the things?
    // feedPageWrapper.classList.add();
    
    // Append to main container
    container.append(feedPageWrapper);
}
