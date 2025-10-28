// Funksjon som viser innloggingssiden
function showLoginPage() {
    let html = ``;
    if (model.app.currentUser == null) { // Hvis ingen bruker er logget inn
        html = ` <!-- Lager HTML for innloggingsskjemaet -->
            <h2>Logg inn</h2><!-- Brukernavn input -->
            <input 
                type="text" 
                placeholder="Brukernavn" 
                value="${model.viewState.login.userName}"
                oninput="model.viewState.login.userName=this.value"
            />
            <br><!-- Passord input -->
            <input  
                type="password" 
                placeholder="Passord" 
                value="${model.viewState.login.password}"
                oninput="model.viewState.login.password=this.value"
            />
            <br>
            <div><!-- Checkbox for anonym innlogging -->
                <input type="checkbox" id="anonymousCheck" 
                       onchange="model.viewState.login.anonymous = this.checked">
                <label for="anonymousCheck">Vis meg som Spooky</label>
            </div><!-- Knapper for registrering og innlogging -->
            <button onclick="changePage('registerUser')">Registrer</button>
            <button onclick="login()">Logg inn</button>
            <div id="message"></div> <!-- Område der feilmeldinger vises -->
            <button onclick="loginAsAnonymous()">Fortsett uten bruker</button> <!-- Ekstra knapp for å fortsette uten bruker -->
        `;
    } else { // Hvis bruker allerede er logget inn
        html = `
            <h2>Velkommen, ${model.app.currentUser}</h2>
            <button onclick="logout()">Logg ut</button>
        `;
    }

    return html; // Returnerer HTML-en som skal vises
}
