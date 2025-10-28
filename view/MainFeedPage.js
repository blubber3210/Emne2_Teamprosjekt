// function showMainFeedPage() {
//     // let html = '';
//     // Raw elements
//     let feedPageWrapper = document.createElement("div");
//     let addPlaceBtn = document.createElement("button");
//     let searchBar = document.createElement("input");
//     let searchBtn = document.createElement("button");
//     let feed = document.createElement("div");

//     // Context to elements
//     addPlaceBtn.textContent = "Legg til plass"
//     searchBar.placeholder = "Søk by/adresse"
//     searchBtn.textContent = '🔍';
//     feed.id = "feedDiv";

//     // Input
//     let userInput;
    
//     // Put all elements in feedPageWrapper
//     feedPageWrapper.append(addPlaceBtn, searchBar, searchBtn, feed);

//     // Attach event listeners
//     searchBar.addEventListener('change', e => {
//         userInput = e.target.value;
//     });
//     searchBtn.addEventListener('click', e => {
//         console.log(`hører du meg`);
//         e = userInput;
//         filterPlaces(e);
//     });

//     // Style the things?
//     // feedPageWrapper.classList.add();
    
//     // Append to main container
//     // container.append(feedPageWrapper);
//     return feedPageWrapper.innerHTML;
// }

function showMainFeedPage(){
    let html = /*HTML*/ `
    <button onclick="changePage('addPlaces')">Legg til plass</button>
    <input 
        placeholder="Søk by/adresse" 
        oninput=${model.viewState.mainFeed.search = this.value}
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
// egentlig en controller funksjon
function goToPlacePage(selectedPlaceId){
    let placeID = selectedPlaceId;
    model.app.selectedPlace = model.data.placesList[placeID];
    model.app.currentPage = 'placePage';
    updateView()
}

// burde være en universell controller
function changePage(newPage) {
    model.app.currentPage = newPage;
    updateView();
}

