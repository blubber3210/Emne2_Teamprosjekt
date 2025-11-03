function showAddPlacesPage(){
    let html = /*HTML*/ `
    <div class="addPlacePage">
    <h2 class="addPlaceHeader">Legg til sted</h2>
        <div class="addPlaceInputField">
            Navn:<br>
            <input 
                type="text" 
                onchange="model.viewState.addPlace.title = this.value"
                value="${model.viewState.addPlace.title ?? ""}">
                <br> 
            By:<br>
            <input 
                type="text" 
                onchange="model.viewState.addPlace.city = this.value"
                value="${model.viewState.addPlace.city ?? ""}">
                <br>
            Adresse:<br>
            <input 
                type="text" 
                onchange="model.viewState.addPlace.address = this.value"
                value="${model.viewState.addPlace.address ?? ""}">
                <br>
        </div>
        <div>
            <div>
                Kategori: <br>
                ${drawAddCategories()}
            </div>

            <label for="imageUpload">Last opp bilde:</label>
            <input type="file" id="imageUpload" name="imageUpload" accept="image/*">
            
            <div class="star-rating">
            ${drawStars()}
            </div>

            Beskrivelse: <br>
            <input type="text" oninput="${model.viewState.addPlace.description = this.value}"> <br>
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
        <input type="checkbox" onchange="changeCategoryCheckbox(this, ${i})"> ${model.data.category[i].name}
        `;
    }
    return html;
}


function drawStars(){
    let html = /*HTML*/ `
        Kaffe:
                <span class="star" onclick="ratingInput('coffee', 1)">★</span>
                <span class="star" onclick="ratingInput('coffee', 2)">★</span>
                <span class="star" onclick="ratingInput('coffee', 3)">★</span>
                <span class="star" onclick="ratingInput('coffee', 4)">★</span>
                <span class="star" onclick="ratingInput('coffee', 5)">★</span>
            <br>
                Mat:
                <span class="star" onclick="ratingInput('food', 1)">★</span>
                <span class="star" onclick="ratingInput('food', 2)">★</span>
                <span class="star" onclick="ratingInput('food', 3)">★</span>
                <span class="star" onclick="ratingInput('food', 4)">★</span>
                <span class="star" onclick="ratingInput('food', 5)">★</span>
    
    `;

    return html;
}


// function drawStars(){
//     let html = ``;
    
//     if (model.viewState.addPlace.rateCoffee == null && model.viewState.addPlace.rateFood == null){
//     html = /*HTML*/ `
//         Kaffe:
//                 <span class="star" onclick="ratingInput('coffee', 1)">★</span>
//                 <span class="star" onclick="ratingInput('coffee', 2)">★</span>
//                 <span class="star" onclick="ratingInput('coffee', 3)">★</span>
//                 <span class="star" onclick="ratingInput('coffee', 4)">★</span>
//                 <span class="star" onclick="ratingInput('coffee', 5)">★</span>
//             <br>
//                 Mat:
//                 <span class="star" onclick="ratingInput('food', 1)">★</span>
//                 <span class="star" onclick="ratingInput('food', 2)">★</span>
//                 <span class="star" onclick="ratingInput('food', 3)">★</span>
//                 <span class="star" onclick="ratingInput('food', 4)">★</span>
//                 <span class="star" onclick="ratingInput('food', 5)">★</span>
    
//     `;} else {
//         html = `something else`;
//     }
//     return html;
// }




// // FOR LOOPS EVT
// function drawCoffeeStars(){
//     let html = `Kaffe:`;
//     for(let i = 1; i<6; i++){
//         html += `<span class="star" onclick="ratingInput('coffee', '${[i]}'">★</span>`;
//     }
//     return html;
// }

