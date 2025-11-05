function showPlacePage(){
    let selectedPlace = model.app.selectedPlace;
    
    let html = /*HTML*/`
        <div class="top">
           <h1 id="title">${selectedPlace.title}</h1>
           <p id="address">${selectedPlace.address}</p>

           <!-- bilde -->
           <button class="prev" onclick="Controller.prevImage()">&#8592;</button>
           <img id="carousel-img" src="${selectedPlace.image}" alt="Bilde">
           <button class="next" onclick="Controller.nextImage()">&#8594;</button>
           
           <!-- rating og kategorier -->
           <p id="rating">☕ ${'⭐'.repeat(selectedPlace.rateCoffee)} 
           <br> 🍽️ ${'⭐'.repeat(selectedPlace.rateFood)} </p>
           <p id="category">${drawCategories()}</p>

       </div>

       <!-- BESKRIVELSE/rating-->
       <div class="description">
           <p id="description">${selectedPlace.description}</p>
       </div>


       <!-- BUNN KNAPPER -->
       <div class="buttons">
           <button onclick="goBack('mainFeed')">Tilbake</button>
       </div>    
    `;
    
    content = html;
    return content;
}

function drawCategories(){
    let html = `kategori:`;
    
    for (let i = 0; i < model.app.selectedPlace.categoryID.length; i++){
        html += `
        <br>${model.data.category[i].name}
        `;
    }
    return html; 
    
}

function goBack(targetPage){
    model.app.currentPage = targetPage;
    updateView()
}
