function showMainFeedPage() {
  let html = /*HTML*/ `
  <div class="feedControls">
    <button onclick="changePage('addPlaces')"> ➕ Legg til sted</button>
    <br>
    <input
        placeholder="Søk by/adresse"
        oninput="model.viewState.mainFeed.search = this.value"
        type="text">
    <button onclick="updateView()">🔍</button>
    </div>
    <div id="feedDiv">
    ${drawFeed()}
    </div>
    `;

  return html;
}

function deleteButton(chosenID){
  let html = '';
  if(model.app.isAdmin){
    html = /*HTML*/`
      <button onclick="deleteItem(chosenID)">Slett</button>
    `;
  }
  return html;
}

function drawFeed() {
  let places = filterPlaces();
  let searchword = model.viewState.mainFeed.search;

  let isSearching = searchword ? 'Resultater for: ' : '';
  let html = ``;

  for (let i = 0; i < places.length; i++) {
    html += `

        <div class="feedItem">
          ${deleteButton(places[i].id)}
            <div class="filteredListImg">
        <img class="filteredListImg" src="${places[i].image}">
            </div>

            <div class="filteredListInfo">
           ${places[i].title}<br>
            <p>${'⭐'.repeat(places[i].rateFood)}<br>
            ${places[i].city},
            ${places[i].address}<br>
            <button onclick="goToPlacePage(${places[i].id})">
            go to place page</button>
            </div>

        </div>`;
  }
  if (model.viewState.search) {
  }
  return isSearching + searchword + html;
}

function drawFilterMenu() {
  let options = document.createElement('div');
  let tagFilterBtn = document.createElement('button');
  tagFilterBtn.textContent = Tags;
}

function tagFilterClickHandler() {}
