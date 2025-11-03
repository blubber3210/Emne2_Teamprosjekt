
// Denne funskjonen funker ikke: 
function changeCategoryCheckbox(checkbox, categoryIndex){
    if (!checkbox.checked){
        removeCategory(categoryIndex)
    } else {
        addCategory(categoryIndex)
    }
    console.log(model.viewState.addPlace.categoryID)
}

function addCategory(categoryIndex){
    model.viewState.addPlace.categoryID.push(categoryIndex)
    console.log(model.viewState.addPlace.categoryID)
}

function removeCategory(categoryIndex){
    model.viewState.addPlace.categoryID.splice(categoryIndex)
    console.log(model.viewState.addPlace.categoryID)
}



function ratingInput(item, rating){
    if(item == 'coffee'){
        model.viewState.addPlace.rateCoffee = rating;
        console.log('coffee rating is' + model.viewState.addPlace.rateCoffee);
    } else if (item == 'food'){
        model.viewState.addPlace.rateFood = rating;
        console.log('food rating is' + model.viewState.addPlace.rateFood);
    } else {
        console.log('rating error')
    }
}

function submitPlaceInputs(){
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
            image: 'img file if added',
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