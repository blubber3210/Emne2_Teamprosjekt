// Funksjon for å logge inn en bruker
function login() {
    const login = model.viewState.login; // Henter login-data fra viewState
    const usernameInput = login.userName.trim().toLowerCase(); // Gjør brukernavnet små bokstaver og fjerner mellomrom for å unngå skrivefeil
    const passwordInput = login.password;  // Henter passord fra input
    const anonymous = login.anonymous; // Sjekker om "anonym" checkbox er valgt

    const user = model.data.users.find(
        u => u.userName.toLowerCase() === usernameInput && u.password === passwordInput
    );  // Søker etter en bruker i databasen (model.data.users) som matcher brukernavn og passord
    
    const messageEl = document.getElementById('message'); // Henter HTML-elementet der feilmeldinger skal vises
    
    if (user) {// Hvis brukeren finnes (riktig brukernavn og passord)
        model.app.currentUser = anonymous ? 'Spooky bruker' : user.userName; // Hvis anonym er valgt, logg inn som "Spooky bruker", ellers med ekte brukernavn
        model.app.currentPage = 'mainFeed'; // Gå til mainFeed etter innlogging
        updateView();
    } else {// Hvis brukeren ikke finnes, vis feilmelding
        messageEl.textContent = 'Feil brukernavn eller passord';
        messageEl.style.color = 'red';
    }
}
// Funksjon for å logge ut brukeren
function logout() {
    model.app.currentUser = null; // Fjerner nåværende bruker
    model.viewState.username = ''; // Tømmer brukernavn og passord fra input-feltene
    model.viewState.password = '';
    model.viewState.login.anonymous = false; // Setter anonym-checkbox tilbake til false
    updateView();
}
// Funksjon for å logge inn som anonym bruker direkte (uten vanlig innlogging)
function loginAsAnonymous(){
    model.app.currentUser = 'Spooky'; // Setter brukernavn til "Spooky"
    model.app.currentPage = 'mainFeed'; // Går til hovedsiden
    updateView();
}