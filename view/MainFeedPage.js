function showMainFeedPage() {
    let html = /*HTML*/ `
  <div class="feedControls">
    <button class="mainFeedButton" onclick="changePage('addPlaces')"> Legg til sted</button>
    <button class="mainFeedButton" onclick="changePage('loginPage')">Logg inn</button>
    <br>
    <input
        class="mainFeedInput"
        placeholder="Søk by/adresse"
        oninput="model.viewState.mainFeed.search = this.value"
        type="text">
    <button style="background-color: #5B8AB3; border-width: 0; border-radius: 15px; padding: 3px;" onclick="updateView()">🔍</button>
    </div>
    <div id="feedDiv">
    ${drawFeed()}
    </div>
    `;

    return html;
}

function deleteButton(chosenID) {
    let html = '';

    if (model.app.isAdmin) {
        html = /*HTML*/ `
      <button class="deleteBtn" onclick="deleteItem(${chosenID})">Slett</button>
    `;
    }
    // console.log(id);
    return html;
}

function drawFeed() {
    let places = filterPlaces();
    let searchword = model.viewState.mainFeed.search;
    let isSearching = searchword ? 'Resultater for: ' : '';
    let reset = searchword ? resetButton() : '';
    let html = ``;

    for (let i = 0; i < places.length; i++) {
        html += `

    ${deleteButton(places[i].id)}
        <div class="feedItem" onclick="goToPlacePage(${places[i].id})">
            <div class="filteredListImg">
        <img class="filteredListImg" src="${places[i].image}">
            </div>

            <div class="filteredListInfo">
            <b>${places[i].title} </b>
            ${'⭐'.repeat(places[i].rateFood)}<br>
            ${places[i].city},
            ${places[i].address}<br>

            </div>

        </div>`;
    }
    if (model.viewState.search) {
    }
    return isSearching + searchword + reset + html;
}

function resetButton() {
    let html = '';
    html = `<p onclick="resetSearch()"
    style="justify-self: center; text-align:center;
    text-decoration: underline; cursor:pointer;">nullstill søk</p>`;
    return html;
}

function resetSearch() {
    if (model.viewState.mainFeed.search) {
        model.viewState.mainFeed.search = '';
    }
    updateView();
}
