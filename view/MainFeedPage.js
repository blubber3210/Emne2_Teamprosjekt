function showMainFeedPage() {
    let html = /*HTML*/ `
    <button onclick="changePage('addPlaces')">Legg til plass</button>
    <input 
        placeholder="Søk by/adresse" 
        oninput="model.viewState.mainFeed.search = this.value"
        type="text">
    <button onclick="updateView()">search</button>
    <div id="feedDiv">
    ${drawFeed()}
    </div>
    `;

    return html;
}

function drawFeed() {
    let places = filterPlaces();
    let html = ``;

    for (let i = 0; i < places.length; i++) {
        html += `
        
        <div class="feedItem">
            <div class="filteredListImg"> 
        <img src="${places[i].image}">
            </div>
            <br>

            <div class="filteredListInfo">
           ${places[i].title}<br>
            <p>${"⭐".repeat(places[i].rateFood)}<br>
            ${places[i].city},
            ${places[i].address}<br>
            <button onclick="goToPlacePage(${places[i].id})">
            go to place page</button>
            </div>
        
        </div>`;
    }
    return html;
}
