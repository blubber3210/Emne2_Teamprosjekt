function addNewUser() {
    let newUser = model.viewState.registerUser;

    model.data.users.push(
        {
            id: getRandomId(0, 100),
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

function getRandomId(min, max) {
    let range = max - min + 1;
    let randomId = Math.floor(Math.random() * range);
    let result = randomId + min;
    return result;
}
// console.log(getRandomId(0,100));

//function checkPassword() {
    //let password = model.viewState.registerUser.password;
    //let repeatPassword = model.viewState.registerUser.repeatPassword;
    
    //if (password === repeatPassword) {
        //return true;
    //} else {
        //return false;
    //}
//}

/* 
- Få den nye brukeren i data
- Lage en funksjon som generer en tilfeldig id
- Sjekke om passord samsvarer
- Om bruker eksisterer fra før
*/
