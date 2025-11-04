function showAddPlacesPage(){
    let html = /*HTML*/ `
    <div class="addPlacePage">
        <h2 class="addPlaceHeader">Legg til sted</h2>
        
        <div class="addPlaceSection"> <!-- navn, by, adresse, beskrivelse inputs-->
            <b>Navn:</b><br>
            <input 
                type="text" 
                onchange="model.viewState.addPlace.title = this.value"
                value="${model.viewState.addPlace.title ?? ""}"
                placeholder="Navn på sted">
                <br> 
            <b>By:</b><br>
            <input 
                type="text" 
                onchange="model.viewState.addPlace.city = this.value"
                value="${model.viewState.addPlace.city ?? ""}"
                placeholder="By">
                <br>
            <b>Adresse:</b><br>
            <input 
                type="text" 
                onchange="model.viewState.addPlace.address = this.value"
                value="${model.viewState.addPlace.address ?? ""}"
                placeholder="Adresse">
                <br>
                
            <b>Beskrivelse:</b> <br>
            <input 
                type="text" 
                oninput="model.viewState.addPlace.description = this.value"
                value="${model.viewState.addPlace.description ?? ""}"
                placeholder="Beskriv stedet">
                <br>
        </div>


        <div class="addPlaceSection"> <!-- kategorier, cafe,bakeri og restaurant -->
            <b>Kategori:</b><br> 
            ${drawAddCategories()}
        </div>
        

        <div class="addPlaceSection"> <!-- rating-stjerner, kaffe og mat -->
            <b>Rating:</b><br>
            ${drawCoffeeStars()}
            ${drawFoodStars()}
        </div>
        

        <div class="addPlaceSection"> <!-- last opp bilde -->
            <label for="imageUpload"><b>Last opp bilde:</b></label>
            <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
        </div>
        

        <div class="addPlaceSection"> <!-- submit, med checkbox for anonym option -->
            <input type="checkbox" onchange="submitAnonymouslySelected()">Legg ut som spooky <br>
            <button onclick="submitPlaceInputs()">Legg ut</button>
        </div>

    </div>
    `;
    return html; 
}

function drawAddCategories(){
    let html = ``;

    for(let i = 0; i < model.data.category.length; i++){
        html += /*HTML*/ `
        <input type="checkbox" onchange="changeCategoryCheckbox(this, ${i})"> ${model.data.category[i].name} <br>
        `;
    }

    return html;
}


function drawCoffeeStars(){
    let html = 'Kaffe: ';

    for(let i = 1; i < 6; i++){
        html += `
        <span class="star" onclick="ratingInput('coffee', ${i})">★</span>
        `;
    }

    return html;
}

function drawFoodStars(){
    let html = 'Mat: ';

    for(let i = 1; i < 6; i++){
        html += `
        <span class="star" onclick="ratingInput('food', ${i})">★</span>
        `;
    }

    return html;
}
