
function showMainFeedPage(){
    let html = /*HTML*/ `
    <button onclick="changePage('addPlaces')">Legg til plass</button>
    <input 
        placeholder="Søk by/adresse" 
        oninput="model.viewState.mainFeed.search = this.value"
        type="text">
    <button onclick="filterPlaces(model.viewState.mainFeed.search)">search</button>
    <div id="feedDiv">
    ${drawFeed()}
    </div>
    `;

    return html;
}

function drawFeed(){
    let places = model.data.placesList;
    let html = ``;
    for (let i = 0; i < places.length; i++){
        html += `
        
        <div>
        ${places[i].title}<br>
        ${places[i].address}<br>
        ${places[i].city}<br>
        <img src="${places[i].image}"><br>
        ${places[i].description}<br>
        <button onclick="goToPlacePage(${places[i].id})">go to place page</button>
        
        </div>`; 
    }

    return html;
}



