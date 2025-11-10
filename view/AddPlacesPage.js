function showAddPlacesPage(){
    let html = /*HTML*/ `
    <div class="addPlaceDiv">
        <h2 class="addPlaceHeader">Legg til sted</h2>
        
        <div class="addPlaceInputSection"> <!-- navn, by, adresse, beskrivelse inputs-->
            Navn:<br>
            <input 
                class="addPlaceInput"
                type="text" 
                onchange="model.viewState.addPlace.title = this.value"
                value="${model.viewState.addPlace.title ?? ""}"
                placeholder="Navn på sted">
                <br> 
            By:<br>
            <input 
                class="addPlaceInput"
                type="text" 
                onchange="model.viewState.addPlace.city = this.value"
                value="${model.viewState.addPlace.city ?? ""}"
                placeholder="By">
                <br>
            Adresse:<br>
            <input 
                class="addPlaceInput"
                type="text" 
                onchange="model.viewState.addPlace.address = this.value"
                value="${model.viewState.addPlace.address ?? ""}"
                placeholder="Adresse">
                <br>
                
            Beskrivelse: <br>
            <input 
                class="addPlaceInput"
                type="text" 
                oninput="model.viewState.addPlace.description = this.value"
                value="${model.viewState.addPlace.description ?? ""}"
                placeholder="Beskriv stedet">
                <br>
        </div>


        <div class="addPlaceCategorySection"> <!-- kategorier, cafe,bakeri og restaurant -->
            Kategori:<br> 
            ${drawAddCategories()}
        </div>
        

        <div class="addPlaceRatingSection"> <!-- rating-stjerner, kaffe og mat -->

            ${drawCoffeeStars()} <br>
            ${drawFoodStars()}
        </div>
        

        <div class="addPlaceImageSection"> <!-- last opp bilde -->
            <label for="imageUpload">Last opp bilde:</label>
            <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
        </div>
        

        <div class="addPlaceSubmitSection"> <!-- submit, med checkbox for anonym option -->
            <input type="checkbox" onchange="submitAnonymouslySelected()">Legg ut som spooky <br>
            <button class="addPlaceButton" onclick="submitPlaceInputs()">Legg ut</button>
        </div>

    </div>
    `;
    return html; 
}

function drawAddCategories(){
    let html = ``;

    for(let i = 0; i < model.data.category.length; i++){
        html += /*HTML*/ `
        <input type="checkbox" onchange="changeCategoryCheckbox(this, ${i})"> ${model.data.category[i].name}
        `;
    }

    return html;
}


function drawCoffeeStars(){
    let html = 'Kaffe: ';

    for(let i = 1; i < 6; i++){
        html += `
        <span class="star" id="starCoffee${i}" onclick="ratingInput('coffee', ${i})">★</span>
        `;
    }

    return html;
}

function drawFoodStars(){
    let html = 'Mat: ';

    for(let i = 1; i < 6; i++){
        html += `
        <span class="star" id="starElement${i}" onclick="ratingInput('food', ${i})">★</span>
        `;
    }

    return html;
}
