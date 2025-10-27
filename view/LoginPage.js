function showLoginPage() {
    let html = ``;
    if (model.app.currentUser == null) {
        html = `
            <h2>Logg inn</h2>
            <input 
                type="text" 
                placeholder="Brukernavn" 
                value="${model.viewState.login.userName}"
                oninput="model.viewState.login.userName=this.value"
            />
            <br>
            <input 
                type="password" 
                placeholder="Passord" 
                value="${model.viewState.login.password}"
                oninput="model.viewState.login.password=this.value"
            />
            <br>
            <button onclick="showRegisterUserPage()">Registrer</button>
            <button onclick="login()">Logg inn</button>
            <div id="message"></div>
            <button onclick="loginAsAnonymous()">Fortsett uten bruker</button>
        `;
    } else {
        html = `
            <h2>Velkommen, ${model.app.currentUser}</h2>
            <button onclick="logout()">Logg ut</button>
        `;
    }

    return html; 
}
