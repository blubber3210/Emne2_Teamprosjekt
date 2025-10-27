function showAddPlacesPage(){
    let html = /*HTML*/ `
    <div class="addPlacePage">
    <h2>legg til sted</h2>
        <div class="inputField">
            Navn på sted:<br>
            <input type="text" oninput=${model.viewState.addPlace.title = this.value}><br> 
            By:<br>
            <input type="text" oninput=${model.viewState.addPlace.city = this.value}><br>
            Adresse:<br>
            <input type="text" oninput=${model.viewState.addPlace.address = this.value}><br>
        </div>
            <label for="myDropdown">Kategorier:</label>
            <select id="myDropdown" name="myDropdown">
            <option value="cafeSelect">cafe</option>
            <option value="restaurantSelect">restaurant</option>
            <option value="bakerySelect">bakery</option>
            </select> <br>
            <button>upload image</button> <br>
            <button>rate coffee</button> <br>
            <button>rate food </button><br>
            Beskrivelse: <br>
            <input type="text" oninput=${model.viewState.addPlace.description = this.value}> <br>
            <button>legg ut</button>

    </div>
    `;
    return html; 
}

// TO DO : 
// alle inputs får lagt sine verdier i view state modellen
// legg ut knappen - pusher verdiene til data arrayet 
// tømme verdiene i view state 