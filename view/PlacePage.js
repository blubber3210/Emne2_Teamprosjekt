function showPlacePage(){
    let selectedPlace = model.app.selectedPlace;
    
    let html = /*HTML*/`
    <div class="placePageDiv">
        
        <h1 class="title">${selectedPlace.title}</h1>
        <p id="category">${drawCategories()}</p>
        
        <!-- bilde -->
        <img id="carousel-img" class="placePageImg" src="${selectedPlace.image}" alt="Bilde">
        <p class="registerText">${selectedPlace.address}</p>
        
        <!-- rating og kategorier -->
        <p id="rating">☕ ${'⭐'.repeat(selectedPlace.rateCoffee)} 
        <br> 🍽️ ${'⭐'.repeat(selectedPlace.rateFood)} </p>
    
        <!-- BESKRIVELSE/rating-->
        <p class="registerText">Beskrivelse</p>
        <p class="" id="description"> ${selectedPlace.description}</p>
    
        <!-- BUNN KNAPPER -->
        <button class="registerButton" onclick="goBack('mainFeed')">Tilbake</button>
       
    </div>
    `;
    
    content = html;
    return content;
}

function drawCategories(){
    let html = ``;
    
    for (let i = 0; i < model.app.selectedPlace.categoryID.length; i++){
        html += `
        ♡${model.data.category[i].name}
        `;
    }
    return html; 
    
}

function goBack(targetPage){
    model.app.currentPage = targetPage;
    updateView()
}
