function addNewUser() {
    let newUser = model.viewState.registerUser;

    model.data.users.push(
        {
            id: 10,
            userName: newUser.username,
            email: newUser.email,
            password: newUser.password,
            placesAdded: [],
        },
    )
    console.log(model.data.users)
    emptyRegisterUserInput();
    changePage("loginPage");
}

function emptyRegisterUserInput() {
    model.viewState.registerUser.username = '';
    model.viewState.registerUser.email = '';
    model.viewState.registerUser.password = '';
    model.viewState.registerUser.repeatPassword = '';
}


/* 
- Få den nye brukeren i data
- Lage en funksjon som generer en tilfeldig id
- Sjekke om passord samsvarer
- Om bruker eksisterer fra før
*/
