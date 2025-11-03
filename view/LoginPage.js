// Funksjon som viser innloggingssiden
function showLoginPage(){
    let html = /*HTML*/ ``;
    if (model.app.currentUser == null) { // Hvis ingen bruker er logget inn
        html = /*HTML*/ `<!-- Lager HTML for innloggingsskjemaet -->
        <div class="showLoginPage">
            <img src="media/logo.png" alt="Logo" width="120" height="120">
            <br>
            <h2 class="howLoginHeader">Logg inn</h2>
            <div class="showLoginPage">
                Brukernavn<!-- Brukernavn input -->
                <br>
                <input 
                    type="text" 
                    placeholder="Brukernavn" 
                    value="${model.viewState.login.userName}"
                    oninput="model.viewState.login.userName=this.value"/>
                <br> 
                Passord<!-- Passord input -->
                <br>
                <input 
                    type="text" 
                    placeholder="Passord" 
                    value="${model.viewState.login.password}"
                    oninput="model.viewState.login.password=this.value"/>
                <br>
            </div>
            <div class="showLoginPage"><!-- Knapper for registrering og innlogging -->
                <button class="showLoginContainer" onclick="changePage('registerUser')">Registrer</button>
                <button class="showLoginContainer" onclick="login()">Logg inn</button>
            </div>
            <div class="showLoginPage"><!-- Checkbox for anonym innlogging -->
                <input 
                    type="checkbox" 
                    id="anonymousCheck" 
                    onchange="model.viewState.login.anonymous = this.checked"/>
                <label for="anonymousCheck">Vis meg som Spooky</label>
                <br>
                <button class="showLoginContainer" onclick="loginAsAnonymous()">Fortsett uten bruker</button> <!-- Ekstra knapp for å fortsette uten bruker -->
                <div id="loginErrorMessage"></div> <!-- Område der feilmeldinger vises -->
            </div>
        </div>
    `;
    }else{ // Hvis bruker allerede er logget inn
        html = `
            <div class="showLoginPage">
                <h2 class="showLoginHeader">
                    Velkommen
                    <br>
                    ${model.app.currentUser}
                </h2>
                <button class="showLoginContainer" onclick="logout()">Logg ut</button>
            </div>
        `;
    }
    return html; // Returnerer HTML-en som skal vises
}
