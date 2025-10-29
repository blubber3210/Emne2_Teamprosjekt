function showAddPlacesPage(){
    let html = /*HTML*/ `
    <div class="addPlacePage">
    <h2 class="addPlaceHeader">Legg til sted</h2>
        <div class="inputFields">
            Navn:<br>
            <input type="text" oninput=${model.viewState.addPlace.title = this.value}><br> 
            By:<br>
            <input type="text" oninput=${model.viewState.addPlace.city = this.value}><br>
            Adresse:<br>
            <input type="text" oninput=${model.viewState.addPlace.address = this.value}><br>
        </div>
        <div>
            <div>
                Kategori: <br>
                <input type="checkbox" onchange="categoryInput('cafe')"> cafe
                <input type="checkbox" onchange="categoryInput('restaurant')"> restaurant
                <input type="checkbox" onchange="categoryInput('bakery')"> bakeri
            </div>
            <label for="imageUpload">Last opp bilde:</label>
            <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
            
            <div class="star-rating">
                Kaffe:
                <span class="star" onclick="ratingCoffeeInput(1)">★</span>
                <span class="star" onclick="ratingCoffeeInput(2)">★</span>
                <span class="star" onclick="ratingCoffeeInput(3)">★</span>
                <span class="star" onclick="ratingCoffeeInput(4)">★</span>
                <span class="star" onclick="ratingCoffeeInput(5)">★</span>
            </div>
            <div class="star-rating">
                Mat:
                <span class="star" onclick="ratingFoodInput(1)">★</span>
                <span class="star" onclick="ratingFoodInput(2)">★</span>
                <span class="star" onclick="ratingFoodInput(3)">★</span>
                <span class="star" onclick="ratingFoodInput(4)">★</span>
                <span class="star" onclick="ratingFoodInput(5)">★</span>
            </div>


            Beskrivelse: <br>
            <input type="text" oninput=${model.viewState.addPlace.description = this.value}> <br>
            <input type="checkbox" onchange="submitAnonymouslySelected()">Legg ut som spooky <br>
            <button onclick="submitPlaceInputs()">Legg ut</button>
        </div>
    </div>
    `;
    return html; 
}

// TO DO : 
// alle inputs får lagt sine verdier i view state modellen
// legg ut knappen - pusher verdiene til data arrayet 
// tømme verdiene i view state 