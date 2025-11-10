
function changeCategoryCheckbox(checkbox, categoryId){ // sjekker hvis option allerede er valgt
    if (!checkbox.checked){
        removeCategory(categoryId)
    } else {
        addCategory(categoryId)
    }
    console.log(model.viewState.addPlace.categoryID)
}

function addCategory(categoryId){ // BUGGER LITT - legger til kategori ID
    model.viewState.addPlace.categoryID.push(categoryId)
    console.log(model.viewState.addPlace.categoryID)
}

function removeCategory(categoryId){ // BUGGER LITT - fjerner kategori ID
    model.viewState.addPlace.categoryID.splice(categoryId, 1)
    console.log(model.viewState.addPlace.categoryID)
}


function ratingInput(item, rating){ // registrerer rating av food og coffee
    if(item == 'coffee'){
        model.viewState.addPlace.rateCoffee = rating;
        console.log('coffee rating is ' + model.viewState.addPlace.rateCoffee);
    } else if (item == 'food'){
        model.viewState.addPlace.rateFood = rating;
        console.log('food rating is ' + model.viewState.addPlace.rateFood);
    } else {
        console.log('rating error')
    }

    // changeStars(item, rating);
    // updateView();
}

// function changeStars(type, clickedStar){
//     let coffeeStar1 = document.getElementById("starCoffee0");
//     let coffeeStar2 = document.getElementById("starCoffee1");
//     let coffeeStar3 = document.getElementById("starCoffee2");
//     let coffeeStar4 = document.getElementById("starCoffee3");
//     let coffeeStar5 = document.getElementById("starCoffee4");

//     let foodStar1 = document.getElementById("starFood0");
//     let foodStar2 = document.getElementById("starFood1");
//     let foodStar3 = document.getElementById("starFood2");
//     let foodStar4 = document.getElementById("starFood3");
//     let foodStar5 = document.getElementById("starFood4");
    
//     if (type == "food" && clickedStar == 1){
//         coffeeStar1.classList.add("starFilled");
//     }
// }

function readURL(input){
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector("#addPlaceImg").setAttribute("src", e.target.result);
        };
    
        reader.readAsDataURL(input.files[0]);
    }
 // SPØRSMÅLSTEGN ???? Hvordan lagre bildet og vise det på neste side 
    document.getElementById("imageUpload").addEventListener('change', function(storeImage){
        let uploadedImage = event.target.files[0];

        let reader = new FileReader();
        reader.onload = function(e) {
            let dataUrl = e.target.result; // Get the data Url
            let imgElement = document.createElement("img");
            imgElement.src = dataUrl;
            document.body.appendChild(imgElement);
        };

        reader.readAsDataURL(uploadedImage);
        model.viewState.addPlace.image = uploadedImage;
    });
}

function submitPlaceInputs(){ // pusher mellomlagring til data
    let newPlace = model.viewState.addPlace;
    let newID = model.data.placesList.length;

    model.data.placesList.push(
        {
            id: newID,
            userID: 0, // if spooky, else koblet på user på en måte? 
            title: newPlace.title,
            address: newPlace.address,
            city: newPlace.city,
            categoryID: newPlace.categoryID,
            image: newPlace.image,
            rateCoffee: newPlace.rateCoffee,
            rateFood: newPlace.rateFood,
            description: newPlace.address,
        }
    )

    console.log(model.data.placesList);
    emptyAddPlaceInputs();
    goToPlacePage(newID);
}

function emptyAddPlaceInputs(){
    model.viewState.addPlace.id = null;
    model.viewState.addPlace.userID = null;
    model.viewState.addPlace.title = '';
    model.viewState.addPlace.address = '';
    model.viewState.addPlace.city = '';
    model.viewState.addPlace.categoryID = [];
    model.viewState.addPlace.image = '';
    model.viewState.addPlace.rate = null;
    model.viewState.addPlace.rateFood = null;
    model.viewState.addPlace.description = '';
}

// To do: 
// User ID 
// IMAGE 

// nice to have: 
// evt fix kategori greia
// stjernene 