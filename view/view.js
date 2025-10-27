const container = document.getElementById("container");

updateView();
function updateView(){
    let content = ``;
    if (model.app.currentPage == "loginPage"){
        content = showLoginPage()
    } else if (model.app.currentPage == "mainFeed"){
        content = showMainFeedPage()
    } else if (model.app.currentPage == "addPlaces"){
        content = showAddPlacesPage()
    } else if (model.app.currentPage == "placePage"){
        content = showPlacePage()
    } else if (model.app.currentPage == "registerUser"){
        content = showRegisterUserPage()
    } else {
        content = "something went wrong"
    }

    container.innerHTML = /*HTML*/ `
    <header>${header()}</header>
    <main>${content}</main>
    `;
}

function header(){
    html = `spooky gluten`;
    return html;
}