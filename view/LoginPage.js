// Funksjon som viser innloggingssiden
function showLoginPage(){
    let html = /*HTML*/ ``;
    if (model.app.currentUser == null) { // Hvis ingen bruker er logget inn
        html = /*HTML*/ `<!-- Lager HTML for innloggingsskjemaet -->
        <div class="showLoginPage">
            <img src="media/logo.png" alt="Logo" width="120" height="120">
            <h2 class="title">Logg inn</h2>
            <div class="showLoginPage">
                <!-- Brukernavn input -->
                <input 
                    class="loginInput"
                    type="text"
                    placeholder="Brukernavn"
                    value="${model.viewState.login.userName}"
                    oninput="model.viewState.login.userName=this.value"/>
                <!-- Passord input -->
                <input 
                    class="loginInput"
                    type="password"
                    placeholder="Passord"
                    value="${model.viewState.login.password}"
                    oninput="model.viewState.login.password=this.value"/>
            </div>
            <div><!-- Knapper for registrering og innlogging -->
                <button class="showLoginButton" onclick="changePage('registerUser')">Registrer</button>
                <button class="showLoginButton" onclick="login()">Logg inn</button>
            </div>
            <div class="anonymousCheck"><!-- Checkbox for anonym innlogging -->
                <label class="checkbox">
                    <input class="checkbox__trigger visuallyhidden" type="checkbox" id="anonymousCheck" onchange="model.viewState.login.anonymous = this.checked"/>
                    <span class="checkbox__symbol">
                        <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 14l8 7L24 7"></path>
                        </svg>
                    </span>
                    <p class="checkbox__textwrapper">Vis meg som Spooky</p>
                </label>
            </div>
            <br>
            <div>
                <button class="showLoginButtonAnonymouse" onclick="loginAsAnonymous()">Fortsett uten bruker</button> <!-- Ekstra knapp for å fortsette uten bruker -->
            </div>
            <div id="loginErrorMessage"></div> <!-- Område der feilmeldinger vises -->
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
                <button class="showLoginButton" onclick="logout()">Logg ut</button>
            </div>
        `;
    }
    return html; // Returnerer HTML-en som skal vises
}
