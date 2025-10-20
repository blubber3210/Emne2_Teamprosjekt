const container = document.getElementById("container");

updateView();
function updateView(){
    if (model.app.currentPage == "loginPage"){
        showLoginPage()
    } else if (model.app.currentPage == "mainFeed"){
        showMainFeedPage()
    } else if (model.app.currentPage == "addPlaces"){
        showAddPlacesPage()
    } else if (model.app.currentPage == "placePage"){
        showPlacePage()
    } else if (model.app.currentPage == "registerUser"){
        showRegisterUserPage()
    } else {
        container.innerHTML = "something went wrong"
    }
}